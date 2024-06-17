"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61239],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const o={title:"TO_IPV6",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv6",id:"sql-manual/sql-functions/ip-functions/to-ipv6",title:"TO_IPV6",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/to-ipv6.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv6",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6",draft:!1,tags:[],version:"current",frontMatter:{title:"TO_IPV6",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_IPV4_OR_NULL",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null"},next:{title:"TO_IPV6_OR_DEFAULT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"}},p={},s=[{value:"TO_IPV6",id:"to_ipv6",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"to_ipv6"},"TO_IPV6"),(0,i.yg)("p",null,"TO_IPV6"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IPV6 TO_IPV6(STRING ipv6_str)")),(0,i.yg)("p",null,"\u8be5\u51fd\u6570\u7c7b\u4f3cipv6_string_to_num\uff0c\u8f93\u5165IPv6\u5730\u5740\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0c\u5e76\u8fd4\u56deIPv6\u7c7b\u578b\u7684\u503c\u3002\n\u8be5\u503c\u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7b49\u4e8eipv6_string_to_num\u51fd\u6570\u8fd4\u56de\u503c\u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u3002\n\u5982\u679cIPv6\u5730\u5740\u4e3a\u975e\u6cd5\u683c\u5f0f\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"\u5165\u53c2 ",(0,i.yg)("inlineCode",{parentName:"p"},"ipv6_str")," \u4e0d\u80fd\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u82e5\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv6('::');\n+---------------+\n| to_ipv6('::') |\n+---------------+\n| ::            |\n+---------------+\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"TO_IPV6, IP"))}d.isMDXComponent=!0}}]);