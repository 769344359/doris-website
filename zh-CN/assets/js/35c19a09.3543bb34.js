"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46400],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||_[m]||l;return n?r.createElement(g,o(o({ref:t},i),{},{components:n})):r.createElement(g,o({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},438621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>_,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"\u5b58\u7b97\u5206\u79bb\u6570\u636e\u7f13\u5b58",language:"zh-CN"},o=void 0,p={unversionedId:"separation-of-storage-and-compute/file-cache",id:"separation-of-storage-and-compute/file-cache",title:"\u5b58\u7b97\u5206\u79bb\u6570\u636e\u7f13\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/separation-of-storage-and-compute/file-cache.md",sourceDirName:"separation-of-storage-and-compute",slug:"/separation-of-storage-and-compute/file-cache",permalink:"/zh-CN/docs/dev/separation-of-storage-and-compute/file-cache",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5b58\u7b97\u5206\u79bb\u6570\u636e\u7f13\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5b58\u7b97\u5206\u79bb\u8ba1\u7b97\u96c6\u7fa4",permalink:"/zh-CN/docs/dev/separation-of-storage-and-compute/compute-cluster"},next:{title:"Storage Vault(\u5b58\u50a8\u540e\u7aef)",permalink:"/zh-CN/docs/dev/separation-of-storage-and-compute/storage-vault"}},c={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7f13\u5b58\u7a7a\u95f4\u7ba1\u7406",id:"\u7f13\u5b58\u7a7a\u95f4\u7ba1\u7406",level:2},{value:"\u7f13\u5b58\u6570\u636e",id:"\u7f13\u5b58\u6570\u636e",level:3},{value:"\u7f13\u5b58\u6dd8\u6c70",id:"\u7f13\u5b58\u6dd8\u6c70",level:3},{value:"\u7f13\u5b58\u9884\u70ed",id:"\u7f13\u5b58\u9884\u70ed",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8bbe\u7f6e TTL \u7b56\u7565",id:"\u8bbe\u7f6e-ttl-\u7b56\u7565",level:3},{value:"\u7f13\u5b58\u9884\u70ed",id:"\u7f13\u5b58\u9884\u70ed-1",level:3},{value:"\u5b9e\u8df5\u6848\u4f8b",id:"\u5b9e\u8df5\u6848\u4f8b",level:2}],i={toc:s},u="wrapper";function _(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e0b\u7684\u6570\u636e\u662f\u653e\u5728\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\uff0c\u4e3a\u4e86\u52a0\u901f\u5bf9\u6570\u636e\u7684\u8bbf\u95ee\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u57fa\u4e8e\u672c\u5730\u786c\u76d8\u7684\u7f13\u5b58\u3002\u7f13\u5b58\u63d0\u4f9b\u4e86\u4e24\u79cd\u7ba1\u7406\u7b56\u7565\uff1aLRU \u7b56\u7565 \u548c TTL \u7b56\u7565\uff0c\u5bf9\u7d22\u5f15\u76f8\u5173\u7684\u6570\u636e\u505a\u4e86\u4f18\u5316\uff0c\u8ba9\u7f13\u5b58\u5c3d\u53ef\u80fd Cache \u4f4f\u7528\u6237\u5e38\u7528\u7684\u6570\u636e\u3002"),(0,a.yg)("p",null,"\u5728\u591a Cluster\uff08\u8ba1\u7b97\u96c6\u7fa4\uff09\u7684\u5e94\u7528\u573a\u666f\uff0c\u8fd8\u63d0\u4f9b\u4e86\u7f13\u5b58\u9884\u70ed\u529f\u80fd\u3002\u5f53\u65b0\u5efa\u4e00\u4e2a\u8ba1\u7b97\u96c6\u7fa4\u7684\u65f6\u5019\uff0c\u7528\u6237\u53ef\u4ee5\u8ba9\u65b0 \u8ba1\u7b97\u96c6\u7fa4 \u5bf9\u6307\u5b9a\u7684\u6570\u636e\uff08\u8868\u6216 Partition\uff09\u8fdb\u884c\u9884\u70ed\uff0c\u4ee5\u4fbf\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"),(0,a.yg)("h2",{id:"\u7f13\u5b58\u7a7a\u95f4\u7ba1\u7406"},"\u7f13\u5b58\u7a7a\u95f4\u7ba1\u7406"),(0,a.yg)("h3",{id:"\u7f13\u5b58\u6570\u636e"},"\u7f13\u5b58\u6570\u636e"),(0,a.yg)("p",null,"\u6570\u636e\u8fdb\u5165\u7f13\u5b58\u4e3b\u8981\u6709\u4e09\u79cd\u65b9\u5f0f\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bfc\u5165\u3002\u65b0\u5bfc\u5165\u7684\u6570\u636e\u4f1a\u5f02\u6b65\u5199\u5230\u7f13\u5b58\u4e2d\u4ee5\u52a0\u901f\u7b2c\u4e00\u6b21\u8bbf\u95ee\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u8be2\u3002\u5982\u679c\u5224\u65ad\u67e5\u8be2\u7684\u6570\u636e\u4e0d\u5728\u7f13\u5b58\uff0c\u4f1a\u4ece\u8fdc\u7aef\u5b58\u50a8\u8bfb\u53d6\u5230\u5185\u5b58\uff0c\u5e76\u4f1a\u5199\u5230\u7f13\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u4e0b\u4e00\u6b21\u67e5\u8be2\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e3b\u52a8\u9884\u70ed\u3002\u5c3d\u7ba1\u8fdc\u7aef\u5b58\u50a8\u7684\u6570\u636e\u53ef\u4ee5\u591a\u96c6\u7fa4\u5171\u4eab\uff0c\u4f46\u7f13\u5b58\u5e76\u4e0d\u4f1a\u5171\u4eab\u3002\u5f53\u65b0\u5efa\u4e00\u4e2a\u96c6\u7fa4\u7684\u65f6\u5019\uff0c\u6b64\u65f6\u7684\u7f13\u5b58\u662f\u7a7a\u7684\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u4e3b\u52a8\u53bb\u9884\u70ed\uff0c\u8ba9\u96c6\u7fa4\u5feb\u901f\u5730\u4ece\u8fdc\u7aef\u5b58\u50a8\u62c9\u53d6\u60f3\u8981\u7684\u6570\u636e\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u3002"))),(0,a.yg)("h3",{id:"\u7f13\u5b58\u6dd8\u6c70"},"\u7f13\u5b58\u6dd8\u6c70"),(0,a.yg)("p",null,"\u7f13\u5b58\u540c\u65f6\u652f\u6301 LRU \u548c TTL \u4e24\u79cd\u7b56\u7565\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"LRU \u662f\u7f13\u5b58\u7684\u9ed8\u8ba4\u7b56\u7565\uff0c\u7f13\u5b58\u4f1a\u5bf9\u8be5\u7b56\u7565\u7684\u6570\u636e\u7ef4\u62a4\u4e00\u4e2a\u961f\u5217\uff0c\u5f53\u8bbf\u95ee\u961f\u5217\u4e2d\u7684\u67d0\u4e00\u5757\u6570\u636e\u7684\u65f6\u5019\uff0c\u4f1a\u628a\u5bf9\u5e94\u7684\u6570\u636e\u79fb\u52a8\u5230 LRU \u961f\u5217\u7684\u961f\u9996\u3002\u5982\u679c\u6709\u65b0\u5199\u5165\u7f13\u5b58\u7684\u6570\u636e\uff0c\u4e5f\u4f1a\u653e\u5728\u961f\u9996\uff0c\u907f\u514d\u8fc7\u65e9\u88ab\u6dd8\u6c70\u3002\u5f53\u6570\u636e\u6ee1\u7684\u65f6\u5019\uff0c\u4f1a\u4f18\u5148\u6dd8\u6c70\u961f\u5217\u5c3e\u90e8\u7684\u6570\u636e\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TTL \u7b56\u7565\u4e3b\u8981\u7528\u6765\u786e\u4fdd\u65b0\u5bfc\u5165\u7684\u6570\u636e\u5728\u7f13\u5b58\u4e2d\u7684\u4e00\u6bb5\u65f6\u95f4\u5185\u4e0d\u88ab\u6dd8\u6c70\uff08\u8fc7\u671f\u65f6\u95f4\u662f\u7531\u5bfc\u5165\u65f6\u95f4 + \u8d85\u65f6\u65f6\u95f4\u6765\u8ba1\u7b97\u7684\u5f97\u51fa\uff09\u3002TTL \u7684\u6570\u636e\u7684\u5730\u4f4d\u662f\u6700\u9ad8\u4e14\u5e73\u7b49\u7684\u3002\u6700\u9ad8\u6307\u5f53\u7f13\u5b58\u6ee1\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7\u6dd8\u6c70 LRU \u961f\u5217\u7684\u6570\u636e\uff0c\u6765\u8ba9 TTL \u7684\u6570\u636e\u5199\u8fdb\u7f13\u5b58\u4e2d\u3002\u5e73\u7b49\u662f\u6307\u6240\u6709 TTL \u7b56\u7565\u7684\u6570\u636e\u5e76\u4e0d\u4f1a\u56e0\u4e3a\u8fc7\u671f\u65f6\u95f4\u6709\u5dee\u522b\u800c\u8fdb\u884c\u6dd8\u6c70\u3002\u5f53 TTL \u7684\u6570\u636e\u5360\u6ee1\u4e86\u7f13\u5b58\uff0c\u4e4b\u540e\u7684\u65b0\u5bfc\u5165\u7684\u6570\u636e\uff08\u65e0\u8bba\u6709\u6ca1\u6709\u8bbe\u7f6e TTL\uff09\u6216\u8005\u4ece\u8fdc\u7aef\u5b58\u50a8\u62c9\u53d6\u4e0b\u6765\u7684\u51b7\u6570\u636e\uff0c\u90fd\u4e0d\u4f1a\u88ab\u5199\u8fdb\u7f13\u5b58\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"TTL \u7b56\u7565\u53ef\u4ee5\u7528\u5728\u5e0c\u671b\u5e38\u9a7b\u672c\u5730\u7684\u5c0f\u8868\u3002\u5bf9\u4e8e\u5e38\u9a7b\u8868\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684 TTL \u503c\u6765\u8ba9\u5b83\u5728\u7f13\u5b58\u91cc\u7684\u6570\u636e\u4e0d\u4f1a\u88ab\u5176\u4ed6\u5927\u8868\u7684\u67e5\u8be2\u6dd8\u6c70\u6389\u3002\u6216\u8005\u5bf9\u4e8e\u52a8\u6001 Partition \u7684\u8868\uff0c\u53ef\u4ee5\u6839\u636e Partition \u7684 Hot Partition \u7684\u65f6\u95f4\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u7684 TTL \u503c\uff0c\u6765\u8ba9 Hot Partition \u4e0d\u4f1a\u88ab Cold Partition \u7684\u67e5\u8be2\u6dd8\u6c70\u6389\u3002\u76ee\u524d\u6682\u4e0d\u652f\u6301\u67e5\u770b TTL \u6570\u636e\u5728\u7f13\u5b58\u7684\u5360\u6bd4\u3002"))),(0,a.yg)("h3",{id:"\u7f13\u5b58\u9884\u70ed"},"\u7f13\u5b58\u9884\u70ed"),(0,a.yg)("p",null,"\u5b58\u7b97\u5206\u79bbDoris \u63d0\u4f9b\u591a\u96c6\u7fa4\u7684\u80fd\u529b\uff0c\u591a\u4e2a\u96c6\u7fa4\u5171\u4eab\u540c\u4e00\u4efd\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5171\u4eab\u540c\u4e00\u4efd\u7f13\u5b58\u3002\u5f53\u521b\u5efa\u65b0\u7684 cluster \u7684\u65f6\u5019\uff0c\u5728\u65b0\u7684 cluster \u7684\u7f13\u5b58\u662f\u7a7a\u7684\uff0c\u8fd9\u65f6\u5019\u8fdb\u884c\u67e5\u8be2\u6570\u636e\uff0c\u4f1a\u6bd4\u8f83\u6162\u3002\u8fd9\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7\u624b\u6bb5\u9884\u70ed\u6570\u636e\uff0c\u4e3b\u52a8\u4ece\u8fdc\u7aef\u5b58\u50a8\u7684\u6570\u636e\u62c9\u8d77\u5230\u672c\u5730\u7f13\u5b58\u3002 \u76ee\u524d\u652f\u6301\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a\u96c6\u7fa4 A \u7684\u7f13\u5b58\u9884\u70ed\u5230\u96c6\u7fa4 B \u3002\u5728 \u5b58\u7b97\u5206\u79bbDoris \u4e2d\uff0c\u4f1a\u5b9a\u671f\u91c7\u96c6\u6bcf\u4e2a\u96c6\u7fa4\u4e00\u6bb5\u65f6\u95f4\u5185\u8bbf\u95ee\u8fc7\u7684\u8868\u6216\u8005\u5206\u533a\u7684\u70ed\u70b9\u4fe1\u606f\uff0c\u7136\u540e\u4f5c\u4e3a\u5185\u90e8\u8868\u5b58\u50a8\u4e0b\u6765\u3002\u5f53\u8fdb\u884c\u96c6\u7fa4\u95f4\u7684\u9884\u70ed\u7684\u65f6\u5019\uff0c\u9884\u70ed\u96c6\u7fa4\u4f1a\u6839\u636e\u6e90\u96c6\u7fa4\u7684\u70ed\u70b9\u4fe1\u606f\u6765\u5bf9\u67d0\u4e9b\u8868/\u5206\u533a\u8fdb\u884c\u9884\u70ed\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a\u8868 A \u6570\u636e\u9884\u70ed\u5230\u65b0\u96c6\u7fa4 \u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a\u8868 A \u7684\u5206\u533a 'p1' \u7684\u6570\u636e\u9884\u70ed\u5230\u65b0\u96c6\u7fa4\u3002")),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("h3",{id:"\u8bbe\u7f6e-ttl-\u7b56\u7565"},"\u8bbe\u7f6e TTL \u7b56\u7565"),(0,a.yg)("p",null,"\u5728\u5efa\u8868\u7684\u65f6\u5019\u8bbe\u7f6e\u5bf9\u5e94\u7684 PROPERTY\uff0c\u5373\u53ef\u8be5\u8868\u7684\u6570\u636e\u4f7f\u7528 TTL \u7b56\u7565\u7f13\u5b58\u4e0b\u6765\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"file_cache_ttl_seconds : \u65b0\u5bfc\u5165\u7684\u6570\u636e\u671f\u671b\u5728\u7f13\u5b58\u4e2d\u4fdd\u6301\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'# \u8bbe\u7f6e TTL \u7684\u4f8b\u5b50\uff0c\u901a\u8fc7\u5efa\u8868\u65f6\u6307\u5b9a\u5bf9\u5e94 property\nCREATE TABLE IF NOT EXISTS customer (\n  C_CUSTKEY     INTEGER NOT NULL,\n  C_NAME        VARCHAR(25) NOT NULL,\n  C_ADDRESS     VARCHAR(40) NOT NULL,\n  C_NATIONKEY   INTEGER NOT NULL,\n  C_PHONE       CHAR(15) NOT NULL,\n  C_ACCTBAL     DECIMAL(15,2)   NOT NULL,\n  C_MKTSEGMENT  CHAR(10) NOT NULL,\n  C_COMMENT     VARCHAR(117) NOT NULL\n)\nDUPLICATE KEY(C_CUSTKEY, C_NAME)\nDISTRIBUTED BY HASH(C_CUSTKEY) BUCKETS 32\nPROPERTIES(\n    "file_cache_ttl_seconds"="300"\n)\n')))),(0,a.yg)("p",null,"\u5bf9\u4e8e\u4e0a\u9762\u90a3\u5f20\u8868\uff0c\u8be5\u8868\u6240\u6709\u65b0\u5bfc\u5165\u7684\u6570\u636e\u90fd\u4f1a\u5728\u7f13\u5b58\u4e2d\u88ab\u4fdd\u7559 300s\u3002\u76ee\u524d\u4e5f\u652f\u6301\u4fee\u6539\u8868\u7684 TTL \u65f6\u95f4\uff0c\u53ef\u4ee5\u5c06 TTL \u7684\u65f6\u95f4\u5ef6\u957f\u6216\u51cf\u77ed\u3002\u6ce8\uff1a\u4fee\u6539\u7684\u503c\u76ee\u524d\u6682\u65f6\u4e0d\u4f1a\u7acb\u523b\u751f\u6548\uff0c\u4f1a\u6709\u4e00\u5b9a\u65f6\u95f4\u7684\u5ef6\u8fdf\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE customer set ("file_cache_ttl_seconds"="3000");\n')),(0,a.yg)("p",null,"\u5982\u679c\u5efa\u8868\u7684\u65f6\u5019\u6ca1\u6709\u8bbe\u7f6e TTL\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ALTER \u8bed\u53e5\u8fdb\u884c\u4fee\u6539\u3002"),(0,a.yg)("h3",{id:"\u7f13\u5b58\u9884\u70ed-1"},"\u7f13\u5b58\u9884\u70ed"),(0,a.yg)("p",null,"\u76ee\u524d\u652f\u6301\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a cluster_name0 \u7684\u7f13\u5b58\u9884\u70ed\u5230 cluster_name1 \u3002\n\u67e5\u770b\u5f53\u524dwarehouse\u4e0b\u6240\u6709cluster\u7684\u6700\u9891\u7e41\u8bbf\u95ee\u7684\u8868\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"show cache hotspot '/';\n+------------------------+-----------------------+----------------------------------------+\n| cluster_name           | total_file_cache_size | top_table_name                         |\n+------------------------+-----------------------+----------------------------------------+\n| cluster_name0          |          751620511367 | regression_test.doris_cache_hotspot    |\n+------------------------+-----------------------+----------------------------------------+\n")),(0,a.yg)("p",null,"\u67e5\u770b cluster_name0 \u4e0b\u7684\u6240\u6709 table \u7684\u6700\u70ed partition \u4fe1\u606f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> show cache hotspot '/cluster_name0';\n+-----------------------------------------------------------+---------------------+--------------------+\n| table_name                                                | last_access_time    | top_partition_name |\n+-----------------------------------------------------------+---------------------+--------------------+\n| regression_test.doris_cache_hotspot                       | 2023-05-29 12:38:02 | p20230529          |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.customer | 2023-06-06 10:56:12 | customer           |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.nation   | 2023-06-06 10:56:12 | nation             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.orders   | 2023-06-06 10:56:12 | orders             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.part     | 2023-06-06 10:56:12 | part               |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.partsupp | 2023-06-06 10:56:12 | partsupp           |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.region   | 2023-06-06 10:56:12 | region             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.supplier | 2023-06-06 10:56:12 | supplier           |\n+-----------------------------------------------------------+---------------------+--------------------+\n")),(0,a.yg)("p",null,"\u67e5\u770b cluster_name0 \u4e0b\u7684 table regression_test_cloud_load_copy_into_tpch_sf1_p1.customer \u7684\u4fe1\u606f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"show cache hotspot '/cluster_name0/regression_test_cloud_load_copy_into_tpch_sf1_p1.customer';\n+----------------+---------------------+\n| partition_name | last_access_time    |\n+----------------+---------------------+\n| supplier       | 2023-06-06 10:56:12 |\n+----------------+---------------------+\n")),(0,a.yg)("p",null,"\u5f53\u6267\u884c\u4e0b\u9762\u8fd9\u6761 SQL\uff0ccluster_name1 \u96c6\u7fa4\u4f1a\u83b7\u53d6\u5230 cluster_name0 \u96c6\u7fa4\u7684\u8bbf\u95ee\u4fe1\u606f\uff0c\u6765\u5c3d\u53ef\u80fd\u8fd8\u539f\u51fa\u4e0e cluster_name0 \u96c6\u7fa4\u4e00\u6837\u7684\u7f13\u5b58\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"warm up cluster cluster_name1 with cluster cluster_name0\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a customer \u6570\u636e\u9884\u70ed\u5230 cluster_name1\u3002\u6267\u884c\u4e0b\u9762\u7684 SQL \uff0c\u53ef\u4ee5\u628a\u8be5\u8868\u5728\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6570\u636e\u5168\u62c9\u53d6\u5230\u672c\u5730\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"warm up cluster cluster_name1 with table customer\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6307\u5b9a customer \u7684 partition 'p1' \u7684\u6570\u636e\u9884\u70ed\u5230 cluster_name1\u3002\u6267\u884c\u4e0b\u9762\u7684 SQL \uff0c\u53ef\u4ee5\u628a\u8be5\u5206\u533a\u5728\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6570\u636e\u5168\u62c9\u53d6\u5230\u672c\u5730\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"warm up cluster cluster_name1 with table customer partition p1\n")),(0,a.yg)("p",null,"\u4ee5\u4e0a\u4e09\u6761SQL\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2aJobID\u7684\u7ed3\u679c\u3002\u4f8b\u5982"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> warm up cluster cloud_warm_up with table test_warm_up;\n+-------+\n| JobId |\n+-------+\n| 13418 |\n+-------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u7136\u540e\u901a\u8fc7\u4e0b\u9762\u7684 SQL \u6765\u67e5\u770b\u9884\u70ed\u8fdb\u5ea6\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW WARM UP JOB; // \u83b7\u53d6job\u4fe1\u606f\nSHOW WARM UP JOB WHERE ID = 13418; // \u6307\u5b9ajob_id\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n| JobId | ClusterName       | Status  | Type  | CreateTime              | FinishBatch | AllBatch | FinishTime |\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n| 13418 | cloud_warm_up     | RUNNING | TABLE | 2023-05-30 20:19:34.059 | 0           | 1        | NULL       |\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("p",null,"\u6839\u636e FinishBatch \u548c All Batch \u6765\u5224\u65ad\u5f53\u524d\u4efb\u52a1\u8fdb\u5ea6\uff0c\u6bcf\u4e2a Batch \u7ea6 10GB\u3002\n\u76ee\u524d\u4e00\u4e2a cluster \u540c\u4e00\u65f6\u95f4\u5185\u53ea\u652f\u6301\u6267\u884c\u4e00\u4e2a\u9884\u70ed\u7684JOB\u3002\u4e5f\u53ef\u4ee5\u505c\u6b62\u6b63\u5728\u8fdb\u884c\u7684\u9884\u70edjob"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> cancel warm up job where id = 13418;\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> show warm up job where id = 13418;\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n| JobId | ClusterName       | Status    | Type  | CreateTime              | FinishBatch | AllBatch | FinishTime              |\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n| 13418 | cloud_warm_up     | CANCELLED | TABLE | 2023-05-30 20:19:34.059 | 0           | 1        | 2023-05-30 20:27:14.186 |\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n1 row in set (0.00 sec)\n")),(0,a.yg)("h2",{id:"\u5b9e\u8df5\u6848\u4f8b"},"\u5b9e\u8df5\u6848\u4f8b"),(0,a.yg)("p",null,"\u67d0\u7528\u6237\u6709\u82e5\u5e72\u5f20\u8868\uff0c\u603b\u6570\u636e\u91cf\u4e3a 3TB+\uff0c\u7f13\u5b58\u53ea\u6709 1.2TB\u3002\u5176\u4e2d\u7ecf\u5e38\u8bbf\u95ee\u7684\u6709\u4e24\u5f20\u8868\uff0c\u5176\u4e2d\u6709\u4e00\u5f20\u5c0f\u8868 200 MB\uff0c\u8fd8\u6709\u4e00\u5f20 100 GB \u7684\u8868\u3002\u5176\u4ed6\u7684\u5927\u8868\u4e5f\u4f1a\u6bcf\u5929\u6709\u6d41\u91cf\uff0c\u4f46\u4e0d\u591a\uff0c\u5728 LRU \u7b56\u7565\u4e0b\uff0c\u67e5\u8be2\u5927\u8868\u6709\u53ef\u80fd\u6dd8\u6c70\u6389\u9700\u8981\u7ecf\u5e38\u8bbf\u95ee\u7684\u5c0f\u8868\u7684\u6570\u636e\uff0c\u9020\u6210\u6027\u80fd\u6ce2\u52a8\u3002\u4e3a\u4e86\u8ba9\u5e38\u9a7b\u7684\u8868\u7684\u7f13\u5b58\u4e0d\u88ab\u6dd8\u6c70\uff0c\u901a\u8fc7\u8bbe\u7f6e\u4e24\u5f20\u8868\u7684 TTL \u65f6\u95f4\uff0c\u8ba9\u8fd9\u4e24\u5f20\u8868\u7684\u6570\u636e\u5e38\u9a7b\u5728\u7f13\u5b58\u4e2d\u3002\u5bf9\u4e8e\u5c0f\u8868\uff0c\u56e0\u4e3a\u6570\u636e\u91cf\u8f83\u5927\uff0c\u6bcf\u5929\u53d8\u52a8\u4e0d\u5927\uff0c\u8bbe\u7f6e\u4e86 TTL \u8d85\u65f6 1 \u5e74\u6765\u8ba9\u4ed6\u957f\u671f\u5728\u7f13\u5b58\u3002\u5bf9\u4e8e\u53e6\u4e00\u5f20\u8868\uff0c\u7528\u6237\u6bcf\u5929\u4f1a\u505a\u4e00\u6b21\u8868\u7684\u5907\u4efd\uff0c\u7136\u540e\u518d\u8fdb\u884c\u5168\u91cf\u5bfc\u5165\uff0c\u6240\u4ee5\u63a8\u8350\u8bbe\u7f6e\u4e86 1 \u5929\u7684 TTL \u8d85\u65f6\u65f6\u95f4\u3002"))}_.isMDXComponent=!0}}]);