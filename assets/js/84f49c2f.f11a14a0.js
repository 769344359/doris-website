"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8505],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>f});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=a.createContext({}),s=function(e){var r=a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=t,f=p["".concat(i,".").concat(d)]||p[d]||y[d]||l;return n?a.createElement(f,o(o({ref:r},u),{},{components:n})):a.createElement(f,o({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},624880:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(58168),t=(n(296540),n(15680));const l={title:"ARRAY_PUSHBACK",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-pushback",id:"sql-manual/sql-functions/array-functions/array-pushback",title:"ARRAY_PUSHBACK",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array-pushback.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-pushback",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-pushback",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_PUSHBACK",language:"en"},sidebar:"docs",previous:{title:"ARRAY_PUSHFRONT",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-pushfront"},next:{title:"ARRAY_COMPACT",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-compact"}},i={},s=[{value:"array_pushback",id:"array_pushback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function y(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_pushback"},"array_pushback"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_pushback")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Array<T> array_pushback(Array<T> arr, T value)")),(0,t.yg)("p",null,"Add the value to the end of the array."),(0,t.yg)("h4",{id:"returned-value"},"Returned value"),(0,t.yg)("p",null,"The array after adding the value."),(0,t.yg)("p",null,"Type: Array."),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_pushback([1, 2], 3);\n+---------------------------------+\n| array_pushback(ARRAY(1, 2), 3)  |\n+---------------------------------+\n| [1, 2, 3]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushback(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushback(`col3`, 6)  |\n+-----------+----------------------------+\n| [3, 4, 5] | [3, 4, 5, 6]               |\n| [NULL]    | [NULL, 6]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushback(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushback(`col3`, `col1`)  |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [3, 4, 5, 0]                    |\n|    1 | [NULL]    | [NULL, 1]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,PUSHBACK,ARRAY_PUSHBACK"))}y.isMDXComponent=!0}}]);