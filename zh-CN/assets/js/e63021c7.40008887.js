"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39614],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||o;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[y]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},916411:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const o={title:"array_sort",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_sort",id:"version-1.2/sql-manual/sql-functions/array-functions/array_sort",title:"array_sort",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_sort.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_sort",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_sort",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_sort",language:"zh-CN"},sidebar:"docs",previous:{title:"array_slice",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_slice"},next:{title:"array_reverse_sort",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_reverse_sort"}},i={},c=[{value:"array_sort",id:"array_sort",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_sort"},"array_sort"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_sort")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_sort(ARRAY<T> arr)")),(0,a.yg)("p",null,"\u8fd4\u56de\u6309\u5347\u5e8f\u6392\u5217\u540e\u7684\u6570\u7ec4\uff0c\u5982\u679c\u8f93\u5165\u6570\u7ec4\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\u3002\n\u5982\u679c\u6570\u7ec4\u5143\u7d20\u5305\u542bNULL, \u5219\u8f93\u51fa\u7684\u6392\u5e8f\u6570\u7ec4\u4f1a\u5c06NULL\u653e\u5728\u6700\u524d\u9762\u3002"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\nmysql> select k1, k2, array_sort(k2) from array_test;\n+------+-----------------------------+-----------------------------+\n| k1   | k2                          | array_sort(`k2`)            |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [1, 2, 3, 4, 5]             |\n|  2   | [6, 7, 8]                   | [6, 7, 8]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 1, 2, 2, 3, 3, 4, 4, 5] |\n|  6   | [1, 2, 3, NULL]             | [NULL, 1, 2, 3]             |\n|  7   | [1, 2, 3, NULL, NULL]       | [NULL, NULL, 1, 2, 3]       |\n|  8   | [1, 1, 2, NULL, NULL]       | [NULL, NULL, 1, 1, 2]       |\n|  9   | [1, NULL, 1, 2, NULL, NULL] | [NULL, NULL, NULL, 1, 1, 2] |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, array_sort(k2) from array_test01;\n+------+------------------------------------------+------------------------------------------+\n| k1   | k2                                       | array_sort(`k2`)                         |\n+------+------------------------------------------+------------------------------------------+\n|  1   | ['a', 'b', 'c', 'd', 'e']                | ['a', 'b', 'c', 'd', 'e']                |\n|  2   | ['f', 'g', 'h']                          | ['f', 'g', 'h']                          |\n|  3   | ['']                                     | ['']                                     |\n|  3   | [NULL]                                   | [NULL]                                   |\n|  5   | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'e'] |\n|  6   | NULL                                     | NULL                                     |\n|  7   | ['a', 'b', NULL]                         | [NULL, 'a', 'b']                         |\n|  8   | ['a', 'b', NULL, NULL]                   | [NULL, NULL, 'a', 'b']                   |\n+------+------------------------------------------+------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, SORT, ARRAY_SORT"))}p.isMDXComponent=!0}}]);