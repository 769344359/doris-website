"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21925],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),y=r,d=c["".concat(o,".").concat(y)]||c[y]||u[y]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},83894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(58168),r=(a(296540),a(15680));const l={title:"UNSET-VARIABLE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",id:"sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",title:"UNSET-VARIABLE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",draft:!1,tags:[],version:"current",frontMatter:{title:"UNSET-VARIABLE",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CANCEL-REBALANCE-DISK",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"},next:{title:"CREATE-CATALOG",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-CATALOG"}},o={},m=[{value:"UNSET-VARIABLE",id:"unset-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("version",{since:"dev"},(0,r.yg)("h2",{id:"unset-variable"},"UNSET-VARIABLE")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"UNSET VARIABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to restore Doris system variables. These system variables can be modified at global or session level."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UNSET [SESSION|GLOBAL] VARIABLE (variable_name | ALL)\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"(variable_name | ALL): statement must be ended with a variable name or keyword ",(0,r.yg)("inlineCode",{parentName:"li"},"ALL"),".")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Only ADMIN users can unset variables to take effect globally"),(0,r.yg)("li",{parentName:"ol"},"When restore a variable with ",(0,r.yg)("inlineCode",{parentName:"li"},"GLOBAL"),",  it only affect your current using session and new open sessions. It does not affect other current open sessions."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restore value of the time zone"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET VARIABLE time_zone;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restore the global execution memory size"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET GLOBAL VARIABLE exec_mem_limit;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restore all variables globally"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET GLOBAL VARIABLE ALL;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"UNSET, VARIABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);