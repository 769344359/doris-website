"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41201],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),y=a,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||i;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},52768:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),a=(t(296540),t(15680));const i={title:"bitmap_from_array",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_from_array",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",title:"bitmap_from_array",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_from_array",language:"en"},sidebar:"docs",previous:{title:"bitmap_to_array",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_to_array"},next:{title:"bitmap_empty",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_empty"}},s={},p=[{value:"bitmap_from_array",id:"bitmap_from_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_from_array"},"bitmap_from_array"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_ARRAY(ARRAY input)")),(0,a.yg)("p",null,"Convert a TINYINT/SMALLINT/INT/BIGINT array to a BITMAP\nWhen the input field is illegal, the result returns NULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select *, bitmap_to_string(bitmap_from_array(c_array)) from array_test;\n+------+-----------------------+------------------------------------------------+\n| id   | c_array               | bitmap_to_string(bitmap_from_array(`c_array`)) |\n+------+-----------------------+------------------------------------------------+\n|    1 | [NULL]                | NULL                                           |\n|    2 | [1, 2, 3, NULL]       | NULL                                           |\n|    2 | [1, 2, 3, -10]        | NULL                                           |\n|    3 | [1, 2, 3, 4, 5, 6, 7] | 1,2,3,4,5,6,7                                  |\n|    4 | [100, 200, 300, 300]  | 100,200,300                                    |\n+------+-----------------------+------------------------------------------------+\n5 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_FROM_ARRAY,BITMAP\n")))}u.isMDXComponent=!0}}]);