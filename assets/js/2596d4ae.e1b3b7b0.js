"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[302],{3905:function(a,t,i){i.d(t,{Zo:function(){return p},kt:function(){return u}});var e=i(7294);function s(a,t,i){return t in a?Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[t]=i,a}function r(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.push.apply(i,e)}return i}function l(a){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(a,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(i,t))}))}return a}function c(a,t){if(null==a)return{};var i,e,s=function(a,t){if(null==a)return{};var i,e,s={},r=Object.keys(a);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||(s[i]=a[i]);return s}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(a,i)&&(s[i]=a[i])}return s}var n=e.createContext({}),o=function(a){var t=e.useContext(n),i=t;return a&&(i="function"==typeof a?a(t):l(l({},t),a)),i},p=function(a){var t=o(a.components);return e.createElement(n.Provider,{value:t},a.children)},d={inlineCode:"code",wrapper:function(a){var t=a.children;return e.createElement(e.Fragment,{},t)}},m=e.forwardRef((function(a,t){var i=a.components,s=a.mdxType,r=a.originalType,n=a.parentName,p=c(a,["components","mdxType","originalType","parentName"]),m=o(i),u=s,f=m["".concat(n,".").concat(u)]||m[u]||d[u]||r;return i?e.createElement(f,l(l({ref:t},p),{},{components:i})):e.createElement(f,l({ref:t},p))}));function u(a,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof a||s){var r=i.length,l=new Array(r);l[0]=m;var c={};for(var n in t)hasOwnProperty.call(t,n)&&(c[n]=t[n]);c.originalType=a,c.mdxType="string"==typeof a?a:s,l[1]=c;for(var o=2;o<r;o++)l[o]=i[o];return e.createElement.apply(null,l)}return e.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5044:function(a,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return n},metadata:function(){return o},assets:function(){return p},toc:function(){return d},default:function(){return u}});var e=i(7462),s=i(3366),r=(i(7294),i(3905)),l=["components"],c={title:"classy.optim.factories",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},n=void 0,o={unversionedId:"api/optim/factories",id:"api/optim/factories",title:"classy.optim.factories",description:"Classes",source:"@site/docs/api/optim/factories.md",sourceDirName:"api/optim",slug:"/api/optim/factories",permalink:"/classy/docs/api/optim/factories",tags:[],version:"current",frontMatter:{title:"classy.optim.factories",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},d=[{value:"Classes",id:"clzs",level:2},{value:"AdafactorWithWarmupFactory",id:"AdafactorWithWarmupFactory",level:3},{value:"__init__",id:"AdafactorWithWarmupFactory-init",level:4},{value:"AdagradWithWarmupFactory",id:"AdagradWithWarmupFactory",level:3},{value:"__init__",id:"AdagradWithWarmupFactory-init",level:4},{value:"AdamWWithWarmupFactory",id:"AdamWWithWarmupFactory",level:3},{value:"__init__",id:"AdamWWithWarmupFactory-init",level:4},{value:"AdamWithWarmupFactory",id:"AdamWithWarmupFactory",level:3},{value:"__init__",id:"AdamWithWarmupFactory-init",level:4},{value:"Factory",id:"Factory",level:3},{value:"RAdamFactory",id:"RAdamFactory",level:3},{value:"__init__",id:"RAdamFactory-init",level:4},{value:"TorchFactory",id:"TorchFactory",level:3},{value:"WeightDecayOptimizer",id:"WeightDecayOptimizer",level:3},{value:"__init__",id:"WeightDecayOptimizer-init",level:4},{value:"group_params",id:"WeightDecayOptimizer-group_params",level:4}],m={toc:d};function u(a){var t=a.components,i=(0,s.Z)(a,l);return(0,r.kt)("wrapper",(0,e.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"clzs"},"Classes"),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"AdafactorWithWarmupFactory"},"AdafactorWithWarmupFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"AdafactorWithWarmupFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdafactorWithWarmupFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L120-L159",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory for AdaFactor optimizer with warmup learning rate scheduler reference paper for Adafactor: ",(0,r.kt)("a",{href:"https://arxiv.org/abs/1804.04235"},"https://arxiv.org/abs/1804.04235"))),(0,r.kt)("h4",{id:"AdafactorWithWarmupFactory-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0lr:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0warmup_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0total_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdafactorWithWarmupFactory-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L120-L159",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"AdagradWithWarmupFactory"},"AdagradWithWarmupFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"AdagradWithWarmupFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdagradWithWarmupFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L83-L117",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory for Adagrad optimizer with warmup learning rate scheduler reference paper for Adagrad: ",(0,r.kt)("a",{href:"https://jmlr.org/papers/v12/duchi11a.html"},"https://jmlr.org/papers/v12/duchi11a.html"))),(0,r.kt)("h4",{id:"AdagradWithWarmupFactory-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0lr:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0warmup_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0total_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdagradWithWarmupFactory-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L83-L117",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"AdamWWithWarmupFactory"},"AdamWWithWarmupFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"AdamWWithWarmupFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdamWWithWarmupFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L199-L233",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory for AdamW optimizer with warmup learning rate scheduler reference paper for AdamW: ",(0,r.kt)("a",{href:"https://arxiv.org/abs/1711.05101"},"https://arxiv.org/abs/1711.05101"))),(0,r.kt)("h4",{id:"AdamWWithWarmupFactory-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0lr:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0warmup_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0total_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdamWWithWarmupFactory-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L199-L233",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"AdamWithWarmupFactory"},"AdamWithWarmupFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"AdamWithWarmupFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdamWithWarmupFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L162-L196",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory for Adam optimizer with warmup learning rate scheduler reference paper for Adam: ",(0,r.kt)("a",{href:"https://arxiv.org/abs/1412.6980"},"https://arxiv.org/abs/1412.6980"))),(0,r.kt)("h4",{id:"AdamWithWarmupFactory-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0lr:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0warmup_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0total_steps:\xa0int,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#AdamWithWarmupFactory-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L162-L196",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"Factory"},"Factory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"Factory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#Factory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L14-L31",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory interface that allows for simple instantiation of optimizers and schedulers for PyTorch Lightning. This class is essentially a work-around for lazy instantiation: * all params but for the module to be optimized are received in init * the actual instantiation of optimizers and schedulers takes place in the call method, where the module to be optimized is provided call will be invoked in the configure_optimizers hooks of LighiningModule-s and its return object directly returned. As such, the return type of call can be any of those allowed by configure_optimizers, namely: * Single optimizer * List or Tuple - List of optimizers * Two lists - The first list has multiple optimizers, the second a list of LR schedulers (or lr_dict) * Dictionary, with an \u2018optimizer\u2019 key, and (optionally) a \u2018lr_scheduler\u2019 key whose value is a single LR scheduler or lr_dict * Tuple of dictionaries as described, with an optional \u2018frequency\u2019 key * None - Fit will run without any optimizer")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Subclasses (2)"),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"TorchFactory",href:"/docs/api/optim/factories#TorchFactory"},"TorchFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"WeightDecayOptimizer",href:"/docs/api/optim/factories#WeightDecayOptimizer"},"WeightDecayOptimizer"))))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"RAdamFactory"},"RAdamFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"RAdamFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#RAdamFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L236-L253",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory for RAdam optimizer reference paper for RAdam: ",(0,r.kt)("a",{href:"https://arxiv.org/abs/1908.03265"},"https://arxiv.org/abs/1908.03265"))),(0,r.kt)("h4",{id:"RAdamFactory-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0lr:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#RAdamFactory-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L236-L253",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"TorchFactory"},"TorchFactory"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"TorchFactory"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#TorchFactory",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L34-L43",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Simple factory wrapping standard PyTorch optimizers and schedulers.")),(0,r.kt)("div",{className:"api__description"}))),(0,r.kt)("div",{className:"api"},(0,r.kt)("h3",{id:"WeightDecayOptimizer"},"WeightDecayOptimizer"),(0,r.kt)("div",{className:"api__signature"},(0,r.kt)("p",null,"class ",(0,r.kt)("span",{className:"ident"},"WeightDecayOptimizer"),"()"),(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#WeightDecayOptimizer",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L46-L80",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"},(0,r.kt)("p",null,"Factory interface that allows for simple instantiation of optimizers and schedulers for PyTorch Lightning. This class is essentially a work-around for lazy instantiation: * all params but for the module to be optimized are received in init * the actual instantiation of optimizers and schedulers takes place in the call method, where the module to be optimized is provided call will be invoked in the configure_optimizers hooks of LighiningModule-s and its return object directly returned. As such, the return type of call can be any of those allowed by configure_optimizers, namely: * Single optimizer * List or Tuple - List of optimizers * Two lists - The first list has multiple optimizers, the second a list of LR schedulers (or lr_dict) * Dictionary, with an \u2018optimizer\u2019 key, and (optionally) a \u2018lr_scheduler\u2019 key whose value is a single LR scheduler or lr_dict * Tuple of dictionaries as described, with an optional \u2018frequency\u2019 key * None - Fit will run without any optimizer")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Subclasses (5)"),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"AdafactorWithWarmupFactory",href:"/docs/api/optim/factories#AdafactorWithWarmupFactory"},"AdafactorWithWarmupFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"AdagradWithWarmupFactory",href:"/docs/api/optim/factories#AdagradWithWarmupFactory"},"AdagradWithWarmupFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"AdamWWithWarmupFactory",href:"/docs/api/optim/factories#AdamWWithWarmupFactory"},"AdamWWithWarmupFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"AdamWithWarmupFactory",href:"/docs/api/optim/factories#AdamWithWarmupFactory"},"AdamWithWarmupFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{title:"RAdamFactory",href:"/docs/api/optim/factories#RAdamFactory"},"RAdamFactory"))))),(0,r.kt)("h4",{id:"WeightDecayOptimizer-init"},"_","_","init","_","_"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"__init__"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0weight_decay:\xa0float,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0no_decay_params:\xa0Optional[List[str]],",(0,r.kt)("br",null),")",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#WeightDecayOptimizer-init",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L46-L80",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__description"}),(0,r.kt)("div",{className:"api"},(0,r.kt)("h4",{id:"WeightDecayOptimizer-group_params"},"group_params"),(0,r.kt)("div",{className:"api__signature"},"def ",(0,r.kt)("span",{className:"ident"},"group_params"),"(",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0self,",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0module:\xa0torch.nn.modules.module.Module,",(0,r.kt)("br",null),") \u2011>\xa0list",(0,r.kt)("div",{className:"links-div"},(0,r.kt)("a",{href:"#WeightDecayOptimizer-group_params",className:"direct-link"},"#"),(0,r.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/optim/factories.py#L51-L80",className:"git-link"},"#"))),(0,r.kt)("div",{className:"api__body"},(0,r.kt)("div",{className:"api__description"}))))))}u.isMDXComponent=!0}}]);