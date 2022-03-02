"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8903],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return f}});var s=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),p=function(e){var a=s.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},o=function(e){var a=p(e.components);return s.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},d=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?s.createElement(m,n(n({ref:a},o),{},{components:t})):s.createElement(m,n({ref:a},o))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,n=new Array(i);n[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var p=2;p<i;p++)n[p]=t[p];return s.createElement.apply(null,n)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3395:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return o},toc:function(){return u},default:function(){return f}});var s=t(7462),r=t(3366),i=(t(7294),t(3905)),n=["components"],l={title:"classy.scripts.cli.evaluate",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},c=void 0,p={unversionedId:"api/scripts/cli/evaluate",id:"api/scripts/cli/evaluate",title:"classy.scripts.cli.evaluate",description:"Functions",source:"@site/docs/api/scripts/cli/evaluate.md",sourceDirName:"api/scripts/cli",slug:"/api/scripts/cli/evaluate",permalink:"/classy/docs/api/scripts/cli/evaluate",tags:[],version:"current",frontMatter:{title:"classy.scripts.cli.evaluate",toc_min_heading_level:2,toc_max_heading_level:4,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},u=[{value:"Functions",id:"functions",level:2},{value:"automatically_infer_test_path",id:"automatically_infer_test_path",level:3},{value:"get_parser",id:"get_parser",level:3},{value:"main",id:"main",level:3},{value:"parse_args",id:"parse_args",level:3},{value:"populate_parser",id:"populate_parser",level:3}],d={toc:u};function f(e){var a=e.components,t=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,s.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("div",{className:"api"},(0,i.kt)("h3",{id:"automatically_infer_test_path"},"automatically_infer_test_path"),(0,i.kt)("div",{className:"api__signature"},"def ",(0,i.kt)("span",{className:"ident"},"automatically_infer_test_path"),"(",(0,i.kt)("br",null),"\xa0\xa0\xa0\xa0model_path:\xa0str,",(0,i.kt)("br",null),") \u2011>\xa0str",(0,i.kt)("div",{className:"links-div"},(0,i.kt)("a",{href:"#automatically_infer_test_path",className:"direct-link"},"#"),(0,i.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/scripts/cli/evaluate.py#L80-L102",className:"git-link"},"#"))),(0,i.kt)("div",{className:"api__body"},(0,i.kt)("div",{className:"api__description"}))),(0,i.kt)("div",{className:"api"},(0,i.kt)("h3",{id:"get_parser"},"get_parser"),(0,i.kt)("div",{className:"api__signature"},"def ",(0,i.kt)("span",{className:"ident"},"get_parser"),"(",(0,i.kt)("br",null),"\xa0\xa0\xa0\xa0subparser=None,",(0,i.kt)("br",null),") \u2011>\xa0argparse.ArgumentParser",(0,i.kt)("div",{className:"links-div"},(0,i.kt)("a",{href:"#get_parser",className:"direct-link"},"#"),(0,i.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/scripts/cli/evaluate.py#L59-L73",className:"git-link"},"#"))),(0,i.kt)("div",{className:"api__body"},(0,i.kt)("div",{className:"api__description"}))),(0,i.kt)("div",{className:"api"},(0,i.kt)("h3",{id:"main"},"main"),(0,i.kt)("div",{className:"api__signature"},"def ",(0,i.kt)("span",{className:"ident"},"main"),"(",(0,i.kt)("br",null),"\xa0\xa0\xa0\xa0args,",(0,i.kt)("br",null),")",(0,i.kt)("div",{className:"links-div"},(0,i.kt)("a",{href:"#main",className:"direct-link"},"#"),(0,i.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/scripts/cli/evaluate.py#L105-L132",className:"git-link"},"#"))),(0,i.kt)("div",{className:"api__body"},(0,i.kt)("div",{className:"api__description"}))),(0,i.kt)("div",{className:"api"},(0,i.kt)("h3",{id:"parse_args"},"parse_args"),(0,i.kt)("div",{className:"api__signature"},"def ",(0,i.kt)("span",{className:"ident"},"parse_args"),"()",(0,i.kt)("div",{className:"links-div"},(0,i.kt)("a",{href:"#parse_args",className:"direct-link"},"#"),(0,i.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/scripts/cli/evaluate.py#L76-L77",className:"git-link"},"#"))),(0,i.kt)("div",{className:"api__body"},(0,i.kt)("div",{className:"api__description"}))),(0,i.kt)("div",{className:"api"},(0,i.kt)("h3",{id:"populate_parser"},"populate_parser"),(0,i.kt)("div",{className:"api__signature"},"def ",(0,i.kt)("span",{className:"ident"},"populate_parser"),"(",(0,i.kt)("br",null),"\xa0\xa0\xa0\xa0parser:\xa0argparse.ArgumentParser,",(0,i.kt)("br",null),")",(0,i.kt)("div",{className:"links-div"},(0,i.kt)("a",{href:"#populate_parser",className:"direct-link"},"#"),(0,i.kt)("a",{href:"https://github.com/sunglasses-ai/classy/blob/6ce778ab1cf4a13f0f122a345f15beab4809551f/classy/scripts/cli/evaluate.py#L20-L56",className:"git-link"},"#"))),(0,i.kt)("div",{className:"api__body"},(0,i.kt)("div",{className:"api__description"}))))}f.isMDXComponent=!0}}]);