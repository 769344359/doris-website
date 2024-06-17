"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27064],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},747422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"Hardware Info Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/http-actions/fe/hardware-info-action",id:"version-1.2/admin-manual/http-actions/fe/hardware-info-action",title:"Hardware Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/hardware-info-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/hardware-info-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/hardware-info-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Hardware Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"HA Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/ha-action"},next:{title:"Help Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/help-action"}},l={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hardware-info-action"},"Hardware Info Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/hardware_info/fe/\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Hardware Info Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524dFE\u7684\u786c\u4ef6\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "VersionInfo": {\n            "Git": "git://host/core@5bc28f4c36c20c7b424792df662fc988436e679e",\n            "Version": "trunk",\n            "BuildInfo": "cmy@192.168.1",\n            "BuildTime": "\u4e8c, 05 9\u6708 2019 11:07:42 CST"\n        },\n        "HarewareInfo": {\n            "NetworkParameter": "...",\n            "Processor": "...",\n            "OS": "...",\n            "Memory": "...",\n            "FileSystem": "...",\n            "NetworkInterface": "...",\n            "Processes": "...",\n            "Disk": "..."\n        }\n    },\n    "count": 0\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"li"},"HarewareInfo")," \u5b57\u6bb5\u4e2d\u7684\u5404\u4e2a\u503c\u7684\u5185\u5bb9\uff0c\u90fd\u662f\u4ee5html\u683c\u5f0f\u5c55\u73b0\u7684\u786c\u4ef6\u4fe1\u606f\u6587\u672c\u3002")))}d.isMDXComponent=!0}}]);