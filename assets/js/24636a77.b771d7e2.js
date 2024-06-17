"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66857],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},916830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"Get Profile",language:"en"},o=void 0,l={unversionedId:"query/query-analysis/get-profile",id:"version-2.1/query/query-analysis/get-profile",title:"Get Profile",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/query-analysis/get-profile.md",sourceDirName:"query/query-analysis",slug:"/query/query-analysis/get-profile",permalink:"/docs/query/query-analysis/get-profile",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Get Profile",language:"en"},sidebar:"docs",previous:{title:"High-Concurrency Point Query",permalink:"/docs/query/high-concurrent-point-query"},next:{title:"Statistics of query execution",permalink:"/docs/query/query-analysis/query-profile"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Request",id:"request",level:2},{value:"The Doris cluster can normally access the external network",id:"the-doris-cluster-can-normally-access-the-external-network",level:2},{value:"Doris cluster\u2019s access to the external network is restricted",id:"doris-clusters-access-to-the-external-network-is-restricted",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,r.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"background"},"Background"),(0,a.yg)("p",null,"We often encounter situations where the execution time of the corresponding SQL is less than expected. In order to optimize the SQL to achieve the expected Query delay, through the Profile we can see what optimizations can be done. Now we will explain how to get the Profile corresponding to the Query in different environments."),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"HTTP://FE_IP:HTTP_PORT"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"GET /API/Profile")),(0,a.yg)("h2",{id:"the-doris-cluster-can-normally-access-the-external-network"},"The Doris cluster can normally access the external network"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Enable profile reporting parameters enable_profile"),(0,a.yg)("p",{parentName:"li"},"This parameter turns on the session variable. It is not recommended to turn this variable on globally."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"--open variable\nmysql> set enable_profile=true;\nQuery OK, 0 rows affected (0.00 sec)\n\n--Confirm whether the variable is opened normally\nmysql> show variables like '%profile%';\n+----------------+-------+---------------+---------+\n| Variable_name  | Value | Default_Value | Changed |\n+----------------+-------+---------------+---------+\n| enable_profile | true  | false         | 1       |\n+----------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Execute the corresponding query"),(0,a.yg)("p",{parentName:"li"},"In the case of a cluster with multiple fes, you need to execute the corresponding query on the fes that enable profile reporting parameters. The parameters do not take effect globally."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"--open variable\nmysql> set enable_profile=true;\nQuery OK, 0 rows affected (0.00 sec)\n--Confirm whether the variable is opened normally\nmysql> show variables like '%profile%';\n+----------------+-------+---------------+---------+\n| Variable_name  | Value | Default_Value | Changed |\n+----------------+-------+---------------+---------+\n| enable_profile | true  | false         | 1       |\n+----------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n\n--Execute the corresponding Query\nmysql> select id,name from test.test where name like \"%RuO%\";\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n| id                        | name                                                                                                                        |\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n| 1ZWXYGbb8nr5Pi29J4cEMyEMb | ZN1nqzBRSl1rTrr99rnX1aplxhRuOUTLw6so7rzjlRQ317gTPxh0dHljmrARDJjH7FjRkJW9c7YuUBmWikq7eNgmFKJPreWirDrGrFzUYH4eP6kDtSA3UTnNIIj |\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Get Profile"),(0,a.yg)("p",{parentName:"li"},"When the cluster has multiple fes, you need to access the QueryProfile page of the FE HTTP interface (HTTP://FE_IP:HTTP_PORT) that executes the corresponding query. Click the corresponding Profile ID to view the corresponding Profile. You can also download the corresponding Profile in the Profile interface."),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("img",{alt:"profile1.png",src:t(198936).A,width:"1280",height:"256"}),"\n",(0,a.yg)("img",{alt:"profile2.png",src:t(373427).A,width:"1280",height:"561"})))),(0,a.yg)("h2",{id:"doris-clusters-access-to-the-external-network-is-restricted"},"Doris cluster\u2019s access to the external network is restricted"),(0,a.yg)("p",null,"When the cluster cannot access the external network normally, it needs to obtain the corresponding profile through the API (HTTP://FE_IP:HTTP_PORT/API/Profile?Query_ID=). The IP and PORT refer to the IP and PORT corresponding to FE that executes the corresponding Query. At this time, the first two steps of obtaining the Profile corresponding to the Query are the same as when accessing the external network normally. There will be a difference in the third step of obtaining the Profile."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Get Profile")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Find the corresponding Profile ID"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'--Find the Profile ID according to the corresponding query\nmysql> show query profile "/";\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n| Profile ID                        | Task Type | Start Time          | End Time            | Total | Task State | User | Default Db | Sql Statement                                         |\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n| 1b0bb22689734d30-bbe56e17c2ff21dc | QUERY     | 2024-02-28 11:00:17 | 2024-02-28 11:00:17 | 7ms   | EOF        | root |            | select id,name from test.test where name like "%RuO%" |\n| 202fb174510c4772-965289e8f7f0cf10 | QUERY     | 2024-02-25 19:39:20 | 2024-02-25 19:39:20 | 19ms  | EOF        | root |            | select id,name from test.test where name like "%KJ%"  |\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n2 rows in set (0.00 sec)\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Query Profile and redirect Profile to a text"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"template: curl -X GET -u user:password http://fe_ip:http_port/api/profile?query_id=1b0bb22689734d30-bbe56e17c2ff21dc > test.profile\n\n[user@VM-10-6-centos profile]$ curl -X GET -u root:root http://127.0.0.1:8030/api/profile?query_id=1b0bb22689734d30-bbe56e17c2ff21dc > test.profile\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  1211    0  1211    0     0   168k      0 --:--:-- --:--:-- --:--:--  168k\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The returned Profile line break is \\ \\n, which is inconvenient to analyze. You can replace \\ \\n with \\n in a text editing tool."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'[user@VM-10-6-centos profile]$ cat test.profile\n{"msg":"success","code":0,"data":{"profile":"Query:\\n  Summary:\\n     \n- Profile ID: 1b0bb22689734d30-bbe56e17c2ff21dc\\n     - Task Type: QUERY\\n     \n- Start Time: 2024-02-28 11:00:17\\n     - End Time: 2024-02-28 11:00:17\\n     \n- Total: 7ms\\n     - Task State: EOF\\n     - User: root\\n     - Default Db: \\n     \n- Sql Statement: select id,name from test.test where name like \\"%RuO%\\"\\n  Execution Summary:\\n     \n- Workload Group: \\n     - Analysis Time: 1ms\\n     \n- Plan Time: 2ms\\n       - JoinReorder Time: N/A\\n       \n- CreateSingleNode Time: N/A\\n       - QueryDistributed Time: N/A\\n       \n- Init Scan Node Time: N/A\\n       - Finalize Scan Node Time: N/A\\n         \n- Get Splits Time: N/A\\n           - Get PARTITIONS Time: N/A\\n           \n- Get PARTITION FILES Time: N/A\\n         - Create Scan Range Time: N/A\\n     \n- Schedule Time: N/A\\n     - Fetch Result Time: 0ms\\n     - Write Result Time: 0ms\\n     \n- Wait and Fetch Result Time: N/A\\n     - Doris Version: doris-2.0.4-rc06-003a815b63\\n     \n- Is Nereids: Yes\\n     - Is Pipeline: Yes\\n     - Is Cached: Yes\\n     \n- Total Instances Num: 0\\n     - Instances Num Per BE: \\n     \n- Parallel Fragment Exec Instance Num: 48\\n     - Trace ID: \\n"},"count":0}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The effect after replacement is as follows"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{"msg":"success","code":0,"data":{"profile":"Query:\n  Summary:\n     - Profile ID: 1b0bb22689734d30-bbe56e17c2ff21dc\n     - Task Type: QUERY\n     - Start Time: 2024-02-28 11:00:17\n     - End Time: 2024-02-28 11:00:17\n     - Total: 7ms\n     - Task State: EOF\n     - User: root\n     - Default Db: \n     - Sql Statement: select id,name from test.test where name like \\"%RuO%\\"\n  Execution Summary:\n     - Workload Group: \n     - Analysis Time: 1ms\n     - Plan Time: 2ms\n       - JoinReorder Time: N/A\n       - CreateSingleNode Time: N/A\n       - QueryDistributed Time: N/A\n       - Init Scan Node Time: N/A\n       - Finalize Scan Node Time: N/A\n         - Get Splits Time: N/A\n           - Get PARTITIONS Time: N/A\n           - Get PARTITION FILES Time: N/A\n         - Create Scan Range Time: N/A\n     - Schedule Time: N/A\n     - Fetch Result Time: 0ms\n     - Write Result Time: 0ms\n     - Wait and Fetch Result Time: N/A\n     - Doris Version: doris-2.0.4-rc06-003a815b63\n     - Is Nereids: Yes\n     - Is Pipeline: Yes\n     - Is Cached: Yes\n     - Total Instances Num: 0\n     - Instances Num Per BE: \n     - Parallel Fragment Exec Instance Num: 48\n     - Trace ID: \n"},"count":0}\n')))))}m.isMDXComponent=!0},198936:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/profile1-0d88983bffcec7c5bee8246e3271ef75.png"},373427:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/profile2-e869373c94cd09dae47ecfd3bbbca378.png"}}]);