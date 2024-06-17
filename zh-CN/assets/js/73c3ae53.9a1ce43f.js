"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55457],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,g=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},858799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"DROP-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",id:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",title:"DROP-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-POLICY",draft:!1,tags:[],version:"current",frontMatter:{title:"DROP-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-FILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FILE"},next:{title:"DROP-ENCRYPT-KEY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-ENCRYPT-KEY"}},s={},p=[{value:"DROP-POLICY",id:"drop-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u884c\u5b89\u5168\u7b56\u7565",id:"\u884c\u5b89\u5168\u7b56\u7565",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-policy"},"DROP-POLICY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP POLICY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5220\u9664\u5b89\u5168\u7b56\u7565"),(0,a.yg)("h4",{id:"\u884c\u5b89\u5168\u7b56\u7565"},"\u884c\u5b89\u5168\u7b56\u7565"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664\u884c\u5b89\u5168\u7b56\u7565")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 [FOR user| ROLE role];\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664\u5b58\u50a8\u7b56\u7565")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664 table1 \u7684 test_row_policy_1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664 table1 \u4f5c\u7528\u4e8e test \u7684 test_row_policy_1 \u884c\u5b89\u5168\u7b56\u7565"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for test\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664 table1 \u4f5c\u7528\u4e8e role1 \u7684 test_row_policy_1 \u884c\u5b89\u5168\u7b56\u7565"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROW POLICY test_row_policy_1 on table1 for role role1\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u540d\u5b57\u4e3apolicy_name1\u7684\u5b58\u50a8\u7b56\u7565"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP STORAGE POLICY policy_name1\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, POLICY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);