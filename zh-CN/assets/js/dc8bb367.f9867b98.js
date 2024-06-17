"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[56494],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>y});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),g=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=g(e.components);return t.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=g(n),c=r,y=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?t.createElement(y,o(o({ref:a},m),{},{components:n})):t.createElement(y,o({ref:a},m))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},924787:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var t=n(58168),r=(n(296540),n(15680));const l={title:"Resource Group",language:"zh-CN"},o=void 0,i={unversionedId:"admin-manual/resource-admin/multi-tenant",id:"admin-manual/resource-admin/multi-tenant",title:"Resource Group",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/resource-admin/multi-tenant.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/multi-tenant",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/multi-tenant",draft:!1,tags:[],version:"current",frontMatter:{title:"Resource Group",language:"zh-CN"},sidebar:"docs",previous:{title:"Workload\u7cfb\u7edf\u8868",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/workload-system-table"},next:{title:"\u5f39\u6027\u8ba1\u7b97\u8282\u70b9",permalink:"/zh-CN/docs/dev/admin-manual/resource-admin/compute-node"}},p={},g=[{value:"Doris \u4e2d\u7684\u8282\u70b9",id:"doris-\u4e2d\u7684\u8282\u70b9",level:2},{value:"\u8282\u70b9\u8d44\u6e90\u5212\u5206",id:"\u8282\u70b9\u8d44\u6e90\u5212\u5206",level:2},{value:"\u5355\u67e5\u8be2\u8d44\u6e90\u9650\u5236",id:"\u5355\u67e5\u8be2\u8d44\u6e90\u9650\u5236",level:2},{value:"\u6700\u4f73\u5b9e\u8df5\u548c\u5411\u524d\u517c\u5bb9",id:"\u6700\u4f73\u5b9e\u8df5\u548c\u5411\u524d\u517c\u5bb9",level:2},{value:"Tag \u5212\u5206\u548c CPU \u9650\u5236\u662f 0.15 \u7248\u672c\u4e2d\u7684\u65b0\u529f\u80fd\u3002\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u4ee5\u4ece\u8001\u7248\u672c\u5e73\u6ed1\u5347\u7ea7\uff0cDoris \u505a\u4e86\u5982\u4e0b\u7684\u5411\u524d\u517c\u5bb9\uff1a",id:"tag-\u5212\u5206\u548c-cpu-\u9650\u5236\u662f-015-\u7248\u672c\u4e2d\u7684\u65b0\u529f\u80fd\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u4ee5\u4ece\u8001\u7248\u672c\u5e73\u6ed1\u5347\u7ea7doris-\u505a\u4e86\u5982\u4e0b\u7684\u5411\u524d\u517c\u5bb9",level:3},{value:"table \u6570\u91cf\u5f88\u591a\u65f6\u5982\u4f55\u65b9\u4fbf\u7684\u8bbe\u7f6e\u526f\u672c\u5206\u5e03\u7b56\u7565",id:"table-\u6570\u91cf\u5f88\u591a\u65f6\u5982\u4f55\u65b9\u4fbf\u7684\u8bbe\u7f6e\u526f\u672c\u5206\u5e03\u7b56\u7565",level:3}],m={toc:g},s="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris \u7684\u591a\u79df\u6237\u548c\u8d44\u6e90\u9694\u79bb\u65b9\u6848\uff0c\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u591a\u7528\u6237\u5728\u540c\u4e00 Doris \u96c6\u7fa4\u5185\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\u65f6\uff0c\u51cf\u5c11\u76f8\u4e92\u4e4b\u95f4\u7684\u5e72\u6270\uff0c\u80fd\u591f\u5c06\u96c6\u7fa4\u8d44\u6e90\u66f4\u5408\u7406\u7684\u5206\u914d\u7ed9\u5404\u7528\u6237\u3002"),(0,r.yg)("p",null,"\u8be5\u65b9\u6848\u4e3b\u8981\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u4e00\u662f\u96c6\u7fa4\u5185\u8282\u70b9\u7ea7\u522b\u7684\u8d44\u6e90\u7ec4\u5212\u5206\uff0c\u4e8c\u662f\u9488\u5bf9\u5355\u4e2a\u67e5\u8be2\u7684\u8d44\u6e90\u9650\u5236\u3002"),(0,r.yg)("h2",{id:"doris-\u4e2d\u7684\u8282\u70b9"},"Doris \u4e2d\u7684\u8282\u70b9"),(0,r.yg)("p",null,"\u9996\u5148\u5148\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b Doris \u7684\u8282\u70b9\u7ec4\u6210\u3002\u4e00\u4e2a Doris \u96c6\u7fa4\u4e2d\u6709\u4e24\u7c7b\u8282\u70b9\uff1aFrontend(FE) \u548c Backend(BE)\u3002"),(0,r.yg)("p",null,"FE \u4e3b\u8981\u8d1f\u8d23\u5143\u6570\u636e\u7ba1\u7406\u3001\u96c6\u7fa4\u7ba1\u7406\u3001\u7528\u6237\u8bf7\u6c42\u7684\u63a5\u5165\u548c\u67e5\u8be2\u8ba1\u5212\u7684\u89e3\u6790\u7b49\u5de5\u4f5c\u3002"),(0,r.yg)("p",null,"BE \u4e3b\u8981\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u3001\u67e5\u8be2\u8ba1\u5212\u7684\u6267\u884c\u7b49\u5de5\u4f5c\u3002"),(0,r.yg)("p",null,"FE \u4e0d\u53c2\u4e0e\u7528\u6237\u6570\u636e\u7684\u5904\u7406\u8ba1\u7b97\u7b49\u5de5\u4f5c\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u8d44\u6e90\u6d88\u8017\u8f83\u4f4e\u7684\u8282\u70b9\u3002\u800c BE \u8d1f\u8d23\u6240\u6709\u7684\u6570\u636e\u8ba1\u7b97\u3001\u4efb\u52a1\u5904\u7406\uff0c\u5c5e\u4e8e\u8d44\u6e90\u6d88\u8017\u578b\u7684\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u672c\u6587\u6240\u4ecb\u7ecd\u7684\u8d44\u6e90\u5212\u5206\u53ca\u8d44\u6e90\u9650\u5236\u65b9\u6848\uff0c\u90fd\u662f\u9488\u5bf9 BE \u8282\u70b9\u7684\u3002FE \u8282\u70b9\u56e0\u4e3a\u8d44\u6e90\u6d88\u8017\u76f8\u5bf9\u8f83\u4f4e\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u6a2a\u5411\u6269\u5c55\uff0c\u56e0\u6b64\u901a\u5e38\u65e0\u9700\u505a\u8d44\u6e90\u4e0a\u7684\u9694\u79bb\u548c\u9650\u5236\uff0cFE \u8282\u70b9\u7531\u6240\u6709\u7528\u6237\u5171\u4eab\u5373\u53ef\u3002"),(0,r.yg)("h2",{id:"\u8282\u70b9\u8d44\u6e90\u5212\u5206"},"\u8282\u70b9\u8d44\u6e90\u5212\u5206"),(0,r.yg)("p",null,"\u8282\u70b9\u8d44\u6e90\u5212\u5206\uff0c\u662f\u6307\u5c06\u4e00\u4e2a Doris \u96c6\u7fa4\u5185\u7684 BE \u8282\u70b9\u8bbe\u7f6e\u6807\u7b7e\uff08Tag\uff09\uff0c\u6807\u7b7e\u76f8\u540c\u7684 BE \u8282\u70b9\u7ec4\u6210\u4e00\u4e2a\u8d44\u6e90\u7ec4\uff08Resource Group\uff09\u3002\u8d44\u6e90\u7ec4\u53ef\u4ee5\u770b\u4f5c\u662f\u6570\u636e\u5b58\u50a8\u548c\u8ba1\u7b97\u7684\u4e00\u4e2a\u7ba1\u7406\u5355\u5143\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u793a\u4f8b\uff0c\u6765\u4ecb\u7ecd\u8d44\u6e90\u7ec4\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e3a BE \u8282\u70b9\u8bbe\u7f6e\u6807\u7b7e"),(0,r.yg)("p",{parentName:"li"},"\u5047\u8bbe\u5f53\u524d Doris \u96c6\u7fa4\u6709 6 \u4e2a BE \u8282\u70b9\u3002\u5206\u522b\u4e3a host","[1-6]","\u3002\u5728\u521d\u59cb\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u8282\u70b9\u90fd\u5c5e\u4e8e\u4e00\u4e2a\u9ed8\u8ba4\u8d44\u6e90\u7ec4\uff08Default\uff09\u3002"),(0,r.yg)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u8fd9 6 \u4e2a\u8282\u70b9\u5212\u5206\u6210 3 \u4e2a\u8d44\u6e90\u7ec4\uff1agroup_a\u3001group_b\u3001group_c\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'alter system modify backend "host1:9050" set ("tag.location" = "group_a");\nalter system modify backend "host2:9050" set ("tag.location" = "group_a");\nalter system modify backend "host3:9050" set ("tag.location" = "group_b");\nalter system modify backend "host4:9050" set ("tag.location" = "group_b");\nalter system modify backend "host5:9050" set ("tag.location" = "group_c");\nalter system modify backend "host6:9050" set ("tag.location" = "group_c");\n')),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u91cc\u6211\u4eec\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"host[1-2]")," \u7ec4\u6210\u8d44\u6e90\u7ec4 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_a"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"host[3-4]")," \u7ec4\u6210\u8d44\u6e90\u7ec4 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_b"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"host[5-6]")," \u7ec4\u6210\u8d44\u6e90\u7ec4 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_c"),"\u3002"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u4e00\u4e2a BE \u53ea\u652f\u6301\u8bbe\u7f6e\u4e00\u4e2a Tag\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6309\u7167\u8d44\u6e90\u7ec4\u5206\u914d\u6570\u636e\u5206\u5e03"),(0,r.yg)("p",{parentName:"li"},"\u8d44\u6e90\u7ec4\u5212\u5206\u597d\u540e\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u7528\u6237\u6570\u636e\u7684\u4e0d\u540c\u526f\u672c\u5206\u5e03\u5728\u4e0d\u540c\u8d44\u6e90\u7ec4\u5185\u3002\u5047\u8bbe\u4e00\u5f20\u7528\u6237\u8868 UserTable\u3002\u6211\u4eec\u5e0c\u671b\u5728 3 \u4e2a\u8d44\u6e90\u7ec4\u5185\u5404\u5b58\u653e\u4e00\u4e2a\u526f\u672c\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u5efa\u8868\u8bed\u53e5\u5b9e\u73b0\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table UserTable\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.group_a:1, tag.location.group_b:1, tag.location.group_c:1"\n)\n')),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u6837\u4e00\u6765\uff0c\u8868 UserTable \u4e2d\u7684\u6570\u636e\uff0c\u5c06\u4f1a\u4ee5 3 \u526f\u672c\u7684\u5f62\u5f0f\uff0c\u5206\u522b\u5b58\u50a8\u5728\u8d44\u6e90\u7ec4 group_a\u3001group_b\u3001group_c \u6240\u5728\u7684\u8282\u70b9\u4e2d\u3002"),(0,r.yg)("p",{parentName:"li"},"\u4e0b\u56fe\u5c55\u793a\u4e86\u5f53\u524d\u7684\u8282\u70b9\u5212\u5206\u548c\u6570\u636e\u5206\u5e03\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"}," \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host1            \u2502  \u2502 host2            \u2502 \u2502\n \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502                  \u2502 \u2502\n \u2502 group_a \u2502  \u2502   replica1  \u2502 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host3            \u2502  \u2502 host4            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_b \u2502                  \u2502  \u2502  \u2502   replica2  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n \u2502                                                    \u2502\n \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502\n \u2502         \u2502 host5            \u2502  \u2502 host6            \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2502\n \u2502 group_c \u2502                  \u2502  \u2502  \u2502   replica3  \u2502 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 \u2502\n \u2502         \u2502                  \u2502  \u2502                  \u2502 \u2502\n \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502\n \u2502                                                    \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",{parentName:"li"},"\u4e3a\u4e86\u65b9\u4fbf\u8bbe\u7f6e table \u7684\u6570\u636e\u5206\u5e03\u7b56\u7565\uff0c\u53ef\u4ee5\u5728 database \u5c42\u9762\u8bbe\u7f6e\u7edf\u4e00\u7684\u6570\u636e\u5206\u5e03\u7b56\u7565\uff0c\u4f46\u662f table \u8bbe\u7f6e\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE db_name PROPERTIES (\n"replication_allocation" = "tag.location.group_a:1, tag.location.group_b:1"\n)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4e0d\u540c\u8d44\u6e90\u7ec4\u8fdb\u884c\u6570\u636e\u67e5\u8be2"),(0,r.yg)("p",{parentName:"li"},"\u5728\u524d\u4e24\u6b65\u6267\u884c\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u6743\u9650\uff0c\u6765\u9650\u5236\u67d0\u4e00\u7528\u6237\u7684\u67e5\u8be2\uff0c\u53ea\u80fd\u4f7f\u7528\u6307\u5b9a\u8d44\u6e90\u7ec4\u4e2d\u7684\u8282\u70b9\u6765\u6267\u884c\u3002"),(0,r.yg)("p",{parentName:"li"},"\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u8bed\u53e5\uff0c\u9650\u5236 user1 \u53ea\u80fd\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_a")," \u8d44\u6e90\u7ec4\u4e2d\u7684\u8282\u70b9\u8fdb\u884c\u6570\u636e\u67e5\u8be2\uff0cuser2 \u53ea\u80fd\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_b")," \u8d44\u6e90\u7ec4\uff0c\u800c user3 \u53ef\u4ee5\u540c\u65f6\u4f7f\u7528 3 \u4e2a\u8d44\u6e90\u7ec4\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set property for 'user1' 'resource_tags.location' = 'group_a';\nset property for 'user2' 'resource_tags.location' = 'group_b';\nset property for 'user3' 'resource_tags.location' = 'group_a, group_b, group_c';\n")),(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u5b8c\u6210\u540e\uff0cuser1 \u5728\u53d1\u8d77\u5bf9 UserTable \u8868\u7684\u67e5\u8be2\u65f6\uff0c\u53ea\u4f1a\u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"group_a")," \u8d44\u6e90\u7ec4\u5185\u8282\u70b9\u4e0a\u7684\u6570\u636e\u526f\u672c\uff0c\u5e76\u4e14\u67e5\u8be2\u4ec5\u4f1a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"group_a")," \u8d44\u6e90\u7ec4\u5185\u7684\u8282\u70b9\u8ba1\u7b97\u8d44\u6e90\u3002\u800c user3 \u7684\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8d44\u6e90\u7ec4\u5185\u7684\u526f\u672c\u548c\u8ba1\u7b97\u8d44\u6e90\u3002"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," \u5c5e\u6027\u4e3a\u7a7a\uff0c\u5728 2.0.2\uff08\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u4e0d\u53d7 tag \u7684\u9650\u5236\uff0c\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8d44\u6e90\u7ec4\u3002\u5728 2.0.3 \u7248\u672c\u4e4b\u540e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u666e\u901a\u7528\u6237\u53ea\u80fd\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," \u8d44\u6e90\u7ec4\u3002root \u548c admin \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8d44\u6e90\u7ec4\u3002")),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u6837\uff0c\u6211\u4eec\u901a\u8fc7\u5bf9\u8282\u70b9\u7684\u5212\u5206\uff0c\u4ee5\u53ca\u5bf9\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u9650\u5236\uff0c\u5b9e\u73b0\u4e86\u4e0d\u540c\u7528\u6237\u67e5\u8be2\u4e0a\u7684\u7269\u7406\u8d44\u6e90\u9694\u79bb\u3002\u66f4\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9\u4e0d\u540c\u7684\u4e1a\u52a1\u90e8\u95e8\u521b\u5efa\u4e0d\u540c\u7684\u7528\u6237\uff0c\u5e76\u9650\u5236\u6bcf\u4e2a\u7528\u6237\u4f7f\u7528\u4e0d\u540c\u7684\u8d44\u6e90\u7ec4\u3002\u4ee5\u907f\u514d\u4e0d\u540c\u4e1a\u52a1\u90e8\u5206\u4e4b\u95f4\u4f7f\u7528\u8d44\u6e90\u5e72\u6270\u3002\u6bd4\u5982\u96c6\u7fa4\u5185\u6709\u4e00\u5f20\u4e1a\u52a1\u8868\u9700\u8981\u5171\u4eab\u7ed9\u6240\u6709 9 \u4e2a\u4e1a\u52a1\u90e8\u95e8\u4f7f\u7528\uff0c\u4f46\u662f\u5e0c\u671b\u80fd\u591f\u5c3d\u91cf\u907f\u514d\u4e0d\u540c\u90e8\u95e8\u4e4b\u95f4\u7684\u8d44\u6e90\u62a2\u5360\u3002\u5219\u6211\u4eec\u53ef\u4ee5\u4e3a\u8fd9\u5f20\u8868\u521b\u5efa 3 \u4e2a\u526f\u672c\uff0c\u5206\u522b\u5b58\u50a8\u5728 3 \u4e2a\u8d44\u6e90\u7ec4\u4e2d\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e3a 9 \u4e2a\u4e1a\u52a1\u90e8\u95e8\u521b\u5efa 9 \u4e2a\u7528\u6237\uff0c\u6bcf 3 \u4e2a\u7528\u6237\u9650\u5236\u4f7f\u7528\u4e00\u4e2a\u8d44\u6e90\u7ec4\u3002\u8fd9\u6837\uff0c\u8d44\u6e90\u7684\u7ade\u4e89\u7a0b\u5ea6\u5c31\u7531 9 \u964d\u4f4e\u5230\u4e86 3\u3002"),(0,r.yg)("p",{parentName:"li"},"\u53e6\u4e00\u65b9\u9762\uff0c\u9488\u5bf9\u5728\u7ebf\u548c\u79bb\u7ebf\u4efb\u52a1\u7684\u9694\u79bb\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8d44\u6e90\u7ec4\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u5c06\u8282\u70b9\u5212\u5206\u4e3a Online \u548c Offline \u4e24\u4e2a\u8d44\u6e90\u7ec4\u3002\u8868\u6570\u636e\u4f9d\u7136\u4ee5 3 \u526f\u672c\u7684\u65b9\u5f0f\u5b58\u50a8\uff0c\u5176\u4e2d 2 \u4e2a\u526f\u672c\u5b58\u653e\u5728 Online \u8d44\u6e90\u7ec4\uff0c1 \u4e2a\u526f\u672c\u5b58\u653e\u5728 Offline \u8d44\u6e90\u7ec4\u3002Online \u8d44\u6e90\u7ec4\u4e3b\u8981\u7528\u4e8e\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5728\u7ebf\u6570\u636e\u670d\u52a1\uff0c\u800c\u4e00\u4e9b\u5927\u67e5\u8be2\u6216\u79bb\u7ebf ETL \u64cd\u4f5c\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 Offline \u8d44\u6e90\u7ec4\u4e2d\u7684\u8282\u70b9\u6267\u884c\u3002\u4ece\u800c\u5b9e\u73b0\u5728\u7edf\u4e00\u96c6\u7fa4\u5185\u540c\u65f6\u63d0\u4f9b\u5728\u7ebf\u548c\u79bb\u7ebf\u670d\u52a1\u7684\u80fd\u529b\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d44\u6e90\u7ec4\u5206\u914d"),(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec insert\u3001broker load\u3001routine load\u3001stream load \u7b49\uff09\u7684\u8d44\u6e90\u4f7f\u7528\u53ef\u4ee5\u5206\u4e3a\u4e24\u90e8\u5206\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u8ba1\u7b97\u8d44\u6e90\uff1a\u8d1f\u8d23\u8bfb\u53d6\u6570\u636e\u6e90\u3001\u6570\u636e\u8f6c\u6362\u548c\u5206\u53d1\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5199\u5165\u8d44\u6e90\uff1a\u8d1f\u8d23\u6570\u636e\u7f16\u7801\u3001\u538b\u7f29\u5e76\u5199\u5165\u78c1\u76d8\u3002")),(0,r.yg)("p",{parentName:"li"},"\u5176\u4e2d\u5199\u5165\u8d44\u6e90\u5fc5\u987b\u662f\u6570\u636e\u526f\u672c\u6240\u5728\u7684\u8282\u70b9\uff0c\u800c\u8ba1\u7b97\u8d44\u6e90\u7406\u8bba\u4e0a\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u8282\u70b9\u5b8c\u6210\u3002\u6240\u4ee5\u5bf9\u4e8e\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d44\u6e90\u7ec4\u7684\u5206\u914d\u5206\u6210\u4e24\u4e2a\u6b65\u9aa4\uff1a"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u7528\u6237\u7ea7\u522b\u7684 resource tag \u6765\u9650\u5b9a\u8ba1\u7b97\u8d44\u6e90\u6240\u80fd\u4f7f\u7528\u7684\u8d44\u6e90\u7ec4\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u526f\u672c\u7684 resource tag \u6765\u9650\u5b9a\u5199\u5165\u8d44\u6e90\u6240\u80fd\u4f7f\u7528\u7684\u8d44\u6e90\u7ec4\u3002")),(0,r.yg)("p",{parentName:"li"},"\u6240\u4ee5\u5982\u679c\u5e0c\u671b\u5bfc\u5165\u64cd\u4f5c\u6240\u4f7f\u7528\u7684\u5168\u90e8\u8d44\u6e90\u90fd\u9650\u5b9a\u5728\u6570\u636e\u6240\u5728\u7684\u8d44\u6e90\u7ec4\u7684\u8bdd\uff0c\u53ea\u9700\u5c06\u7528\u6237\u7ea7\u522b\u7684 resource tag \u8bbe\u7f6e\u4e3a\u548c\u526f\u672c\u7684 resource tag \u76f8\u540c\u5373\u53ef\u3002"))),(0,r.yg)("h2",{id:"\u5355\u67e5\u8be2\u8d44\u6e90\u9650\u5236"},"\u5355\u67e5\u8be2\u8d44\u6e90\u9650\u5236"),(0,r.yg)("p",null,"\u524d\u9762\u63d0\u5230\u7684\u8d44\u6e90\u7ec4\u65b9\u6cd5\u662f\u8282\u70b9\u7ea7\u522b\u7684\u8d44\u6e90\u9694\u79bb\u548c\u9650\u5236\u3002\u800c\u5728\u8d44\u6e90\u7ec4\u5185\uff0c\u4f9d\u7136\u53ef\u80fd\u53d1\u751f\u8d44\u6e90\u62a2\u5360\u95ee\u9898\u3002\u6bd4\u5982\u524d\u6587\u63d0\u5230\u7684\u5c06 3 \u4e2a\u4e1a\u52a1\u90e8\u95e8\u5b89\u6392\u5728\u540c\u4e00\u8d44\u6e90\u7ec4\u5185\u3002\u867d\u7136\u964d\u4f4e\u4e86\u8d44\u6e90\u7ade\u4e89\u7a0b\u5ea6\uff0c\u4f46\u662f\u8fd9 3 \u4e2a\u90e8\u95e8\u7684\u67e5\u8be2\u4f9d\u7136\u6709\u53ef\u80fd\u76f8\u4e92\u5f71\u54cd\u3002"),(0,r.yg)("p",null,"\u56e0\u6b64\uff0c\u9664\u4e86\u8d44\u6e90\u7ec4\u65b9\u6848\u5916\uff0cDoris \u8fd8\u63d0\u4f9b\u4e86\u5bf9\u5355\u67e5\u8be2\u7684\u8d44\u6e90\u9650\u5236\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u76ee\u524d Doris \u5bf9\u5355\u67e5\u8be2\u7684\u8d44\u6e90\u9650\u5236\u4e3b\u8981\u5206\u4e3a CPU \u548c \u5185\u5b58\u9650\u5236\u4e24\u65b9\u9762\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5185\u5b58\u9650\u5236"),(0,r.yg)("p",{parentName:"li"},"Doris \u53ef\u4ee5\u9650\u5236\u4e00\u4e2a\u67e5\u8be2\u88ab\u5141\u8bb8\u4f7f\u7528\u7684\u6700\u5927\u5185\u5b58\u5f00\u9500\u3002\u4ee5\u4fdd\u8bc1\u96c6\u7fa4\u7684\u5185\u5b58\u8d44\u6e90\u4e0d\u4f1a\u88ab\u67d0\u4e00\u4e2a\u67e5\u8be2\u5168\u90e8\u5360\u7528\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\u5185\u5b58\u9650\u5236\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# \u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf exec_mem_limit\u3002\u5219\u4e4b\u540e\u8be5\u4f1a\u8bdd\u5185\uff08\u8fde\u63a5\u5185\uff09\u7684\u6240\u6709\u67e5\u8be2\u90fd\u4f7f\u7528\u8fd9\u4e2a\u5185\u5b58\u9650\u5236\u3002\nset exec_mem_limit=1G;\n# \u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf exec_mem_limit\u3002\u5219\u4e4b\u540e\u6240\u6709\u65b0\u4f1a\u8bdd\uff08\u65b0\u8fde\u63a5\uff09\u7684\u6240\u6709\u67e5\u8be2\u90fd\u4f7f\u7528\u8fd9\u4e2a\u5185\u5b58\u9650\u5236\u3002\nset global exec_mem_limit=1G;\n# \u5728 SQL \u4e2d\u8bbe\u7f6e\u53d8\u91cf exec_mem_limit\uff08\u5355\u4f4d\uff1a\u5b57\u8282\uff09\u3002\u5219\u8be5\u53d8\u91cf\u4ec5\u5f71\u54cd\u8fd9\u4e2a SQL\u3002\nselect /*+ SET_VAR(exec_mem_limit=1073741824) */ id, name from tbl where xxx;\n")),(0,r.yg)("p",{parentName:"li"},"\u56e0\u4e3a Doris \u7684\u67e5\u8be2\u5f15\u64ce\u662f\u57fa\u4e8e\u5168\u5185\u5b58\u7684 MPP \u67e5\u8be2\u6846\u67b6\u3002\u56e0\u6b64\u5f53\u4e00\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u8d85\u8fc7\u9650\u5236\u540e\uff0c\u67e5\u8be2\u4f1a\u88ab\u7ec8\u6b62\u3002\u56e0\u6b64\uff0c\u5f53\u4e00\u4e2a\u67e5\u8be2\u65e0\u6cd5\u5728\u5408\u7406\u7684\u5185\u5b58\u9650\u5236\u4e0b\u8fd0\u884c\u65f6\uff0c\u6211\u4eec\u5c31\u9700\u8981\u901a\u8fc7\u4e00\u4e9b SQL \u4f18\u5316\u624b\u6bb5\uff0c\u6216\u8005\u96c6\u7fa4\u6269\u5bb9\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u4e86\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"CPU \u9650\u5236"),(0,r.yg)("p",{parentName:"li"},"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u9650\u5236\u67e5\u8be2\u7684 CPU \u8d44\u6e90\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"# \u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf cpu_resource_limit\u3002\u5219\u4e4b\u540e\u8be5\u4f1a\u8bdd\u5185\uff08\u8fde\u63a5\u5185\uff09\u7684\u6240\u6709\u67e5\u8be2\u90fd\u4f7f\u7528\u8fd9\u4e2a CPU \u9650\u5236\u3002\nset cpu_resource_limit = 2\n# \u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027 cpu_resource_limit\uff0c\u5219\u6240\u6709\u8be5\u7528\u6237\u7684\u67e5\u8be2\u60c5\u51b5\u90fd\u4f7f\u7528\u8fd9\u4e2a CPU \u9650\u5236\u3002\u8be5\u5c5e\u6027\u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e\u4f1a\u8bdd\u53d8\u91cf cpu_resource_limit\nset property for 'user1' 'cpu_resource_limit' = '3';\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u7684\u53d6\u503c\u662f\u4e00\u4e2a\u76f8\u5bf9\u503c\uff0c\u53d6\u503c\u8d8a\u5927\u5219\u80fd\u591f\u4f7f\u7528\u7684 CPU \u8d44\u6e90\u8d8a\u591a\u3002\u4f46\u4e00\u4e2a\u67e5\u8be2\u80fd\u4f7f\u7528\u7684 CPU \u4e0a\u9650\u4e5f\u53d6\u51b3\u4e8e\u8868\u7684\u5206\u533a\u5206\u6876\u6570\u3002\u539f\u5219\u4e0a\uff0c\u4e00\u4e2a\u67e5\u8be2\u7684\u6700\u5927 CPU \u4f7f\u7528\u91cf\u548c\u67e5\u8be2\u6d89\u53ca\u5230\u7684 tablet \u6570\u91cf\u6b63\u76f8\u5173\u3002\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u5047\u8bbe\u4e00\u4e2a\u67e5\u8be2\u4ec5\u6d89\u53ca\u5230\u4e00\u4e2a tablet\uff0c\u5219\u5373\u4f7f ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u8bbe\u7f6e\u4e00\u4e2a\u8f83\u5927\u503c\uff0c\u4e5f\u4ec5\u80fd\u4f7f\u7528 1 \u4e2a CPU \u8d44\u6e90\u3002"))),(0,r.yg)("p",null,"\u901a\u8fc7\u5185\u5b58\u548c CPU \u7684\u8d44\u6e90\u9650\u5236\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u4e00\u4e2a\u8d44\u6e90\u7ec4\u5185\uff0c\u5c06\u7528\u6237\u7684\u67e5\u8be2\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u8d44\u6e90\u5212\u5206\u3002\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u8ba9\u90e8\u5206\u65f6\u6548\u6027\u8981\u6c42\u4e0d\u9ad8\uff0c\u4f46\u662f\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u79bb\u7ebf\u4efb\u52a1\u4f7f\u7528\u66f4\u5c11\u7684 CPU \u8d44\u6e90\u548c\u66f4\u591a\u7684\u5185\u5b58\u8d44\u6e90\u3002\u800c\u90e8\u5206\u5ef6\u8fdf\u654f\u611f\u7684\u5728\u7ebf\u4efb\u52a1\uff0c\u4f7f\u7528\u66f4\u591a\u7684 CPU \u8d44\u6e90\u4ee5\u53ca\u5408\u7406\u7684\u5185\u5b58\u8d44\u6e90\u3002\n\u6ce8\uff1a\u5728 Doris 2.1 \u4e4b\u540e\uff0ccpu_resource_limit \u5c06\u9010\u6e10\u88ab workload group \u66ff\u4ee3\u3002"),(0,r.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5\u548c\u5411\u524d\u517c\u5bb9"},"\u6700\u4f73\u5b9e\u8df5\u548c\u5411\u524d\u517c\u5bb9"),(0,r.yg)("h3",{id:"tag-\u5212\u5206\u548c-cpu-\u9650\u5236\u662f-015-\u7248\u672c\u4e2d\u7684\u65b0\u529f\u80fd\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u4ee5\u4ece\u8001\u7248\u672c\u5e73\u6ed1\u5347\u7ea7doris-\u505a\u4e86\u5982\u4e0b\u7684\u5411\u524d\u517c\u5bb9"},"Tag \u5212\u5206\u548c CPU \u9650\u5236\u662f 0.15 \u7248\u672c\u4e2d\u7684\u65b0\u529f\u80fd\u3002\u4e3a\u4e86\u4fdd\u8bc1\u53ef\u4ee5\u4ece\u8001\u7248\u672c\u5e73\u6ed1\u5347\u7ea7\uff0cDoris \u505a\u4e86\u5982\u4e0b\u7684\u5411\u524d\u517c\u5bb9\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6bcf\u4e2a BE \u8282\u70b9\u4f1a\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684 Tag\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},'"tag.location": "default"'),"\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"alter system add backend")," \u8bed\u53e5\u65b0\u589e\u7684 BE \u8282\u70b9\u4e5f\u4f1a\u9ed8\u8ba4\u8bbe\u7f6e Tag\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},'"tag.location": "default"'),"\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6240\u6709\u8868\u7684\u526f\u672c\u5206\u5e03\u9ed8\u8ba4\u4fee\u6539\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},'"tag.location.default:xx'),"\u3002\u5176\u4e2d xx \u4e3a\u539f\u526f\u672c\u6570\u91cf\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u7528\u6237\u4f9d\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},'"replication_num" = "xx"')," \u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u6307\u5b9a\u526f\u672c\u6570\uff0c\u8fd9\u79cd\u5c5e\u6027\u5c06\u4f1a\u81ea\u52a8\u8f6c\u6362\u6210\uff1a",(0,r.yg)("inlineCode",{parentName:"li"},'"tag.location.default:xx'),"\u3002\u4ece\u800c\u4fdd\u8bc1\u65e0\u9700\u4fee\u6539\u539f\u5efa\u8868\u8bed\u53e5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5355\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u4e3a\u5355\u8282\u70b9 2GB\uff0cCPU \u8d44\u6e90\u65e0\u9650\u5236\uff0c\u548c\u539f\u6709\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\u3002\u4e14\u7528\u6237\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"resource_tags.location")," \u5c5e\u6027\u4e3a\u7a7a\uff0c\u5373\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4efb\u610f Tag \u7684 BE\uff0c\u548c\u539f\u6709\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\u3002")),(0,r.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7ed9\u51fa\u4e00\u4e2a\u4ece\u539f\u96c6\u7fa4\u5347\u7ea7\u5230 0.15 \u7248\u672c\u540e\uff0c\u5f00\u59cb\u4f7f\u7528\u8d44\u6e90\u5212\u5206\u529f\u80fd\u7684\u6b65\u9aa4\u793a\u4f8b\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5173\u95ed\u6570\u636e\u4fee\u590d\u4e0e\u5747\u8861\u903b\u8f91"),(0,r.yg)("p",{parentName:"li"},"\u56e0\u4e3a\u5347\u7ea7\u540e\uff0cBE \u7684\u9ed8\u8ba4 Tag \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},'"tag.location": "default"'),"\uff0c\u800c\u8868\u7684\u9ed8\u8ba4\u526f\u672c\u5206\u5e03\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},'"tag.location.default:xx'),"\u3002\u6240\u4ee5\u5982\u679c\u76f4\u63a5\u4fee\u6539 BE \u7684 Tag\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u68c0\u6d4b\u5230\u526f\u672c\u5206\u5e03\u7684\u53d8\u5316\uff0c\u4ece\u800c\u5f00\u59cb\u6570\u636e\u91cd\u5206\u5e03\u3002\u8fd9\u53ef\u80fd\u4f1a\u5360\u7528\u90e8\u5206\u7cfb\u7edf\u8d44\u6e90\u3002\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u4fee\u6539 Tag \u524d\uff0c\u5148\u5173\u95ed\u6570\u636e\u4fee\u590d\u4e0e\u5747\u8861\u903b\u8f91\uff0c\u4ee5\u4fdd\u8bc1\u6211\u4eec\u5728\u89c4\u5212\u8d44\u6e90\u65f6\uff0c\u4e0d\u4f1a\u6709\u526f\u672c\u91cd\u5206\u5e03\u7684\u64cd\u4f5c\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "true");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6e Tag \u548c\u8868\u526f\u672c\u5206\u5e03"),(0,r.yg)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"alter system modify backend")," \u8bed\u53e5\u8fdb\u884c BE \u7684 Tag \u8bbe\u7f6e\u3002\u4ee5\u53ca\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"alter table")," \u8bed\u53e5\u4fee\u6539\u8868\u7684\u526f\u672c\u5206\u5e03\u7b56\u7565\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'alter system modify backend "host1:9050, 1212:9050" set ("tag.location" = "group_a");\nalter table my_table modify partition p1 set ("replication_allocation" = "tag.location.group_a:2");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5f00\u542f\u6570\u636e\u4fee\u590d\u4e0e\u5747\u8861\u903b\u8f91"),(0,r.yg)("p",{parentName:"li"},"\u5728 Tag \u548c\u526f\u672c\u5206\u5e03\u90fd\u8bbe\u7f6e\u5b8c\u6bd5\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5f00\u542f\u6570\u636e\u4fee\u590d\u4e0e\u5747\u8861\u903b\u8f91\u6765\u89e6\u53d1\u6570\u636e\u7684\u91cd\u5206\u5e03\u4e86\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "false");\nADMIN SET FRONTEND CONFIG ("disable_tablet_scheduler" = "false");\n')),(0,r.yg)("p",{parentName:"li"},"\u8be5\u8fc7\u7a0b\u6839\u636e\u6d89\u53ca\u5230\u7684\u6570\u636e\u91cf\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\u3002\u5e76\u4e14\u4f1a\u5bfc\u81f4\u90e8\u5206 colocation table \u65e0\u6cd5\u8fdb\u884c colocation \u89c4\u5212\uff08\u56e0\u4e3a\u526f\u672c\u5728\u8fc1\u79fb\u4e2d\uff09\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},'show proc "/cluster_balance/"')," \u6765\u67e5\u770b\u8fdb\u5ea6\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},'show proc "/statistic"')," \u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"UnhealthyTabletNum")," \u7684\u6570\u91cf\u6765\u5224\u65ad\u8fdb\u5ea6\u3002\u5f53 ",(0,r.yg)("inlineCode",{parentName:"p"},"UnhealthyTabletNum")," \u964d\u4e3a 0 \u65f6\uff0c\u5219\u4ee3\u8868\u6570\u636e\u91cd\u5206\u5e03\u5b8c\u6bd5\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u3002"),(0,r.yg)("p",{parentName:"li"},"\u7b49\u6570\u636e\u91cd\u5206\u5e03\u5b8c\u6bd5\u540e\u3002\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u8bbe\u7f6e\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u4e86\u3002\u56e0\u4e3a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," \u5c5e\u6027\u4e3a\u7a7a\uff0c\u5373\u53ef\u4ee5\u8bbf\u95ee\u4efb\u610f Tag \u7684 BE\u3002\u6240\u4ee5\u5728\u524d\u9762\u6b65\u9aa4\u4e2d\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5df2\u6709\u7528\u6237\u7684\u6b63\u5e38\u67e5\u8be2\u3002\u5f53 ",(0,r.yg)("inlineCode",{parentName:"p"},"resource_tags.location")," \u5c5e\u6027\u975e\u7a7a\u65f6\uff0c\u7528\u6237\u5c06\u88ab\u9650\u5236\u8bbf\u95ee\u6307\u5b9a Tag \u7684 BE\u3002"))),(0,r.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0a 4 \u6b65\uff0c\u6211\u4eec\u53ef\u4ee5\u8f83\u4e3a\u5e73\u6ed1\u7684\u5728\u539f\u6709\u96c6\u7fa4\u5347\u7ea7\u540e\uff0c\u4f7f\u7528\u8d44\u6e90\u5212\u5206\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"table-\u6570\u91cf\u5f88\u591a\u65f6\u5982\u4f55\u65b9\u4fbf\u7684\u8bbe\u7f6e\u526f\u672c\u5206\u5e03\u7b56\u7565"},"table \u6570\u91cf\u5f88\u591a\u65f6\u5982\u4f55\u65b9\u4fbf\u7684\u8bbe\u7f6e\u526f\u672c\u5206\u5e03\u7b56\u7565"),(0,r.yg)("p",null,"   \u6bd4\u5982\u6709\u4e00\u4e2a db1,db1 \u4e0b\u6709\u56db\u4e2a table\uff0ctable1 \u9700\u8981\u7684\u526f\u672c\u5206\u5e03\u7b56\u7565\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"group_a:1,group_b:2"),"\uff0ctable2\uff0ctable3, table4 \u9700\u8981\u7684\u526f\u672c\u5206\u5e03\u7b56\u7565\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"group_c:1,group_b:2")),(0,r.yg)("p",null,"   \u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\u521b\u5efa db1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},' CREATE DATABASE db1 PROPERTIES (\n "replication_allocation" = "tag.location.group_c:1, tag.location.group_b:2"\n )\n')),(0,r.yg)("p",null,"   \u4f7f\u7528\u5982\u4e0b\u8bed\u53e5\u521b\u5efa table1\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n"replication_allocation"="tag.location.group_a:1, tag.location.group_b:2"\n)\n')),(0,r.yg)("p",null,"   table2\uff0ctable3,table4 \u7684\u5efa\u8868\u8bed\u53e5\u65e0\u9700\u518d\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),"\u3002"),(0,r.yg)("p",null,"   \u6ce8\u610f\u4e8b\u9879\uff1a\u66f4\u6539 database \u7684\u526f\u672c\u5206\u5e03\u7b56\u7565\u4e0d\u4f1a\u5bf9\u5df2\u6709\u7684 table \u4ea7\u751f\u5f71\u54cd\u3002"))}u.isMDXComponent=!0}}]);