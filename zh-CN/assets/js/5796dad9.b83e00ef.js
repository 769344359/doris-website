"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84170],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},300775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"ADMIN-REBALANCE-DISK",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",title:"ADMIN-REBALANCE-DISK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ADMIN-REBALANCE-DISK",language:"zh-CN"},sidebar:"docs",previous:{title:"KILL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL"},next:{title:"ADMIN-CANCEL-REBALANCE-DISK",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"}},s={},c=[{value:"ADMIN-REBALANCE-DISK",id:"admin-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-rebalance-disk"},"ADMIN-REBALANCE-DISK"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"ADMIN REBALANCE DISK")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c1d\u8bd5\u4f18\u5148\u5747\u8861\u6307\u5b9a\u7684BE\u78c1\u76d8\u6570\u636e"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```\nADMIN REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n```\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. \u8be5\u8bed\u53e5\u8868\u793a\u8ba9\u7cfb\u7edf\u5c1d\u8bd5\u4f18\u5148\u5747\u8861\u6307\u5b9aBE\u7684\u78c1\u76d8\u6570\u636e\uff0c\u4e0d\u53d7\u9650\u4e8e\u96c6\u7fa4\u662f\u5426\u5747\u8861\u3002\n2. \u9ed8\u8ba4\u7684 timeout \u662f 24\u5c0f\u65f6\u3002\u8d85\u65f6\u610f\u5473\u7740\u7cfb\u7edf\u5c06\u4e0d\u518d\u4f18\u5148\u5747\u8861\u6307\u5b9a\u7684BE\u78c1\u76d8\u6570\u636e\u3002\u9700\u8981\u91cd\u65b0\u4f7f\u7528\u8be5\u547d\u4ee4\u8bbe\u7f6e\u3002\n3. \u6307\u5b9aBE\u7684\u78c1\u76d8\u6570\u636e\u5747\u8861\u540e\uff0c\u8be5BE\u7684\u4f18\u5148\u7ea7\u5c06\u4f1a\u5931\u6548\u3002\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4f18\u5148\u5747\u8861\u96c6\u7fa4\u5185\u7684\u6240\u6709BE"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"ADMIN REBALANCE DISK;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4f18\u5148\u5747\u8861\u6307\u5b9aBE"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN,REBALANCE,DISK\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);