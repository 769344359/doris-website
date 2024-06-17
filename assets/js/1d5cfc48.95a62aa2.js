"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4905],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},481812:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(58168),i=(t(296540),t(15680));const r={title:"Less components, higher performance: Apache Doris instead of ClickHouse, MySQL, Presto, and HBase",description:"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads.",date:"2023-11-22",author:"CIGNA & CMB",tags:["Best Practice"],image:"/images/cigna-cmb.png"},o=void 0,s={permalink:"/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase",source:"@site/blog/less-components-higher-performance-apache-doris-instead-of-clickhouse-mysql-presto-and-hbase.md",title:"Less components, higher performance: Apache Doris instead of ClickHouse, MySQL, Presto, and HBase",description:"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads.",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"CIGNA & CMB"}],frontMatter:{title:"Less components, higher performance: Apache Doris instead of ClickHouse, MySQL, Presto, and HBase",description:"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads.",date:"2023-11-22",author:"CIGNA & CMB",tags:["Best Practice"],image:"/images/cigna-cmb.png"},prevItem:{title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",permalink:"/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents"},nextItem:{title:"Apache Doris Summit Asia 2023: what can you expect from apache doris as a data warehouse?",permalink:"/blog/apache-doris-summit-asia-2023-what-can-you-expect-from-apache-doris-as-a-data-warehouse"}},l={authorsImageUrls:[void 0]},c=[{value:"Component-Heavy Data Architecture",id:"component-heavy-data-architecture",level:2},{value:"Replacing Four Components with Apache Doris",id:"replacing-four-components-with-apache-doris",level:2},{value:"A Deeper Look into Apache Doris",id:"a-deeper-look-into-apache-doris",level:2}],p={toc:c},u="wrapper";function d(e){let{components:a,...r}=e;return(0,i.yg)(u,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This post is about building a unified OLAP platform. An insurance company tries to build a data warehouse that can undertake all their customer-facing, analyst-facing, and management-facing data analysis workloads. The main tasks include: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Self-service insurance contract query"),": This is for insurance customers to check their contract details by their contract ID. It should also support filters such as coverage period, insurance types, and claim amount. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Multi-dimensional analysis"),": Analysts develop their reports based on different data dimensions as they need, so they can extract insights to facilitate product innovation and their anti-fraud efforts. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Dashboarding"),": This is to create visual overview of the insurance sales trends and the horizontal and vertical comparison of different metrics.")),(0,i.yg)("h2",{id:"component-heavy-data-architecture"},"Component-Heavy Data Architecture"),(0,i.yg)("p",null,"The user started with Lambda architecture, spliting their data pipeline into a batch processing link and a stream processing link. For real-time data streaming, they apply Flink CDC; for batch import, they incorporate Sqoop, Python, and DataX to build their own data integration tool named Hisen.  "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"multi-component-data-warehouse-mysql-clickhouse-hbase-hive-presto",src:t(409461).A,width:"1280",height:"640"})),(0,i.yg)("p",null,"Then, the real-time and offline data meets in the data warehousing layer, which is made up of five components."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"ClickHouse")),(0,i.yg)("p",null,"The data warehouse is of flat table design and ClickHouse is superb in flat table reading. But as business evolves, things become challenging in two ways:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To support cross-table joins and point queries, the user requires the star schema, but that's difficult to implement in ClickHouse."),(0,i.yg)("li",{parentName:"ul"},"Changes in insurance contracts need to be updated in the data warehouse in real time. In ClickHouse, that is done by recreating a flat table to overwrite the old one, which is not fast enough.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"MySQL")),(0,i.yg)("p",null,"After calculation, data metrics are stored in MySQL, but as the data size grows, MySQL starts to struggle, with emerging problems like prolonged execution time and errors thrown."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache")," ",(0,i.yg)("strong",{parentName:"p"},"Hive")," ",(0,i.yg)("strong",{parentName:"p"},"+ Presto")),(0,i.yg)("p",null,"Hive is the main executor in the batch processing link. It can transform, aggregate, query offline data. Presto is a complement to Hive for interactive analysis."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache HBase")),(0,i.yg)("p",null,"HBase undertakes primary key queries. It reads customer status from MySQL and Hive, including customer credits, coverage period, and sum insured. However, since HBase does not support secondary indexes, it has limited capability in reading non-primary key columns. Plus, as a NoSQL database, HBase does not support SQL statements."),(0,i.yg)("p",null,"The components have to work in conjunction to serve all needs, making the data warehouse too much to take care of. It is not easy to get started with because engineers must be trained on all these components. Also, the complexity of architecture adds to the risks of latency. "),(0,i.yg)("p",null,"So the user tried to look for a tool that ticks more boxes in fulfilling their requirements. The first thing they need is real-time capabilities, including real-time writing, real-time updating, and real-time response to data queries. Secondly, they need more flexibility in data analysis to support customer-facing self-service queries, like multi-dimensional analysis, join queries of large tables, primary key indexes, roll-ups, and drill-downs. Then, for batch processing, they also want high throughput in data writing."),(0,i.yg)("p",null,"They eventually made up their mind with ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris"),". "),(0,i.yg)("h2",{id:"replacing-four-components-with-apache-doris"},"Replacing Four Components with Apache Doris"),(0,i.yg)("p",null," Apache Doris is capable of both real-time and offline data analysis, and it supports both high-throughput interactive analysis and high-concurrency point queries. That's why it can replace ClickHouse, MySQL, Presto, and Apache HBase and work as the unified query gateway for the entire data system. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"unified-data-warehouse-kafka-apache-doris-hive",src:t(846598).A,width:"1280",height:"686"})),(0,i.yg)("p",null,"The improved data pipeline is a much cleaner Lambda architecture. "),(0,i.yg)("p",null,"Apache Doris provides a wide range of data ingestion methods. It's quick in data writing. On top of this, it also implements Merge-on-Write to improve its performance on concurrent point queries. "),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Reduced Cost")),(0,i.yg)("p",null,"The new architecture has reduced the user's cost in human efforts. For one thing, the much simpler data architecture leads to much easier maintenance; for another, developers no longer need to join the real-time and offline data in the data serving API."),(0,i.yg)("p",null,"The user can also save money with Doris because it supports tiered storage. It allows the user to put their huge amount of rarely accessed historical data in object storage, which is much cheaper to hoard data."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Higher Efficiency")),(0,i.yg)("p",null,"Apache Doris can reach a QPS of 10,000s and respond to billions of point queries within milliseconds, so the customer-facing queries are easy for it to handle. Tiered storage that separates hot data from cold data also increases their query efficiency."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Service Availability")),(0,i.yg)("p",null,"As a unified data warehouse for storage, computation, and data services, Apache Doris allows for easy disaster recovery. With less components, they don't have to worry about data loss or duplication. "),(0,i.yg)("p",null,"An important guarantee of service availability for the user is the Cross-Cluster Replication (CCR) capability of Apache Doris. It can synchronize data from cluster to cluster within minutes or even seconds, and it implements two mechanisms to ensure data reliability:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Binlog"),": This mechanism can automatically log the data changes and generate a LogID for each data modification operation. The incremental LogIDs make sure that data changes are traceable and orderly."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Data persistence"),": In the case of system meltdown or emergencies, data will be put into disks.")),(0,i.yg)("h2",{id:"a-deeper-look-into-apache-doris"},"A Deeper Look into Apache Doris"),(0,i.yg)("p",null,"Apache Doris can replace the ClickHouse, MySQL, Presto, and HBase because it has a comprehensive collection of capabilities all along the data processing pipeline. In data ingestion, it enables low-latency real-time writing based on its support for Flink CDC and Merge-on-Write. It guarantees Exactly-Once writing by its Label mechanism and transactional loading. In data queries, it supports both Star Schema and flat table aggregation, so it can provide high performance in bother multi-table joins and large single table queries. It also provides various ways to speed up different queries, like ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"inverted index")," for full-text search and range queries, short-circuit plan and prepared statements for point queries."))}d.isMDXComponent=!0},409461:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/multi-component-data-warehouse-mysql-clickhouse-hbase-hive-presto-6e3dbac016295bce3108943b4bddcf4c.png"},846598:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/unified-data-warehouse-kafka-apache-doris-hive-0c1accc90b4280a26b81be17b31e5a63.png"}}]);