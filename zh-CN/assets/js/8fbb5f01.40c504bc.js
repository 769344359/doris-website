"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96237],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),y=i(r),d=a,f=y["".concat(c,".").concat(d)]||y[d]||p[d]||l;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[y]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},330851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const l={title:"COUNTEQUAL",language:"zh-CN"},o=void 0,u={unversionedId:"sql-manual/sql-functions/array-functions/countequal",id:"sql-manual/sql-functions/array-functions/countequal",title:"COUNTEQUAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/countequal.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/countequal",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/countequal",draft:!1,tags:[],version:"current",frontMatter:{title:"COUNTEQUAL",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_APPLY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-apply"},next:{title:"ELEMENT_AT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/element-at"}},c={},i=[{value:"countequal",id:"countequal",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:i},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"countequal"},"countequal"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"countequal")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT countequal(ARRAY<T> arr, T value)")),(0,a.yg)("p",null,"\u5224\u65ad\u6570\u7ec4\u4e2d\u5305\u542bvalue\u5143\u7d20\u7684\u4e2a\u6570\u3002\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"num      - value\u5728array\u4e2d\u7684\u6570\u91cf\uff1b\n0        - value\u4e0d\u5b58\u5728\u6570\u7ec4arr\u4e2d\uff1b\nNULL     - \u5982\u679c\u6570\u7ec4\u4e3aNULL\u3002\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select *, countEqual(c_array,5) from array_test;\n+------+-----------------+--------------------------+\n| id   | c_array         | countequal(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        1 |\n|    2 | [6, 7, 8]       |                        0 |\n|    3 | []              |                        0 |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n\nmysql> select *,countEqual(c_array, 1),countEqual(c_array, 5),countEqual(c_array, NULL) from array_test;\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n| id   | c_array               | countequal(`c_array`, 1) | countequal(`c_array`, 5) | countequal(`c_array`, NULL) |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n|    1 | [1, 2, 3, 4, 5]       |                        1 |                        1 |                           0 |\n|    2 | [6, 7, 8]             |                        0 |                        0 |                           0 |\n|    3 | []                    |                        0 |                        0 |                           0 |\n|    4 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    6 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    7 | [NULL, NULL, NULL]    |                        0 |                        0 |                           3 |\n|    8 | [1, 2, 3, 4, 5, 5, 5] |                        1 |                        3 |                           0 |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,COUNTEQUAL"))}p.isMDXComponent=!0}}]);