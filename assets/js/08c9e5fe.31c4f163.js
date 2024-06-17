"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87106],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,d=c["".concat(s,".").concat(m)]||c[m]||y[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},935096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(58168),l=(n(296540),n(15680));const a={title:"IN",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Operators/in",id:"version-2.1/sql-manual/sql-statements/Operators/in",title:"IN",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Operators/in.md",sourceDirName:"sql-manual/sql-statements/Operators",slug:"/sql-manual/sql-statements/Operators/in",permalink:"/docs/sql-manual/sql-statements/Operators/in",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IN",language:"en"},sidebar:"docs",previous:{title:"SHOW-QUERY-STATS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-QUERY-STATS"},next:{title:"HELP",permalink:"/docs/sql-manual/sql-statements/Utility-Statements/HELP"}},s={},p=[{value:"IN",id:"in",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"in"},"IN"),(0,l.yg)("version",{since:"1.2.0"},(0,l.yg)("p",null,"IN")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"expr IN (value, ...)")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"expr IN (subquery)")),(0,l.yg)("p",null,"If expr is equal to any value in the IN list, return true; otherwise, return false."),(0,l.yg)("p",null,"Subquery can only return one column, and the column types returned by subquery must be compatible with expr types."),(0,l.yg)("p",null,"If subquery returns a bitmap data type column, expr must be an integer."),(0,l.yg)("h4",{id:"notice"},"notice"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Currently, bitmap columns are only returned to in subqueries supported in the vectorized engine.")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from cost where id in (1, 2);\n+------+\n| id   |\n+------+\n|    2 |\n|    1 |\n+------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select id from tbl2);\n+------+\n| id   |\n+------+\n|    1 |\n|    4 |\n|    5 |\n+------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select id from tbl1 where id in (select bitmap_col from tbl3);\n+------+\n| id   |\n+------+\n|    1 |\n|    3 |\n+------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"IN\n")))}y.isMDXComponent=!0}}]);