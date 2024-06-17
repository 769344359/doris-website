"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58654],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>g});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(a),d=r,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return a?t.createElement(g,l(l({ref:n},m),{},{components:a})):t.createElement(g,l({ref:n},m))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},339367:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=a(58168),r=(a(296540),a(15680));const i={title:"Minimum Number of Replicas Loading",language:"en"},l=void 0,o={unversionedId:"data-operate/import/min-load-replica-num",id:"data-operate/import/min-load-replica-num",title:"Minimum Number of Replicas Loading",description:"\x3c!--",source:"@site/docs/data-operate/import/min-load-replica-num.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/min-load-replica-num",permalink:"/docs/dev/data-operate/import/min-load-replica-num",draft:!1,tags:[],version:"current",frontMatter:{title:"Minimum Number of Replicas Loading",language:"en"},sidebar:"docs",previous:{title:"Converting Source Data",permalink:"/docs/dev/data-operate/import/load-data-convert"},next:{title:"Loading Strict Mode",permalink:"/docs/dev/data-operate/import/load-strict-mode"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Min load replica num for single table",id:"min-load-replica-num-for-single-table",level:3},{value:"Global min load replica num for all tables",id:"global-min-load-replica-num-for-all-tables",level:3},{value:"Other cases",id:"other-cases",level:3}],m={toc:c},s="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(s,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Importing data requires more than half of the replicas to be written successfully. However, it is not flexible enough and may cause inconvenience in some scenarios."),(0,r.yg)("p",null,"For example, in the case of two replicas, to import data, both replicas need to be written successfully. This means that no replica is allowed to be unavailable during the data import process. This greatly affects the availability of the cluster."),(0,r.yg)("p",null,"In order to solve the above problems, Doris allows users to set the minimum number of write replicas. For the task of importing data, when the number of replicas it successfully writes is greater than or equal to the minimum number of replicas written, the import is successful."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"min-load-replica-num-for-single-table"},"Min load replica num for single table"),(0,r.yg)("p",null,"You can set the table property ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," for a single olap table. The valid value of this property must be greater than 0 and not exceed ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_num"),"\uff08the number of replicas of the table\uff09. Its default value is -1, indicating that the property is not enabled."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," of the table can be set when creating the table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_table1\n(\n    k1 INT,\n    k2 INT\n)\nDUPLICATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS 5\nPROPERTIES\n(\n    'replication_num' = '2',\n    'min_load_replica_num' = '1'\n);\n")),(0,r.yg)("p",null,"For an existing table, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," to modify its ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_table1\nSET ( 'min_load_replica_num' = '1');\n")),(0,r.yg)("p",null,"You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," to view the table property ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW CREATE TABLE test_table1;\n")),(0,r.yg)("p",null,"The PROPERTIES of the output will contain ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num"),". e.g."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'Create Table: CREATE TABLE `test_table1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 2",\n"min_load_replica_num" = "1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false",\n"enable_single_replica_compaction" = "false"\n);\n')),(0,r.yg)("h3",{id:"global-min-load-replica-num-for-all-tables"},"Global min load replica num for all tables"),(0,r.yg)("p",null,"You can set FE configuration item ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," for all olap tables. The valid value of this configuration item must be greater than 0. Its default value is -1, which means that the global minimum number of load replicas is not enabled."),(0,r.yg)("p",null,"For a table, if the table property ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," is valid (>0), then the table will ignore the global configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num"),". Otherwise, if the global configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," is valid (>0), then the minimum number of load replicas for the table will be equal to ",(0,r.yg)("inlineCode",{parentName:"p"},"min(FE.conf.min_load_replica_num, table.replication_num/2 + 1)"),"."),(0,r.yg)("p",null,"For viewing and modification of FE configuration items, you can refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/config/fe-config"},"here"),"."),(0,r.yg)("h3",{id:"other-cases"},"Other cases"),(0,r.yg)("p",null,"If the table property ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," is not enabled (<=0), and the global configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"min_load_replica_num")," is not enabled(<=0), then the data import still needs to be successfully written to the majority replica. At this point, the minimum number of write replicas for the table is equal to ",(0,r.yg)("inlineCode",{parentName:"p"},"table.replication_num/2 + 1"),"."))}u.isMDXComponent=!0}}]);