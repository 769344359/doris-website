"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12154],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,y=p["".concat(a,".").concat(m)]||p[m]||f[m]||c;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},696299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const c={title:"CBRT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/cbrt",id:"version-2.0/sql-manual/sql-functions/numeric-functions/cbrt",title:"CBRT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/cbrt.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/cbrt",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/cbrt",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CBRT",language:"zh-CN"},sidebar:"docs",previous:{title:"SQRT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/sqrt"},next:{title:"POW",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/pow"}},a={},s=[{value:"cbrt",id:"cbrt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"cbrt"},"cbrt"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE cbrt(DOUBLE x)"),"\n\u8fd4\u56de",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u7acb\u65b9\u6839."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select cbrt(8);\n+-----------+\n| cbrt(8.0) |\n+-----------+\n|         2 |\n+-----------+\nmysql> select cbrt(2.0);\n+--------------------+\n| cbrt(2.0)          |\n+--------------------+\n| 1.2599210498948734 |\n+--------------------+\nmysql> select cbrt(-1000.0);\n+---------------+\n| cbrt(-1000.0) |\n+---------------+\n|           -10 |\n+---------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CBRT\n")))}f.isMDXComponent=!0}}]);