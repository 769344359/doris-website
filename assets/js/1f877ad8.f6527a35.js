"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11805],{15680:(t,e,n)=>{n.d(e,{xA:()=>c,yg:()=>b});var r=n(296540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),y=a,b=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(b,o(o({ref:e},c),{},{components:n})):r.createElement(b,o({ref:e},c))}));function b(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},265289:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"bitmap_to_array",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_to_array",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_to_array",title:"bitmap_to_array",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_to_array.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_to_array",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_to_array",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_to_array",language:"en"},sidebar:"docs",previous:{title:"bitmap_to_string",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_from_array",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_from_array"}},p={},s=[{value:"bitmap_to_array",id:"bitmap_to_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},m="wrapper";function u(t){let{components:e,...n}=t;return(0,a.yg)(m,(0,r.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_to_array"},"bitmap_to_array"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY_BIGINT bitmap_to_array(BITMAP input)")),(0,a.yg)("p",null,"Convert a input BITMAP to Array.\nIf input is null, return null."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_array(null);\n+------------------------+\n| bitmap_to_array(NULL)  |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_array(bitmap_empty());\n+---------------------------------+\n| bitmap_to_array(bitmap_empty()) |\n+---------------------------------+\n| []                              |\n+---------------------------------+\n\nmysql> select bitmap_to_array(to_bitmap(1));\n+-------------------------------+\n| bitmap_to_array(to_bitmap(1)) |\n+-------------------------------+\n| [1]                           |\n+-------------------------------+\n\nmysql> select bitmap_to_array(bitmap_from_string('1,2,3,4,5'));\n+--------------------------------------------------+\n| bitmap_to_array(bitmap_from_string('1,2,3,4,5')) |\n+--------------------------------------------------+\n| [1, 2, 3, 4, 5]                                  |\n+--------------------------------------------------\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_TO_ARRAY,BITMAP\n")))}u.isMDXComponent=!0}}]);