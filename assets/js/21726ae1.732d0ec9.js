"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37090],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},532389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const i={title:"Release 2.0.11",language:"en"},o=void 0,l={unversionedId:"releasenotes/release-2.0.11",id:"releasenotes/release-2.0.11",title:"Release 2.0.11",description:"\x3c!--",source:"@site/docs/releasenotes/release-2.0.11.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.0.11",permalink:"/docs/dev/releasenotes/release-2.0.11",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.0.11",language:"en"},sidebar:"docs",previous:{title:"Release 2.1.0",permalink:"/docs/dev/releasenotes/release-2.1.0"},next:{title:"Release 2.0.10",permalink:"/docs/dev/releasenotes/release-2.0.10"}},s={},p=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 Improvement and optimizations",id:"2-improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Thanks to our community users and developers, about 123 improvements and bug fixes have been made in Doris 2.0.11 version."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"1-behavior-change"},"1 Behavior change"),(0,r.yg)("p",null,"Since the inverted index is now mature and stable, it can replace the old BITMAP INDEX. Therefore, any newly created ",(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP INDEX")," will automatically switch to an ",(0,r.yg)("inlineCode",{parentName:"p"},"INVERTED INDEX"),", while existing ",(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP INDEX")," will remain unchanged. This entire switching process is transparent to the user, with no changes to writing or querying. Additionally, users can disable this automatic switch by setting the FE configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_create_bitmap_index_as_inverted_index")," to false. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35528"},"#35528")),(0,r.yg)("h2",{id:"2-improvement-and-optimizations"},"2 Improvement and optimizations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add Trino JDBC Catalog type mapping for JSON and TIME")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE exit when failed to transfer to (non) master to prevent unknown state and too many logs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Write audit log while doing drop stats table.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ignore min/max column stats if table is partially analyzed to avoid inefficient query plan")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support minus operation for set like ",(0,r.yg)("inlineCode",{parentName:"p"},"set1 - set2"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Improve perfmance of LIKE and REGEXP clause with concat (col, pattern_str), eg. ",(0,r.yg)("inlineCode",{parentName:"p"},"col1 LIKE concat('%', col2, '%')"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add query options for short circuit queries for upgrade compatibility"))),(0,r.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.10...2.0.11"},"github")," ."),(0,r.yg)("h2",{id:"credits"},"Credits"),(0,r.yg)("p",null,"Thanks all who contribute to this release:"),(0,r.yg)("p",null,"@AshinGau, @BePPPower, @BiteTheDDDDt, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @eldenmoon, @englefly, @feiniaofeiafei, @Gabriel39, @GoGoWen, @HHoflittlefish777, @hubgeter, @jacktengg, @jackwener, @jeffreys-cat, @Jibing-Li, @kaka11chen, @kobe6th, @LiBinfeng-01, @mongo360, @morningman, @morrySnow, @mrhhsg, @Mryange, @nextdreamblue, @qidaye, @sjyango, @starocean999, @SWJTU-ZhangLei, @w41ter, @wangbo, @wsjz, @wuwenchi, @xiaokang, @XieJiann, @xy720, @yujun777, @Yukang-Lian, @Yulei-Yang, @zclllyybb, @zddr, @zhangstar333, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"))}g.isMDXComponent=!0}}]);