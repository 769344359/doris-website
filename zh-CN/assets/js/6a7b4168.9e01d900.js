"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24144],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},523050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"AVG_WEIGHTED",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/avg-weighted",id:"sql-manual/sql-functions/aggregate-functions/avg-weighted",title:"AVG_WEIGHTED",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/avg-weighted.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/avg-weighted",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/avg-weighted",draft:!1,tags:[],version:"current",frontMatter:{title:"AVG_WEIGHTED",language:"zh-CN"},sidebar:"docs",previous:{title:"AVG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/avg"},next:{title:"SUM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/sum"}},s={},c=[{value:"AVG_WEIGHTED",id:"avg_weighted",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"avg_weighted"},"AVG_WEIGHTED"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"}," double avg_weighted(x, weight)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u52a0\u6743\u7b97\u672f\u5e73\u5747\u503c, \u5373\u8fd4\u56de\u7ed3\u679c\u4e3a: \u6240\u6709\u5bf9\u5e94\u6570\u503c\u548c\u6743\u91cd\u7684\u4e58\u79ef\u76f8\u7d2f\u52a0\uff0c\u9664\u603b\u7684\u6743\u91cd\u548c\u3002\n\u5982\u679c\u6240\u6709\u7684\u6743\u91cd\u548c\u7b49\u4e8e0, \u5c06\u8fd4\u56deNaN\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select avg_weighted(k2,k1) from baseall;\n+--------------------------+\n| avg_weighted(`k2`, `k1`) |\n+--------------------------+\n|                  495.675 |\n+--------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"AVG_WEIGHTED"))}p.isMDXComponent=!0}}]);