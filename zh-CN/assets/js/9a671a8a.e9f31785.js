"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74367],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=i,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||o;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},730686:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(58168),i=(r(296540),r(15680));const o={title:"Fe Version Info Action",language:"zh-CN"},a=void 0,s={unversionedId:"admin-manual/fe/fe-version-info-action",id:"admin-manual/fe/fe-version-info-action",title:"Fe Version Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/fe-version-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/fe-version-info-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/fe-version-info-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Fe Version Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Extra Basepath Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/extra-basepath-action"},next:{title:"Get DDL Statement Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/get-ddl-stmt-action"}},d={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l},c="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"GET /api/fe_version_info")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6 fe \u8282\u70b9\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,i.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"\u65e0"),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'```\nGET /api/fe_version_info\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n')))}p.isMDXComponent=!0}}]);