"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94408],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},857653:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"REFRESH",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Utility-Statements/REFRESH",id:"sql-manual/sql-statements/Utility-Statements/REFRESH",title:"REFRESH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Utility-Statements/REFRESH.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/REFRESH",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/REFRESH",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH",language:"en"},sidebar:"docs",previous:{title:"SWITCH",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/SWITCH"},next:{title:"SYNC",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/SYNC"}},o={},c=[{value:"REFRESH",id:"refresh",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"refresh"},"REFRESH"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2.0"},(0,r.yg)("p",null,"REFRESH")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement refreshes the metadata of the specified Catalog/Database/Table."),(0,r.yg)("p",null,"syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG catalog_name;\nREFRESH DATABASE [catalog_name.]database_name;\nREFRESH TABLE [catalog_name.][database_name.]table_name;\n")),(0,r.yg)("p",null,"When the Catalog is refreshed, the object-related Cache is forced to be invalidated."),(0,r.yg)("p",null,"Including Partition Cache, Schema Cache, File Cache, etc."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Refresh hive catalog"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH CATALOG hive;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Refresh database1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH DATABASE ctl.database1;\nREFRESH DATABASE database1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Refresh table1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH TABLE ctl.db.table1;\nREFRESH TABLE db.table1;\nREFRESH TABLE table1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"REFRESH, CATALOG, DATABASE, TABLE"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);