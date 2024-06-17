"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5793],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},373370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const o={title:"Check Decommission Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/fe/check-decommission-action",id:"admin-manual/fe/check-decommission-action",title:"Check Decommission Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/check-decommission-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/check-decommission-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/check-decommission-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Check Decommission Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Cancel Load Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/cancel-load-action"},next:{title:"Check Storage Type Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/check-storage-type-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_decommission")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u5224\u65ad\u6307\u5b9a\u7684 BE \u662f\u5426\u80fd\u591f\u88ab\u4e0b\u7ebf\u3002\u6bd4\u5982\u5224\u65ad\u8282\u70b9\u4e0b\u7ebf\u540e\uff0c\u5269\u4f59\u7684\u8282\u70b9\u662f\u5426\u80fd\u591f\u6ee1\u8db3\u7a7a\u95f4\u8981\u6c42\u548c\u526f\u672c\u6570\u8981\u6c42\u7b49\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"host_ports")),(0,a.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u4e00\u4e2a\u591a\u4e2a BE\uff0c\u7531\u9017\u53f7\u5206\u9694\u3002\u5982\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"ip1:port1,ip2:port2,..."),"\u3002"),(0,a.yg)("p",{parentName:"li"},"  \u5176\u4e2d port \u4e3a BE \u7684 heartbeat port\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("p",null,"\u8fd4\u56de\u53ef\u4ee5\u88ab\u4e0b\u7ebf\u7684\u8282\u70b9\u5217\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050", "192.168.10.11:9050"],\n    "count": 0\n}\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a BE \u8282\u70b9\u662f\u5426\u53ef\u4ee5\u4e0b\u7ebf"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/check_decommission?host_ports=192.168.10.11:9050,192.168.10.11:9050\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": ["192.168.10.11:9050"],\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);