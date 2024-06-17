"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2331],{15680:(n,e,r)=>{r.d(e,{xA:()=>u,yg:()=>f});var t=r(296540);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},l=Object.keys(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)r=l[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var c=t.createContext({}),s=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},u=function(n){var e=s(n.components);return t.createElement(c.Provider,{value:e},n.children)},_="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,l=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),_=s(r),p=a,f=_["".concat(c,".").concat(p)]||_[p]||y[p]||l;return r?t.createElement(f,o(o({ref:e},u),{},{components:r})):t.createElement(f,o({ref:e},u))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[_]="string"==typeof n?n:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31133:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"ARRAY_JOIN",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-join",id:"version-2.1/sql-manual/sql-functions/array-functions/array-join",title:"ARRAY_JOIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-join.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-join",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-join",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_JOIN",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_UNION",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-union"},next:{title:"ARRAY_WITH_CONSTANT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-with-constant"}},c={},s=[{value:"array_join",id:"array_join",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},_="wrapper";function y(n){let{components:e,...r}=n;return(0,a.yg)(_,(0,t.A)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_join"},"array_join"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_join")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR array_join(ARRAY<T> arr, VARCHAR sep[, VARCHAR null_replace])")),(0,a.yg)("p",null,"\u6839\u636e\u5206\u9694\u7b26(sep)\u548c\u66ff\u6362NULL\u7684\u5b57\u7b26\u4e32(null_replace), \u5c06\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u7ec4\u5408\u6210\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002\n\u82e5sep\u4e3aNULL\uff0c\u5219\u8fd4\u56de\u503c\u4e3aNULL\u3002\n\u82e5null_replace\u4e3aNULL\uff0c\u5219\u8fd4\u56de\u503c\u4e5f\u4e3aNULL\u3002\n\u82e5sep\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4e0d\u5e94\u7528\u4efb\u4f55\u5206\u9694\u7b26\u3002\n\u82e5null_replace\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216\u8005\u4e0d\u6307\u5b9a\uff0c\u5219\u76f4\u63a5\u4e22\u5f03\u6570\u7ec4\u4e2d\u7684NULL\u5143\u7d20\u3002"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\nmysql> set enable_vectorized_engine=true;\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test order by k1;\n+------+-----------------------------+------------------------------------+\n| k1   | k2                          | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------+------------------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                          |\n|  2   | [6, 7, 8]                   | 6_7_8                              |\n|  3   | []                          |                                    |\n|  4   | NULL                        | NULL                               |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1                  |\n|  6   | [1, 2, 3, NULL]             | 1_2_3_null                         |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6_null_null                    |\n+------+-----------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_', 'null') from array_test01 order by k1;\n+------+-----------------------------------+------------------------------------+\n| k1   | k2                                | array_join(`k2`, '_', 'null')      |\n+------+-----------------------------------+------------------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                            |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                            |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | null_a_null_b_null_c               |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_null_                          |\n|  5   | [' ', NULL, 'f', 'g']             |  _null_f_g                         |\n+------+-----------------------------------+------------------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test order by k1;\n+------+-----------------------------+----------------------------+\n| k1   | k2                          | array_join(`k2`, '_')      |\n+------+-----------------------------+----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | 1_2_3_4_5                  |\n|  2   | [6, 7, 8]                   | 6_7_8                      |\n|  3   | []                          |                            |\n|  4   | NULL                        | NULL                       |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | 1_2_3_4_5_4_3_2_1          |\n|  6   | [1, 2, 3, NULL]             | 1_2_3                      |\n|  7   | [4, 5, 6, NULL, NULL]       | 4_5_6                      |\n+------+-----------------------------+----------------------------+\n\nmysql> select k1, k2, array_join(k2, '_') from array_test01 order by k1;\n+------+-----------------------------------+----------------------------+\n| k1   | k2                                | array_join(`k2`, '_')      |\n+------+-----------------------------------+----------------------------+\n|  1   | ['a', 'b', 'c', 'd']              | a_b_c_d                    |\n|  2   | ['e', 'f', 'g', 'h']              | e_f_g_h                    |\n|  3   | [NULL, 'a', NULL, 'b', NULL, 'c'] | a_b_c                      |\n|  4   | ['d', 'e', NULL, ' ']             | d_e_                       |\n|  5   | [' ', NULL, 'f', 'g']             |  _f_g                      |\n+------+-----------------------------------+----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, JOIN, ARRAY_JOIN"))}y.isMDXComponent=!0}}]);