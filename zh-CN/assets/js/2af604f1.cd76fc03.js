"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98095],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,y=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},990760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"MONEY_FORMAT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/money-format",id:"version-2.0/sql-manual/sql-functions/string-functions/money-format",title:"MONEY_FORMAT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/money-format.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/money-format",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/money-format",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MONEY_FORMAT",language:"zh-CN"},sidebar:"docs",previous:{title:"SUBSTRING_INDEX",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/substring-index"},next:{title:"PARSE_URL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/parse-url"}},s={},c=[{value:"money_format",id:"money_format",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"money_format"},"money_format"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR money_format(Number)")),(0,o.yg)("p",null,"\u5c06\u6570\u5b57\u6309\u7167\u8d27\u5e01\u683c\u5f0f\u8f93\u51fa\uff0c\u6574\u6570\u90e8\u5206\u6bcf\u96943\u4f4d\u7528\u9017\u53f7\u5206\u9694\uff0c\u5c0f\u6570\u90e8\u5206\u4fdd\u75592\u4f4d"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nmysql> select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nmysql> select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MONEY_FORMAT,MONEY,FORMAT\n")))}p.isMDXComponent=!0}}]);