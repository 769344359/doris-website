"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45056],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),i=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=i(r),m=t,f=y["".concat(c,".").concat(m)]||y[m]||p[m]||o;return r?a.createElement(f,l(l({ref:n},u),{},{components:r})):a.createElement(f,l({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[y]="string"==typeof e?e:t,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},276052:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(58168),t=(r(296540),r(15680));const o={title:"ARRAY_COUNT",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-count",id:"version-2.0/sql-manual/sql-functions/array-functions/array-count",title:"ARRAY_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-count.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-count",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_COUNT",language:"en"},sidebar:"docs",previous:{title:"ARRAYS_OVERLAP",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/arrays-overlap"},next:{title:"ARRAY_APPLY",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-apply"}},c={},i=[{value:"array_count",id:"array_count",level:2},{value:"description",id:"description",level:3},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},y="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_count"},"array_count"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_count")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"array_count(lambda, array1, ...)\n")),(0,t.yg)("p",null,"Use lambda expressions as input parameters to perform corresponding expression calculations on the internal data of other input ARRAY parameters.\nReturns the number of elements such that the return value of ",(0,t.yg)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," is not 0. Returns 0 if no element is found that satisfies this condition."),(0,t.yg)("p",null,"There are one or more parameters are input in the lambda expression, which must be consistent with the number of input array columns later.The number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_count(x->x, array1);\narray_count(x->(x%2 = 0), array1);\narray_count(x->(abs(x)-1), array1);\narray_count((x,y)->(x = y), array1, array2);\n")),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_count(x -> x, [0, 1, 2, 3]);\n+--------------------------------------------------------+\n| array_count(array_map([x] -> x(0), ARRAY(0, 1, 2, 3))) |\n+--------------------------------------------------------+\n|                                                      3 |\n+--------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_count(x -> x > 2, [0, 1, 2, 3]);\n+------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) > 2, ARRAY(0, 1, 2, 3))) |\n+------------------------------------------------------------+\n|                                                          1 |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> x is null, [null, null, null, 1, 2]);\n+----------------------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) IS NULL, ARRAY(NULL, NULL, NULL, 1, 2))) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> power(x,2)>10, [1, 2, 3, 4, 5]);\n+------------------------------------------------------------------------------+\n| array_count(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4, 5))) |\n+------------------------------------------------------------------------------+\n|                                                                            2 |\n+------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select *, array_count((x, y) -> x>y, c_array1, c_array2) from array_test;\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_count(array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`)) |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                     2 |\n|    2 | [6, 7, 8]       | [10, 12, 13]            |                                                                     0 |\n|    3 | [1]             | [-100]                  |                                                                     1 |\n|    4 | [1, NULL, 2]    | [NULL, 3, 1]            |                                                                     1 |\n|    5 | []              | []                      |                                                                     0 |\n|    6 | NULL            | NULL                    |                                                                     0 |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n6 rows in set (0.02 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY, COUNT, ARRAY_COUNT"))}p.isMDXComponent=!0}}]);