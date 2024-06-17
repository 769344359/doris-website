"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[93976],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||y[m]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},931006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"ELEMENT_AT",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/element-at",id:"version-2.1/sql-manual/sql-functions/array-functions/element-at",title:"ELEMENT_AT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/element-at.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/element-at",permalink:"/docs/sql-manual/sql-functions/array-functions/element-at",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ELEMENT_AT",language:"en"},sidebar:"docs",previous:{title:"COUNTEQUAL",permalink:"/docs/sql-manual/sql-functions/array-functions/countequal"},next:{title:"SEQUENCE",permalink:"/docs/sql-manual/sql-functions/array-functions/sequence"}},s={},c=[{value:"element_at",id:"element_at",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"element_at"},"element_at"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"element_at")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"T element_at(ARRAY<T> arr, BIGINT position)\nT arr[position]\n")),(0,a.yg)("p",null,"Returns an element of an array located at the input position. If there is no element at the position, return NULL."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"position")," is 1-based and support negative number."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"positive ",(0,a.yg)("inlineCode",{parentName:"p"},"position")," example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,element_at(c_array, 5) FROM `array_test`;\n+------+-----------------+--------------------------+\n| id   | c_array         | element_at(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        5 |\n|    2 | [6, 7, 8]       |                     NULL |\n|    3 | []              |                     NULL |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n")),(0,a.yg)("p",null,"negative ",(0,a.yg)("inlineCode",{parentName:"p"},"position")," example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,c_array[-2] FROM `array_test`;\n+------+-----------------+----------------------------------+\n| id   | c_array         | %element_extract%(`c_array`, -2) |\n+------+-----------------+----------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                                4 |\n|    2 | [6, 7, 8]       |                                7 |\n|    3 | []              |                             NULL |\n|    4 | NULL            |                             NULL |\n+------+-----------------+----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ELEMENT_AT, SUBSCRIPT"))}y.isMDXComponent=!0}}]);