"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89808],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(r),m=l,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(g,s(s({ref:n},c),{},{components:r})):t.createElement(g,s({ref:n},c))}));function g(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<a;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},758271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var t=r(58168),l=(r(296540),r(15680));const a={title:"\u670d\u52a1\u6269\u7f29\u5bb9",language:"zh-CN"},s=void 0,o={unversionedId:"install/cluster-deployment/k8s-deploy/expansion-and-contraction",id:"version-2.0/install/cluster-deployment/k8s-deploy/expansion-and-contraction",title:"\u670d\u52a1\u6269\u7f29\u5bb9",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/cluster-deployment/k8s-deploy/expansion-and-contraction.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/expansion-and-contraction",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/expansion-and-contraction",draft:!1,tags:[],version:"2.0",frontMatter:{title:"\u670d\u52a1\u6269\u7f29\u5bb9",language:"zh-CN"},sidebar:"docs",previous:{title:"Root \u7528\u6237\u4f7f\u7528",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/root-user-use"},next:{title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/debug-crash"}},p={},i=[{value:"\u83b7\u53d6 DorisCluster \u8d44\u6e90",id:"\u83b7\u53d6-doriscluster-\u8d44\u6e90",level:2},{value:"\u6269\u7f29\u5bb9\u8d44\u6e90",id:"\u6269\u7f29\u5bb9\u8d44\u6e90",level:2},{value:"FE \u6269\u5bb9",id:"fe-\u6269\u5bb9",level:3},{value:"BE \u6269\u5bb9",id:"be-\u6269\u5bb9",level:3},{value:"\u8282\u70b9\u7f29\u5bb9",id:"\u8282\u70b9\u7f29\u5bb9",level:3}],c={toc:i},u="wrapper";function d(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris \u5728 K8S \u4e4b\u4e0a\u7684\u6269\u7f29\u5bb9\u53ef\u901a\u8fc7\u4fee\u6539 DorisCluster \u8d44\u6e90\u5bf9\u5e94\u7ec4\u4ef6\u7684 replicas \u5b57\u6bb5\u6765\u5b9e\u73b0\u3002\u4fee\u6539\u53ef\u76f4\u63a5\u7f16\u8f91\u5bf9\u5e94\u7684\u8d44\u6e90\uff0c\u4e5f\u53ef\u901a\u8fc7\u547d\u4ee4\u7684\u65b9\u5f0f\u3002"),(0,l.yg)("h2",{id:"\u83b7\u53d6-doriscluster-\u8d44\u6e90"},"\u83b7\u53d6 DorisCluster \u8d44\u6e90"),(0,l.yg)("p",null,"\u4f7f\u7528\u547d\u4ee4 ",(0,l.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace} get doriscluster")," \u83b7\u53d6\u5df2\u90e8\u7f72 DorisCluster (\u7b80\u79f0 dcr ) \u8d44\u6e90\u7684\u540d\u79f0\u3002\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4ee5 doris \u4e3a namespace."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ kubectl --namespace doris get doriscluster\nNAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,l.yg)("h2",{id:"\u6269\u7f29\u5bb9\u8d44\u6e90"},"\u6269\u7f29\u5bb9\u8d44\u6e90"),(0,l.yg)("p",null,"K8S \u6240\u6709\u8fd0\u7ef4\u64cd\u4f5c\u901a\u8fc7\u4fee\u6539\u8d44\u6e90\u4e3a\u6700\u7ec8\u72b6\u6001\uff0c\u7531 Operator \u670d\u52a1\u81ea\u52a8\u5b8c\u6210\u8fd0\u7ef4\u3002\u6269\u7f29\u5bb9\u64cd\u4f5c\u53ef\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"kubectl --namespace {namespace}  edit doriscluster {dcr_name}")," \u76f4\u63a5\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\u4fee\u6539\u5bf9\u5e94 spec \u7684 replicas \u503c\uff0c\u4fdd\u5b58\u9000\u51fa\u540e Doris-Operator \u5b8c\u6210\u8fd0\u7ef4\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b9e\u73b0\u4e0d\u540c\u7ec4\u4ef6\u7684\u6269\u7f29\u5bb9\u3002"),(0,l.yg)("h3",{id:"fe-\u6269\u5bb9"},"FE \u6269\u5bb9"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u67e5\u770b\u5f53\u524d FE \u670d\u52a1\u6570\u91cf")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS       AGE\ndoriscluster-sample-fe-0   1/1     Running   0              10d\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u6269\u5bb9 FE")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"feSpec":{"replicas":3}}}\'\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u68c0\u6d4b\u6269\u5bb9\u7ed3\u679c")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=fe"\nNAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-2   1/1     Running   0          9m37s\ndoriscluster-sample-fe-1   1/1     Running   0          9m37s\ndoriscluster-sample-fe-0   1/1     Running   0          8m49s\n')),(0,l.yg)("h3",{id:"be-\u6269\u5bb9"},"BE \u6269\u5bb9"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. \u67e5\u770b\u5f53\u524d BE \u670d\u52a1\u6570\u91cf")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. \u6269\u5bb9 BE")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris patch doriscluster doriscluster-sample --type merge --patch \'{"spec":{"beSpec":{"replicas":3}}}\'\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. \u68c0\u6d4b\u6269\u5bb9\u7ed3\u679c")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ kubectl --namespace doris get pods -l "app.kubernetes.io/component=be"\nNAME                       READY   STATUS    RESTARTS      AGE\ndoriscluster-sample-be-0   1/1     Running   0             3d2h\ndoriscluster-sample-be-2   1/1     Running   0             12m\ndoriscluster-sample-be-1   1/1     Running   0             12m\n')),(0,l.yg)("h3",{id:"\u8282\u70b9\u7f29\u5bb9"},"\u8282\u70b9\u7f29\u5bb9"),(0,l.yg)("p",null,"\u5173\u4e8e\u8282\u70b9\u7f29\u5bb9\u95ee\u9898\uff0cDoris-Operator \u76ee\u524d\u5e76\u4e0d\u80fd\u5f88\u597d\u7684\u652f\u6301\u8282\u70b9\u5b89\u5168\u4e0b\u7ebf\uff0c\u5728\u8fd9\u91cc\u4ecd\u80fd\u591f\u901a\u8fc7\u51cf\u5c11\u96c6\u7fa4\u7ec4\u4ef6\u7684 replicas \u5c5e\u6027\u6765\u5b9e\u73b0\u51cf\u5c11 FE \u6216 BE \u7684\u76ee\u7684\uff0c\u8fd9\u91cc\u662f\u76f4\u63a5 stop \u8282\u70b9\u6765\u5b9e\u73b0\u8282\u70b9\u4e0b\u7ebf\uff0c\u5f53\u524d\u7248\u672c\u7684 Doris-Operator \u5e76\u672a\u80fd\u5b9e\u73b0 ",(0,l.yg)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"},"decommission")," \u5b89\u5168\u8f6c\u79fb\u526f\u672c\u540e\u4e0b\u7ebf\u3002\u7531\u6b64\u53ef\u80fd\u5f15\u53d1\u4e00\u4e9b\u95ee\u9898\u53ca\u5176\u6ce8\u610f\u4e8b\u9879\u5982\u4e0b"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u8868\u5b58\u5728\u5355\u526f\u672c\u60c5\u51b5\u4e0b\u8d38\u7136\u4e0b\u7ebf BE \u8282\u70b9\uff0c\u4e00\u5b9a\u4f1a\u6709\u6570\u636e\u4e22\u5931\uff0c\u5c3d\u53ef\u80fd\u907f\u514d\u6b64\u64cd\u4f5c\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"FE Follower \u8282\u70b9\u5c3d\u91cf\u907f\u514d\u968f\u610f\u4e0b\u7ebf\uff0c\u53ef\u80fd\u5e26\u6765\u5143\u6570\u636e\u635f\u574f\u5f71\u54cd\u670d\u52a1\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"FE Observer \u7c7b\u578b\u8282\u70b9\u53ef\u4ee5\u968f\u610f\u4e0b\u7ebf\uff0c\u5e76\u65e0\u98ce\u9669\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CN \u8282\u70b9\u4e0d\u6301\u6709\u6570\u636e\u526f\u672c\uff0c\u53ef\u4ee5\u968f\u610f\u4e0b\u7ebf\uff0c\u4f46\u56e0\u6b64\u4f1a\u635f\u5931\u5b58\u5728\u4e8e\u8be5 CN \u8282\u70b9\u7684\u8fdc\u7aef\u6570\u636e\u7f13\u5b58\uff0c\u5bfc\u81f4\u6570\u636e\u67e5\u8be2\u77ed\u65f6\u95f4\u5185\u5b58\u5728\u4e00\u5b9a\u7684\u6027\u80fd\u56de\u9000\u3002"))))}d.isMDXComponent=!0}}]);