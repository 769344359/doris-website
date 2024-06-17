"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50243],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),g=l,y=m["".concat(s,".").concat(g)]||m[g]||u[g]||r;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},372501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(58168),l=(a(296540),a(15680));const r={title:"ALTER-CATALOG",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",title:"ALTER-CATALOG",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-CATALOG",language:"en"},sidebar:"docs",previous:{title:"CREATE-JOB",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB"},next:{title:"ALTER-DATABASE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE"}},s={},c=[{value:"ALTER-CATALOG",id:"alter-catalog",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"alter-catalog"},"ALTER-CATALOG"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("version",{since:"1.2"},(0,l.yg)("p",null,"ALTER CATALOG")),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to set properties of the specified catalog. (administrator only)"),(0,l.yg)("p",null,"1) Rename the catalog"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name RENAME new_catalog_name;\n")),(0,l.yg)("p",null,"illustrate:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The builtin catalog ",(0,l.yg)("inlineCode",{parentName:"li"},"internal")," cannot be renamed"),(0,l.yg)("li",{parentName:"ul"},"Only the one who has at least Alter privilege can rename a catalog"),(0,l.yg)("li",{parentName:"ul"},"After renaming the catalog, use the REVOKE and GRANT commands to modify the appropriate user permissions")),(0,l.yg)("p",null,"2) Modify / add properties for the catalog"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG catalog_name SET PROPERTIES ('key1' = 'value1' [, 'key' = 'value2']); \n")),(0,l.yg)("p",null,"Update values of specified keys. If a key does not exist in the catalog properties, it will be added. "),(0,l.yg)("p",null,"illustrate:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"property ",(0,l.yg)("inlineCode",{parentName:"li"},"type")," cannot be modified."),(0,l.yg)("li",{parentName:"ul"},"properties of builtin catalog ",(0,l.yg)("inlineCode",{parentName:"li"},"internal")," cannot be modified.")),(0,l.yg)("p",null,"3) Modify comment for the catalog"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG catalog_name MODIFY COMMENT "new catalog comment";\n')),(0,l.yg)("p",null,"illustrate\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The builtin catalog ",(0,l.yg)("inlineCode",{parentName:"li"},"internal")," cannot be modified")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"rename catalog ctlg_hive to hive")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG ctlg_hive RENAME hive;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"modify property ",(0,l.yg)("inlineCode",{parentName:"li"},"hive.metastore.uris")," of catalog hive")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG hive SET PROPERTIES ('hive.metastore.uris'='thrift://172.21.0.1:9083');\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"modify comment of catalog hive")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER CATALOG hive MODIFY COMMENT "new catalog comment";\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("p",null,"ALTER,CATALOG,RENAME,PROPERTY"),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);