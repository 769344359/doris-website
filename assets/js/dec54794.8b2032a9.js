"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88230],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(l,".").concat(f)]||p[f]||y[f]||s;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},819187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const s={title:"GET_JSON_INT",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/get-json-int",id:"version-2.0/sql-manual/sql-functions/json-functions/get-json-int",title:"GET_JSON_INT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/get-json-int.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get-json-int",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/get-json-int",draft:!1,tags:[],version:"2.0",frontMatter:{title:"GET_JSON_INT",language:"en"},sidebar:"docs",previous:{title:"GET_JSON_DOUBLE",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/get-json-double"},next:{title:"GET_JSON_BIGINT",permalink:"/docs/2.0/sql-manual/sql-functions/json-functions/get-json-bigint"}},l={},c=[{value:"get_json_int",id:"get_json_int",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"get_json_int"},"get_json_int"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT get_json_int(VARCHAR json_str, VARCHAR json_path)")),(0,o.yg)("p",null,'Parse and retrieve the integer content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",',"[and]",".\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned."),(0,o.yg)("p",null,"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."),(0,o.yg)("p",null,"Exception handling is as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"if the field specified by json_path does not exist, return NULL"),(0,o.yg)("li",{parentName:"ul"},"if datatype of the field specified by json_path is not the same with type of json_extract_t, return t if it can be cast to t else NULL")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Get the value of key as "k1"')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");\n+--------------------------------------------+\n| get_json_int(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'Get the second element of the array whose key is "my. key"')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------+\n| get_json_int(\'{"k1":"v1", "my.key":[1, 2, 3]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------+\n|                                                                2 |\n+------------------------------------------------------------------+\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Get the first element in an array whose secondary path is k1. key - > K2")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\');\n+--------------------------------------------------------------+\n| get_json_int(\'{"k1.key":{"k2":[1, 2]}}\', \'$."k1.key".k2[0]\') |\n+--------------------------------------------------------------+\n|                                                            1 |\n+--------------------------------------------------------------+\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"GET_JSON_INT,GET,JSON,INT"))}y.isMDXComponent=!0}}]);