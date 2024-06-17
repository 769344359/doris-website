"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88847],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(y,l(l({ref:n},s),{},{components:r})):t.createElement(y,l({ref:n},s))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},855730:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=r(58168),a=(r(296540),r(15680));const o={title:"\u4e0b\u8f7d load \u65e5\u5fd7",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/be/download",id:"admin-manual/be/download",title:"\u4e0b\u8f7d load \u65e5\u5fd7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/be/download.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/download",permalink:"/zh-CN/docs/dev/admin-manual/be/download",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e0b\u8f7d load \u65e5\u5fd7",language:"zh-CN"},sidebar:"docs",previous:{title:"Checksum",permalink:"/zh-CN/docs/dev/admin-manual/be/checksum"},next:{title:"\u586b\u5145\u574f\u526f\u672c",permalink:"/zh-CN/docs/dev/admin-manual/be/pad-rowset"}},p={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/_load_error_log?token={string}&file={string}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u4e0b\u8f7d load \u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"file"),"\n\u6587\u4ef6\u8def\u5f84")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"token"),"\ntoken         "))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u6587\u4ef6\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```bash\ncurl "http://127.0.0.1:8040/api/_load_error_log?file=a&token=1"\n```\n')))}d.isMDXComponent=!0}}]);