"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4682],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,y=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},574024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"ADMIN-REBALANCE-DISK",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",id:"version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",title:"ADMIN-REBALANCE-DISK",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",permalink:"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ADMIN-REBALANCE-DISK",language:"en"},sidebar:"docs",previous:{title:"KILL",permalink:"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/KILL"},next:{title:"ADMIN-CANCEL-REBALANCE-DISK",permalink:"/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"}},o={},c=[{value:"ADMIN-REBALANCE-DISK",id:"admin-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-rebalance-disk"},"ADMIN-REBALANCE-DISK"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN REBALANCE DISK"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to try to rebalance disks of the specified backends first, no matter if the cluster is balanced"),(0,a.yg)("p",null,"Grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'ADMIN REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n')),(0,a.yg)("p",null,"Explain:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"This statement only means that the system attempts to rebalance disks of specified backends with high priority, no matter if the cluster is balanced."),(0,a.yg)("li",{parentName:"ol"},"The default timeout is 24 hours. Timeout means that the system will no longer rebalance disks of specified backends with high priority. The command settings need to be reused.")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Attempt to rebalance disks of all backends")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN REBALANCE DISK;\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Attempt to rebalance disks oof the specified backends")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("p",null,"ADMIN,REBALANCE,DISK"),(0,a.yg)("h3",{id:"best-practice"},"Best Practice")))}m.isMDXComponent=!0}}]);