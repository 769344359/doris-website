"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4934],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},689776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-SMALL-FILES",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",title:"SHOW-SMALL-FILES",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-SMALL-FILES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-SMALL-FILES",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLE-ID",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-ID"},next:{title:"SHOW-POLICY",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-POLICY"}},o={},c=[{value:"SHOW-SMALL-FILES",id:"show-small-files",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-small-files"},"SHOW-SMALL-FILES"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW FILE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to display files created by the CREATE FILE command within a database."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE [FROM database];\n")),(0,r.yg)("p",null,"Return result description:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"FileId: file ID, globally unique"),(0,r.yg)("li",{parentName:"ul"},"DbName: the name of the database to which it belongs"),(0,r.yg)("li",{parentName:"ul"},"Catalog: Custom Category"),(0,r.yg)("li",{parentName:"ul"},"FileName: file name"),(0,r.yg)("li",{parentName:"ul"},"FileSize: file size in bytes"),(0,r.yg)("li",{parentName:"ul"},"MD5: MD5 of the file")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the uploaded files in the database my_database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW FILE FROM my_database;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, SMALL, FILES\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);