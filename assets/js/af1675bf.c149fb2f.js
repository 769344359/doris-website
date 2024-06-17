"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24523],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>y});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),l=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(y,s(s({ref:a},p),{},{components:n})):t.createElement(y,s({ref:a},p))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},997283:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(58168),r=(n(296540),n(15680));const o={title:"OceanBase",language:"en"},s=void 0,c={unversionedId:"lakehouse/database/oceanbase",id:"version-2.0/lakehouse/database/oceanbase",title:"OceanBase",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/lakehouse/database/oceanbase.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/oceanbase",permalink:"/docs/2.0/lakehouse/database/oceanbase",draft:!1,tags:[],version:"2.0",frontMatter:{title:"OceanBase",language:"en"},sidebar:"docs",previous:{title:"SAP HANA",permalink:"/docs/2.0/lakehouse/database/sap-hana"},next:{title:"Elasticsearch",permalink:"/docs/2.0/lakehouse/database/es"}},i={},l=[{value:"Terms and Conditions",id:"terms-and-conditions",level:2},{value:"Connect to OceanBase",id:"connect-to-oceanbase",level:2},{value:"Mode compatible",id:"mode-compatible",level:2}],p={toc:l},d="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris JDBC Catalog supports connecting to the OceanBase database through the standard JDBC interface. This document describes how to configure OceanBase database connection."),(0,r.yg)("h2",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.yg)("p",null,"To connect to the OceanBase database you need"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"OceanBase 3.1.0 or higher")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JDBC driver for OceanBase database, you can download the latest or specified version of ClickHouse JDBC driver from ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client"},"Maven repository"),". ",(0,r.yg)("strong",{parentName:"p"},"It is recommended to use OceanBase Connector/J 2.4.8 or above. "))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris Network connection between each FE and BE node and OceanBase server."))),(0,r.yg)("h2",{id:"connect-to-oceanbase"},"Connect to OceanBase"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG oceanbase PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="password",\n    "jdbc_url" = "jdbc:oceanbase://host:port/db",\n    "driver_url" = "oceanbase-client-2.4.8.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver"\n)\n')),(0,r.yg)("admonition",{title:"remarks",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url")," defines the connection information and parameters to be passed to the OceanBase JDBC driver.\nParameters for supported URLs can be found in ",(0,r.yg)("a",{parentName:"p",href:"https://www.oceanbase.com/docs/common-oceanbase-connector-j-cn-1000000000517111"},"OceanBase JDBC Driver Configuration"),".")),(0,r.yg)("h2",{id:"mode-compatible"},"Mode compatible"),(0,r.yg)("p",null,"Doris will automatically recognize that OceanBase is in MySQL or Oracle mode when creating the OceanBase Catalog so that metadata can be parsed correctly."),(0,r.yg)("p",null,"Hierarchical mapping, type mapping, and query optimization in different modes are the same as the Catalog processing methods of MySQL or Oracle databases. Please refer to the documentation."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/2.0/lakehouse/database/mysql"},"MySQL Catalog")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/2.0/lakehouse/database/oracle"},"Oracle Catalog"))))}u.isMDXComponent=!0}}]);