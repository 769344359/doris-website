"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45221],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>p});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(a),h=i,p=g["".concat(l,".").concat(h)]||g[h]||u[h]||o;return a?n.createElement(p,r(r({ref:t},d),{},{components:a})):n.createElement(p,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},247650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const o={title:"Tencent data engineer: why we went from ClickHouse to Apache Doris?",description:"Evolution of the data processing architecture of Tencent Music Entertainment towards better performance and simpler maintenance.",date:"2023-03-07",author:"Jun Zhang & Kai Dai",tags:["Best Practice"],image:"/images/tencent-data-engineer.png"},r=void 0,s={permalink:"/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris",source:"@site/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris.md",title:"Tencent data engineer: why we went from ClickHouse to Apache Doris?",description:"Evolution of the data processing architecture of Tencent Music Entertainment towards better performance and simpler maintenance.",date:"2023-03-07T00:00:00.000Z",formattedDate:"March 7, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Jun Zhang & Kai Dai"}],frontMatter:{title:"Tencent data engineer: why we went from ClickHouse to Apache Doris?",description:"Evolution of the data processing architecture of Tencent Music Entertainment towards better performance and simpler maintenance.",date:"2023-03-07",author:"Jun Zhang & Kai Dai",tags:["Best Practice"],image:"/images/tencent-data-engineer.png"},prevItem:{title:"Building the next-generation data lakehouse: 10X performance",permalink:"/blog/Building-the-Next-Generation-Data-Lakehouse-10X-Performance"},nextItem:{title:"Best practice in Duyansoft, improving query speed to make the most out of your data",permalink:"/blog/Improving-Query-Speed-to-Make-the-Most-out-of-Your-Data"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduce a Semantic Layer",id:"introduce-a-semantic-layer",level:2},{value:"Upgrade the Semantic Layer",id:"upgrade-the-semantic-layer",level:2},{value:"What We Want?",id:"what-we-want",level:2},{value:"What We Do?",id:"what-we-do",level:2}],d={toc:c},g="wrapper";function u(e){let{components:t,...o}=e;return(0,i.yg)(g,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Tencent-use-case-of-Apache-Doris",src:a(173579).A,width:"900",height:"383"})),(0,i.yg)("p",null,"This article is co-written by me and my colleague Kai Dai. We are both data platform engineers at ",(0,i.yg)("a",{parentName:"p",href:"https://www.tencentmusic.com/en-us/"},"Tencent Music")," (NYSE: TME), a music streaming service provider with a whopping 800 million monthly active users. To drop the number here is not to brag but to give a hint of the sea of data that my poor coworkers and I have to deal with everyday."),(0,i.yg)("h1",{id:"what-we-use-clickhouse-for"},"What We Use ClickHouse For?"),(0,i.yg)("p",null,"The music library of Tencent Music contains data of all forms and types: recorded music, live music, audios, videos, etc. As data platform engineers, our job is to distill information from the data, based on which our teammates can make better decisions to support our users and musical partners."),(0,i.yg)("p",null,"Specifically, we do all-round analysis of the songs, lyrics, melodies, albums, and artists, turn all this information into data assets, and pass them to our internal data users for inventory counting, user profiling, metrics analysis, and group targeting."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-pipeline",src:a(148615).A,width:"1280",height:"693"})),(0,i.yg)("p",null,"We stored and processed most of our data in Tencent Data Warehouse (TDW), an offline data platform where we put the data into various tag and metric systems and then created flat tables centering each object (songs, artists, etc.)."),(0,i.yg)("p",null,"Then we imported the flat tables into ClickHouse for analysis and Elasticsearch for data searching and group targeting."),(0,i.yg)("p",null,"After that, our data analysts used the data under the tags and metrics they needed to form datasets for different usage scenarios, during which they could create their own tags and metrics."),(0,i.yg)("p",null,"The data processing pipeline looked like this:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-warehouse-architecture-1.0",src:a(228556).A,width:"1280",height:"743"})),(0,i.yg)("h1",{id:"the-problems-with-clickhouse"},"The Problems with ClickHouse"),(0,i.yg)("p",null,"When working with the above pipeline, we encountered a few difficulties:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Partial Update"),": Partial update of columns was not supported. Therefore, any latency from any one of the data sources could delay the creation of flat tables, and thus undermine data timeliness."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"High storage cost"),": Data under different tags and metrics was updated at different frequencies. As much as ClickHouse excelled in dealing with flat tables, it was a huge waste of storage resources to just pour all data into a flat table and partition it by day, not to mention the maintenance cost coming with it."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"High maintenance cost"),": Architecturally speaking, ClickHouse was characterized by the strong coupling of storage nodes and compute nodes. Its components were heavily interdependent, adding to the risks of cluster instability. Plus, for federated queries across ClickHouse and Elasticsearch, we had to take care of a huge amount of connection issues. That was just tedious.")),(0,i.yg)("h1",{id:"transition-to-apache-doris"},"Transition to Apache Doris"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris"),", a real-time analytical database, boasts a few features that are exactly what we needed in solving our problems:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Partial update"),": Doris supports a wide variety of data models, among which the Aggregate Model supports real-time partial update of columns. Building on this, we can directly ingest raw data into Doris and create flat tables there. The ingestion goes like this: Firstly, we use Spark to load data into Kafka; then, any incremental data will be updated to Doris and Elasticsearch via Flink. Meanwhile, Flink will pre-aggregate the data so as to release burden on Doris and Elasticsearch."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Storage cost"),": Doris supports multi-table join queries and federated queries across Hive, Iceberg, Hudi, MySQL, and Elasticsearch. This allows us to split the large flat tables into smaller ones and partition them by update frequency. The benefits of doing so include a relief of storage burden and an increase of query throughput."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Maintenance cost"),": Doris is of simple architecture and is compatible with MySQL protocol. Deploying Doris only involves two processes (FE and BE) with no dependency on other systems, making it easy to operate and maintain. Also, Doris supports querying external ES data tables. It can easily interface with the metadata in ES and automatically map the table schema from ES so we can conduct queries on Elasticsearch data via Doris without grappling with complex connections.")),(0,i.yg)("p",null,"What\u2019s more, Doris supports multiple data ingestion methods, including batch import from remote storage such as HDFS and S3, data reads from MySQL binlog and Kafka, and real-time data synchronization or batch import from MySQL, Oracle, and PostgreSQL. It ensures service availability and data reliability through a consistency protocol and is capable of auto debugging. This is great news for our operators and maintainers."),(0,i.yg)("p",null,"Statistically speaking, these features have cut our storage cost by 42% and development cost by 40%."),(0,i.yg)("p",null,"During our usage of Doris, we have received lots of support from the open source Apache Doris community and timely help from the SelectDB team, which is now running a commercial version of Apache Doris."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-warehouse-architecture-2.0",src:a(597653).A,width:"1280",height:"734"})),(0,i.yg)("h1",{id:"further-improvement-to-serve-our-needs"},"Further Improvement to Serve Our Needs"),(0,i.yg)("h2",{id:"introduce-a-semantic-layer"},"Introduce a Semantic Layer"),(0,i.yg)("p",null,"Speaking of the datasets, on the bright side, our data analysts are given the liberty of redefining and combining the tags and metrics at their convenience. But on the dark side, high heterogeneity of the tag and metric systems leads to more difficulty in their usage and management."),(0,i.yg)("p",null,"Our solution is to introduce a semantic layer in our data processing pipeline. The semantic layer is where all the technical terms are translated into more comprehensible concepts for our internal data users. In other words, we are turning the tags and metrics into first-class citizens for data definement and management."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-warehouse-architecture-3.0",src:a(841146).A,width:"1280",height:"743"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Why would this help?")),(0,i.yg)("p",null,"For data analysts, all tags and metrics will be created and shared at the semantic layer so there will be less confusion and higher efficiency."),(0,i.yg)("p",null,"For data users, they no longer need to create their own datasets or figure out which one is applicable for each scenario but can simply conduct queries on their specified tagset and metricset."),(0,i.yg)("h2",{id:"upgrade-the-semantic-layer"},"Upgrade the Semantic Layer"),(0,i.yg)("p",null,"Explicitly defining the tags and metrics at the semantic layer was not enough. In order to build a standardized data processing system, our next goal was to ensure consistent definition of tags and metrics throughout the whole data processing pipeline."),(0,i.yg)("p",null,"For this sake, we made the semantic layer the heart of our data management system:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-warehouse-architecture-4.0",src:a(158723).A,width:"1280",height:"714"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"How does it work?")),(0,i.yg)("p",null,"All computing logics in TDW will be defined at the semantic layer in the form of a single tag or metric."),(0,i.yg)("p",null,"The semantic layer receives logic queries from the application side, selects an engine accordingly, and generates SQL. Then it sends the SQL command to TDW for execution. Meanwhile, it might also send configuration and data ingestion tasks to Doris and decide which metrics and tags should be accelerated."),(0,i.yg)("p",null,"In this way, we have made the tags and metrics more manageable. A fly in the ointment is that since each tag and metric is individually defined, we are struggling with automating the generation of a valid SQL statement for the queries. If you have any idea about this, you are more than welcome to talk to us."),(0,i.yg)("h1",{id:"give-full-play-to-apache-doris"},"Give Full Play to Apache Doris"),(0,i.yg)("p",null,"As you can see, Apache Doris has played a pivotal role in our solution. Optimizing the usage of Doris can largely improve our overall data processing efficiency. So in this part, we are going to share with you what we do with Doris to accelerate data ingestion and queries and reduce costs."),(0,i.yg)("h2",{id:"what-we-want"},"What We Want?"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"goals-of-a-data-analytic-solution",src:a(357096).A,width:"1280",height:"444"})),(0,i.yg)("p",null,"Currently, we have 800+ tags and 1300+ metrics derived from the 80+ source tables in TDW."),(0,i.yg)("p",null,"When importing data from TDW to Doris, we hope to achieve:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Real-time availability:")," In addition to the traditional T+1 offline data ingestion, we require real-time tagging."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Partial update"),": Each source table generates data through its own ETL task at various paces and involves only part of the tags and metrics, so we require the support for partial update of columns."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"High performance"),": We need a response time of only a few seconds in group targeting, analysis and reporting scenarios."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Low costs"),": We hope to reduce costs as much as possible.")),(0,i.yg)("h2",{id:"what-we-do"},"What We Do?"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Generate Flat Tables in Flink Instead of TDW"))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"generate-flat-tables-in-Flink",src:a(771313).A,width:"1280",height:"567"})),(0,i.yg)("p",null,"Generating flat tables in TDW has a few downsides:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"High storage cost"),": TDW has to maintain an extra flat table apart from the discrete 80+ source tables. That\u2019s huge redundancy."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Low real-timeliness"),": Any delay in the source tables will be augmented and retard the whole data link."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"High development cost"),": To achieve real-timeliness would require extra development efforts and resources.")),(0,i.yg)("p",null,"On the contrary, generating flat tables in Doris is much easier and less expensive. The process is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Use Spark to import new data into Kafka in an offline manner."),(0,i.yg)("li",{parentName:"ul"},"Use Flink to consume Kafka data."),(0,i.yg)("li",{parentName:"ul"},"Create a flat table via the primary key ID."),(0,i.yg)("li",{parentName:"ul"},"Import the flat table into Doris.")),(0,i.yg)("p",null,"As is shown below, Flink has aggregated the five lines of data, of which \u201cID\u201d=1, into one line in Doris, reducing the data writing pressure on Doris."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"flat-tables-in-Flink-2",src:a(59382).A,width:"1280",height:"622"})),(0,i.yg)("p",null,"This can largely reduce storage costs since TDW no long has to maintain two copies of data and KafKa only needs to store the new data pending for ingestion. What\u2019s more, we can add whatever ETL logic we want into Flink and reuse lots of development logic for offline and real-time data ingestion."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Name the Columns Smartly")),(0,i.yg)("p",null,"As we mentioned, the Aggregate Model of Doris allows partial update of columns. Here we provide a simple introduction to other data models in Doris for your reference:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Unique Model"),": This is applicable for scenarios requiring primary key uniqueness. It only keeps the latest data of the same primary key ID. (As far as we know, the Apache Doris community is planning to include partial update of columns in the Unique Model, too.)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Duplicate Model"),": This model stores all original data exactly as it is without any pre-aggregation or deduplication."),(0,i.yg)("p",null,"After determining the data model, we had to think about how to name the columns. Using the tags or metrics as column names was not a choice because:"),(0,i.yg)("p",null,"I. Our internal data users might need to rename the metrics or tags, but Doris 1.1.3 does not support modification of column names."),(0,i.yg)("p",null,"II. Tags might be taken online and offline frequently. If that involves the adding and dropping of columns, it will be not only time-consuming but also detrimental to query performance."),(0,i.yg)("p",null,"Instead, we do the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"For flexible renaming of tags and metrics"),", we use MySQL tables to store the metadata (name, globally unique ID, status, etc.). Any change to the names will only happen in the metadata but will not affect the table schema in Doris. For example, if a ",(0,i.yg)("inlineCode",{parentName:"li"},"song_name")," is given an ID of 4, it will be stored with the column name of a4 in Doris. Then if the ",(0,i.yg)("inlineCode",{parentName:"li"},"song_name"),"is involved in a query, it will be converted to a4 in SQL."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"For the onlining and offlining of tags"),", we sort out the tags based on how frequently they are being used. The least used ones will be given an offline mark in their metadata. No new data will be put under the offline tags but the existing data under those tags will still be available."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"For real-time availability of newly added tags and metrics"),", we prebuild a few ID columns in Doris tables based on the mapping of name IDs. These reserved ID columns will be allocated to the newly added tags and metrics. Thus, we can avoid table schema change and the consequent overheads. Our experience shows that only 10 minutes after the tags and metrics are added, the data under them can be available.")),(0,i.yg)("p",null,"Noteworthily, the recently released Doris 1.2.0 supports Light Schema Change, which means that to add or remove columns, you only need to modify the metadata in FE. Also, you can rename the columns in data tables as long as you have enabled Light Schema Change for the tables. This is a big trouble saver for us."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Optimize Date Writing")),(0,i.yg)("p",null,"Here are a few practices that have reduced our daily offline data ingestion time by 75% and our CUMU compaction score from 600+ to 100."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Flink pre-aggregation: as is mentioned above."),(0,i.yg)("li",{parentName:"ul"},"Auto-sizing of writing batch: To reduce Flink resource usage, we enable the data in one Kafka Topic to be written into various Doris tables and realize the automatic alteration of batch size based on the data amount."),(0,i.yg)("li",{parentName:"ul"},"Optimization of Doris data writing: fine-tune the the sizes of tablets and buckets as well as the compaction parameters for each scenario:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"max_XXXX_compaction_thread\nmax_cumulative_compaction_num_singleton_deltas\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Optimization of the BE commit logic: conduct regular caching of BE lists, commit them to the BE nodes batch by batch, and use finer load balancing granularity.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"stable-compaction-score",src:a(139359).A,width:"1280",height:"511"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4. Use Dori-on-ES in Queries")),(0,i.yg)("p",null,"About 60% of our data queries involve group targeting. Group targeting is to find our target data by using a set of tags as filters. It poses a few requirements for our data processing architecture:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Group targeting related to APP users can involve very complicated logic. That means the system must support hundreds of tags as filters simultaneously."),(0,i.yg)("li",{parentName:"ul"},"Most group targeting scenarios only require the latest tag data. However, metric queries need to support historical data."),(0,i.yg)("li",{parentName:"ul"},"Data users might need to perform further aggregated analysis of metric data after group targeting."),(0,i.yg)("li",{parentName:"ul"},"Data users might also need to perform detailed queries on tags and metrics after group targeting.")),(0,i.yg)("p",null,"After consideration, we decided to adopt Doris-on-ES. Doris is where we store the metric data for each scenario as a partition table, while Elasticsearch stores all tag data. The Doris-on-ES solution combines the distributed query planning capability of Doris and the full-text search capability of Elasticsearch. The query pattern is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SELECT tag, agg(metric) \n   FROM Doris \n   WHERE id in (select id from Es where tagFilter)\n   GROUP BY tag\n")),(0,i.yg)("p",null,"As is shown, the ID data located in Elasticsearch will be used in the sub-query in Doris for metric analysis."),(0,i.yg)("p",null,"In practice, we find that the query response time is related to the size of the target group. If the target group contains over one million objects, the query will take up to 60 seconds. If it is even larger, a timeout error might occur."),(0,i.yg)("p",null,"After investigation, we identified our two biggest time wasters:"),(0,i.yg)("p",null,"I. When Doris BE pulls data from Elasticsearch (1024 lines at a time by default), for a target group of over one million objects, the network I/O overhead can be huge."),(0,i.yg)("p",null,"II. After the data pulling, Doris BE needs to conduct Join operations with local metric tables via SHUFFLE/BROADCAST, which can cost a lot."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Doris-on-Elasticsearch",src:a(585063).A,width:"1280",height:"883"})),(0,i.yg)("p",null,"Thus, we make the following optimizations:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add a query session variable ",(0,i.yg)("inlineCode",{parentName:"li"},"es_optimize")," that specifies whether to enable optimization."),(0,i.yg)("li",{parentName:"ul"},"In data writing into ES, add a BK column to store the bucket number after the primary key ID is hashed. The algorithm is the same as the bucketing algorithm in Doris (CRC32)."),(0,i.yg)("li",{parentName:"ul"},"Use Doris BE to generate a Bucket Join execution plan, dispatch the bucket number to BE ScanNode and push it down to ES."),(0,i.yg)("li",{parentName:"ul"},"Use ES to compress the queried data; turn multiple data fetch into one and reduce network I/O overhead."),(0,i.yg)("li",{parentName:"ul"},"Make sure that Doris BE only pulls the data of buckets related to the local metric tables and conducts local Join operations directly to avoid data shuffling between Doris BEs.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Doris-on-Elasticsearch-2",src:a(197374).A,width:"1280",height:"924"})),(0,i.yg)("p",null,"As a result, we reduce the query response time for large group targeting from 60 seconds to a surprising 3.7 seconds."),(0,i.yg)("p",null,"Community information shows that Doris is going to support inverted indexing since version 2.0.0, which is soon to be released. With this new version, we will be able to conduct full-text search on text types, equivalence or range filtering of texts, numbers, and datetime, and conveniently combine AND, OR, NOT logic in filtering since the inverted indexing supports array types. This new feature of Doris is expected to deliver 3~5 times better performance than Elasticsearch on the same task."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"5. Refine the Management of Data")),(0,i.yg)("p",null,"Doris\u2019 capability of cold and hot data separation provides the foundation of our cost reduction strategies in data processing."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Based on the TTL mechanism of Doris, we only store data of the current year in Doris and put the historical data before that in TDW for lower storage cost."),(0,i.yg)("li",{parentName:"ul"},"We vary the numbers of copies for different data partitions. For example, we set three copies for data of the recent three months, which is used frequently, one copy for data older than six months, and two copies for data in between."),(0,i.yg)("li",{parentName:"ul"},"Doris supports turning hot data into cold data so we only store data of the past seven days in SSD and transfer data older than that to HDD for less expensive storage.")),(0,i.yg)("h1",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"Thank you for scrolling all the way down here and finishing this long read. We\u2019ve shared our cheers and tears, lessons learned, and a few practices that might be of some value to you during our transition from ClickHouse to Doris. We really appreciate the help from the Apache Doris community, but we might still be chasing them around for a while since we attempt to realize auto-identification of cold and hot data, pre-computation of frequently used tags/metrics, simplification of code logic using Materialized Views, and so on and so forth."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"# Links")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache Doris"),":"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://doris.apache.org"},"http://doris.apache.org")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Apache Doris Github"),":"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"https://github.com/apache/doris")),(0,i.yg)("p",null,"Find Apache Doris developers on ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Slack")))}u.isMDXComponent=!0},173579:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME-7ebdc46ff19cf90eaf92e280c1b1f0e4.png"},148615:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_1-73b51a1362dc4f6f1cadbee5d51aaa05.png"},585063:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_10-b177da2c3e9ab23ad3fb8e1784012442.png"},197374:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_11-5ac5f455cdcab0a0b8b1207d61b24afb.png"},228556:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_2-edb671e5b547ca431f4eaa61b59fd2fb.png"},597653:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_3-877f2cc02538dcf78f20d08c679df9f3.png"},841146:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_4-f78029c9a317de442e0e00aac053140a.png"},158723:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_5-69933329bfdc217369664b15c2ec4766.png"},357096:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_6-d0c8cb8b9a7501650f26ae3018b58b14.png"},771313:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_7-6ec720f226a737d5cf91c74a386319b4.png"},59382:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_8-c5c8e4d117fb6c1157c42f6ab14829e0.png"},139359:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/TME_9-f599364617a05d42a19e5430e500d6f7.png"}}]);