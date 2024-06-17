"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[22353],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var i=t(296540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,s=function(e,a){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),c=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(t),p=s,h=g["".concat(l,".").concat(p)]||g[p]||u[p]||r;return t?i.createElement(h,n(n({ref:a},d),{},{components:t})):i.createElement(h,n({ref:a},d))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,n=new Array(r);n[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[g]="string"==typeof e?e:s,n[1]=o;for(var c=2;c<r;c++)n[c]=t[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},189338:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(58168),s=(t(296540),t(15680));const r={title:"Apache Doris helped Netease create a refined operation DMP system",description:"Better data analysis enables users to get better experience. Currently, the normal analysis method is to build a user tags system to accurately generate user portraits and improve user experience. The topic we shared today is the practice of Netease DMP tags system.",date:"2022-11-30",author:"Xiaodong Liu",tags:["Best Practice"],image:"/images/best-practice.png"},n=void 0,o={permalink:"/zh-CN/blog/Netease",source:"@site/blog/Netease.md",title:"Apache Doris helped Netease create a refined operation DMP system",description:"Better data analysis enables users to get better experience. Currently, the normal analysis method is to build a user tags system to accurately generate user portraits and improve user experience. The topic we shared today is the practice of Netease DMP tags system.",date:"2022-11-30T00:00:00.000Z",formattedDate:"2022\u5e7411\u670830\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Xiaodong Liu"}],frontMatter:{title:"Apache Doris helped Netease create a refined operation DMP system",description:"Better data analysis enables users to get better experience. Currently, the normal analysis method is to build a user tags system to accurately generate user portraits and improve user experience. The topic we shared today is the practice of Netease DMP tags system.",date:"2022-11-30",author:"Xiaodong Liu",tags:["Best Practice"],image:"/images/best-practice.png"},prevItem:{title:"JD.com's exploration and practice with Apache Doris in real time OLAP",permalink:"/zh-CN/blog/JD_OLAP"},nextItem:{title:"The application of Apache Doris in NIO",permalink:"/zh-CN/blog/NIO"}},l={authorsImageUrls:[void 0]},c=[{value:"About Netease and Lifease",id:"about-netease-and-lifease",level:2},{value:"About the DMP System",id:"about-the-dmp-system",level:2},{value:"Production of Tags",id:"production-of-tags",level:2},{value:"Tags Storage",id:"tags-storage",level:2},{value:"Advantages of Apache Doris in Practice",id:"advantages-of-apache-doris-in-practice",level:2},{value:"Future Plan",id:"future-plan",level:2}],d={toc:c},g="wrapper";function u(e){let{components:a,...r}=e;return(0,s.yg)(g,(0,i.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"apache-doris-helped-netease-create-a-refined-operation-dmp-system"},"Apache Doris Helped Netease Create a Refined Operation DMP System"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(755341).A,width:"900",height:"383"})),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"Guide: Refined operation is a trend of the future Internet, which requires excellent data analysis. In this article, you will get knowledge of: the construction of Netease Lifease's DMP system and the application of Apache Doris.")),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"Author | Xiaodong Liu, Lead Developer, Netease")),(0,s.yg)("p",null,"Better data analysis enables users to get better experience. Currently, the normal analysis method is to build a user tags system to accurately generate user portraits and improve user experience. The topic we shared today is the practice of Netease DMP tags system."),(0,s.yg)("h2",{id:"about-netease-and-lifease"},"About Netease and Lifease"),(0,s.yg)("p",null,"NetEase (NASDAQ: NTES) is a leading Internet technology company in China, providing users with free emails, gaming, search engine services, news and entertainment, sports, e-commerce and other services."),(0,s.yg)("p",null,"Lifease is Netease's self-operated home furnishing e-commerce brand. Its products cover 8 categories in total: home life, apparel, food and beverages, personal care and cleaning, baby products, outdoor sport, digital home appliances, and Lifease's Special. In Q1 of 2022, Lifease launches \"Pro \" membership and other multiple memberships for different users. The number of Pro members has increased by 65% \u200b\u200bcompared with the previous year."),(0,s.yg)("h2",{id:"about-the-dmp-system"},"About the DMP System"),(0,s.yg)("p",null,"DMP system plays an important role in Lifease's data analysis.\nThe data sources of DMP mainly include:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Business logs of APPs, H5s, PCs and other terminals"),(0,s.yg)("li",{parentName:"ul"},"Basic data constructed within NetEase Group"),(0,s.yg)("li",{parentName:"ul"},"Data from products sold by third-party such as JD.com, Alibaba, and Bytedance\nThrough data collection and data cleaning, the above data is ingested into data assets. Based on these data, DMP has created a system of functions, such as tag creation, grouping and portrait analysis, which supports the business including: intelligent product matching, user engagement, and user insight. In general, the DMP system concentrates on building a data-centric tagging system and portrait system to assist the business.")),(0,s.yg)("p",null,"You can get basic knowledge of the DMP system starting from the concepts below:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Tagging: Tagging is one of the user monitoring abilities to uniquely identify individual users across different browsers, devices, and user sessions. This approach to user tagging works by capturing available data in your application's page source: age, address, preference and other variables. "),(0,s.yg)("li",{parentName:"ul"},"Targeting: Target audience may be dictated by age, gender, income, location, interests or a myriad of other factors."),(0,s.yg)("li",{parentName:"ul"},'User Portrait Analysis: User portrait analysis is to develop user profiles, actions and attributes after targeting audience. For instance, check the behavior paths and consumption models of users whose portraits are "City: Hangzhou, Gender: Female" on Lifease APP.')),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(419709).A,width:"1153",height:"642"})),(0,s.yg)("p",null,"Llifease's tagging system mainly provides two core capabilities: "),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Tag Query: the ability to query the specified tag of a specific entity, which is often used to display basic information. "),(0,s.yg)("li",{parentName:"ol"},"Targeting Audience: for both real-time and offline targets. Result after targeting is mainly used for:")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"As Grouping Criteria: It can be used to tell if the user is in one or more specified groups. This occasionally occurs in scenarios such as advertising and contact marketing. "),(0,s.yg)("li",{parentName:"ul"},"Resultset Pull: Extract specified data to business system for customized development."),(0,s.yg)("li",{parentName:"ul"},"Portrait Analysis: Analyze the behavioral and consumption models in specific groups of people for more refined operations.")),(0,s.yg)("p",null,"The overall business process is as follows:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(547524).A,width:"1223",height:"662"})),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"First define the rules for tags and grouping;"),(0,s.yg)("li",{parentName:"ul"},"After defining the DSL, the task can be submitted to Spark for processing;"),(0,s.yg)("li",{parentName:"ul"},"After the processing is done, the results can be stored in Hive and Doris;"),(0,s.yg)("li",{parentName:"ul"},"Data from Hive or Doris can be queried and used according to the actual business needs.")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(482342).A,width:"1197",height:"706"})),(0,s.yg)("p",null,"The DMP platform is divided into four modules: Processing&storage layer, scheduling layer, service layer, and metadata management.\nAll tag meta-information is stored in the source data table; The scheduling layer schedules tasks for the entire business process: Data processing and aggregation are converted into basic tags, and the data in the basic tags and source tables are converted into something that can be used for data query through SQL; The scheduling layer dispatches tasks to Spark to process, and then stores results in both Hive and Doris. The service layer consists of four parts: tag service, entity grouping service, basic tag data service, and portrait analysis service."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(254337).A,width:"1124",height:"648"})),(0,s.yg)("p",null,"The lifecycle of tag consists of 5 phases:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Tag requirements: At this stage, the operation team demands and the product manager team evaluates the rationality and urgency of the requirements."),(0,s.yg)("li",{parentName:"ul"},"Scheduling production: Developers first sort out the data from ODS to DWD, which is the entire link of DM layer. Secondly, they build a model based on data, and at the same time, monitor the production process."),(0,s.yg)("li",{parentName:"ul"},"Targeting Audience: After the tag is produced, group the audience by those tags."),(0,s.yg)("li",{parentName:"ul"},"Precision marketing: Carry out precision marketing strategy to people grouped by."),(0,s.yg)("li",{parentName:"ul"},"Effect evaluation: In the end, tage usage rate and use effect need to be evaluated for future optimization.")),(0,s.yg)("h2",{id:"production-of-tags"},"Production of Tags"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(719422).A,width:"1145",height:"675"})),(0,s.yg)("p",null,"Tag data layering:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The bottom layer is the ODS layer, including user login logs, event tracking records, transaction data, and Binlog data of various databases"),(0,s.yg)("li",{parentName:"ul"},"The data processed by the ODS layer, such as user login table, user activity table and order information table reaches the DWD detail layer"),(0,s.yg)("li",{parentName:"ul"},"The DWD layer data is aggregated to the DM layer and the tags are all implemented based on the DM layer data.\nAt present, we have fully automated the data output from the original database to the ODS layer. And we also realized partial automation from the ODS layer to the DWD layer. And there are a small number of automated operations from the DWD to the DM layer, which will be our focus in the future.")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(336491).A,width:"1154",height:"677"})),(0,s.yg)("p",null,"Tags are devided based on timeliness: offline tags, quasi-real-time tags and real-time tags. According to the scale of data, it is divided into: aggregation tags and detail tags. In other cases, tags can also be divided into: account attribute tags, consumption behavior tags, active behavior tags, user preference tags, asset information tags, etc. "),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(301544).A,width:"1163",height:"672"})),(0,s.yg)("p",null,"It is inconvenient to use the data of the DM layer directly because the basic data is relatively primitive. The abstraction level is lacking and it is not easy to use. By combining basic data with AND, OR, and NOT, business tags are formed for further use, which can reduce the cost of understanding operations and make it easier to use."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(774876).A,width:"1161",height:"696"})),(0,s.yg)("p",null,"After the tags are merged, it is necessary to apply the tags to specific business scenarios, such as grouping. The configuration is shown on the left side of the figure above, which supports offline crowd packages and real-time behaviors (need to be configured separately). After configuration, generate the DSL rules shown on the right side of the figure above, expressed in Json format, which is more friendly to FE, and can also be converted into query statements of the datebase engine."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(376406).A,width:"1120",height:"649"})),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(550134).A,width:"1114",height:"649"})),(0,s.yg)("p",null,"Tagging is partially automated. The degree of automation in grouping is relatively high. For example, group refresh can be done regularly every day; Advanced processing, such as intersection/merge/difference between groups; Data cleaning means timely cleaning up expired and invalid data."),(0,s.yg)("h2",{id:"tags-storage"},"Tags Storage"),(0,s.yg)("p",null,"Lifease's DMP labeling system needs to carry relatively large customer end traffic, and has relatively high requirements for real-time performance. Our storage requirements include:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Need support high-performance query to deal with large-scale customer end traffic"),(0,s.yg)("li",{parentName:"ul"},"Need support SQL to facilitate data analysis scenarios"),(0,s.yg)("li",{parentName:"ul"},"Need support data update mechanism"),(0,s.yg)("li",{parentName:"ul"},"Can store large amount of data"),(0,s.yg)("li",{parentName:"ul"},"Need support for extension functions to handle custom data structures"),(0,s.yg)("li",{parentName:"ul"},"Closely integrated with big data ecology")),(0,s.yg)("p",null,"In the field of big data, multiple engines vary in different applicable scenarios. We used the popular engines in the chart below to optimize our database architecture for 2 times."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(326530).A,width:"1133",height:"660"})),(0,s.yg)("p",null,"Our architecture V1.0 is shown below:"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(842407).A,width:"1175",height:"695"})),(0,s.yg)("p",null,"Most of the offline data is stored in Hive while a small part is stored in Hbase (mainly used for querying basic tags). Part of the real-time data is stored in Hbase for basic tags query and the rest is double-written into KUDU and Elasticsearch for real-time grouping and data query. The data offline is processed by Impala and cached in Redis.\nDisadvantages :"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Too many database engines."),(0,s.yg)("li",{parentName:"ul"},"Double writing has hidden problems with data quality. One side may succeed while the other side fails, resulting in data inconsistency."),(0,s.yg)("li",{parentName:"ul"},"The project is complex and maintainability is poor.\nIn order to reduce the usage of engine and storage, we improved and implemented version 2.0 :")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(608255).A,width:"1148",height:"677"})),(0,s.yg)("p",null,"In storage architecture V2.0, Apache Doris is adopted. Offline data is mainly stored in Hive. At the same time, basic tags are imported into Doris, and real-time data as well. The query federation of Hive and Doris is performed based on Spark, and the results are stored in Redis. After this improvement, an storage engine which can manages offline and real-time data has been created. We are currently use Apache Doris 1.0, which enables : 1. The query performance can be controlled within 20ms at 99% 2.  The query performance can be controlled within 50ms at 99.9%.  Now the architecture is simplified, which greatly reduces operation and maintenance costs."),(0,s.yg)("h2",{id:"advantages-of-apache-doris-in-practice"},"Advantages of Apache Doris in Practice"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(250179).A,width:"1128",height:"658"})),(0,s.yg)("p",null,"Lifeuse has adopted Apache Doris to check, batch query, path analyse and grouping. The advantages are as follows:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The query federation performance of  key query and a small number of tables exceeds 10,000 QPS, with RT99<50MS."),(0,s.yg)("li",{parentName:"ul"},"The horizontal expansion capability is relatively strong and maintenance cost is relatively low."),(0,s.yg)("li",{parentName:"ul"},"The offlin and real-time data are unified to reduce the complexity of the tags model.")),(0,s.yg)("p",null,"The downside is that importing a large amount of small data takes up more resources. But this problem has been optimized in Doris 1.1. Apache Doris has greatly enhanced the data compaction capability in version 1.1, and can quickly complete aggregation of new data, avoiding the -235 error caused by too many versions of sharded data and the low query efficiency problems."),(0,s.yg)("h2",{id:"future-plan"},"Future Plan"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"1280X1280",src:t(720917).A,width:"1117",height:"652"})),(0,s.yg)("p",null,"Hive and Spark are gradually turning into Apache Doris.\nOptimize the tagging system:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Establish a rich and accurate tag evaluation system"),(0,s.yg)("li",{parentName:"ul"},"Improve tag quality and output speed"),(0,s.yg)("li",{parentName:"ul"},"Improve tag coverage\nMore precision operation:"),(0,s.yg)("li",{parentName:"ul"},"Build a rich user analysis model"),(0,s.yg)("li",{parentName:"ul"},"Improve the user insight model evaluation system based on the frequency of use and user value"),(0,s.yg)("li",{parentName:"ul"},"Establish general image analysis capabilities to assist intelligent decision-making in operations")))}u.isMDXComponent=!0},550134:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/10__automation-fe72dc6c87f37fdd94f217a9174706bd.png"},326530:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/11__comparision-dd0d69a571e362dcca7711561a30db7c.png"},842407:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/12__architecture_v1_0-59dffe2265ac0754860a4bc796c090fa.png"},608255:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/13__architecture_v2_0-1f1c2b508793cf146a606b3a453e01a5.png"},250179:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/14__advantages_in_practice-3fc1c9893383a6635c8c9612e3ef0a15.png"},720917:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/15__future_plan-199b125bad243e0dcd93f00b9f4395fe.png"},419709:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/1__core_capability-188f05fadbac0c4dfa3574a4e140cb8b.png"},547524:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/2__business_process-ca10e9f507ff8157caa521d0c44d7fc4.png"},482342:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/3__dmp_architecture-82a3358b3eb8794fcff543415248505e.png"},254337:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/4__tag_lifecycle-ec086d95f04379a7f9a10993c0089e63.png"},719422:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/5__production_of_tags-a53f5f1d2e03dc74f8d0e69092e4bd02.png"},336491:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/6__type_of__tags-91b30c2315a91d57aa96017a4ec716eb.png"},301544:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/7__tags_settings-8a8c1c99a4afbc7f78ceb4659da2c184.png"},774876:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/8__target_audience-cfe11c32b47db0639303f640a3452d98.png"},376406:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/9__target_audience-mapping-1b00b571d178577b4f0c4f2c8a5b1acf.png"},755341:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/kv-a63c2e8908df91d10704f971aa636fa6.png"}}]);