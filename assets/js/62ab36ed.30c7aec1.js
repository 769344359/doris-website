"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71102],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,y=c["".concat(a,".").concat(g)]||c[g]||p[g]||l;return t?r.createElement(y,s(s({ref:n},d),{},{components:t})):r.createElement(y,s({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=g;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},332869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const l={title:"SUBSTRING_INDEX",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/substring-index",id:"version-2.0/sql-manual/sql-functions/string-functions/substring-index",title:"SUBSTRING_INDEX",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/substring-index.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substring-index",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/substring-index",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SUBSTRING_INDEX",language:"en"},sidebar:"docs",previous:{title:"SPLIT_BY_STRING",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/split-by-string"},next:{title:"MONEY_FORMAT",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/money-format"}},a={},u=[{value:"substring_index",id:"substring_index",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"substring_index"},"substring_index"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("version",{since:"1.2"},(0,i.yg)("p",null,"SUBSTRING_INDEX")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR substring_index(VARCHAR content, VARCHAR delimiter, INT field)")),(0,i.yg)("p",null,"Split ",(0,i.yg)("inlineCode",{parentName:"p"},"content")," to two parts at position where the ",(0,i.yg)("inlineCode",{parentName:"p"},"field"),"s of ",(0,i.yg)("inlineCode",{parentName:"p"},"delimiter")," stays, return one of them according to below rules:\nif ",(0,i.yg)("inlineCode",{parentName:"p"},"field")," is positive, return the left part;\nelse if ",(0,i.yg)("inlineCode",{parentName:"p"},"field")," is negative, return the right part;\nif ",(0,i.yg)("inlineCode",{parentName:"p"},"field")," is zero, return an empty string when ",(0,i.yg)("inlineCode",{parentName:"p"},"content")," is not null, else will return null."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"delimiter")," is case sensitive and multi-byte safe."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"delimiter")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"field")," parameter should be constant.")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'mysql> select substring_index("hello world", " ", 1);\n+----------------------------------------+\n| substring_index("hello world", " ", 1) |\n+----------------------------------------+\n| hello                                  |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", 2);\n+----------------------------------------+\n| substring_index("hello world", " ", 2) |\n+----------------------------------------+\n| hello world                            |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", -1);\n+-----------------------------------------+\n| substring_index("hello world", " ", -1) |\n+-----------------------------------------+\n| world                                   |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -2);\n+-----------------------------------------+\n| substring_index("hello world", " ", -2) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -3);\n+-----------------------------------------+\n| substring_index("hello world", " ", -3) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", 0);\n+----------------------------------------+\n| substring_index("hello world", " ", 0) |\n+----------------------------------------+\n|                                        |\n+----------------------------------------+\n')),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SUBSTRING_INDEX, SUBSTRING\n")))}p.isMDXComponent=!0}}]);