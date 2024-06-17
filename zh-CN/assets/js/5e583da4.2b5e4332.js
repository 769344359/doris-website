"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86184],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(r),d=l,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||a;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},882152:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=r(58168),l=(r(296540),r(15680));const a={title:"DECIMAL",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Types/DECIMAL",id:"version-2.0/sql-manual/sql-reference/Data-Types/DECIMAL",title:"DECIMAL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Types/DECIMAL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/DECIMAL",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/DECIMAL",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DECIMAL",language:"zh-CN"},sidebar:"docs",previous:{title:"DOUBLE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/DOUBLE"},next:{title:"DATE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Types/DATE"}},s={},p=[{value:"DECIMAL",id:"decimal",level:2},{value:"description",id:"description",level:3},{value:"\u7cbe\u5ea6\u63a8\u6f14",id:"\u7cbe\u5ea6\u63a8\u6f14",level:3},{value:"\u56db\u5219\u8fd0\u7b97",id:"\u56db\u5219\u8fd0\u7b97",level:4},{value:"\u805a\u5408\u8fd0\u7b97",id:"\u805a\u5408\u8fd0\u7b97",level:4},{value:"\u9ed8\u8ba4\u89c4\u5219",id:"\u9ed8\u8ba4\u89c4\u5219",level:4},{value:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6",id:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6",level:4},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981DECIMAL",id:"\u4e3a\u4ec0\u4e48\u9700\u8981decimal",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},y="wrapper";function u(e){let{components:n,...r}=e;return(0,l.yg)(y,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"decimal"},"DECIMAL"),(0,l.yg)("version",{since:"1.2.1"},(0,l.yg)("p",null,"DECIMAL")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"DECIMAL(M[,D])\n\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cM \u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cD \u4ee3\u8868\u5c0f\u6570\u4f4d\u6709\u591a\u5c11\u6570\u5b57(scale)\uff0c\n\u6709\u6548\u6570\u5b57 M \u7684\u8303\u56f4\u662f [1, 38]\uff0c\u5c0f\u6570\u4f4d\u6570\u5b57\u6570\u91cf D \u7684\u8303\u56f4\u662f [0, precision]\u3002\n\n\u9ed8\u8ba4\u503c\u4e3a DECIMAL(9, 0)\u3002\n")),(0,l.yg)("h3",{id:"\u7cbe\u5ea6\u63a8\u6f14"},"\u7cbe\u5ea6\u63a8\u6f14"),(0,l.yg)("p",null,"DECIMAL\u6709\u4e00\u5957\u5f88\u590d\u6742\u7684\u7c7b\u578b\u63a8\u6f14\u89c4\u5219\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\uff0c\u4f1a\u5e94\u7528\u4e0d\u540c\u89c4\u5219\u8fdb\u884c\u7cbe\u5ea6\u63a8\u65ad\u3002"),(0,l.yg)("h4",{id:"\u56db\u5219\u8fd0\u7b97"},"\u56db\u5219\u8fd0\u7b97"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u52a0\u6cd5 / \u51cf\u6cd5\uff1aDECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(max(a - b, x - y) + max(b, y) + 1, max(b, y))\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4e58\u6cd5\uff1aDECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(a + x, b + y)\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u9664\u6cd5\uff1aDECIMAL(p1, s1) + DECIMAL(p2, s2) -> DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment)\u3002div_precision_increment \u9ed8\u8ba4\u4e3a4\u3002\n\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u9664\u6cd5\u8ba1\u7b97\u7684\u8fc7\u7a0b\u662f\nDECIMAL(p1, s1) / DECIMAL(p2, s2) \u5148\u8f6c\u6362\u6210 DECIMAL(p1 + s2 + div_precision_increment, s1 + s2 ) /  DECIMAL(p2, s2)  \u7136\u540e\u518d\u8fdb\u884c\u8ba1\u7b97\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u51fa\u73b0\nDECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment) \u662f\u6ee1\u8db3DECIMAL\u7684\u8303\u56f4\uff0c\u4f46\u662f\u7531\u4e8e\u5148\u8f6c\u6362\u6210\u4e86DECIMAL(p1 + s2 + div_precision_increment, s1 + s2 )\n\u5bfc\u81f4\u8d85\u51fa\u8303\u56f4\uff0c\u76ee\u524dDoris\u7684\u5904\u7406\u662f\u8f6c\u6210Double\u8fdb\u884c\u8ba1\u7b97")),(0,l.yg)("h4",{id:"\u805a\u5408\u8fd0\u7b97"},"\u805a\u5408\u8fd0\u7b97"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"SUM / MULTI_DISTINCT_SUM\uff1aSUM(DECIMAL(a, b)) -> DECIMAL(38, b)\u3002"),(0,l.yg)("li",{parentName:"ul"},"AVG\uff1aAVG(DECIMAL(a, b)) -> DECIMAL(38, max(b, 4))\u3002")),(0,l.yg)("h4",{id:"\u9ed8\u8ba4\u89c4\u5219"},"\u9ed8\u8ba4\u89c4\u5219"),(0,l.yg)("p",null,"\u9664\u4e0a\u8ff0\u63d0\u5230\u7684\u51fd\u6570\u5916\uff0c\u5176\u4f59\u8868\u8fbe\u5f0f\u90fd\u4f7f\u7528\u9ed8\u8ba4\u89c4\u5219\u8fdb\u884c\u7cbe\u5ea6\u63a8\u6f14\u3002\u5373\u5bf9\u4e8e\u8868\u8fbe\u5f0f ",(0,l.yg)("inlineCode",{parentName:"p"},"expr(DECIMAL(a, b))"),"\uff0c\u7ed3\u679c\u7c7b\u578b\u540c\u6837\u4e5f\u662fDECIMAL(a, b)\u3002"),(0,l.yg)("h4",{id:"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6"},"\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6"),(0,l.yg)("p",null,"\u4e0d\u540c\u7528\u6237\u5bf9DECIMAL\u7684\u7cbe\u5ea6\u8981\u6c42\u5404\u4e0d\u76f8\u540c\uff0c\u4e0a\u8ff0\u89c4\u5219\u4e3a\u5f53\u524dDoris\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5982\u679c\u7528\u6237",(0,l.yg)("strong",{parentName:"p"},"\u6709\u4e0d\u540c\u7684\u7cbe\u5ea6\u9700\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fdb\u884c\u7cbe\u5ea6\u8c03\u6574"),"\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u7684\u7ed3\u679c\u7cbe\u5ea6\u5927\u4e8e\u9ed8\u8ba4\u7cbe\u5ea6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u5165\u53c2\u7cbe\u5ea6\u6765\u8c03\u6574\u7ed3\u679c\u7cbe\u5ea6\u3002\u4f8b\u5982\u7528\u6237\u671f\u671b\u8ba1\u7b97",(0,l.yg)("inlineCode",{parentName:"li"},"AVG(col)"),"\u5f97\u5230DECIMAL(x, y)\u4f5c\u4e3a\u7ed3\u679c\uff0c\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"li"},"col"),"\u7684\u7c7b\u578b\u4e3aDECIMAL(a, b)\uff0c\u5219\u53ef\u4ee5\u6539\u5199\u8868\u8fbe\u5f0f\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"AVG(CAST(col as DECIMAL(x, y)))"),"\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u5982\u679c\u671f\u671b\u7684\u7ed3\u679c\u7cbe\u5ea6\u5c0f\u4e8e\u9ed8\u8ba4\u7cbe\u5ea6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8f93\u51fa\u7ed3\u679c\u6c42\u8fd1\u4f3c\u5f97\u5230\u60f3\u8981\u7684\u7cbe\u5ea6\u3002\u4f8b\u5982\u7528\u6237\u671f\u671b\u8ba1\u7b97",(0,l.yg)("inlineCode",{parentName:"li"},"AVG(col)"),"\u5f97\u5230DECIMAL(x, y)\u4f5c\u4e3a\u7ed3\u679c\uff0c\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"li"},"col"),"\u7684\u7c7b\u578b\u4e3aDECIMAL(a, b)\uff0c\u5219\u53ef\u4ee5\u6539\u5199\u8868\u8fbe\u5f0f\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"ROUND(AVG(col), y)"),"\u3002")),(0,l.yg)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981decimal"},"\u4e3a\u4ec0\u4e48\u9700\u8981DECIMAL"),(0,l.yg)("p",null,"Doris\u4e2d\u7684DECIMAL\u662f\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cDecimal\u6709\u4ee5\u4e0b\u6838\u5fc3\u4f18\u52bf\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u53ef\u8868\u793a\u8303\u56f4\u66f4\u5927\u3002DECIMAL\u4e2dprecision\u548cscale\u7684\u53d6\u503c\u8303\u56f4\u90fd\u8fdb\u884c\u4e86\u660e\u663e\u6269\u5145\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u6027\u80fd\u66f4\u9ad8\u3002\u8001\u7248\u672c\u7684DECIMAL\u5728\u5185\u5b58\u4e2d\u9700\u8981\u5360\u752816 bytes\uff0c\u5728\u5b58\u50a8\u4e2d\u5360\u752812 bytes\uff0c\u800cDECIMAL\u8fdb\u884c\u4e86\u81ea\u9002\u5e94\u8c03\u6574\uff08\u5982\u4e0b\u8868\u683c\uff09\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"+----------------------+-------------------+\n|     precision        | \u5360\u7528\u7a7a\u95f4\uff08\u5185\u5b58/\u78c1\u76d8\uff09|\n+----------------------+-------------------+\n| 0 < precision <= 9   |      4 bytes      |\n+----------------------+-------------------+\n| 9 < precision <= 18  |      8 bytes      |\n+----------------------+-------------------+\n| 18 < precision <= 38 |     16 bytes      |\n+----------------------+-------------------+\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u66f4\u5b8c\u5907\u7684\u7cbe\u5ea6\u63a8\u6f14\u3002\u5bf9\u4e8e\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\uff0c\u5e94\u7528\u4e0d\u540c\u7684\u7cbe\u5ea6\u63a8\u6f14\u89c4\u5219\u5bf9\u7ed3\u679c\u7684\u7cbe\u5ea6\u8fdb\u884c\u63a8\u6f14\u3002")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"DECIMAL\n")))}u.isMDXComponent=!0}}]);