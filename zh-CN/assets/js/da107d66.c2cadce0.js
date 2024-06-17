"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51536],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},443531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),r=(t(296540),t(15680));const o={title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/resource-admin/compute-node",id:"version-2.0/admin-manual/resource-admin/compute-node",title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/resource-admin/compute-node.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/compute-node",permalink:"/zh-CN/docs/2.0/admin-manual/resource-admin/compute-node",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",language:"zh-CN"},sidebar:"docs",previous:{title:"Resource Group",permalink:"/zh-CN/docs/2.0/admin-manual/resource-admin/multi-tenant"},next:{title:"\u9ad8\u5371 SQL \u9650\u5236",permalink:"/zh-CN/docs/2.0/admin-manual/query-admin/sql-interception"}},p={},u=[{value:"\u9700\u6c42\u573a\u666f",id:"\u9700\u6c42\u573a\u666f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"Compute Node \u7684\u4f7f\u7528",id:"compute-node-\u7684\u4f7f\u7528",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:3},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],c={toc:u},m="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u9700\u6c42\u573a\u666f"},"\u9700\u6c42\u573a\u666f"),(0,r.yg)("p",null,"\u76ee\u524d Doris \u662f\u4e00\u4e2a\u5178\u578b Share-Nothing \u7684\u67b6\u6784\uff0c\u901a\u8fc7\u7ed1\u5b9a\u6570\u636e\u548c\u8ba1\u7b97\u8d44\u6e90\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u83b7\u5f97\u975e\u5e38\u597d\u7684\u6027\u80fd\u8868\u73b0\u3002\n\u4f46\u968f\u7740 Doris \u8ba1\u7b97\u5f15\u64ce\u6027\u80fd\u6301\u7eed\u63d0\u9ad8\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u7528\u6237\u4e5f\u5f00\u59cb\u9009\u62e9\u4f7f\u7528 Doris \u76f4\u63a5\u67e5\u8be2\u6570\u636e\u6e56\u6570\u636e\u3002\n\u8fd9\u7c7b\u573a\u666f\u662f\u4e00\u79cd Share-Disk \u573a\u666f\uff0c\u6570\u636e\u5f80\u5f80\u5b58\u50a8\u5728\u8fdc\u7aef\u7684 HDFS/S3 \u4e0a\uff0c\u8ba1\u7b97\u5728 Doris \u4e2d\uff0cDoris \u901a\u8fc7\u7f51\u7edc\u83b7\u53d6\u6570\u636e\uff0c\u7136\u540e\u5728\u5185\u5b58\u5b8c\u6210\u8ba1\u7b97\u3002\n\u800c\u5982\u679c\u8fd9\u4e24\u4e2a\u8d1f\u8f7d\u90fd\u6df7\u5408\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u65f6\uff0c\u5bf9\u4e8e\u76ee\u524d Doris \u7684\u67b6\u6784\u5c31\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u4e0d\u8db3\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8d44\u6e90\u9694\u79bb\u5dee\uff0c\u4e24\u4e2a\u8d1f\u8f7d\u5bf9\u96c6\u7fa4\u7684\u54cd\u5e94\u8981\u6c42\u4e0d\u4e00\uff0c\u6df7\u5408\u90e8\u7f72\u4f1a\u6709\u76f8\u4e92\u7684\u5f71\u54cd\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u96c6\u7fa4\u6269\u5bb9\u65f6\uff0c\u6570\u636e\u6e56\u67e5\u8be2\u53ea\u9700\u8981\u6269\u5bb9\u8ba1\u7b97\u8d44\u6e90\uff0c\u800c\u76ee\u524d\u53ea\u80fd\u5b58\u50a8\u8ba1\u7b97\u4e00\u8d77\u6269\u5bb9\uff0c\u5bfc\u81f4\u78c1\u76d8\u4f7f\u7528\u7387\u53d8\u4f4e\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6269\u5bb9\u6548\u7387\u5dee\uff0c\u6269\u5bb9\u540e\u4f1a\u542f\u52a8 Tablet \u6570\u636e\u7684\u8fc1\u79fb\uff0c\u6574\u4f53\u8fc7\u7a0b\u6bd4\u8f83\u6f2b\u957f\u3002\u800c\u6570\u636e\u6e56\u67e5\u8be2\u6709\u7740\u660e\u663e\u7684\u9ad8\u5cf0\u4f4e\u8c37\uff0c\u9700\u8981\u5c0f\u65f6\u7ea7\u5f39\u6027\u80fd\u529b\u3002"))),(0,r.yg)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.yg)("p",null,"\u5b9e\u73b0\u4e00\u79cd\u4e13\u95e8\u7528\u4e8e\u8054\u90a6\u8ba1\u7b97\u7684 BE \u8282\u70b9\u89d2\u8272\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"\u8ba1\u7b97\u8282\u70b9"),", \u8ba1\u7b97\u8282\u70b9\u4e13\u95e8\u5904\u7406\u6570\u636e\u6e56\u8fd9\u7c7b\u8fdc\u7a0b\u7684\u8054\u90a6\u67e5\u8be2\u3002\n\u539f\u6765\u7684 BE \u8282\u70b9\u7c7b\u578b\u79f0\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"\u6df7\u5408\u8282\u70b9"),", \u8fd9\u7c7b\u8282\u70b9\u65e2\u80fd\u505a SQL \u67e5\u8be2\uff0c\u53c8\u6709 Tablet \u6570\u636e\u5b58\u50a8\u7ba1\u7406\u3002\n\u800c",(0,r.yg)("inlineCode",{parentName:"p"},"\u8ba1\u7b97\u8282\u70b9"),"\u53ea\u80fd\u505a SQL \u67e5\u8be2\uff0c\u5b83\u4e0d\u4f1a\u4fdd\u5b58\u4efb\u4f55\u6570\u636e\u3002"),(0,r.yg)("p",null,"\u6709\u4e86\u8ba1\u7b97\u8282\u70b9\u540e\uff0c\u96c6\u7fa4\u90e8\u7f72\u62d3\u6251\u4e5f\u4f1a\u53d1\u751f\u53d8\u5316\uff1a\u6df7\u5408\u8282\u70b9\u7528\u4e8e OLAP \u7c7b\u578b\u8868\u7684\u6570\u636e\u8ba1\u7b97\uff0c\u8fd9\u4e2a\u8282\u70b9\u6839\u636e\u5b58\u50a8\u7684\u9700\u6c42\u800c\u6269\u5bb9\uff0c\u800c\u8ba1\u7b97\u8282\u70b9\u7528\u4e8e\u8054\u90a6\u67e5\u8be2\uff0c\u8be5\u8282\u70b9\u7c7b\u578b\u968f\u7740\u8ba1\u7b97\u8d1f\u8f7d\u800c\u6269\u5bb9\u3002"),(0,r.yg)("p",null,"\u6b64\u5916\uff0c\u8ba1\u7b97\u8282\u70b9\u7531\u4e8e\u6ca1\u6709\u5b58\u50a8\uff0c\u56e0\u6b64\u5728\u90e8\u7f72\u65f6\uff0c\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u6df7\u90e8\u5728 HDD \u78c1\u76d8\u673a\u5668\u6216\u8005\u90e8\u7f72\u5728\u5bb9\u5668\u4e4b\u4e2d\u3002"),(0,r.yg)("h2",{id:"compute-node-\u7684\u4f7f\u7528"},"Compute Node \u7684\u4f7f\u7528"),(0,r.yg)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.yg)("p",null,"\u5728 BE \u7684\u914d\u7f6e\u6587\u4ef6 be.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"be_node_role=computation\n")),(0,r.yg)("p",null,"\u8be5\u914d\u7f6e\u9879\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"mix"),", \u5373\u539f\u6765\u7684 BE \u8282\u70b9\u7c7b\u578b\uff0c\u8bbe\u7f6e\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"computation"),"\u540e\uff0c\u8be5\u8282\u70b9\u4e3a\u8ba1\u7b97\u8282\u70b9\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"show backends\\G"),"\u547d\u4ee4\u770b\u5230\u5176\u4e2d",(0,r.yg)("inlineCode",{parentName:"p"},"NodeRole"),"\u5b57\u6bb5\u7684\u503c\uff0c\u5982\u679c\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"mix"),", \u5219\u4e3a\u6df7\u5408\u8282\u70b9\uff0c\u5982\u679c\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"computation"),", \u5219\u4e3a\u8ba1\u7b97\u8282\u70b9"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'*************************** 1. row ***************************\n              BackendId: 10010\n                Cluster: default_cluster\n                     IP: 10.248.181.219\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n          LastStartTime: 2022-11-30 23:01:40\n          LastHeartbeat: 2022-12-05 15:01:18\n                  Alive: true\n   SystemDecommissioned: false\n  ClusterDecommissioned: false\n              TabletNum: 753\n       DataUsedCapacity: 1.955 GB\n          AvailCapacity: 202.987 GB\n          TotalCapacity: 491.153 GB\n                UsedPct: 58.67 %\n         MaxDiskUsedPct: 58.67 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-0.0.0-trunk-80baca264\n                 Status: {"lastSuccessReportTabletsTime":"2022-12-05 15:00:38","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: computation\n')),(0,r.yg)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.yg)("p",null,"\u5728 fe.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e\u9879"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"prefer_compute_node_for_external_table=true\nmin_backend_num_for_external_table=3\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"\u53c2\u6570\u8bf4\u660e\u8bf7\u53c2\u9605\uff1a",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/admin-manual/config/fe-config"},"FE \u914d\u7f6e\u9879"))),(0,r.yg)("p",null,"\u5f53\u67e5\u8be2\u65f6\u4f7f\u7528",(0,r.yg)("a",{parentName:"p",href:"../../lakehouse/lakehouse-overview"}," MultiCatalog "),"\u529f\u80fd\u65f6\uff0c\u67e5\u8be2\u4f1a\u4f18\u5148\u8c03\u5ea6\u5230\u8ba1\u7b97\u8282\u70b9\u3002"),(0,r.yg)("h3",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8ba1\u7b97\u8282\u70b9\u7531\u914d\u7f6e\u9879\u63a7\u5236\uff0c\u4f46\u4e0d\u8981\u5c06\u6df7\u5408\u7c7b\u578b\u8282\u70b9\uff0c\u4fee\u6539\u914d\u7f6e\u4e3a\u8ba1\u7b97\u8282\u70b9\u3002")),(0,r.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba1\u7b97\u5916\u6ea2\uff1aDoris \u5185\u8868\u67e5\u8be2\uff0c\u5f53\u96c6\u7fa4\u8d1f\u8f7d\u9ad8\u7684\u65f6\u5019\uff0c\u4e0a\u5c42 (TableScan \u4e4b\u5916) \u7b97\u5b50\u8c03\u5ea6\u5230\u8ba1\u7b97\u8282\u70b9\u4e2d\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4f18\u96c5\u4e0b\u7ebf\uff1a\u5f53\u8282\u70b9\u4e0b\u7ebf\u7684\u65f6\u5019\uff0c\u4efb\u52a1\u65b0\u4efb\u52a1\u81ea\u52a8\u8c03\u5ea6\u5230\u5176\u4ed6\u8282\u70b9; \u7b49\u5f85\u8001\u4efb\u52a1\u540e\u5168\u90e8\u5b8c\u6210\u540e\u8282\u70b9\u518d\u4e0b\u7ebf; \u8001\u4efb\u52a1\u65e0\u6cd5\u6309\u65f6\u7ed3\u675f\u65f6\uff0c\u80fd\u591f\u8ba9\u4efb\u52a1\u80fd\u591f\u81ea\u5df1\u7ed3\u675f\u3002"))))}s.isMDXComponent=!0}}]);