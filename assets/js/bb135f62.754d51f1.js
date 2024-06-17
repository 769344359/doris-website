"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19702],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>h});var l=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return a?l.createElement(h,i(i({ref:t},s),{},{components:a})):l.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n[c]="string"==typeof e?e:r,i[1]=n;for(var u=2;u<o;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},832455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var l=a(58168),r=(a(296540),a(15680));const o={title:"Release 2.1.2",language:"en"},i=void 0,n={unversionedId:"releasenotes/release-2.1.2",id:"version-2.1/releasenotes/release-2.1.2",title:"Release 2.1.2",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/releasenotes/release-2.1.2.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.1.2",permalink:"/docs/releasenotes/release-2.1.2",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Release 2.1.2",language:"en"},sidebar:"docs",previous:{title:"Release 2.1.3",permalink:"/docs/releasenotes/release-2.1.3"},next:{title:"Release 2.1.1",permalink:"/docs/releasenotes/release-2.1.1"}},p={},u=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Upgrade Problem",id:"upgrade-problem",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Bugfix",id:"bugfix",level:2}],s={toc:u},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,l.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"behavior-changed"},"Behavior Changed"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set the default value of the ",(0,r.yg)("inlineCode",{parentName:"li"},"data_consistence")," property of EXPORT to partition to make export more stable during load. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32830"},"https://github.com/apache/doris/pull/32830"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Some of MySQL Connector (eg, dotnet MySQL.Data) rely on variable's column type to make connection."),(0,r.yg)("p",{parentName:"li"},"eg, select @",(0,r.yg)("a",{parentName:"p",href:"%5B@autocommit%5D(https://github.com/autocommit)"},"@autocommit")," should with column type BIGINT, not BIT, otherwise it will throw error. So we change column type of @",(0,r.yg)("a",{parentName:"p",href:"https://github.com/autocommit"},"@autocommit")," to BIGINT. "))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33282"},"https://github.com/apache/doris/pull/33282"))),(0,r.yg)("h2",{id:"upgrade-problem"},"Upgrade Problem"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Normal workload group is not created when upgrade from 2.0 or other old versions. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33197"},"https://github.com/apache/doris/pull/33197"))),(0,r.yg)("h2",{id:"new-feature"},"New Feature"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Add processlist table in information_schema database, users could use this table to query active connections. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32511"},"https://github.com/apache/doris/pull/32511"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Add a new table valued function ",(0,r.yg)("inlineCode",{parentName:"li"},"LOCAL")," to allow access file system like shared storage. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris-website/pull/494"},"https://github.com/apache/doris-website/pull/494"))),(0,r.yg)("h2",{id:"optimization"},"Optimization"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Skip some useless process to make graceful stop more quickly in K8s env. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33212"},"https://github.com/apache/doris/pull/33212"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Add rollup table name in profile to help find the mv selection problem. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33137"},"https://github.com/apache/doris/pull/33137"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Add test connection function to DB2 database to allow user check the connection when create DB2 Catalog. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33335"},"https://github.com/apache/doris/pull/33335"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Add DNS Cache for FQDN to accelerate the connect process among BEs in K8s env. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32869"},"https://github.com/apache/doris/pull/32869"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Refresh external table's rowcount async to make the query plan more stable. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32997"},"https://github.com/apache/doris/pull/32997"))),(0,r.yg)("h2",{id:"bugfix"},"Bugfix"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Fix Iceberg Catalog of HMS and Hadoop do not support Iceberg properties like "io.manifest.cache-enabled" to enable manifest cache in Iceberg. ')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33113"},"https://github.com/apache/doris/pull/33113"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The offset params in ",(0,r.yg)("inlineCode",{parentName:"li"},"LEAD"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"LAG")," function could use 0 as offset. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33174"},"https://github.com/apache/doris/pull/33174"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Fix some timeout issues with load. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33077"},"https://github.com/apache/doris/pull/33077"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33260"},"https://github.com/apache/doris/pull/33260")))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Fix core problem related with ",(0,r.yg)("inlineCode",{parentName:"li"},"ARRAY"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"MAP"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"STRUCT")," compaction process. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33130"},"https://github.com/apache/doris/pull/33130"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33295"},"https://github.com/apache/doris/pull/33295")))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Fix runtime filter wait timeout. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33369"},"https://github.com/apache/doris/pull/33369"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Fix ",(0,r.yg)("inlineCode",{parentName:"li"},"unix_timestamp")," core for string input in auto partition. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32871"},"https://github.com/apache/doris/pull/32871"))))}g.isMDXComponent=!0}}]);