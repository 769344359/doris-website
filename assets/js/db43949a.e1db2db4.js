"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13755],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(n),d=a,f=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},748152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"DATE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-types/Data-Types/DATE",id:"sql-manual/sql-types/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-types/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/DATE",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DATE",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE",language:"en"},sidebar:"docs",previous:{title:"DECIMAL",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DECIMAL"},next:{title:"DATETIME",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DATETIME"}},i={},p=[{value:"DATE",id:"date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},y="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"DATE")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"date\nDate type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'yyyy-MM-dd'."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| DATE('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATE"))}u.isMDXComponent=!0}}]);