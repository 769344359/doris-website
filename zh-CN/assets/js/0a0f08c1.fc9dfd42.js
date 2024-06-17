"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10296],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>N});var a=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=l,N=m["".concat(i,".").concat(f)]||m[f]||p[f]||r;return t?a.createElement(N,o(o({ref:n},c),{},{components:t})):a.createElement(N,o({ref:n},c))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},753140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(58168),l=(t(296540),t(15680));const r={title:"MV_INFOS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/mv_infos",id:"sql-manual/sql-functions/table-functions/mv_infos",title:"MV_INFOS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/mv_infos.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/mv_infos",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/mv_infos",draft:!1,tags:[],version:"current",frontMatter:{title:"MV_INFOS",language:"zh-CN"},sidebar:"docs",previous:{title:"JOBS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/jobs"},next:{title:"TASKS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/tasks"}},i={},u=[{value:"<code>mv_infos</code>",id:"mv_infos",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},m="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"mv_infos"},(0,l.yg)("inlineCode",{parentName:"h2"},"mv_infos")),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"mv_infos"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u67d0\u4e2adb\u4e2d\u521b\u5efa\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e from \u5b50\u53e5\u4e2d\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'mv_infos("database"="")')),(0,l.yg)("p",null,"mv_infos()\u8868\u7ed3\u6784\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function mv_infos("database"="tpch100");\n+--------------------+---------+------+-------+---------+-------+\n| Field              | Type    | Null | Key   | Default | Extra |\n+--------------------+---------+------+-------+---------+-------+\n| Id                 | BIGINT  | No   | false | NULL    | NONE  |\n| Name               | TEXT    | No   | false | NULL    | NONE  |\n| JobName            | TEXT    | No   | false | NULL    | NONE  |\n| State              | TEXT    | No   | false | NULL    | NONE  |\n| SchemaChangeDetail | TEXT    | No   | false | NULL    | NONE  |\n| RefreshState       | TEXT    | No   | false | NULL    | NONE  |\n| RefreshInfo        | TEXT    | No   | false | NULL    | NONE  |\n| QuerySql           | TEXT    | No   | false | NULL    | NONE  |\n| EnvInfo            | TEXT    | No   | false | NULL    | NONE  |\n| MvProperties       | TEXT    | No   | false | NULL    | NONE  |\n| MvPartitionInfo    | TEXT    | No   | false | NULL    | NONE  |\n| SyncWithBaseTables | BOOLEAN | No   | false | NULL    | NONE  |\n+--------------------+---------+------+-------+---------+-------+\n12 rows in set (0.01 sec)\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Id\uff1a\u7269\u5316\u89c6\u56feid"),(0,l.yg)("li",{parentName:"ul"},"Name\uff1a\u7269\u5316\u89c6\u56feName"),(0,l.yg)("li",{parentName:"ul"},"JobName\uff1a\u7269\u5316\u89c6\u56fe\u5bf9\u5e94\u7684job\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"State\uff1a\u7269\u5316\u89c6\u56fe\u72b6\u6001"),(0,l.yg)("li",{parentName:"ul"},"SchemaChangeDetail\uff1a\u7269\u5316\u89c6\u56feState\u53d8\u4e3aSchemaChange\u7684\u539f\u56e0"),(0,l.yg)("li",{parentName:"ul"},"RefreshState\uff1a\u7269\u5316\u89c6\u56fe\u5237\u65b0\u72b6\u6001"),(0,l.yg)("li",{parentName:"ul"},"RefreshInfo\uff1a\u7269\u5316\u89c6\u56fe\u5b9a\u4e49\u7684\u5237\u65b0\u7b56\u7565\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"QuerySql\uff1a\u7269\u5316\u89c6\u56fe\u5b9a\u4e49\u7684\u67e5\u8be2\u8bed\u53e5"),(0,l.yg)("li",{parentName:"ul"},"EnvInfo\uff1a\u7269\u5316\u89c6\u56fe\u521b\u5efa\u65f6\u7684\u73af\u5883\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"MvProperties\uff1a\u7269\u5316\u89c6\u5c5e\u6027"),(0,l.yg)("li",{parentName:"ul"},"MvPartitionInfo\uff1a\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u4fe1\u606f"),(0,l.yg)("li",{parentName:"ul"},"SyncWithBaseTables\uff1a\u662f\u5426\u548cbase\u8868\u6570\u636e\u540c\u6b65\uff0c\u5982\u9700\u67e5\u770b\u54ea\u4e2a\u5206\u533a\u4e0d\u540c\u6b65\uff0c\u8bf7\u4f7f\u7528",(0,l.yg)("a",{parentName:"li",href:"../sql-reference/Show-Statements/SHOW-PARTITIONS.md"},"SHOW PARTITIONS"))),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770bdb1\u4e0b\u7684\u6240\u6709\u7269\u5316\u89c6\u56fe")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from mv_infos("database"="db1");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770bdb1\u4e0b\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u4e3amv1\u7684\u7269\u5316\u89c6\u56fe")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from mv_infos("database"="db1") where Name = "mv1";\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770bdb1\u4e0b\u7684\u7269\u5316\u89c6\u56fe\u540d\u79f0\u4e3amv1\u7684\u72b6\u6001")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select State from mv_infos("database"="db1") where Name = "mv1";\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mv, infos\n")))}p.isMDXComponent=!0}}]);