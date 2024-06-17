"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98577],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,g=m["".concat(o,".").concat(y)]||m[y]||p[y]||s;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},653241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const s={title:"SET-PROPERTY",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",id:"sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",permalink:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"current",frontMatter:{title:"SET-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/LDAP"}},o={},u=[{value:"SET-PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"set-property"},"SET-PROPERTY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SET PROPERTY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Set user attributes, including resources assigned to users, importing clusters, etc."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,a.yg)("p",null,"The user attribute set here is for user, not user_identity. That is, if two users 'jack'@'%' and 'jack'@'192.%' are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the user jack, not 'jack'@'% ' or 'jack'@'192.%'"),(0,a.yg)("p",null,"key:"),(0,a.yg)("p",null,"Super user privileges:"),(0,a.yg)("p",null," max_user_connections: The maximum number of connections."),(0,a.yg)("p",null," max_query_instances: The number of instances that a user can use to execute a query at the same time."),(0,a.yg)("p",null," sql_block_rules: Set sql block rules. Once set, queries sent by this user will be rejected if they match the rules."),(0,a.yg)("p",null," cpu_resource_limit: Limit the cpu resources for queries. See the introduction to the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," for details. -1 means not set."),(0,a.yg)("p",null," exec_mem_limit: Limit the memory usage of the query. See the introduction to the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," for details. -1 means not set."),(0,a.yg)("p",null," resource_tags: Specifies the user's resource tag permissions."),(0,a.yg)("p",null," query_timeout: Specifies the user's query timeout permissions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Note: If the attributes `cpu_resource_limit`, `exec_mem_limit` are not set, the value in the session variable will be used by default.\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the maximum number of user jack connections to 1000"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the number of available instances for user jack's query to 3000"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the sql block rule of user jack"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the cpu usage limit of user jack"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's resource tag permissions"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's query memory usage limit, in bytes"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the user's query timeout limit, in second"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);