"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66204],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(n),m=a,d=y["".concat(s,".").concat(m)]||y[m]||p[m]||l;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91110:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"ARRAY_MAX",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-max",id:"version-2.0/sql-manual/sql-functions/array-functions/array-max",title:"ARRAY_MAX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-max.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-max",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-max",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_MAX",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array"},next:{title:"ARRAY_MIN",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-min"}},s={},c=[{value:"array_max",id:"array_max",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_max"},"array_max"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_max")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T array_max(ARRAY<T> array1)")),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u6700\u5927\u7684\u5143\u7d20\uff0c\u6570\u7ec4\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u4f1a\u88ab\u8df3\u8fc7\u3002\u7a7a\u6570\u7ec4\u4ee5\u53ca\u5143\u7d20\u5168\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u7684\u6570\u7ec4\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> set enable_vectorized_engine = true;    # enable vectorized engine\nmysql> select k2, array_max(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_max(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               3 |\n| [1, NULL, 3] |               3 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,MAX,ARRAY_MAX"))}p.isMDXComponent=!0}}]);