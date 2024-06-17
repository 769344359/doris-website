"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40622],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=c(n),p=i,g=y["".concat(l,".").concat(p)]||y[p]||d[p]||a;return n?r.createElement(g,u(u({ref:t},s),{},{components:n})):r.createElement(g,u({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:i,u[1]=o;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},702815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(58168),i=(n(296540),n(15680));const a={title:"Kyuubi",language:"en"},u=void 0,o={unversionedId:"ecosystem/kyuubi",id:"version-1.2/ecosystem/kyuubi",title:"Kyuubi",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/ecosystem/kyuubi.md",sourceDirName:"ecosystem",slug:"/ecosystem/kyuubi",permalink:"/docs/1.2/ecosystem/kyuubi",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kyuubi",language:"en"},sidebar:"docs",previous:{title:"Seatunnel Doris Sink",permalink:"/docs/1.2/ecosystem/seatunnel"},next:{title:"Logstash Doris Output Plugin",permalink:"/docs/1.2/ecosystem/logstash"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Usage",id:"usage",level:2},{value:"Download Apache Kyuubi",id:"download-apache-kyuubi",level:3},{value:"Config Doris as Kyuubi data source",id:"config-doris-as-kyuubi-data-source",level:3},{value:"Add MySQL JDBC Driver",id:"add-mysql-jdbc-driver",level:3},{value:"Start Kyuubi Server",id:"start-kyuubi-server",level:3},{value:"Example",id:"example",level:2},{value:"Connect to Kyuubi with Beeline",id:"connect-to-kyuubi-with-beeline",level:3},{value:"Execute Query to Kyuubi",id:"execute-query-to-kyuubi",level:3}],s={toc:c},y="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"use-kyuubi-with-doris"},"Use Kyuubi with Doris"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://kyuubi.apache.org/"},"Apache Kyuubi")," is a distributed and multi-tenant gateway to provide serverless SQL on Data\nWarehouses and Lakehouses.\nApache Kyuubi is providing varied protocols like Thrift, Trino, MySQL etc., to the engines including Spark, Flink, Hive,\nJDBC, etc.\nDoris could be connected as JDBC data source with Doris dialect supported in Apache Kyuubi.\nApache Kyuubi also provides a series of useful features including HA, service discovery,\nunified authentication, engine lifecycle management, etc."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"download-apache-kyuubi"},"Download Apache Kyuubi"),(0,i.yg)("p",null,"Download Apache Kyuubi from ",(0,i.yg)("a",{parentName:"p",href:"https://kyuubi.apache.org/zh/releases.html"},"https://kyuubi.apache.org/zh/releases.html")),(0,i.yg)("p",null,"Get Apache Kyuubi 1.6.0 or above and extract it to folder\u3002"),(0,i.yg)("h3",{id:"config-doris-as-kyuubi-data-source"},"Config Doris as Kyuubi data source"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Update Kyuubi configurations in ",(0,i.yg)("inlineCode",{parentName:"li"},"$KYUUBI_HOME/conf/kyuubi-defaults.conf"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"kyuubi.engine.type=jdbc\nkyuubi.engine.jdbc.type=doris\nkyuubi.engine.jdbc.driver.class=com.mysql.cj.jdbc.Driver\nkyuubi.engine.jdbc.connection.url=jdbc:mysql://xxx:xxx\nkyuubi.engine.jdbc.connection.user=***\nkyuubi.engine.jdbc.connection.password=***\n")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.type"),(0,i.yg)("td",{parentName:"tr",align:null},"Engine Type, specify to ",(0,i.yg)("inlineCode",{parentName:"td"},"jdbc"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.type"),(0,i.yg)("td",{parentName:"tr",align:null},"JDBC service type, specify to ",(0,i.yg)("inlineCode",{parentName:"td"},"doris"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.driver.class"),(0,i.yg)("td",{parentName:"tr",align:null},"JDBC driver class name, specify to ",(0,i.yg)("inlineCode",{parentName:"td"},"com.mysql.cj.jdbc.Driver"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.url"),(0,i.yg)("td",{parentName:"tr",align:null},"JDBC url to Doris FE")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.user"),(0,i.yg)("td",{parentName:"tr",align:null},"JDBC username")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"kyuubi.engine.jdbc.connection.password"),(0,i.yg)("td",{parentName:"tr",align:null},"JDBC password")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For other configuration in Apache Kyuubi, please refer\nto ",(0,i.yg)("a",{parentName:"li",href:"https://kyuubi.readthedocs.io/en/master/deployment/settings.html"},"Apache Kyuubi Configuration Docs")," .")),(0,i.yg)("h3",{id:"add-mysql-jdbc-driver"},"Add MySQL JDBC Driver"),(0,i.yg)("p",null,"Copy the Mysql JDBC Driver ",(0,i.yg)("inlineCode",{parentName:"p"},"mysql-connector-j-8.X.X.jar")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/externals/engines/jdbc"),"."),(0,i.yg)("h3",{id:"start-kyuubi-server"},"Start Kyuubi Server"),(0,i.yg)("p",null,"Run ",(0,i.yg)("inlineCode",{parentName:"p"},"$KYUUBI_HOME/bin/kyuubi start"),".\nAfter started, port 10009 by default is listened by Kyuubi Server with Thrift protocol."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"The following example shows basic example of querying Doris with Kyuubi with beeline CLI in Thrift protocol."),(0,i.yg)("h3",{id:"connect-to-kyuubi-with-beeline"},"Connect to Kyuubi with Beeline"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'$ $KYUUBI_HOME/bin/beeline -u "jdbc:hive2://xxxx:10009/"\n')),(0,i.yg)("h3",{id:"execute-query-to-kyuubi"},"Execute Query to Kyuubi"),(0,i.yg)("p",null,"Execute query statement ",(0,i.yg)("inlineCode",{parentName:"p"},"select * from demo.expamle_tbl;")," with query results returned."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"0: jdbc:hive2://xxxx:10009/> select * from demo.example_tbl;\n\n2023-03-07 09:29:14.771 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: PENDING_STATE -> RUNNING_STATE, statement:\nselect * from demo.example_tbl\n2023-03-07 09:29:14.786 INFO org.apache.kyuubi.operation.ExecuteStatement: Query[bdc59dd0-ceea-4c02-8c3a-23424323f5db] in FINISHED_STATE\n2023-03-07 09:29:14.787 INFO org.apache.kyuubi.operation.ExecuteStatement: Processing anonymous's query[bdc59dd0-ceea-4c02-8c3a-23424323f5db]: RUNNING_STATE -> FINISHED_STATE, time taken: 0.015 seconds\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| user_id  |    date     | city  | age  | sex  |    last_visit_date     | cost  | max_dwell_time  | min_dwell_time  |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n| 10000    | 2017-10-01  | \u5317\u4eac   | 20   | 0    | 2017-10-01 07:00:00.0  | 70    | 10              | 2               |\n| 10001    | 2017-10-01  | \u5317\u4eac   | 30   | 1    | 2017-10-01 17:05:45.0  | 4     | 22              | 22              |\n| 10002    | 2017-10-02  | \u4e0a\u6d77   | 20   | 1    | 2017-10-02 12:59:12.0  | 400   | 5               | 5               |\n| 10003    | 2017-10-02  | \u5e7f\u5dde   | 32   | 0    | 2017-10-02 11:20:00.0  | 60    | 11              | 11              |\n| 10004    | 2017-10-01  | \u6df1\u5733   | 35   | 0    | 2017-10-01 10:00:15.0  | 200   | 3               | 3               |\n| 10004    | 2017-10-03  | \u6df1\u5733   | 35   | 0    | 2017-10-03 10:20:22.0  | 22    | 6               | 6               |\n+----------+-------------+-------+------+------+------------------------+-------+-----------------+-----------------+\n6 rows selected (0.068 seconds)\n")))}d.isMDXComponent=!0}}]);