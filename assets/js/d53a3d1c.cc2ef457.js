"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90011],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>R});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(r),E=a,R=c["".concat(i,".").concat(E)]||c[E]||u[E]||l;return r?n.createElement(R,s(s({ref:t},p),{},{components:r})):n.createElement(R,s({ref:t},p))}));function R(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=E;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var m=2;m<l;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},113713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(58168),a=(r(296540),r(15680));const l={title:"ALTER-SYSTEM-DROP-BROKER",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",id:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",title:"ALTER-SYSTEM-DROP-BROKER",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-SYSTEM-DROP-BROKER",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-BACKEND",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND"},next:{title:"CANCEL-ALTER-SYSTEM",permalink:"/docs/dev/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM"}},i={},m=[{value:"ALTER-SYSTEM-DROP-BROKER",id:"alter-system-drop-broker",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-drop-broker"},"ALTER-SYSTEM-DROP-BROKER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM DROP BROKER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is to delete the BROKER node, (administrator only)"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'-- Delete all brokers\nALTER SYSTEM DROP ALL BROKER broker_name\n-- Delete a Broker node\nALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Delete all brokers"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM DROP ALL BROKER broker_name\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Delete a Broker node"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BROKER broker_name "host:port"[,"host:port"...];\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DROP, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);