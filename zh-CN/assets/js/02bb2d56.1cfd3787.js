"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48730],{15680:(e,n,l)=>{l.d(n,{xA:()=>h,yg:()=>v});var t=l(296540);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},h=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=u(l),d=a,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return l?t.createElement(v,r(r({ref:n},h),{},{components:l})):t.createElement(v,r({ref:n},h))}));function v(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=l[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}d.displayName="MDXCreateElement"},579044:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=l(58168),a=(l(296540),l(15680));const i={title:"Hive HLL UDF",language:"zh-CN"},r=void 0,o={unversionedId:"ecosystem/hive-hll-udf",id:"version-2.1/ecosystem/hive-hll-udf",title:"Hive HLL UDF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/hive-hll-udf.md",sourceDirName:"ecosystem",slug:"/ecosystem/hive-hll-udf",permalink:"/zh-CN/docs/ecosystem/hive-hll-udf",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Hive HLL UDF",language:"zh-CN"},sidebar:"docs",previous:{title:"Hive Bitmap UDF",permalink:"/zh-CN/docs/ecosystem/hive-bitmap-udf"},next:{title:"Apache Superset",permalink:"/zh-CN/docs/ecosystem/bi/apache-superset"}},s={},u=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5728 Hive \u4e2d\u521b\u5efa HLL \u7c7b\u578b\u548c\u666e\u901a\u8868\uff0c\u5f80\u666e\u901a\u8868\u63d2\u5165\u6d4b\u8bd5\u6570\u636e",id:"\u5728-hive-\u4e2d\u521b\u5efa-hll-\u7c7b\u578b\u548c\u666e\u901a\u8868\u5f80\u666e\u901a\u8868\u63d2\u5165\u6d4b\u8bd5\u6570\u636e",level:3},{value:"Hive HLL UDF \u4f7f\u7528\uff1a",id:"hive-hll-udf-\u4f7f\u7528",level:3},{value:"Hive HLL UDF  \u8bf4\u660e",id:"hive-hll-udf--\u8bf4\u660e",level:3},{value:"Hive HLL \u5bfc\u5165 doris",id:"hive-hll-\u5bfc\u5165-doris",level:2},{value:"\u65b9\u6cd5\u4e00\uff1aCatalog\uff08\u63a8\u8350\uff09",id:"\u65b9\u6cd5\u4e00catalog\u63a8\u8350",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1aSpark Load",id:"\u65b9\u6cd5\u4e8cspark-load",level:3}],h={toc:u},p="wrapper";function c(e){let{components:n,...l}=e;return(0,a.yg)(p,(0,t.A)({},h,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hive-hll-udf"},"Hive HLL UDF"),(0,a.yg)("p",null," Hive HLL UDF \u63d0\u4f9b\u4e86\u5728 hive \u8868\u4e2d\u751f\u6210 HLL \u8fd0\u7b97\u7b49 UDF\uff0cHive \u4e2d\u7684 HLL \u4e0e Doris HLL \u5b8c\u5168\u4e00\u81f4\uff0cHive \u4e2d\u7684 HLL \u53ef\u4ee5\u901a\u8fc7 Spark HLL Load \u5bfc\u5165 Doris\u3002\u5173\u4e8e HLL \u66f4\u591a\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/query/duplicate/using-hll"},"\u4f7f\u7528 HLL \u8fd1\u4f3c\u53bb\u91cd")),(0,a.yg)("p",null," \u51fd\u6570\u7b80\u4ecb\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"UDAF"),(0,a.yg)("p",{parentName:"li"},"\xb7 to_hll\uff1a\u805a\u5408\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a Doris Hll \u5217\uff0c\u7c7b\u4f3c\u4e8e to_bitmap \u51fd\u6570"),(0,a.yg)("p",{parentName:"li"},"\xb7 hll_union\uff1a\u805a\u5408\u51fd\u6570\uff0c\u529f\u80fd\u540c Doris \u7684 BE \u540c\u540d\u51fd\u6570\uff0c\u8ba1\u7b97\u5206\u7ec4\u7684\u5e76\u96c6\uff0c\u8fd4\u56de\u4e00\u4e2a Doris HLL \u5217\uff0c\u7c7b\u4f3c\u4e8e bitmap_union \u51fd\u6570")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"UDF"),(0,a.yg)("p",{parentName:"li"},"   \xb7 hll_cardinality\uff1a\u8fd4\u56de\u6dfb\u52a0\u5230 HLL \u7684\u4e0d\u540c\u5143\u7d20\u7684\u6570\u91cf\uff0c\u7c7b\u4f3c\u4e8e bitmap_count \u51fd\u6570"),(0,a.yg)("p",{parentName:"li"},"\u4e3b\u8981\u76ee\u7684\uff1a")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u51cf\u5c11\u6570\u636e\u5bfc\u5165 Doris \u65f6\u95f4 , \u9664\u53bb\u4e86\u6784\u5efa\u5b57\u5178\u3001HLL \u9884\u805a\u5408\u7b49\u6d41\u7a0b\uff1b")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8282\u7701 Hive \u5b58\u50a8\uff0c\u4f7f\u7528 HLL \u5bf9\u6570\u636e\u538b\u7f29\uff0c\u6781\u5927\u51cf\u5c11\u4e86\u5b58\u50a8\u6210\u672c\uff0c\u76f8\u5bf9\u4e8e Bitmap \u7684\u7edf\u8ba1\u66f4\u52a0\u8282\u7701\u5b58\u50a8\uff1b")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u63d0\u4f9b\u5728 Hive \u4e2d HLL \u7684\u7075\u6d3b\u8fd0\u7b97\uff1a\u5e76\u96c6\u3001\u57fa\u6570\u7edf\u8ba1\uff0c\u8ba1\u7b97\u540e\u7684 HLL \u4e5f\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 Doris\uff1b"),(0,a.yg)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a\nHLL \u7edf\u8ba1\u4e3a\u8fd1\u4f3c\u8ba1\u7b97\u6709\u4e00\u5b9a\u8bef\u5dee\uff0c\u5927\u6982 1%~2% \u5de6\u53f3\u3002"))),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.yg)("h3",{id:"\u5728-hive-\u4e2d\u521b\u5efa-hll-\u7c7b\u578b\u548c\u666e\u901a\u8868\u5f80\u666e\u901a\u8868\u63d2\u5165\u6d4b\u8bd5\u6570\u636e"},"\u5728 Hive \u4e2d\u521b\u5efa HLL \u7c7b\u578b\u548c\u666e\u901a\u8868\uff0c\u5f80\u666e\u901a\u8868\u63d2\u5165\u6d4b\u8bd5\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u6570\u636e\u5e93\uff0c\u4ee5 hive_test \u4e3a\u4f8b\uff1a\nuse hive_test;\n\n-- \u4f8b\u5b50\uff1a\u521b\u5efa Hive HLL \u8868\nCREATE TABLE IF NOT EXISTS `hive_hll_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'hll'\n) comment  'comment'\n\n-- \u4f8b\u5b50\uff1a\u521b\u5efa\u666e\u901a Hive \u8868\uff0c\u63d2\u5165\u6d4b\u8bd5\u6570\u636e\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n\ninsert into hive_table select 1, 'a', 'b', 12345;\ninsert into hive_table select 1, 'a', 'c', 12345;\ninsert into hive_table select 2, 'b', 'c', 23456;\ninsert into hive_table select 3, 'c', 'd', 34567;\n")),(0,a.yg)("h3",{id:"hive-hll-udf-\u4f7f\u7528"},"Hive HLL UDF \u4f7f\u7528\uff1a"),(0,a.yg)("p",null,"Hive HLL UDF \u9700\u8981\u5728 Hive/Spark \u4e2d\u4f7f\u7528\uff0c\u9996\u5148\u9700\u8981\u7f16\u8bd1 fe \u5f97\u5230 hive-udf.jar\u3002\n\u7f16\u8bd1\u51c6\u5907\u5de5\u4f5c\uff1a\u5982\u679c\u8fdb\u884c\u8fc7 ldb \u6e90\u7801\u7f16\u8bd1\u53ef\u76f4\u63a5\u7f16\u8bd1 fe\uff0c\u5982\u679c\u6ca1\u6709\u8fdb\u884c\u8fc7 ldb \u6e90\u7801\u7f16\u8bd1\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5 thrift\uff0c\u53ef\u53c2\u8003\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/community/developer-guide/fe-idea-dev/"},"FE \u5f00\u53d1\u73af\u5883\u642d\u5efa")," \u4e2d\u7684\u7f16\u8bd1\u4e0e\u5b89\u88c5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--clone doris \u6e90\u7801\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n\n--\u5b89\u88c5 thrift\uff0c\u5df2\u5b89\u88c5\u53ef\u7565\u8fc7\n--\u8fdb\u5165 fe \u76ee\u5f55\ncd fe\n\n--\u6267\u884c maven \u6253\u5305\u547d\u4ee4\uff08fe \u7684\u5b50 module \u4f1a\u5168\u90e8\u6253\u5305\uff09\nmvn package -Dmaven.test.skip=true\n--\u4e5f\u53ef\u4ee5\u53ea\u6253 hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n\n-- \u6253\u5305\u7f16\u8bd1\u5b8c\u6210\u8fdb\u5165 hive-udf \u76ee\u5f55\u4f1a\u6709 target \u76ee\u5f55\uff0c\u91cc\u9762\u5c31\u4f1a\u6709\u6253\u5305\u5b8c\u6210\u7684 hive-udf.jar \u5305\n-- \u9700\u8981\u5c06\u7f16\u8bd1\u597d\u7684 hive-udf.jar \u5305\u4e0a\u4f20\u81f3 HDFS\uff0c\u8fd9\u91cc\u4ee5\u4f20\u81f3 hdfs \u7684\u6839\u76ee\u5f55\u4e3a\u793a\u4f8b\uff1a\nhdfs dfs -put hive-udf/target/hive-udf.jar /\n\n")),(0,a.yg)("p",null,"\u4e0b\u9762\u8fdb\u5165 Hive \u4e2d\u8fdb\u884c SQL \u8bed\u53e5\u64cd\u4f5c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u52a0\u8f7d hive hll udf jar \u5305\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u66f4\u6539 hostname \u548c port  \nadd jar hdfs://hostname:port/hive-udf.jar;\n\n-- \u521b\u5efa UDAF \u51fd\u6570\ncreate temporary function to_hll as 'org.apache.doris.udf.ToHllUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\ncreate temporary function hll_union as 'org.apache.doris.udf.HllUnionUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\n\n\n-- \u521b\u5efa UDF \u51fd\u6570\ncreate temporary function hll_cardinality as 'org.apache.doris.udf.HllCardinalityUDF' USING JAR 'hdfs://node:9000/hive-udf.jar';\n\n\n-- \u4f8b\u5b50\uff1a\u901a\u8fc7 to_hll \u8fd9\u4e2a UDAF \u8fdb\u884c\u805a\u5408\u751f\u6210 hll \u5199\u5165 Hive HLL \u8868\ninsert into hive_hll_table\nselect \n    k1,\n    k2,\n    k3,\n    to_hll(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- \u4f8b\u5b50\uff1ahll_cardinality \u8ba1\u7b97 hll \u4e2d\u5143\u7d20\u4e2a\u6570\nselect k1, k2, k3, hll_cardinality(uuid) from hive_hll_table;\n+-----+-----+-----+------+\n| k1  | k2  | k3  | _c3  |\n+-----+-----+-----+------+\n| 1   | a   | b   | 1    |\n| 1   | a   | c   | 1    |\n| 2   | b   | c   | 1    |\n| 3   | c   | d   | 1    |\n+-----+-----+-----+------+\n\n-- \u4f8b\u5b50\uff1ahll_union \u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 hll \u5e76\u96c6\uff0c\u5c06\u8fd4\u56de 3 \u884c\nselect k1, hll_union(uuid) from hive_hll_table group by k1;\n\n-- \u4f8b\u5b50\uff1a\u4e5f\u53ef\u4ee5\u5408\u5e76\u540e\u7ee7\u7eed\u7edf\u8ba1\nselect k3, hll_cardinality(hll_union(uuid)) from hive_hll_table group by k3;\n+-----+------+\n| k3  | _c1  |\n+-----+------+\n| b   | 1    |\n| c   | 2    |\n| d   | 1    |\n+-----+------+\n")),(0,a.yg)("h3",{id:"hive-hll-udf--\u8bf4\u660e"},"Hive HLL UDF  \u8bf4\u660e"),(0,a.yg)("h2",{id:"hive-hll-\u5bfc\u5165-doris"},"Hive HLL \u5bfc\u5165 doris"),(0,a.yg)("version",{dev:!0},(0,a.yg)("h3",{id:"\u65b9\u6cd5\u4e00catalog\u63a8\u8350"},"\u65b9\u6cd5\u4e00\uff1aCatalog\uff08\u63a8\u8350\uff09")),(0,a.yg)("p",null,"\u521b\u5efa Hive \u8868\u6307\u5b9a\u4e3a TEXT \u683c\u5f0f\uff0c\u5bf9\u4e8e Binary \u7c7b\u578b\uff0cHive \u4f1a\u4ee5 base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u4fdd\u5b58\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7 Hive Catalog \u7684\u5f62\u5f0f\uff0c\u76f4\u63a5\u5c06 HLL \u6570\u636e\u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-functions/hll-functions/hll-from-base64"},"hll_from_base64")," \u51fd\u6570\u63d2\u5165\u5230 Doris \u5185\u90e8\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4f8b\u5b50\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728 Hive \u4e2d\u521b\u5efa Hive \u8868")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `hive_hll_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'hll'\n) stored as textfile \n\n-- \u7136\u540e\u53ef\u4ee5\u6cbf\u7528\u524d\u9762\u7684\u6b65\u9aa4\u57fa\u4e8e\u666e\u901a\u8868\u4f7f\u7528 to_hll \u51fd\u6570\u5f80 hive_hll_table \u63d2\u5165\u6570\u636e\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/lakehouse/datalake-analytics/hive"},"\u5728 Doris \u4e2d\u521b\u5efa Catalog"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u521b\u5efa Doris \u5185\u8868")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `doris_test`.`doris_hll_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   varchar(10)           COMMENT '',\n    `k3`   varchar(10)           COMMENT '',\n    `uuid` HLL  HLL_UNION  COMMENT 'hll'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"\u4ece Hive \u63d2\u5165\u6570\u636e\u5230 Doris \u4e2d")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"insert into doris_hll_table select k1, k2, k3, hll_from_base64(uuid) from hive.hive_test.hive_hll_table;\n\n-- \u53ef\u4ee5\u67e5\u770b\u5bfc\u5165\u540e\u7684\u6570\u636e\uff0c\u7ed3\u5408 hll_to_base64 \u8fdb\u884c\u89e3\u7801\nselect *, hll_to_base64(uuid) from doris_hll_table;\n+------+------+------+------+---------------------+\n| k1   | k2   | k3   | uuid | hll_to_base64(uuid) |\n+------+------+------+------+---------------------+\n|    1 | a    | b    | NULL | AQFw+a9MhpKhoQ==    |\n|    1 | a    | c    | NULL | AQFw+a9MhpKhoQ==    |\n|    2 | b    | c    | NULL | AQGyB7kbWBxh+A==    |\n|    3 | c    | d    | NULL | AQFYbJB5VpNBhg==    |\n+------+------+------+------+---------------------+\n\n-- \u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f7f\u7528 Doris \u539f\u751f\u7684 HLL \u51fd\u6570\u8fdb\u884c\u7edf\u8ba1\uff0c\u53ef\u4ee5\u770b\u5230\u548c\u524d\u9762\u5728 Hive \u4e2d\u7edf\u8ba1\u7684\u7ed3\u679c\u4e00\u81f4\nselect k3, hll_cardinality(hll_union(uuid)) from doris_hll_table group by k3;\n+------+----------------------------------+\n| k3   | hll_cardinality(hll_union(uuid)) |\n+------+----------------------------------+\n| b    |                                1 |\n| d    |                                1 |\n| c    |                                2 |\n+------+----------------------------------+\n\n-- \u6b64\u65f6\uff0c\u67e5\u5916\u8868\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u67e5\u5bfc\u5165\u524d\u7684\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u3001\u5bf9\u6bd4\u4e5f\u80fd\u6821\u9a8c\u6570\u636e\u6b63\u786e\u6027\nselect k3, hll_cardinality(hll_union(hll_from_base64(uuid))) from hive.hive_test.hive_hll_table group by k3;\n+------+---------------------------------------------------+\n| k3   | hll_cardinality(hll_union(hll_from_base64(uuid))) |\n+------+---------------------------------------------------+\n| d    |                                                 1 |\n| b    |                                                 1 |\n| c    |                                                 2 |\n+------+---------------------------------------------------+\n")),(0,a.yg)("h3",{id:"\u65b9\u6cd5\u4e8cspark-load"},"\u65b9\u6cd5\u4e8c\uff1aSpark Load"),(0,a.yg)("p",null," \u8be6\u89c1\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/1.2/data-operate/import/import-way/spark-load-manual"},"Spark Load")," -> \u57fa\u672c\u64cd\u4f5c  -> \u521b\u5efa\u5bfc\u5165 (\u793a\u4f8b 3\uff1a\u4e0a\u6e38\u6570\u636e\u6e90\u662f hive binary \u7c7b\u578b\u60c5\u51b5)"))}c.isMDXComponent=!0}}]);