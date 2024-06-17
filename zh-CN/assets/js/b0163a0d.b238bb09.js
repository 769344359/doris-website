"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64944],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(a),m=i,c=g["".concat(s,".").concat(m)]||g[m]||y[m]||r;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},944488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),i=(a(296540),a(15680));const r={title:"Apache Doris announced the official release of version 1.2.5",description:"Dear community, Apache Doris team has fixed nearly 210 issues or performance improvements in version 1.2.5 compared to the previous verison",date:"2023-06-18",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.5-release.png"},l=void 0,o={permalink:"/zh-CN/blog/release-note-1.2.5",source:"@site/blog/release-note-1.2.5.md",title:"Apache Doris announced the official release of version 1.2.5",description:"Dear community, Apache Doris team has fixed nearly 210 issues or performance improvements in version 1.2.5 compared to the previous verison",date:"2023-06-18T00:00:00.000Z",formattedDate:"2023\u5e746\u670818\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.5",description:"Dear community, Apache Doris team has fixed nearly 210 issues or performance improvements in version 1.2.5 compared to the previous verison",date:"2023-06-18",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.5-release.png"},prevItem:{title:"Tiered storage for hot and cold data: what, why, and how?",permalink:"/zh-CN/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How"},nextItem:{title:"Say goodbye to OOM crashes",permalink:"/zh-CN/blog/Say-Goodbye-to-OOM-Crashes"}},s={authorsImageUrls:[void 0]},p=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Big Thanks",id:"big-thanks",level:2}],u={toc:p},g="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In version 1.2.5, the Doris team has fixed nearly 210 issues or performance improvements since the release of version 1.2.4. At the same time, version 1.2.5 is also an iterative version of version 1.2.4, which has higher stability. It is recommended that all users upgrade to this version."),(0,i.yg)("h2",{id:"behavior-changed"},"Behavior Changed"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("inlineCode",{parentName:"p"},"start_be.sh")," script will check that the maximum number of file handles in the system must be greater than or equal to 65536, otherwise the startup will fail.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The BE configuration item ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_quick_compaction")," is set to true by default. The Quick Compaction is enabled by default. This feature is used to optimize the problem of small files in the case of large batch import.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"After modifying the dynamic partition attribute of the table, it will no longer take effect immediately, but wait for the next task scheduling of the dynamic partition table to avoid some deadlock problems."))),(0,i.yg)("h2",{id:"improvements"},"Improvements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Optimize the use of bthread and pthread to reduce the RPC blocking problem during the query process.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"A button to download Profile is added to the Profile page of the FE web UI.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Added FE configuration ",(0,i.yg)("inlineCode",{parentName:"p"},"recover_with_skip_missing_version"),", which is used to query to skip the problematic replica under certain failure conditions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The row-level permission function supports external Catalog.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Hive Catalog supports automatic refreshing of kerberos tickets on the BE side without manual refreshing.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"JDBC Catalog supports tables under the MySQL/ClickHouse system database (",(0,i.yg)("inlineCode",{parentName:"p"},"information_schema"),")."))),(0,i.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed the problem of incorrect query results caused by low-cardinality column optimization")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several authentication and compatibility issues accessing HDFS.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with float/double and decimal types.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with date/datetimev2 types.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several query execution and planning issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with JDBC Catalog.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several query-related issues with Hive Catalog, and Hive Metastore metadata synchronization issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fix the problem that the result of ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW LOAD PROFILE")," statement is incorrect.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several memory related issues.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE TABLE AS SELECT")," functionality.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fix the problem that the jsonb type causes BE to crash on CPU that do not support avx2.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with dynamic partitions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with TOPN query optimization.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fixed several issues with the Unique Key Merge-on-Write table model."))),(0,i.yg)("h2",{id:"big-thanks"},"Big Thanks"),(0,i.yg)("p",null,"58 contributors participated in the improvement and release of 1.2.5, and thank them for their hard work and dedication:"),(0,i.yg)("p",null,"@adonis0147"),(0,i.yg)("p",null,"@airborne12"),(0,i.yg)("p",null,"@AshinGau"),(0,i.yg)("p",null,"@BePPPower"),(0,i.yg)("p",null,"@BiteTheDDDDt"),(0,i.yg)("p",null,"@caiconghui"),(0,i.yg)("p",null,"@CalvinKirs"),(0,i.yg)("p",null,"@cambyzju"),(0,i.yg)("p",null,"@caoliang-web"),(0,i.yg)("p",null,"@dataroaring"),(0,i.yg)("p",null,"@Doris-Extras"),(0,i.yg)("p",null,"@dujl"),(0,i.yg)("p",null,"@dutyu"),(0,i.yg)("p",null,"@fsilent"),(0,i.yg)("p",null,"@Gabriel39"),(0,i.yg)("p",null,"@gitccl"),(0,i.yg)("p",null,"@gnehil"),(0,i.yg)("p",null,"@GoGoWen"),(0,i.yg)("p",null,"@gongzexin"),(0,i.yg)("p",null,"@HappenLee"),(0,i.yg)("p",null,"@herry2038"),(0,i.yg)("p",null,"@jacktengg"),(0,i.yg)("p",null,"@Jibing-Li"),(0,i.yg)("p",null,"@kaka11chen"),(0,i.yg)("p",null,"@Kikyou1997"),(0,i.yg)("p",null,"@LemonLiTree"),(0,i.yg)("p",null,"@liaoxin01"),(0,i.yg)("p",null,"@LiBinfeng-01"),(0,i.yg)("p",null,"@luwei16"),(0,i.yg)("p",null,"@Moonm3n"),(0,i.yg)("p",null,"@morningman"),(0,i.yg)("p",null,"@mrhhsg"),(0,i.yg)("p",null,"@Mryange"),(0,i.yg)("p",null,"@nextdreamblue"),(0,i.yg)("p",null,"@nsnhuang"),(0,i.yg)("p",null,"@qidaye"),(0,i.yg)("p",null,"@Shoothzj"),(0,i.yg)("p",null,"@sohardforaname"),(0,i.yg)("p",null,"@stalary"),(0,i.yg)("p",null,"@starocean999"),(0,i.yg)("p",null,"@SWJTU-ZhangLei"),(0,i.yg)("p",null,"@wsjz"),(0,i.yg)("p",null,"@xiaokang"),(0,i.yg)("p",null,"@xinyiZzz"),(0,i.yg)("p",null,"@yangzhg"),(0,i.yg)("p",null,"@yiguolei"),(0,i.yg)("p",null,"@yixiutt"),(0,i.yg)("p",null,"@yujun777"),(0,i.yg)("p",null,"@Yulei-Yang"),(0,i.yg)("p",null,"@yuxuan-luo"),(0,i.yg)("p",null,"@zclllyybb"),(0,i.yg)("p",null,"@zddr"),(0,i.yg)("p",null,"@zenoyang"),(0,i.yg)("p",null,"@zhangstar333"),(0,i.yg)("p",null,"@zhannngchen"),(0,i.yg)("p",null,"@zxealous"),(0,i.yg)("p",null,"@zy-kkk"),(0,i.yg)("p",null,"@zzzzzzzs"))}y.isMDXComponent=!0}}]);