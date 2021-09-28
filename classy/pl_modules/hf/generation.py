import re
from typing import Optional, Iterator, Tuple, Dict

import omegaconf
import torch
from torch import nn
from transformers import BartForConditionalGeneration, GPT2LMHeadModel, AutoTokenizer, AutoModelForSeq2SeqLM
from transformers.models.auto.tokenization_auto import BartTokenizerFast, GPT2TokenizerFast

from classy.data.data_drivers import GenerationSample
from classy.pl_modules.base import ClassyPLModule, ClassificationOutput
from classy.pl_modules.mixins.task import (
    GenerationTask,
)


class HFGenerationPLModule(GenerationTask, ClassyPLModule):
    def __init__(
        self,
        transformer_model: str,
        decoding_skip_special_tokens: bool,
        decoding_clean_up_tokenization_spaces: bool,
        optim_conf: omegaconf.DictConfig,
    ):
        super().__init__(vocabulary=None, optim_conf=optim_conf)
        self.save_hyperparameters()
        self.generative_model = HFGenerativeModel.from_transformer_model(
            transformer_model,
            decoding_skip_special_tokens=decoding_skip_special_tokens,
            decoding_clean_up_tokenization_spaces=decoding_clean_up_tokenization_spaces,
        )

    def load_prediction_params(self, prediction_params: Dict):
        self.generative_model.load_generation_params(prediction_params)

    def forward(self, *args, **kwargs) -> ClassificationOutput:
        return self.generative_model.forward(*args, **kwargs)

    def training_step(self, batch: dict, batch_idx: int) -> torch.Tensor:
        forward_output = self.forward(**batch)
        self.log("loss", forward_output.loss)
        self.log("ppl", torch.exp(forward_output.loss))
        return forward_output.loss

    def validation_step(self, batch: dict, batch_idx: int) -> None:
        forward_output = self.forward(**batch)
        self.log("val_loss", forward_output.loss)
        self.log("val_ppl", torch.exp(forward_output.loss), prog_bar=True, on_step=False, on_epoch=True)
        return forward_output.loss

    def test_step(self, batch: dict, batch_idx: int) -> None:
        forward_output = self.forward(**batch)
        self.log("test_loss", forward_output.loss)
        self.log("test_ppl", torch.exp(forward_output.loss), prog_bar=True, on_step=False, on_epoch=True)
        return forward_output.loss

    def batch_predict(self, *args, **kwargs) -> Iterator[Tuple[GenerationSample, str]]:
        return self.generative_model.batch_predict(*args, **kwargs)


class HFGenerativeModel(nn.Module):
    @classmethod
    def from_transformer_model(
        cls, transformer_model: str, decoding_skip_special_tokens: bool, decoding_clean_up_tokenization_spaces: bool
    ):
        if re.fullmatch("facebook/bart-(base|large)", transformer_model):
            return BartGenerativeModule(
                transformer_model,
                decoding_skip_special_tokens=decoding_skip_special_tokens,
                decoding_clean_up_tokenization_spaces=decoding_clean_up_tokenization_spaces,
            )
        elif re.fullmatch("facebook/mbart-large-(cc25|50)", transformer_model):
            return MBartGenerativeModule(
                transformer_model,
                decoding_skip_special_tokens=decoding_skip_special_tokens,
                decoding_clean_up_tokenization_spaces=decoding_clean_up_tokenization_spaces,
            )
        elif transformer_model.startswith("gpt2"):
            return GPT2GenerativeModule(
                transformer_model,
                decoding_skip_special_tokens=decoding_skip_special_tokens,
                decoding_clean_up_tokenization_spaces=decoding_clean_up_tokenization_spaces,
            )
        else:
            raise ValueError

    def __init__(
        self, transformer_model: str, decoding_skip_special_tokens: bool, decoding_clean_up_tokenization_spaces: bool
    ):
        super().__init__()
        self.generation_params = {}

    def load_generation_params(self, generation_params: Dict):
        self.generation_params = generation_params

    def forward(self, *args, **kwargs) -> ClassificationOutput:
        raise NotImplementedError

    def batch_predict(self, *args, **kwargs) -> Iterator[Tuple[GenerationSample, str]]:
        raise NotImplementedError


class BartGenerativeModule(HFGenerativeModel):
    def __init__(
        self, transformer_model: str, decoding_skip_special_tokens: bool, decoding_clean_up_tokenization_spaces: bool
    ):
        super().__init__(transformer_model, decoding_skip_special_tokens, decoding_clean_up_tokenization_spaces)
        self.tokenizer = AutoTokenizer.from_pretrained(transformer_model, add_prefix_space=True)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(transformer_model)
        self.decoding_skip_special_tokens = decoding_skip_special_tokens
        self.decoding_clean_up_tokenization_spaces = decoding_clean_up_tokenization_spaces

    def forward(
        self,
        input_ids: torch.Tensor,
        attention_mask: torch.Tensor,
        labels: Optional[torch.Tensor],
        decoder_attention_mask: Optional[torch.Tensor],
        **kwargs,
    ) -> ClassificationOutput:
        bart_out = self.model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            labels=labels,
            decoder_attention_mask=decoder_attention_mask,
        )
        return ClassificationOutput(
            loss=bart_out.loss,
            logits=bart_out.logits,
            probabilities=bart_out.logits.softmax(dim=-1),
            predictions=bart_out.logits.argmax(dim=-1),
        )

    def batch_predict(
        self,
        input_ids: torch.Tensor,
        attention_mask: torch.Tensor,
        decoder_start: torch.Tensor,
        num_return_sequences: int = 1,  # todo implement
        **kwargs,
    ) -> Iterator[Tuple[GenerationSample, str]]:
        assert len(set(decoder_start.squeeze(-1).tolist())) == 1
        # generate
        bart_out = self.model.generate(
            input_ids=input_ids,
            attention_mask=attention_mask,
            decoder_start=decoder_start[0][0],
            num_return_sequences=num_return_sequences,
            **self.generation_params,
        )
        # decode
        decoded_bart_out = self.tokenizer.batch_decode(
            bart_out,
            skip_special_tokens=self.decoding_skip_special_tokens,
            clean_up_tokenization_spaces=self.decoding_clean_up_tokenization_spaces,
        )
        # postprocess
        samples = kwargs.get("samples")
        for sample, prediction in zip(samples, decoded_bart_out):
            yield sample, prediction


class MBartGenerativeModule(BartGenerativeModule):
    pass


class GPT2GenerativeModule(HFGenerativeModel):
    def __init__(
        self, transformer_model: str, decoding_skip_special_tokens: bool, decoding_clean_up_tokenization_spaces: bool
    ):
        super().__init__(transformer_model, decoding_skip_special_tokens, decoding_clean_up_tokenization_spaces)
        self.tokenizer = GPT2TokenizerFast.from_pretrained(transformer_model, add_prefix_space=True)
        self.model = GPT2LMHeadModel.from_pretrained(transformer_model)
        self.decoding_skip_special_tokens = decoding_skip_special_tokens
        self.decoding_clean_up_tokenization_spaces = decoding_clean_up_tokenization_spaces

    def forward(
        self,
        input_ids: torch.Tensor,
        attention_mask: torch.Tensor,
        labels: Optional[torch.Tensor],
        **kwargs,
    ) -> ClassificationOutput:
        gpt_out = self.model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            labels=labels,
        )
        return ClassificationOutput(
            loss=gpt_out.loss,
            logits=gpt_out.logits,
            probabilities=gpt_out.logits.softmax(dim=-1),
            predictions=gpt_out.logits.argmax(dim=-1),
        )

    def batch_predict(
        self,
        input_ids: torch.Tensor,
        attention_mask: torch.Tensor,
        num_return_sequences: int = 1,  # todo implement
        **kwargs,
    ) -> Iterator[Tuple[GenerationSample, str]]:
        # generate
        gpt_out = self.model.generate(
            input_ids=input_ids,
            attention_mask=attention_mask,
            num_return_sequences=num_return_sequences,
            **self.generation_params,
        )
        # decode
        decoded_gpt_out = self.tokenizer.batch_decode(
            gpt_out,
            skip_special_tokens=self.decoding_skip_special_tokens,
            clean_up_tokenization_spaces=self.decoding_clean_up_tokenization_spaces,
        )
        # postprocess
        samples = kwargs.get("samples")
        for sample, prediction in zip(samples, decoded_gpt_out):
            yield sample, prediction
