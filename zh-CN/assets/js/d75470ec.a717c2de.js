"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65950],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},571877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const i={title:"date_trunc",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/date_trunc",id:"version-1.2/sql-manual/sql-functions/date-time-functions/date_trunc",title:"date_trunc",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/date_trunc.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_trunc",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_trunc",draft:!1,tags:[],version:"1.2",frontMatter:{title:"date_trunc",language:"zh-CN"},sidebar:"docs",previous:{title:"date_sub",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_sub"},next:{title:"date_format",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/date_format"}},c={},u=[{value:"date_trunc",id:"date_trunc",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_trunc"},"date_trunc"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"date_trunc")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_TRUNC(DATETIME datetime, VARCHAR unit)")),(0,a.yg)("p",null,"\u5c06datetime\u6309\u7167\u6307\u5b9a\u7684\u65f6\u95f4\u5355\u4f4d\u622a\u65ad\u3002"),(0,a.yg)("p",null,"datetime \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,a.yg)("p",null,"unit \u53c2\u6570\u662f\u60a8\u5e0c\u671b\u622a\u65ad\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u53ef\u9009\u7684\u503c\u5982\u4e0b\uff1a","[",(0,a.yg)("inlineCode",{parentName:"p"},"second"),",",(0,a.yg)("inlineCode",{parentName:"p"},"minute"),",",(0,a.yg)("inlineCode",{parentName:"p"},"hour"),",",(0,a.yg)("inlineCode",{parentName:"p"},"day"),",",(0,a.yg)("inlineCode",{parentName:"p"},"week"),",",(0,a.yg)("inlineCode",{parentName:"p"},"month"),",",(0,a.yg)("inlineCode",{parentName:"p"},"quarter"),",",(0,a.yg)("inlineCode",{parentName:"p"},"year"),"]","\u3002\n\u5982\u679cunit \u4e0d\u7b26\u5408\u4e0a\u8ff0\u53ef\u9009\u503c\uff0c\u7ed3\u679c\u5c06\u8fd4\u56deNULL\u3002 "),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_trunc('2010-12-02 19:28:30', 'second');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'second')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:30                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'minute');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'minute')     |\n+-------------------------------------------------+\n| 2010-12-02 19:28:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'hour');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'hour')       |\n+-------------------------------------------------+\n| 2010-12-02 19:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'day');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'day')        |\n+-------------------------------------------------+\n| 2010-12-02 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2023-4-05 19:28:30', 'week');\n+-------------------------------------------+\n| date_trunc('2023-04-05 19:28:30', 'week') |\n+-------------------------------------------+\n| 2023-04-03 00:00:00                       |\n+-------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'month');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'month')      |\n+-------------------------------------------------+\n| 2010-12-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'quarter');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'quarter')    |\n+-------------------------------------------------+\n| 2010-10-01 00:00:00                             |\n+-------------------------------------------------+\n\nmysql> select date_trunc('2010-12-02 19:28:30', 'year');\n+-------------------------------------------------+\n| date_trunc('2010-12-02 19:28:30', 'year')       |\n+-------------------------------------------------+\n| 2010-01-01 00:00:00                             |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE_TRUNC,DATE,TRUNC\n")))}p.isMDXComponent=!0}}]);