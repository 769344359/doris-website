"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42422],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=l,g=u["".concat(i,".").concat(f)]||u[f]||y[f]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,s=new Array(a);s[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},832013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const a={title:"ST_ANGLE_SPHERE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st-angle-sphere",id:"version-2.1/sql-manual/sql-functions/spatial-functions/st-angle-sphere",title:"ST_ANGLE_SPHERE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-angle-sphere.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-angle-sphere",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-angle-sphere",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ST_ANGLE_SPHERE",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_AZIMUTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-azimuth"},next:{title:"ST_AREA",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-area"}},i={},c=[{value:"ST_Angle_Sphere",id:"st_angle_sphere",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"st_angle_sphere"},"ST_Angle_Sphere"),(0,l.yg)("h3",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Angle_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8ba1\u7b97\u5730\u7403\u8868\u9762\u4e24\u70b9\u4e4b\u95f4\u7684\u5706\u5fc3\u89d2\uff0c\u5355\u4f4d\u4e3a \u5ea6\u3002\u4f20\u5165\u7684\u53c2\u6570\u5206\u522b\u4e3aX\u70b9\u7684\u7ecf\u5ea6\uff0cX\u70b9\u7684\u7eac\u5ea6\uff0cY\u70b9\u7684\u7ecf\u5ea6\uff0cY\u70b9\u7684\u7eac\u5ea6\u3002"),(0,l.yg)("p",null,"x_lng \u548c y_lng \u90fd\u662f\u7ecf\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-180, 180]","\u3002"),(0,l.yg)("p",null,"x_lat \u548c y_lat \u90fd\u662f\u7eac\u5ea6\u6570\u636e\uff0c\u5408\u7406\u7684\u53d6\u503c\u8303\u56f4\u662f ","[-90, 90]","\u3002"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select ST_Angle_Sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+---------------------------------------------------------------------------+\n| st_angle_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+---------------------------------------------------------------------------+\n|                                                        0.0659823452409903 |\n+---------------------------------------------------------------------------+\n1 row in set (0.06 sec)\n\nmysql> select ST_Angle_Sphere(0, 0, 45, 0);\n+----------------------------------------+\n| st_angle_sphere(0.0, 0.0, 45.0, 0.0) |\n+----------------------------------------+\n|                                     45 |\n+----------------------------------------+\n1 row in set (0.06 sec)\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"ST_ANGLE_SPHERE,ST,ANGLE,SPHERE"))}y.isMDXComponent=!0}}]);