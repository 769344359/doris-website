"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[28754],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},N="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=s(a),g=r,c=N["".concat(o,".").concat(g)]||N[g]||y[g]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[N]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},730664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const l={title:"MYSQL-LOAD",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",title:"MYSQL-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MYSQL-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"BROKER-LOAD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"},next:{title:"CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"}},o={},s=[{value:"MYSQL-LOAD",id:"mysql-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"PROPERTIES",id:"properties",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:s},N="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(N,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"mysql-load"},"MYSQL-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"dev"},"MYSQL LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"mysql-load: \u4f7f\u7528 MySql \u5ba2\u6237\u7aef\u5bfc\u5165\u672c\u5730\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"LOAD DATA\n[LOCAL]\nINFILE 'file_name'\nINTO TABLE tbl_name\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY 'string']\n[LINES TERMINATED BY 'string']\n[IGNORE number {LINES | ROWS}]\n[(col_name_or_user_var [, col_name_or_user_var] ...)]\n[SET (col_name={expr | DEFAULT} [, col_name={expr | DEFAULT}] ...)]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n")),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5411\u6307\u5b9a\u7684 table \u5bfc\u5165\u6570\u636e\uff0c\u4e0e\u666e\u901a Load \u533a\u522b\u662f\uff0c\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u662f\u540c\u6b65\u5bfc\u5165\u3002"),(0,r.yg)("p",null,"\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u4ecd\u7136\u80fd\u591f\u4fdd\u8bc1\u4e00\u6279\u5bfc\u5165\u4efb\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u4e48\u5168\u90e8\u6570\u636e\u5bfc\u5165\u6210\u529f\uff0c\u8981\u4e48\u5168\u90e8\u5931\u8d25\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"MySQL Load \u4ee5\u8bed\u6cd5",(0,r.yg)("inlineCode",{parentName:"li"},"LOAD DATA"),"\u5f00\u5934\uff0c\u65e0\u987b\u6307\u5b9a LABEL"),(0,r.yg)("li",{parentName:"ol"},"\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"li"},"LOCAL"),"\u8868\u793a\u8bfb\u53d6\u5ba2\u6237\u7aef\u6587\u4ef6\u3002\u4e0d\u6307\u5b9a\u8868\u793a\u8bfb\u53d6 FE \u670d\u52a1\u7aef\u672c\u5730\u6587\u4ef6\u3002\u5bfc\u5165 FE \u672c\u5730\u6587\u4ef6\u7684\u529f\u80fd\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u5728 FE \u8282\u70b9\u4e0a\u8bbe\u7f6e",(0,r.yg)("inlineCode",{parentName:"li"},"mysql_load_server_secure_path"),"\u6765\u6307\u5b9a\u5b89\u5168\u8def\u5f84\uff0c\u624d\u80fd\u6253\u5f00\u8be5\u529f\u80fd\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"INFILE"),"\u5185\u586b\u5199\u672c\u5730\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\u3002\u76ee\u524d\u53ea\u652f\u6301\u5355\u4e2a\u6587\u4ef6\uff0c\u4e0d\u652f\u6301\u591a\u4e2a\u6587\u4ef6"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"INTO TABLE"),"\u7684\u8868\u540d\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u5e93\u540d\uff0c\u5982\u6848\u4f8b\u6240\u793a\u3002\u4e5f\u53ef\u4ee5\u7701\u7565\uff0c\u5219\u4f1a\u4f7f\u7528\u5f53\u524d\u7528\u6237\u6240\u5728\u7684\u6570\u636e\u5e93\u3002"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"PARTITION"),"\u8bed\u6cd5\u652f\u6301\u6307\u5b9a\u5206\u533a\u5bfc\u5165"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"COLUMNS TERMINATED BY"),"\u6307\u5b9a\u5217\u5206\u9694\u7b26"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"LINES TERMINATED BY"),"\u6307\u5b9a\u884c\u5206\u9694\u7b26"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"IGNORE num LINES"),"\u7528\u6237\u8df3\u8fc7 CSV \u7684\u8868\u5934\uff0c\u53ef\u4ee5\u8df3\u8fc7\u4efb\u610f\u884c\u6570\u3002\u8be5\u8bed\u6cd5\u4e5f\u53ef\u4ee5\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"IGNORE num ROWS"),"\u4ee3\u66ff"),(0,r.yg)("li",{parentName:"ol"},"\u5217\u6620\u5c04\u8bed\u6cd5\uff0c\u5177\u4f53\u53c2\u6570\u8be6\u89c1",(0,r.yg)("a",{parentName:"li",href:"../../../../data-operate/import/mysql-load-manual"},"\u5bfc\u5165\u7684\u6570\u636e\u8f6c\u6362")," \u7684\u5217\u6620\u5c04\u7ae0\u8282"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"PROPERTIES"),"\u53c2\u6570\u914d\u7f6e\uff0c\u8be6\u89c1\u4e0b\u6587")),(0,r.yg)("h3",{id:"properties"},"PROPERTIES"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"max_filter_ratio\uff1a\u6700\u5927\u5bb9\u5fcd\u53ef\u8fc7\u6ee4\uff08\u6570\u636e\u4e0d\u89c4\u8303\u7b49\u539f\u56e0\uff09\u7684\u6570\u636e\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"timeout: \u6307\u5b9a\u5bfc\u5165\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u79d2\u3002\u9ed8\u8ba4\u662f 600 \u79d2\u3002\u53ef\u8bbe\u7f6e\u8303\u56f4\u4e3a 1 \u79d2 ~ 259200 \u79d2\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"strict_mode: \u7528\u6237\u6307\u5b9a\u6b64\u6b21\u5bfc\u5165\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"timezone: \u6307\u5b9a\u672c\u6b21\u5bfc\u5165\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4e1c\u516b\u533a\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"exec_mem_limit: \u5bfc\u5165\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"trim_double_quotes: \u5e03\u5c14\u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u4e3a true \u65f6\u8868\u793a\u88c1\u526a\u6389\u5bfc\u5165\u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'enclose: \u5305\u56f4\u7b26\u3002\u5f53 csv \u6570\u636e\u5b57\u6bb5\u4e2d\u542b\u6709\u884c\u5206\u9694\u7b26\u6216\u5217\u5206\u9694\u7b26\u65f6\uff0c\u4e3a\u9632\u6b62\u610f\u5916\u622a\u65ad\uff0c\u53ef\u6307\u5b9a\u5355\u5b57\u8282\u5b57\u7b26\u4f5c\u4e3a\u5305\u56f4\u7b26\u8d77\u5230\u4fdd\u62a4\u4f5c\u7528\u3002\u4f8b\u5982\u5217\u5206\u9694\u7b26\u4e3a","\uff0c\u5305\u56f4\u7b26\u4e3a"\'"\uff0c\u6570\u636e\u4e3a"a,\'b,c\'",\u5219"b,c"\u4f1a\u88ab\u89e3\u6790\u4e3a\u4e00\u4e2a\u5b57\u6bb5\u3002\u6ce8\u610f\uff1a\u5f53 enclose \u8bbe\u7f6e\u4e3a',(0,r.yg)("inlineCode",{parentName:"p"},'"'),"\u65f6\uff0ctrim_double_quotes \u4e00\u5b9a\u8981\u8bbe\u7f6e\u4e3a true\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'escape: \u8f6c\u4e49\u7b26\u3002\u7528\u4e8e\u8f6c\u4e49\u5728 csv \u5b57\u6bb5\u4e2d\u51fa\u73b0\u7684\u4e0e\u5305\u56f4\u7b26\u76f8\u540c\u7684\u5b57\u7b26\u3002\u4f8b\u5982\u6570\u636e\u4e3a"a,\'b,\'c\'"\uff0c\u5305\u56f4\u7b26\u4e3a"\'"\uff0c\u5e0c\u671b"b,\'c \u88ab\u4f5c\u4e3a\u4e00\u4e2a\u5b57\u6bb5\u89e3\u6790\uff0c\u5219\u9700\u8981\u6307\u5b9a\u5355\u5b57\u8282\u8f6c\u4e49\u7b26\uff0c\u4f8b\u5982"\\"\uff0c\u7136\u540e\u5c06\u6570\u636e\u4fee\u6539\u4e3a"a,\'b,\\\'c\'"\u3002'))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u3002\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u4e3a 100 \u79d2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u670d\u52a1\u7aef\u672c\u5730\u6587\u4ef6'/root/testData'(\u9700\u8bbe\u7f6e FE \u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"mysql_load_server_secure_path"),"\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"/root"),") \u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u3002\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u4e3a 100 \u79d2"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA\nINFILE \'/root/testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff0c\u5141\u8bb8 20% \u7684\u9519\u8bef\u7387"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u5ba2\u6237\u7aef\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\uff0c\u5141\u8bb8 20% \u7684\u9519\u8bef\u7387\uff0c\u5e76\u4e14\u6307\u5b9a\u6587\u4ef6\u7684\u5217\u540d"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\n(k2, k1, v1)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u7684 p1, p2 \u5206\u533a\uff0c\u5141\u8bb8 20% \u7684\u9519\u8bef\u7387\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u672c\u5730\u884c\u5206\u9694\u7b26\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"0102"),",\u5217\u5206\u9694\u7b26\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"0304"),"\u7684 CSV \u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY '0304'\nLINES TERMINATED BY '0102'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c06\u672c\u5730\u6587\u4ef6'testData'\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93'testDb'\u4e2d'testTbl'\u7684\u8868\u4e2d\u7684 p1, p2 \u5206\u533a\uff0c\u5e76\u8df3\u8fc7\u524d\u9762 3 \u884c\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nIGNORE 1 LINES\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u4e25\u683c\u6a21\u5f0f\u8fc7\u6ee4\uff0c\u5e76\u8bbe\u7f6e\u65f6\u533a\u4e3a Africa/Abidjan"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("strict_mode"="true", "timezone"="Africa/Abidjan")\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u9650\u5236\u5bfc\u5165\u5185\u5b58\u4e3a 10GB, \u5e76\u5728 10 \u5206\u949f\u8d85\u65f6"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240", "timeout"="600")\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"MYSQL, LOAD\n")))}y.isMDXComponent=!0}}]);