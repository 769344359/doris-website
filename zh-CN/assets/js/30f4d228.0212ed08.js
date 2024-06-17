"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[38476],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=i(t),m=a,y=g["".concat(c,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},127756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const l={title:"GRANT",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/GRANT",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/GRANT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"1.2",frontMatter:{title:"GRANT",language:"zh-CN"},sidebar:"docs",previous:{title:"REVOKE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/REVOKE"},next:{title:"LDAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/LDAP"}},c={},i=[{value:"GRANT",id:"grant",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:i},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"grant"},"GRANT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"GRANT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"GRANT \u547d\u4ee4\u6709\u5982\u4e0b\u529f\u80fd\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u7684\u6743\u9650\u6388\u4e88\u67d0\u7528\u6237\u6216\u89d2\u8272\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237\u3002")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},'2.0\u53ca\u4e4b\u540e\u7248\u672c\u652f\u6301"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u7528\u6237"')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n\nGRANT role_list TO user_identity\n")),(0,a.yg)("p",null,"privilege_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5f53\u524d Doris \u652f\u6301\u5982\u4e0b\u6743\u9650\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5305\u62ec\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7b49\u64cd\u4f5c\uff0c\u53ea\u6709 root \u7528\u6237\u6709\u8be5\u6743\u9650\uff0c\u4e0d\u53ef\u8d4b\u4e88\u5176\u4ed6\u7528\u6237\u3002\nADMIN_PRIV\uff1a\u9664 NODE_PRIV \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002\nGRANT_PRIV: \u64cd\u4f5c\u6743\u9650\u7684\u6743\u9650\u3002\u5305\u62ec\u521b\u5efa\u5220\u9664\u7528\u6237\u3001\u89d2\u8272\uff0c\u6388\u6743\u548c\u64a4\u6743\uff0c\u8bbe\u7f6e\u5bc6\u7801\u7b49\u3002\nSELECT_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\nLOAD_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5bfc\u5165\u6743\u9650\nALTER_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684schema\u53d8\u66f4\u6743\u9650\nCREATE_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u521b\u5efa\u6743\u9650\nDROP_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\nUSAGE_PRIV: \u5bf9\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\n\n\u65e7\u7248\u6743\u9650\u4e2d\u7684 ALL \u548c READ_WRITE \u4f1a\u88ab\u8f6c\u6362\u6210\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\uff1b\nREAD_ONLY \u4f1a\u88ab\u8f6c\u6362\u4e3a SELECT_PRIV\u3002\n")),(0,a.yg)("p",null,"\u6743\u9650\u5206\u7c7b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. \u8282\u70b9\u6743\u9650\uff1aNODE_PRIV\n2. \u5e93\u8868\u6743\u9650\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. \u8d44\u6e90\u6743\u9650\uff1aUSAGE_PRIV\n")),(0,a.yg)("p",null,"priv_level \u652f\u6301\u4ee5\u4e0b\u56db\u79cd\u5f62\u5f0f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. *.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709catalog\u53ca\u5176\u4e2d\u7684\u6240\u6709\u5e93\u8868\n2. ctl.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9acatalog\u4e2d\u7684\u6240\u6709\u5e93\u8868\n3. ctl.db.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\n4. ctl.db.tbl \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\n\n\u8fd9\u91cc\u6307\u5b9a\u7684ctl\u6216\u5e93\u6216\u8868\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u5e93\u548c\u8868\u3002\n")),(0,a.yg)("p",null,"resource_name \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"1. * \u6743\u9650\u5e94\u7528\u4e8e\u6240\u6709\u8d44\u6e90\n2. resource \u6743\u9650\u5e94\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\n\n\u8fd9\u91cc\u6307\u5b9a\u7684\u8d44\u6e90\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u3002\n")),(0,a.yg)("p",null,"user_identity\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8fd9\u91cc\u7684 user_identity \u8bed\u6cd5\u540c CREATE USER\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684host\u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u67091\u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002\n\n\u4e5f\u53ef\u4ee5\u5c06\u6743\u9650\u8d4b\u4e88\u6307\u5b9a\u7684 ROLE\uff0c\u5982\u679c\u6307\u5b9a\u7684 ROLE \u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\n")),(0,a.yg)("p",null,"role_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709catalog\u548c\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u89d2\u8272"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u89d2\u8272"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT 'role1','role2' TO 'jack'@'%';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GRANT\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);