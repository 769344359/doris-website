"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65009],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},699068:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-QUERY-PROFILE",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",id:"version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",title:"SHOW-QUERY-PROFILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SHOW-QUERY-PROFILE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-REPOSITORIES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},next:{title:"SHOW-OPEN-TABLES",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"}},i={},c=[{value:"SHOW-QUERY-PROFILE",id:"show-query-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-query-profile"},"SHOW-QUERY-PROFILE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW QUERY PROFILE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u7528\u6765\u67e5\u770bQUERY\u64cd\u4f5c\u7684\u6811\u72b6Profile\u4fe1\u606f\uff0c\u8be5\u529f\u80fd\u9700\u8981\u7528\u6237\u6253\u5f00 Profile \u8bbe\u7f6e\uff0c0.15 \u4e4b\u524d\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,a.yg)("p",null,"0.15 \u53ca\u4e4b\u540e\u7684\u7248\u672c\u6267\u884c\u4e0b\u9762\u7684\u8bbe\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET [GLOBAL] enable_profile=true;\n")),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'show query profile "/";\n')),(0,a.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u4fdd\u5b58\u7684\u6240\u6709query\u64cd\u4f5c\u7684 Profile \u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'show query profile "/queryId"\\G;\nshow query profile "/queryId/fragment_id/instance_id";\n')),(0,a.yg)("p",null,"\u83b7\u53d6\u6307\u5b9aquery id\u6811\u72b6profile\u4fe1\u606f,\u8fd4\u56deprofile \u7b80\u6613\u6811\u5f62\u56fe\u3002\u6307\u5b9afragment_id\u548cinstance_id\u5219\u8fd4\u56de\u5bf9\u5e94\u7684\u8be6\u7ec6profile\u6811\u5f62\u56fe\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5217\u51fa\u6240\u6709\u7684 query Profile"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/";\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId                           | User | DefaultDb               | SQL                | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| 327167e0db4749a9-adce3b3d770b2bb1 | root | default_cluster:test_db | select * from test | Query     | 2022-08-09 10:50:09 | 2022-08-09 10:50:09 | 19ms      | EOF        |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n1 row in set (0.00 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5217\u51fa\u6307\u5b9aQueryId\u7684 query Profile"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1"\\G\n*************************** 1. row ***************************\nFragments: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[-1: VDataBufferSender] \u2502\n\u2502Fragment: 0             \u2502\n\u2502MaxActiveTime: 783.263us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[1: VEXCHANGE_NODE]\u2502\n  \u2502Fragment: 0        \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2514\u2510\n             \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]  \u2502\n\u2502Fragment: 1             \u2502\n\u2502MaxActiveTime: 847.612us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n             \u2502\n             \u2502\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[0: VOLAP_SCAN_NODE]\u2502\n  \u2502Fragment: 1         \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250c\u2518\n            \u2502\n     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n     \u2502[OlapScanner]\u2502\n     \u2502Fragment: 1  \u2502\n     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502\n            \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[SegmentIterator]\u2502\n   \u2502Fragment: 1      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 row in set (0.00 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5217\u51fa\u6307\u5b9a Fragment \u7684 Instance \u6982\u51b5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/"\\G\n*************************** 1. row ***************************\n Instances: 327167e0db4749a9-adce3b3d770b2bb2\n      Host: 172.26.0.1:9111\nActiveTime: 847.612us\n1 row in set (0.01 sec)\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u7ee7\u7eed\u67e5\u770b\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Instance \u4e0a\u5404\u4e2a\u7b97\u5b50\u7684\u8be6\u7ec6 Profile"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/327167e0db4749a9-adce3b3d770b2bb2"\\G\n*************************** 1. row ***************************\nInstance: \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]                 \u2502\n\u2502(Active: 36.944us, non-child: 0.20)    \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BytesSent: 0.00                \u2502\n\u2502      - IgnoreRows: 0                  \u2502\n\u2502      - LocalBytesSent: 20.00 B        \u2502\n\u2502      - OverallThroughput: 0.0 /sec    \u2502\n\u2502      - PeakMemoryUsage: 0.00          \u2502\n\u2502      - SerializeBatchTime: 0ns        \u2502\n\u2502      - UncompressedRowBatchSize: 0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[0: VOLAP_SCAN_NODE]                   \u2502\n\u2502(Active: 563.241us, non-child: 3.00)   \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BatchQueueWaitTime: 444.714us  \u2502\n\u2502      - BytesRead: 37.00 B             \u2502\n\u2502      - NumDiskAccess: 1               \u2502\n\u2502      - NumScanners: 2                 \u2502\n\u2502      - PeakMemoryUsage: 320.00 KB     \u2502\n\u2502      - RowsRead: 4                    \u2502\n\u2502      - RowsReturned: 4                \u2502\n\u2502      - RowsReturnedRate: 7.101K /sec  \u2502\n\u2502      - ScannerBatchWaitTime: 206.40us \u2502\n\u2502      - ScannerSchedCount : 2          \u2502\n\u2502      - ScannerWorkerWaitTime: 34.640us\u2502\n\u2502      - TabletCount : 2                \u2502\n\u2502      - TotalReadThroughput: 0.0 /sec  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[OlapScanner]                    \u2502\n   \u2502(Active: 0ns, non-child: 0.00)   \u2502\n   \u2502  - Counters:                    \u2502\n   \u2502      - BlockConvertTime: 0ns    \u2502\n   \u2502      - BlockFetchTime: 183.741us\u2502\n   \u2502      - ReaderInitTime: 180.741us\u2502\n   \u2502      - RowsDelFiltered: 0       \u2502\n   \u2502      - RowsPushedCondFiltered: 0\u2502\n   \u2502      - ScanCpuTime: 388.576us   \u2502\n   \u2502      - ScanTime: 0ns            \u2502\n   \u2502      - ShowHintsTime_V1: 0ns    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[SegmentIterator]                    \u2502\n \u2502(Active: 0ns, non-child: 0.00)       \u2502\n \u2502  - Counters:                        \u2502\n \u2502      - BitmapIndexFilterTimer: 124ns\u2502\n \u2502      - BlockLoadTime: 179.202us     \u2502\n \u2502      - BlockSeekCount: 5            \u2502\n \u2502      - BlockSeekTime: 18.792us      \u2502\n \u2502      - BlocksLoad: 4                \u2502\n \u2502      - CachedPagesNum: 2            \u2502\n \u2502      - CompressedBytesRead: 0.00    \u2502\n \u2502      - DecompressorTimer: 0ns       \u2502\n \u2502      - IOTimer: 0ns                 \u2502\n \u2502      - IndexLoadTime_V1: 0ns        \u2502\n \u2502      - NumSegmentFiltered: 0        \u2502\n \u2502      - NumSegmentTotal: 2           \u2502\n \u2502      - RawRowsRead: 4               \u2502\n \u2502      - RowsBitmapIndexFiltered: 0   \u2502\n \u2502      - RowsBloomFilterFiltered: 0   \u2502\n \u2502      - RowsConditionsFiltered: 0    \u2502\n \u2502      - RowsKeyRangeFiltered: 0      \u2502\n \u2502      - RowsStatsFiltered: 0         \u2502\n \u2502      - RowsVectorPredFiltered: 0    \u2502\n \u2502      - TotalPagesNum: 2             \u2502\n \u2502      - UncompressedBytesRead: 0.00  \u2502\n \u2502      - VectorPredEvalTime: 0ns      \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set (0.01 sec)\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, QUERY, PROFILE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);