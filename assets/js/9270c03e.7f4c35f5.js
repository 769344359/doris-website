"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45682],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=l,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(58168),l=(t(296540),t(15680));const o={title:"EXPLODE_NUMBERS",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/explode-numbers",id:"sql-manual/sql-functions/table-functions/explode-numbers",title:"EXPLODE_NUMBERS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/explode-numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-numbers",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers",draft:!1,tags:[],version:"current",frontMatter:{title:"EXPLODE_NUMBERS",language:"en"},sidebar:"docs",previous:{title:"NUMBERS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/numbers"},next:{title:"EXPLODE_NUMBERS_OUTER",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer"}},i={},u=[{value:"explode_numbers",id:"explode_numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"explode_numbers"},"explode_numbers"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"Table functions must be used in conjunction with Lateral View."),(0,l.yg)("p",null,"Get a number sequence [0,n)."),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"explode_numbers(n)")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(5) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    0 |\n|    1 |\n|    2 |\n|    3 |\n|    4 |\n+------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"explode,numbers,explode_numbers"))}d.isMDXComponent=!0}}]);