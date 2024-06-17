"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73304],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},968193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const a={title:"DIGITAL-MASKING",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/digital-masking",id:"version-1.2/sql-manual/sql-functions/digital-masking",title:"DIGITAL-MASKING",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/digital-masking.md",sourceDirName:"sql-manual/sql-functions",slug:"/sql-manual/sql-functions/digital-masking",permalink:"/docs/1.2/sql-manual/sql-functions/digital-masking",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DIGITAL-MASKING",language:"en"},sidebar:"docs",previous:{title:"CAST",permalink:"/docs/1.2/sql-manual/sql-functions/cast"},next:{title:"width_bucket",permalink:"/docs/1.2/sql-manual/sql-functions/width-bucket"}},s={},c=[{value:"DIGITAL_MASKING",id:"digital_masking",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"digital_masking"},"DIGITAL_MASKING"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"digital_masking(digital_number)\n")),(0,i.yg)("p",null,"Alias function, the original function is ",(0,i.yg)("inlineCode",{parentName:"p"},"concat(left(id,3),'****',right(id,4))"),"."),(0,i.yg)("p",null,"Desensitizes the input ",(0,i.yg)("inlineCode",{parentName:"p"},"digital_number")," and returns the result after masking desensitization. ",(0,i.yg)("inlineCode",{parentName:"p"},"digital_number")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT")," data type."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Desensitize the cell phone number"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select digital_masking(13812345678);\n+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n")))),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"DIGITAL_MASKING"))}d.isMDXComponent=!0}}]);