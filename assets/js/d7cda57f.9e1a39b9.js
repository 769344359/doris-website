"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57556],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),y=r,m=d["".concat(s,".").concat(y)]||d[y]||g[y]||i;return t?n.createElement(m,o(o({ref:a},c),{},{components:t})):n.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},215473:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const i={title:"Disk Capacity Management",language:"en"},o=void 0,l={unversionedId:"admin-manual/maint-monitor/disk-capacity",id:"version-2.1/admin-manual/maint-monitor/disk-capacity",title:"Disk Capacity Management",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/maint-monitor/disk-capacity.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/disk-capacity",permalink:"/docs/admin-manual/maint-monitor/disk-capacity",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Disk Capacity Management",language:"en"},sidebar:"docs",previous:{title:"Monitor Metrics",permalink:"/docs/admin-manual/maint-monitor/monitor-metrics/metrics"},next:{title:"Data replica management",permalink:"/docs/admin-manual/maint-monitor/tablet-repair-and-balance"}},s={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"FE Parameter",id:"fe-parameter",level:2},{value:"BE Parameter",id:"be-parameter",level:2},{value:"Disk Capacity Release",id:"disk-capacity-release",level:2}],c={toc:p},d="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"disk-capacity-management"},"Disk Capacity Management"),(0,r.yg)("p",null,"This document mainly introduces system parameters and processing strategies related to disk storage capacity. "),(0,r.yg)("p",null,"If Doris' data disk capacity is not controlled, the process will hang because the disk is full. Therefore, we monitor the disk usage and remaining capacity, and control various operations in the Doris system by setting different warning levels, and try to avoid the situation where the disk is full. "),(0,r.yg)("h2",{id:"glossary"},"Glossary"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Data Dir: Data directory, each data directory specified in the ",(0,r.yg)("inlineCode",{parentName:"li"},"storage_root_path")," of the BE configuration file ",(0,r.yg)("inlineCode",{parentName:"li"},"be.conf"),". Usually a data directory corresponds to a disk, so the following ",(0,r.yg)("strong",{parentName:"li"},"disk")," also refers to a data directory. ")),(0,r.yg)("h2",{id:"basic-principles"},"Basic Principles"),(0,r.yg)("p",null,"BE will report disk usage to FE on a regular basis (every minute). FE records these statistical values and restricts various operation requests based on these statistical values. "),(0,r.yg)("p",null,"Two thresholds, ",(0,r.yg)("strong",{parentName:"p"},"High Watermark")," and ",(0,r.yg)("strong",{parentName:"p"},"Flood Stage"),", are set in FE. Flood Stage is higher than High Watermark. When the disk usage is higher than High Watermark, Doris will restrict the execution of certain operations (such as replica balancing, etc.). If it is higher than Flood Stage, certain operations (such as load data) will be prohibited. "),(0,r.yg)("p",null,"At the same time, a ",(0,r.yg)("strong",{parentName:"p"},"Flood Stage")," is also set on the BE. Taking into account that FE cannot fully detect the disk usage on BE in a timely manner, and cannot control certain BE operations (such as Compaction). Therefore, Flood Stage on the BE is used for the BE to actively refuse and stop certain operations to achieve the purpose of self-protection. "),(0,r.yg)("h2",{id:"fe-parameter"},"FE Parameter"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"High Watermark:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"storage_high_watermark_usage_percent: default value is 85 (85%).\nstorage_min_left_capacity_bytes: default value is 2GB.\n")),(0,r.yg)("p",null,"When disk capacity ",(0,r.yg)("strong",{parentName:"p"},"more than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_high_watermark_usage_percent"),", ",(0,r.yg)("strong",{parentName:"p"},"or")," disk free capacity ",(0,r.yg)("strong",{parentName:"p"},"less than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_min_left_capacity_bytes"),", the disk will no longer be used as the destination path for the following operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tablet Balance"),(0,r.yg)("li",{parentName:"ul"},"Colocation Relocation"),(0,r.yg)("li",{parentName:"ul"},"Decommission")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Flood Stage:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"storage_flood_stage_usage_percent: default value is 95 (95%).\nstorage_flood_stage_left_capacity_bytes: default value is 1GB.\n")),(0,r.yg)("p",null,"When disk capacity ",(0,r.yg)("strong",{parentName:"p"},"more than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_flood_stage_usage_percent"),", ",(0,r.yg)("strong",{parentName:"p"},"or")," disk free capacity ",(0,r.yg)("strong",{parentName:"p"},"less than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_flood_stage_left_capacity_bytes"),", the disk will no longer be used as the destination path for the following operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tablet Balance"),(0,r.yg)("li",{parentName:"ul"},"Colocation Relocation"),(0,r.yg)("li",{parentName:"ul"},"Replica make up"),(0,r.yg)("li",{parentName:"ul"},"Restore"),(0,r.yg)("li",{parentName:"ul"},"Load/Insert")),(0,r.yg)("h2",{id:"be-parameter"},"BE Parameter"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Flood Stage:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"storage_flood_stage_usage_percent: default value is 90 (90%).\nstorage_flood_stage_left_capacity_bytes: default value is 1GB.\n")),(0,r.yg)("p",null,"When disk capacity ",(0,r.yg)("strong",{parentName:"p"},"more than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_flood_stage_usage_percent"),", ",(0,r.yg)("strong",{parentName:"p"},"and")," disk free capacity ",(0,r.yg)("strong",{parentName:"p"},"less than")," ",(0,r.yg)("inlineCode",{parentName:"p"},"storage_flood_stage_left_capacity_bytes"),", the following operations on this disk will be prohibited:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Base/Cumulative Compaction"),(0,r.yg)("li",{parentName:"ul"},"Data load"),(0,r.yg)("li",{parentName:"ul"},"Clone Task (Usually occurs when the replica is repaired or balanced.)"),(0,r.yg)("li",{parentName:"ul"},"Push Task (Occurs during the Loading phase of Hadoop import, and the file is downloaded. )"),(0,r.yg)("li",{parentName:"ul"},"Alter Task (Schema Change or Rollup Task.)"),(0,r.yg)("li",{parentName:"ul"},"Download Task (The Downloading phase of the recovery operation.)\n")),(0,r.yg)("h2",{id:"disk-capacity-release"},"Disk Capacity Release"),(0,r.yg)("p",null,"When the disk capacity is higher than High Watermark or even Flood Stage, many operations will be prohibited. At this time, you can try to reduce the disk usage and restore the system in the following ways. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete table or partition "),(0,r.yg)("p",{parentName:"li"},"  By deleting tables or partitions, you can quickly reduce the disk space usage and restore the cluster.\n",(0,r.yg)("strong",{parentName:"p"},"Note: Only the ",(0,r.yg)("inlineCode",{parentName:"strong"},"DROP")," operation can achieve the purpose of quickly reducing the disk space usage, the ",(0,r.yg)("inlineCode",{parentName:"strong"},"DELETE")," operation cannot.")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"DROP TABLE tbl;\nALTER TABLE tbl DROP PARTITION p1;\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE expansion"),(0,r.yg)("p",{parentName:"li"},"  After backend expansion, data tablets will be automatically balanced to BE nodes with lower disk usage. The expansion operation will make the cluster reach a balanced state in a few hours or days depending on the amount of data and the number of nodes.\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Modify replica of a table or partition "),(0,r.yg)("p",{parentName:"li"},"  You can reduce the number of replica of a table or partition. For example, the default 3 replica can be reduced to 2 replica. Although this method reduces the reliability of the data, it can quickly reduce the disk usage rate and restore the cluster to normal.\nThis method is usually used in emergency recovery systems. Please restore the number of copies to 3 after reducing the disk usage rate by expanding or deleting data after recovery.",(0,r.yg)("br",{parentName:"p"}),"\n","Modifying the replica operation takes effect instantly, and the backends will automatically and asynchronously delete the redundant replica. "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'ALTER TABLE tbl MODIFY PARTITION p1 SET("replication_num" = "2");\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete unnecessary files "),(0,r.yg)("p",{parentName:"li"},"  When the BE has crashed because the disk is full and cannot be started (this phenomenon may occur due to untimely detection of FE or BE), you need to delete some temporary files in the data directory to ensure that the BE process can start.\nFiles in the following directories can be deleted directly: "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"log/: Log files in the log directory. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"snapshot/: Snapshot files in the snapshot directory. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"trash/ Trash files in the trash directory. "),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"This operation will affect ",(0,r.yg)("a",{parentName:"strong",href:"/docs/admin-manual/data-admin/delete-recover"},"Restore data from BE Recycle Bin"),".")),(0,r.yg)("p",{parentName:"li"},"If the BE can still be started, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN CLEAN TRASH ON(BackendHost:BackendHeartBeatPort);")," to actively clean up temporary files. ",(0,r.yg)("strong",{parentName:"p"},"all trash files")," and expired snapshot files will be cleaned up, ",(0,r.yg)("strong",{parentName:"p"},"This will affect the operation of restoring data from the trash bin"),"."))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'If you do not manually execute `ADMIN CLEAN TRASH`, the system will still automatically execute the cleanup within a few minutes to tens of minutes.There are two situations as follows: \n* If the disk usage does not reach 90% of the **Flood Stage**, expired trash files and expired snapshot files will be cleaned up. At this time, some recent files will be retained without affecting the recovery of data. \n* If the disk usage has reached 90% of the **Flood Stage**, **all trash files** and expired snapshot files will be cleaned up, **This will affect the operation of restoring data from the trash bin**.\n\nThe time interval for automatic execution can be changed by `max_garbage_sweep_interval` and `min_garbage_sweep_interval` in the configuration items. \n\nWhen the recovery fails due to lack of trash files, the following results may be returned: \n\n```\n{"status": "Fail","msg": "can find tablet path in trash"}\n```\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete data file (dangerous!!!)"),(0,r.yg)("p",{parentName:"li"},"  When none of the above operations can free up capacity, you need to delete data files to free up space. The data file is in the ",(0,r.yg)("inlineCode",{parentName:"p"},"data/")," directory of the specified data directory. To delete a tablet, you must first ensure that at least one replica of the tablet is normal, otherwise ",(0,r.yg)("strong",{parentName:"p"},"deleting the only replica will result in data loss"),". "),(0,r.yg)("p",{parentName:"li"},"  Suppose we want to delete the tablet with id 12345: "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Find the directory corresponding to Tablet, usually under ",(0,r.yg)("inlineCode",{parentName:"p"},"data/shard_id/tablet_id/"),". like: "),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"data/0/12345/"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Record the tablet id and schema hash. The schema hash is the name of the next-level directory of the previous step. The following is 352781111: "),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"data/0/12345/352781111"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete the data directory: "),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -rf data/0/12345/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Delete tablet metadata refer to ",(0,r.yg)("a",{parentName:"p",href:"./tablet-meta-tool.md"},"Tablet metadata management tool")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"./lib/meta_tool --operation=delete_header --root_path=/path/to/root_path --tablet_id=12345 --schema_hash= 352781111")))))))}g.isMDXComponent=!0}}]);