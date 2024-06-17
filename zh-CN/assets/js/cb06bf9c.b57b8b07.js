"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63314],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},901437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"MULTI_MATCH_ANY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/search/multi-match-any",id:"sql-manual/sql-functions/string-functions/search/multi-match-any",title:"MULTI_MATCH_ANY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/search/multi-match-any.md",sourceDirName:"sql-manual/sql-functions/string-functions/search",slug:"/sql-manual/sql-functions/string-functions/search/multi-match-any",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/search/multi-match-any",draft:!1,tags:[],version:"current",frontMatter:{title:"MULTI_MATCH_ANY",language:"zh-CN"},sidebar:"docs",previous:{title:"MULTI_SEARCH_ALL_POSITIONS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/search/multi-search-all-positions"},next:{title:"MASK",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/mask/"}},c={},s=[{value:"multi_match_any",id:"multi_match_any",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"multi_match_any"},"multi_match_any"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"TINYINT multi_match_any(VARCHAR haystack, ARRAY<VARCHAR> patterns)")),(0,a.yg)("p",null,"\u68c0\u67e5\u5b57\u7b26\u4e32 ",(0,a.yg)("inlineCode",{parentName:"p"},"haystack")," \u662f\u5426\u4e0e re2 \u8bed\u6cd5\u4e2d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,a.yg)("inlineCode",{parentName:"p"},"patterns")," \u76f8\u5339\u914d\u3002\u5982\u679c\u90fd\u6ca1\u6709\u5339\u914d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u8fd4\u56de 0\uff0c\u5426\u5219\u8fd4\u56de 1\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select multi_match_any('Hello, World!', ['hello', '!', 'world']);\n+-----------------------------------------------------------+\n| multi_match_any('Hello, World!', ['hello', '!', 'world']) |\n+-----------------------------------------------------------+\n| 1                                                         |\n+-----------------------------------------------------------+\n\nmysql> select multi_match_any('abc', ['A', 'bcd']);\n+--------------------------------------+\n| multi_match_any('abc', ['A', 'bcd']) |\n+--------------------------------------+\n| 0                                    |\n+--------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MULTI_MATCH,MATCH,ANY\n")))}m.isMDXComponent=!0}}]);