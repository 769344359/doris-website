"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37281],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var i=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},503065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(58168),a=(n(296540),n(15680));const r={title:"Migrating from ClickHouse to Apache Doris: what happened?",description:"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ",date:"2023-10-11",author:"Chuang Li",tags:["Best Practice"],image:"/images/e-commerce.png"},o=void 0,s={permalink:"/zh-CN/blog/migrating-from-clickhouse-to-apache-doris-what-happened",source:"@site/blog/migrating-from-clickhouse-to-apache-doris-what-happened.md",title:"Migrating from ClickHouse to Apache Doris: what happened?",description:"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ",date:"2023-10-11T00:00:00.000Z",formattedDate:"2023\u5e7410\u670811\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Chuang Li"}],frontMatter:{title:"Migrating from ClickHouse to Apache Doris: what happened?",description:"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ",date:"2023-10-11",author:"Chuang Li",tags:["Best Practice"],image:"/images/e-commerce.png"},prevItem:{title:"Apache Doris announced the official release of version 2.0.2",permalink:"/zh-CN/blog/release-2.0.2"},nextItem:{title:"Introduction to Apache Doris: a next-generation real-time data warehouse",permalink:"/zh-CN/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse"}},l={authorsImageUrls:[void 0]},u=[{value:"Replacing Kylin, ClickHouse, and Druid with Apache Doris",id:"replacing-kylin-clickhouse-and-druid-with-apache-doris",level:2},{value:"The Replacement Surgery",id:"the-replacement-surgery",level:2},{value:"Changes in SQL statements",id:"changes-in-sql-statements",level:3},{value:"Changes in data ingestion methods",id:"changes-in-data-ingestion-methods",level:3},{value:"Pressure Test",id:"pressure-test",level:2},{value:"SQL query performance",id:"sql-query-performance",level:3},{value:"Join query performance",id:"join-query-performance",level:3},{value:"Future Directions",id:"future-directions",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Migrating from one OLAP database to another is huge. Even if you're unhappy with your current data tool and have found some promising candidate, you might still hesitate to do the big surgery on your data architecture, because you're uncertain about how things are going to work. So you need experience shared by someone who has walked the path. "),(0,a.yg)("p",null,"Luckily, a user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. "),(0,a.yg)("p",null,"To decide whether you want to continue reading, check if you tick one of the following boxes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You need your join queries to be executed faster."),(0,a.yg)("li",{parentName:"ul"},"You need flexible data updates."),(0,a.yg)("li",{parentName:"ul"},"You need real-time data analysis."),(0,a.yg)("li",{parentName:"ul"},"You need to minimize your components.")),(0,a.yg)("p",null,"If you do, this post might be of some help to you."),(0,a.yg)("h2",{id:"replacing-kylin-clickhouse-and-druid-with-apache-doris"},"Replacing Kylin, ClickHouse, and Druid with Apache Doris"),(0,a.yg)("p",null,"The user undergoing this change is an e-commerce SaaS provider. Its data system serves realtime and offline reporting, customer segmentation, and log analysis. Initially, they used different OLAP engines for these various purposes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Apache Kylin for offline reporting"),": The system provides offline reporting services for over 5 million sellers. The big ones among them have more than 10 million registered members and 100,000 SKU, and the detailed information is put into over 400 data cubes on the platform. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ClickHouse for customer segmentation and Top-N log queries"),": This entails high-frequency updates, high QPS, and complicated SQL."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Apache Druid for real-time reporting"),": Sellers extract data they need by combining different dimensions, and such real-time reporting requires quick data updates, quick query response, and strong stability of the system. ")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"ClickHouse-Druid-Apache-Kylin",src:n(787198).A,width:"1280",height:"529"})),(0,a.yg)("p",null,"The three components have their own sore spots."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Apache Kylin")," runs well with a fixed table schema, but every time you want to add a dimension, you need to create a new data cube and refill the historical data in it."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ClickHouse")," is not designed for multi-table processing, so you might need an extra solution for federated queries and multi-table join queries. And in this case, it was below expectation in high-concurrency scenarios."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Apache Druid")," implements idempotent writing so it does not support data updating or deletion itself. That means when there is something wrong at the upstream, you will need a full data replacement. And such data fixing is a multi-step process if you think it all the way through, because of all the data backups and movements. Plus, newly ingested data will not be accessible for queries until it is put in segments in Druid. That means a longer window such that data inconsistency between upstream and downstream.")),(0,a.yg)("p",null,"As they work together, this architecture might be too demanding to navigate because it requires knowledge of all these components in terms of development, monitoring, and maintenance. Also, every time the user scales a cluster, they must stop the current cluster and migrate all databases and tables, which is not only a big undertaking but also a huge interruption to business."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Replace-ClickHouse-Druid-Apache-Kylin-with-Apache-Doris",src:n(389301).A,width:"1280",height:"529"})),(0,a.yg)("p",null,"Apache Doris fills these gaps."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Query performance"),": Doris is good at high-concurrency queries and join queries, and it is now equipped with inverted index to speed up searches in logs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Data update"),": The Unique Key model of Doris supports both large-volume update and high-freqency real-time writing, and the Duplicate Key model and Unique Key model supports partial column update. It also provides exactly-once guarantee in data writing and ensures consistency between base tables, materialized views, and replicas."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Maintenance"),": Doris is MySQL-compatible. It supports easy scaling and light schema change. It comes with its own integration tools such as Flink-Doris-Connector and Spark-Doris-Connector. ")),(0,a.yg)("p",null,"So they plan on the migration."),(0,a.yg)("h2",{id:"the-replacement-surgery"},"The Replacement Surgery"),(0,a.yg)("p",null,"ClickHouse was the main performance bottleneck in the old data architecture and why the user wanted the change in the first place, so they started with ClickHouse."),(0,a.yg)("h3",{id:"changes-in-sql-statements"},"Changes in SQL statements"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Table creation statements")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"table-creation-statements-in-ClickHouse-and-Apache-Doris",src:n(306412).A,width:"1280",height:"426"})),(0,a.yg)("p",null,"The user built their own SQL rewriting tool that can convert a ClickHouse table creation statement into a Doris table creation statement. The tool can automate the following changes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Mapping the field types"),": It converts ClickHouse field types into the corresponding ones in Doris. For example, it converts String as a Key into Varchar, and String as a partitioning field into Date V2."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Setting the number of historical partitions in dynamic partitioning tables"),': Some tables have historical partitions and the number of partitions should be specified upon table creation in Doris, otherwise a "No Partition" error will be thrown.'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Determining the number of buckets"),": It decides the number of buckets based on the data volume of historical partitions; for non-partitioned tables, it decides the bucketing configurations based on the historical data volume."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Determining TTL"),": It decides the time to live of partitions in dynamic partitioning tables."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Setting the import sequence"),": For the Unique Key model of Doris, it can specify the data import order based on the Sequence column to ensure orderliness in data ingestion.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"changes-in-table-creation-statements-from-ClickHouse-to-Apache-Doris",src:n(236579).A,width:"1280",height:"881"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Query statements")),(0,a.yg)("p",null,"Similarly, they have their own tool to transform the ClickHouse query statements into Doris query statements. This is to prepare for the comparison test between ClickHouse and Doris. The key considerations in the conversions include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Conversion of table names"),": This is simple given the mapping rules in table creation statements."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Conversion of functions"),": For example, the ",(0,a.yg)("inlineCode",{parentName:"li"},"COUNTIF")," function in ClickHouse is equivalent to ",(0,a.yg)("inlineCode",{parentName:"li"},"SUM(CASE WHEN_THEN 1 ELSE 0)"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Array Join")," is equivalent to ",(0,a.yg)("inlineCode",{parentName:"li"},"Explode")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Lateral View"),", and ",(0,a.yg)("inlineCode",{parentName:"li"},"ORDER BY")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"GROUP BY")," should be converted to window functions."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Difference")," ",(0,a.yg)("strong",{parentName:"li"},"in semantics"),": ClickHouse goes by its own protocol while Doris is MySQL-compatible, so there needs to be alias for subqueries. In this use case, subqueries are common in customer segmentation, so they use ",(0,a.yg)("inlineCode",{parentName:"li"},"sqlparse")," ")),(0,a.yg)("h3",{id:"changes-in-data-ingestion-methods"},"Changes in data ingestion methods"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"changes-in-data-ingestion-methods-from-ClickHouse-to-Apache-Doris",src:n(15002).A,width:"1280",height:"642"})),(0,a.yg)("p",null,"Apache Doris provides broad options of data writing methods. For the real-time link, the user adopts Stream Load to ingest data from NSQ and Kafka. "),(0,a.yg)("p",null,"For the sizable offline data, the user tested different methods and here are the takeouts:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Insert Into"))),(0,a.yg)("p",null,"Using Multi-Catalog to read external data sources and ingesting with Insert Into can serve most needs in this use case."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Stream Load"))),(0,a.yg)("p",null,"The Spark-Doris-Connector is a more general method. It can handle large data volumes and ensure writing stability. The key is to find the right writing pace and parallelism."),(0,a.yg)("p",null,"The Spark-Doris-Connector also supports Bitmap. It allows you to move the computation workload of Bitmap data in Spark clusters. "),(0,a.yg)("p",null,"Both the Spark-Doris-Connector and the Flink-Doris-Connector rely on Stream Load. CSV is the recommended format choice. Tests on the user's billions of rows showed that CSV was 40% faster than JSON.  "),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Spark Load"))),(0,a.yg)("p",null,"The Spark Load method utilizes Spark resources for data shuffling and ranking. The computation results are put in HDFS, and then Doris reads the files from HDFS directly (via Broker Load). This approach is ideal for huge data ingestion. The more data there is, the faster and more resource-efficient the ingestion is.  "),(0,a.yg)("h2",{id:"pressure-test"},"Pressure Test"),(0,a.yg)("p",null,"The user compared performance of the two components on their SQL and join query scenarios, and calculated the CPU and memory consumption of Apache Doris."),(0,a.yg)("h3",{id:"sql-query-performance"},"SQL query performance"),(0,a.yg)("p",null,"Apache Doris outperformed ClickHouse in 10 of the 16 SQL queries, and the biggest performance gap was a ratio of almost 30. Overall, Apache Doris was 2~3 times faster than ClickHouse. "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"SQL-query-performance-ClickHouse-VS-Apache-Doris",src:n(139665).A,width:"1313",height:"1057"})),(0,a.yg)("h3",{id:"join-query-performance"},"Join query performance"),(0,a.yg)("p",null,"For join query tests, the user used different sizes of main tables and dimension tables."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Primary tables"),": user activity table (4 billion rows), user attribute table (25 billion rows), and user attribute table (96 billion rows)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Dimension tables"),": 1 million rows, 10 million rows, 50 million rows, 100 million rows, 500 million rows, 1 billion rows, and 2.5 billion rows.")),(0,a.yg)("p",null,"The tests include ",(0,a.yg)("strong",{parentName:"p"},"full join queries")," and ",(0,a.yg)("strong",{parentName:"p"},"filtering join queries"),". Full join queries join all rows of the primary table and dimension tables, while filtering join queries retrieve data of a certain seller ID with a ",(0,a.yg)("inlineCode",{parentName:"p"},"WHERE")," filter. The results are concluded as follows:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Primary table (4 billion rows):")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Full join queries: Doris outperforms ClickHouse in full join queries with all dimension tables. The performance gap widens as the dimension tables get larger. The largest difference is a ratio of 5."),(0,a.yg)("li",{parentName:"ul"},"Filtering join queries: Based on the seller ID, the filter screened out 41 million rows from the primary table. With small dimension tables, Doris was 2~3 times faster than ClickHouse; with large dimension tables, Doris was over 10 times faster; with dimension tables larger than 100 million rows, ClickHouse threw an OOM error and Doris functions normally. ")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Primary table (25 billion rows):")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Full join queries: Doris outperforms ClickHouse in full join queries with all dimension tables. ClickHouse produced an OOM error with dimension tables larger than 50 million rows."),(0,a.yg)("li",{parentName:"ul"},"Filtering join queries: The filter screened out 570 million rows from the primary table. Doris responded within seconds and ClickHouse finished within minutes and broke down when joining large dimension tables.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Primary table (96 billion rows):")),(0,a.yg)("p",null,"Doris delivered relatively quick performance in all queries and ClickHouse was unable to execute all of them."),(0,a.yg)("p",null,"In terms of CPU and memory consumption, Apache Doris maintained stable cluster loads in all sizes of join queries."),(0,a.yg)("h2",{id:"future-directions"},"Future Directions"),(0,a.yg)("p",null,"As the migration goes on, the user works closely with the ",(0,a.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Doris community"),", and their feedback has contributed to the making of ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/releasenotes/release-2.0.0/"},"Apache Doris 2.0.0"),". We will continue assisting them in their migration from Kylin and Druid to Doris, and we look forward to see their Doris-based unified data platform come into being."))}p.isMDXComponent=!0},787198:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-1-21f1d14ff97ac4bbf038e58c72a95e85.png"},389301:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-2-2f605efbaf41cb9b534ea86c82b209a8.png"},306412:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-3-80a2c58fe513a6bbf303d5b95a023fd9.png"},236579:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-4-3ee70bd47be6c98aeef15c24027bfb07.png"},15002:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-5-8223b76f140f27992ef2d3843ed7d572.png"},139665:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/youzan-6-a4a80e719c4ef27b9db683b502796fce.png"}}]);