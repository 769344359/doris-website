"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1671],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>D});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,D=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(D,i(i({ref:t},c),{},{components:n})):a.createElement(D,i({ref:t},c))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},679576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"DROP-DATABASE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",id:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",title:"DROP-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-CATALOG"},next:{title:"DROP-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-TABLE"}},s={},p=[{value:"DROP-DATABASE",id:"drop-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"drop-database"},"DROP-DATABASE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"DOPR DATABASE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u6570\u636e\u5e93\uff08database\uff09\n\u8bed\u6cd5\uff1a    "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db_name [FORCE];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6267\u884c DROP DATABASE \u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u6570\u636e\u5e93\u3002\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/RECOVER"},"RECOVER")," \u8bed\u53e5"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c DROP DATABASE FORCE\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u6570\u636e\u5e93\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664\u6570\u636e\u5e93 db_test"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE db_test;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DROP, DATABASE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);