"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66520],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},889887:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var t=n(58168),a=(n(296540),n(15680));const o={title:"ARRAY_PUSHFRONT",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/array-functions/array-pushfront",id:"sql-manual/sql-functions/array-functions/array-pushfront",title:"ARRAY_PUSHFRONT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-pushfront.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-pushfront",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-pushfront",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_PUSHFRONT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_POPFRONT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-popfront"},next:{title:"ARRAY_PUSHBACK",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-pushback"}},s={},i=[{value:"array_pushfront",id:"array_pushfront",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_pushfront"},"array_pushfront"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"array_pushfront")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Array<T> array_pushfront(Array<T> arr, T value)"),"\n\u5c06value\u6dfb\u52a0\u5230\u6570\u7ec4\u7684\u5f00\u5934."),(0,a.yg)("h4",{id:"returned-value"},"Returned value"),(0,a.yg)("p",null,"\u8fd4\u56de\u6dfb\u52a0value\u540e\u7684\u6570\u7ec4"),(0,a.yg)("p",null,"\u7c7b\u578b: Array."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u53ea\u652f\u6301\u5728\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_pushfront([1, 2], 3);\n+---------------------------------+\n| array_pushfront(ARRAY(1, 2), 3) |\n+---------------------------------+\n| [3, 1, 2]                       |\n+---------------------------------+\n\nmysql> select col3, array_pushfront(col3, 6) from array_test;\n+-----------+----------------------------+\n| col3      | array_pushfront(`col3`, 6) |\n+-----------+----------------------------+\n| [3, 4, 5] | [6, 3, 4, 5]               |\n| [NULL]    | [6, NULL]                  |\n| NULL      | NULL                       |\n| []        | [6]                        |\n+-----------+----------------------------+\n\nmysql> select col1, col3, array_pushfront(col3, col1) from array_test;\n+------+-----------+---------------------------------+\n| col1 | col3      | array_pushfront(`col3`, `col1`) |\n+------+-----------+---------------------------------+\n|    0 | [3, 4, 5] | [0, 3, 4, 5]                    |\n|    1 | [NULL]    | [1, NULL]                       |\n|    2 | NULL      | NULL                            |\n|    3 | []        | [3]                             |\n+------+-----------+---------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,PUSHFRONT,ARRAY_PUSHFRONT"))}y.isMDXComponent=!0}}]);