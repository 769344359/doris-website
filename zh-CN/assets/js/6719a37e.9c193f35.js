"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71208],{15680:(e,n,t)=>{t.d(n,{xA:()=>N,yg:()=>i});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},N=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},E="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,N=y(e,["components","mdxType","originalType","parentName"]),E=d(t),g=r,i=E["".concat(o,".").concat(g)]||E[g]||s[g]||l;return t?a.createElement(i,p(p({ref:n},N),{},{components:t})):a.createElement(i,p({ref:n},N))}));function i(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=g;var y={};for(var o in n)hasOwnProperty.call(n,o)&&(y[o]=n[o]);y.originalType=e,y[E]="string"==typeof e?e:r,p[1]=y;for(var d=2;d<l;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},123815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>y,toc:()=>d});var a=t(58168),r=(t(296540),t(15680));const l={title:"Star Schema Benchmark",language:"zh-CN"},p=void 0,y={unversionedId:"benchmark/ssb",id:"version-2.0/benchmark/ssb",title:"Star Schema Benchmark",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/benchmark/ssb.md",sourceDirName:"benchmark",slug:"/benchmark/ssb",permalink:"/zh-CN/docs/2.0/benchmark/ssb",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Star Schema Benchmark",language:"zh-CN"},sidebar:"docs",previous:{title:"CLEAN-QUERY-STATS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Utility-Statements/CLEAN-QUERY-STATS"},next:{title:"TPC-H Benchmark",permalink:"/zh-CN/docs/2.0/benchmark/tpch"}},o={},d=[{value:"1. \u786c\u4ef6\u73af\u5883",id:"1-\u786c\u4ef6\u73af\u5883",level:2},{value:"2. \u8f6f\u4ef6\u73af\u5883",id:"2-\u8f6f\u4ef6\u73af\u5883",level:2},{value:"3. \u6d4b\u8bd5\u6570\u636e\u91cf",id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf",level:2},{value:"4. SSB \u5bbd\u8868\u6d4b\u8bd5\u7ed3\u679c",id:"4-ssb-\u5bbd\u8868\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"5. \u6807\u51c6 SSB \u6d4b\u8bd5\u7ed3\u679c",id:"5-\u6807\u51c6-ssb-\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"6. \u73af\u5883\u51c6\u5907",id:"6-\u73af\u5883\u51c6\u5907",level:2},{value:"7. \u6570\u636e\u51c6\u5907",id:"7-\u6570\u636e\u51c6\u5907",level:2},{value:"7.1 \u4e0b\u8f7d\u5b89\u88c5 SSB \u6570\u636e\u751f\u6210\u5de5\u5177\u3002",id:"71-\u4e0b\u8f7d\u5b89\u88c5-ssb-\u6570\u636e\u751f\u6210\u5de5\u5177",level:3},{value:"7.2 \u751f\u6210 SSB \u6d4b\u8bd5\u96c6",id:"72-\u751f\u6210-ssb-\u6d4b\u8bd5\u96c6",level:3},{value:"7.3 \u5efa\u8868",id:"73-\u5efa\u8868",level:3},{value:"7.3.1 \u51c6\u5907 <code>doris-cluster.conf</code> \u6587\u4ef6",id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6",level:4},{value:"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa SSB \u8868",id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-ssb-\u8868",level:4},{value:"7.4 \u5bfc\u5165\u6570\u636e",id:"74-\u5bfc\u5165\u6570\u636e",level:3},{value:"7.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e",id:"75-\u68c0\u67e5\u5bfc\u5165\u6570\u636e",level:3},{value:"7.6 \u67e5\u8be2\u6d4b\u8bd5",id:"76-\u67e5\u8be2\u6d4b\u8bd5",level:3},{value:"7.6.1 SSB FLAT \u6d4b\u8bd5 SQL",id:"761-ssb-flat-\u6d4b\u8bd5-sql",level:4},{value:"<strong>7.6.2 SSB \u6807\u51c6\u6d4b\u8bd5 SQL</strong>",id:"762-ssb-\u6807\u51c6\u6d4b\u8bd5-sql",level:4}],N={toc:d},E="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(E,(0,a.A)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF"},"Star Schema Benchmark(SSB)")," \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6570\u4ed3\u573a\u666f\u4e0b\u7684\u6027\u80fd\u6d4b\u8bd5\u96c6\u3002SSB \u57fa\u4e8e ",(0,r.yg)("a",{parentName:"p",href:"http://www.tpc.org/tpch/"},"TPC-H")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5316\u7248\u7684\u661f\u578b\u6a21\u578b\u6570\u636e\u96c6\uff0c\u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u5728\u661f\u578b\u6a21\u578b\u4e0b\uff0c\u591a\u8868\u5173\u8054\u67e5\u8be2\u7684\u6027\u80fd\u8868\u73b0\u3002\u53e6\u5916\uff0c\u4e1a\u754c\u5185\u901a\u5e38\u4e5f\u4f1a\u5c06 SSB \u6253\u5e73\u4e3a\u5bbd\u8868\u6a21\u578b\uff08\u4ee5\u4e0b\u7b80\u79f0\uff1aSSB flat\uff09\uff0c\u6765\u6d4b\u8bd5\u67e5\u8be2\u5f15\u64ce\u7684\u6027\u80fd\uff0c\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/getting-started/example-datasets/star-schema"},"Clickhouse"),"\u3002"),(0,r.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Apache Doris \u5728 SSB 1000G \u6d4b\u8bd5\u96c6\u4e0a\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,r.yg)("p",null,"\u5728 SSB \u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\u7684 13 \u4e2a\u67e5\u8be2\u4e0a\uff0c\u6211\u4eec\u57fa\u4e8e Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"),(0,r.yg)("h2",{id:"1-\u786c\u4ef6\u73af\u5883"},"1. \u786c\u4ef6\u73af\u5883"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u786c\u4ef6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u673a\u5668\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"4 \u53f0\u817e\u8baf\u4e91\u4e3b\u673a\uff081 \u4e2a FE\uff0c3 \u4e2a BE\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPU"),(0,r.yg)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48 \u6838")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58"),(0,r.yg)("td",{parentName:"tr",align:null},"192G")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u5e26\u5bbd"),(0,r.yg)("td",{parentName:"tr",align:null},"21Gbps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u78c1\u76d8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9ad8\u6027\u80fd\u4e91\u786c\u76d8")))),(0,r.yg)("h2",{id:"2-\u8f6f\u4ef6\u73af\u5883"},"2. \u8f6f\u4ef6\u73af\u5883"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Doris \u90e8\u7f72 3BE 1FE"),(0,r.yg)("li",{parentName:"ul"},"\u5185\u6838\u7248\u672c\uff1aLinux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.yg)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aUbuntu 20.04 LTS (Focal Fossa)"),(0,r.yg)("li",{parentName:"ul"},"Doris \u8f6f\u4ef6\u7248\u672c\uff1aApache Doris 2.0.6"),(0,r.yg)("li",{parentName:"ul"},'JDK\uff1aopenjdk version "1.8.0_131"')),(0,r.yg)("h2",{id:"3-\u6d4b\u8bd5\u6570\u636e\u91cf"},"3. \u6d4b\u8bd5\u6570\u636e\u91cf"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"SSB \u8868\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u884c\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"lineorder"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5,999,989,709"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5546\u54c1\u8ba2\u5355\u660e\u7ec6\u8868\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"customer"),(0,r.yg)("td",{parentName:"tr",align:"left"},"30,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u4fe1\u606f\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"part"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u96f6\u4ef6\u4fe1\u606f\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"supplier"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f9b\u5e94\u5546\u4fe1\u606f\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"dates"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2,556"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u65e5\u671f\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"lineorder_flat"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5,999,989,709"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5c55\u5e73\u540e\u7684\u5bbd\u8868")))),(0,r.yg)("h2",{id:"4-ssb-\u5bbd\u8868\u6d4b\u8bd5\u7ed3\u679c"},"4. SSB \u5bbd\u8868\u6d4b\u8bd5\u7ed3\u679c"),(0,r.yg)("p",null,"\u4f7f\u7528 Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"86")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"31")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.3"),(0,r.yg)("td",{parentName:"tr",align:null},"87")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1046")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.2"),(0,r.yg)("td",{parentName:"tr",align:null},"569")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"480")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1339")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.2"),(0,r.yg)("td",{parentName:"tr",align:null},"957")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"215")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.4"),(0,r.yg)("td",{parentName:"tr",align:null},"34")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.1"),(0,r.yg)("td",{parentName:"tr",align:null},"1569")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.2"),(0,r.yg)("td",{parentName:"tr",align:null},"174")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.3"),(0,r.yg)("td",{parentName:"tr",align:null},"109")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total"),(0,r.yg)("td",{parentName:"tr",align:null},"6696")))),(0,r.yg)("h2",{id:"5-\u6807\u51c6-ssb-\u6d4b\u8bd5\u7ed3\u679c"},"5. \u6807\u51c6 SSB \u6d4b\u8bd5\u7ed3\u679c"),(0,r.yg)("p",null,"\u4f7f\u7528 Apache Doris 2.0.6 \u7248\u672c\u8fdb\u884c\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.1"),(0,r.yg)("td",{parentName:"tr",align:null},"332")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.2"),(0,r.yg)("td",{parentName:"tr",align:null},"86")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q1.3"),(0,r.yg)("td",{parentName:"tr",align:null},"80")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.1"),(0,r.yg)("td",{parentName:"tr",align:null},"985")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.2"),(0,r.yg)("td",{parentName:"tr",align:null},"844")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q2.3"),(0,r.yg)("td",{parentName:"tr",align:null},"768")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.1"),(0,r.yg)("td",{parentName:"tr",align:null},"2924")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.2"),(0,r.yg)("td",{parentName:"tr",align:null},"944")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.3"),(0,r.yg)("td",{parentName:"tr",align:null},"766")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q3.4"),(0,r.yg)("td",{parentName:"tr",align:null},"146")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.1"),(0,r.yg)("td",{parentName:"tr",align:null},"3451")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.2"),(0,r.yg)("td",{parentName:"tr",align:null},"829")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"q4.3"),(0,r.yg)("td",{parentName:"tr",align:null},"325")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Total"),(0,r.yg)("td",{parentName:"tr",align:null},"12480")))),(0,r.yg)("h2",{id:"6-\u73af\u5883\u51c6\u5907"},"6. \u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,"\u8bf7\u5148\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"../install/cluster-deployment/standard-deployment"},"\u5b98\u65b9\u6587\u6863")," \u8fdb\u884c Apache Doris \u7684\u5b89\u88c5\u90e8\u7f72\uff0c\u4ee5\u83b7\u5f97\u4e00\u4e2a\u6b63\u5e38\u8fd0\u884c\u4e2d\u7684 Doris \u96c6\u7fa4\uff08\u81f3\u5c11\u5305\u542b 1 FE 1 BE\uff0c\u63a8\u8350 1 FE 3 BE\uff09\u3002"),(0,r.yg)("h2",{id:"7-\u6570\u636e\u51c6\u5907"},"7. \u6570\u636e\u51c6\u5907"),(0,r.yg)("h3",{id:"71-\u4e0b\u8f7d\u5b89\u88c5-ssb-\u6570\u636e\u751f\u6210\u5de5\u5177"},"7.1 \u4e0b\u8f7d\u5b89\u88c5 SSB \u6570\u636e\u751f\u6210\u5de5\u5177\u3002"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u4e0b\u8f7d\u5e76\u7f16\u8bd1 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools"},"ssb-tools")," \u5de5\u5177\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/build-ssb-dbgen.sh\n")),(0,r.yg)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u5c06\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"ssb-dbgen/")," \u76ee\u5f55\u4e0b\u751f\u6210 ",(0,r.yg)("inlineCode",{parentName:"p"},"dbgen")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.yg)("h3",{id:"72-\u751f\u6210-ssb-\u6d4b\u8bd5\u96c6"},"7.2 \u751f\u6210 SSB \u6d4b\u8bd5\u96c6"),(0,r.yg)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210 SSB \u6570\u636e\u96c6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/gen-ssb-data.sh -s 1000\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 1\uff1a\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"sh gen-ssb-data.sh -h")," \u67e5\u770b\u811a\u672c\u5e2e\u52a9\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 2\uff1a\u6570\u636e\u4f1a\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},".tbl")," \u4e3a\u540e\u7f00\u751f\u6210\u5728  ",(0,r.yg)("inlineCode",{parentName:"p"},"ssb-data/")," \u76ee\u5f55\u4e0b\u3002\u6587\u4ef6\u603b\u5927\u5c0f\u7ea6 600GB\u3002\u751f\u6210\u65f6\u95f4\u53ef\u80fd\u5728\u6570\u5206\u949f\u5230 1 \u5c0f\u65f6\u4e0d\u7b49\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8 3\uff1a\u9ed8\u8ba4\u751f\u6210 100G \u7684\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6")),(0,r.yg)("h3",{id:"73-\u5efa\u8868"},"7.3 \u5efa\u8868"),(0,r.yg)("h4",{id:"731-\u51c6\u5907-doris-clusterconf-\u6587\u4ef6"},"7.3.1 \u51c6\u5907 ",(0,r.yg)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," \u6587\u4ef6"),(0,r.yg)("p",null,"\u5728\u8c03\u7528\u5bfc\u5165\u811a\u672c\u524d\uff0c\u9700\u8981\u5c06 FE \u7684 ip \u7aef\u53e3\u7b49\u4fe1\u606f\u5199\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-cluster.conf")," \u6587\u4ef6\u4e2d\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/tools/ssb-tools/conf/")," \u76ee\u5f55\u4e0b\u3002"),(0,r.yg)("p",null,"\u6587\u4ef6\u5185\u5bb9\u5305\u62ec FE \u7684 ip\uff0cHTTP \u7aef\u53e3\uff0c\u7528\u6237\u540d\uff0c\u5bc6\u7801\u4ee5\u53ca\u5f85\u5bfc\u5165\u6570\u636e\u7684 DB \u540d\u79f0\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where SSB tables located\nexport DB='ssb'\n")),(0,r.yg)("h4",{id:"732-\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa-ssb-\u8868"},"7.3.2 \u6267\u884c\u4ee5\u4e0b\u811a\u672c\u751f\u6210\u521b\u5efa SSB \u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/create-ssb-tables.sh -s 1000\n")),(0,r.yg)("p",null,"\u6216\u8005\u590d\u5236 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/ssb-tools/ddl/create-ssb-tables-sf1000.sql"},"create-ssb-tables.sql"),"  \u548c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/ssb-tools/ddl/create-ssb-flat-tables-sf1000.sql"},"create-ssb-flat-table.sql"),"  \u4e2d\u7684\u5efa\u8868\u8bed\u53e5\uff0c\u5728 MySQL \u5ba2\u6237\u7aef\u4e2d\u6267\u884c\u3002"),(0,r.yg)("h3",{id:"74-\u5bfc\u5165\u6570\u636e"},"7.4 \u5bfc\u5165\u6570\u636e"),(0,r.yg)("p",null,"\u6211\u4eec\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b8c\u6210 SSB \u6d4b\u8bd5\u96c6\u6240\u6709\u6570\u636e\u5bfc\u5165\u53ca SSB FLAT \u5bbd\u8868\u6570\u636e\u5408\u6210\u5e76\u5bfc\u5165\u5230\u8868\u91cc\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/load-ssb-data.sh\n")),(0,r.yg)("h3",{id:"75-\u68c0\u67e5\u5bfc\u5165\u6570\u636e"},"7.5 \u68c0\u67e5\u5bfc\u5165\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select count(*) from part;\nselect count(*) from customer;\nselect count(*) from supplier;\nselect count(*) from dates;\nselect count(*) from lineorder;\nselect count(*) from lineorder_flat;\n")),(0,r.yg)("h3",{id:"76-\u67e5\u8be2\u6d4b\u8bd5"},"7.6 \u67e5\u8be2\u6d4b\u8bd5"),(0,r.yg)("p",null,"SSB-FlAT \u67e5\u8be2\u8bed\u53e5\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-flat-queries"},"ssb-flat-queries")),(0,r.yg)("p",null,"\u6807\u51c6 SSB \u67e5\u8be2\u8bed\u53e5\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/ssb-tools/ssb-queries"},"ssb-queries")),(0,r.yg)("h4",{id:"761-ssb-flat-\u6d4b\u8bd5-sql"},"7.6.1 SSB FLAT \u6d4b\u8bd5 SQL"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19930101\n    AND LO_ORDERDATE <= 19931231\n    AND LO_DISCOUNT BETWEEN 1 AND 3\n    AND LO_QUANTITY < 25;\n\n--Q1.2\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19940131\n  AND LO_DISCOUNT BETWEEN 4 AND 6\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q1.3\nSELECT SUM(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE\n    weekofyear(LO_ORDERDATE) = 6\n  AND LO_ORDERDATE >= 19940101\n  AND LO_ORDERDATE <= 19941231\n  AND LO_DISCOUNT BETWEEN 5 AND 7\n  AND LO_QUANTITY BETWEEN 26 AND 35;\n\n--Q2.1\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.2\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND >= 'MFGR#2221'\n  AND P_BRAND <= 'MFGR#2228'\n  AND S_REGION = 'ASIA'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q2.3\nSELECT\n    SUM(LO_REVENUE), (LO_ORDERDATE DIV 10000) AS YEAR,\n    P_BRAND\nFROM lineorder_flat\nWHERE\n    P_BRAND = 'MFGR#2239'\n  AND S_REGION = 'EUROPE'\nGROUP BY YEAR, P_BRAND\nORDER BY YEAR, P_BRAND;\n\n--Q3.1\nSELECT\n    C_NATION,\n    S_NATION, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_REGION = 'ASIA'\n  AND S_REGION = 'ASIA'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_NATION, S_NATION, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.2\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_NATION = 'UNITED STATES'\n  AND S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.3\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19920101\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q3.4\nSELECT\n    C_CITY,\n    S_CITY, (LO_ORDERDATE DIV 10000) AS YEAR,\n    SUM(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE\n    C_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND S_CITY IN ('UNITED KI1', 'UNITED KI5')\n  AND LO_ORDERDATE >= 19971201\n  AND LO_ORDERDATE <= 19971231\nGROUP BY C_CITY, S_CITY, YEAR\nORDER BY YEAR ASC, revenue DESC;\n\n--Q4.1\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    C_NATION,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, C_NATION\nORDER BY YEAR ASC, C_NATION ASC;\n\n--Q4.2\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_NATION,\n    P_CATEGORY,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    C_REGION = 'AMERICA'\n  AND S_REGION = 'AMERICA'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_MFGR IN ('MFGR#1', 'MFGR#2')\nGROUP BY YEAR, S_NATION, P_CATEGORY\nORDER BY\n    YEAR ASC,\n    S_NATION ASC,\n    P_CATEGORY ASC;\n\n--Q4.3\nSELECT (LO_ORDERDATE DIV 10000) AS YEAR,\n    S_CITY,\n    P_BRAND,\n    SUM(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE\n    S_NATION = 'UNITED STATES'\n  AND LO_ORDERDATE >= 19970101\n  AND LO_ORDERDATE <= 19981231\n  AND P_CATEGORY = 'MFGR#14'\nGROUP BY YEAR, S_CITY, P_BRAND\nORDER BY YEAR ASC, S_CITY ASC, P_BRAND ASC;\n")),(0,r.yg)("h4",{id:"762-ssb-\u6807\u51c6\u6d4b\u8bd5-sql"},(0,r.yg)("strong",{parentName:"h4"},"7.6.2 SSB \u6807\u51c6\u6d4b\u8bd5 SQL")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1.1\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_year = 1993\n  AND lo_discount BETWEEN 1 AND 3\n  AND lo_quantity < 25;\n\n--Q1.2\nSELECT SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_yearmonth = 'Jan1994'\n  AND lo_discount BETWEEN 4 AND 6\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q1.3\nSELECT\n    SUM(lo_extendedprice * lo_discount) AS REVENUE\nFROM lineorder, dates\nWHERE\n    lo_orderdate = d_datekey\n  AND d_weeknuminyear = 6\n  AND d_year = 1994\n  AND lo_discount BETWEEN 5 AND 7\n  AND lo_quantity BETWEEN 26 AND 35;\n    \n--Q2.1\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_category = 'MFGR#12'\n  AND s_region = 'AMERICA'\nGROUP BY d_year, p_brand\nORDER BY p_brand;\n\n--Q2.2\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand BETWEEN 'MFGR#2221' AND 'MFGR#2228'\n  AND s_region = 'ASIA'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q2.3\nSELECT SUM(lo_revenue), d_year, p_brand\nFROM lineorder, dates, part, supplier\nWHERE\n    lo_orderdate = d_datekey\n  AND lo_partkey = p_partkey\n  AND lo_suppkey = s_suppkey\n  AND p_brand = 'MFGR#2239'\n  AND s_region = 'EUROPE'\nGROUP BY d_year, p_brand\nORDER BY d_year, p_brand;\n\n--Q3.1\nSELECT\n    c_nation,\n    s_nation,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'ASIA'\n  AND s_region = 'ASIA'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_nation, s_nation, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.2\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND c_nation = 'UNITED STATES'\n  AND s_nation = 'UNITED STATES'\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.3\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_year >= 1992\n  AND d_year <= 1997\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q3.4\nSELECT\n    c_city,\n    s_city,\n    d_year,\n    SUM(lo_revenue) AS REVENUE\nFROM customer, lineorder, supplier, dates\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_orderdate = d_datekey\n  AND (\n            c_city = 'UNITED KI1'\n        OR c_city = 'UNITED KI5'\n    )\n  AND (\n            s_city = 'UNITED KI1'\n        OR s_city = 'UNITED KI5'\n    )\n  AND d_yearmonth = 'Dec1997'\nGROUP BY c_city, s_city, d_year\nORDER BY d_year ASC, REVENUE DESC;\n\n--Q4.1\nSELECT\n    d_year,\n    c_nation,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, c_nation\nORDER BY d_year, c_nation;\n\n--Q4.2\nSELECT\n    d_year,\n    s_nation,\n    p_category,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND c_region = 'AMERICA'\n  AND s_region = 'AMERICA'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND (\n            p_mfgr = 'MFGR#1'\n        OR p_mfgr = 'MFGR#2'\n    )\nGROUP BY d_year, s_nation, p_category\nORDER BY d_year, s_nation, p_category;\n\n--Q4.3\nSELECT\n    d_year,\n    s_city,\n    p_brand,\n    SUM(lo_revenue - lo_supplycost) AS PROFIT\nFROM dates, customer, supplier, part, lineorder\nWHERE\n    lo_custkey = c_custkey\n  AND lo_suppkey = s_suppkey\n  AND lo_partkey = p_partkey\n  AND lo_orderdate = d_datekey\n  AND s_nation = 'UNITED STATES'\n  AND (\n            d_year = 1997\n        OR d_year = 1998\n    )\n  AND p_category = 'MFGR#14'\nGROUP BY d_year, s_city, p_brand\nORDER BY d_year, s_city, p_brand;\n\n")))}s.isMDXComponent=!0}}]);