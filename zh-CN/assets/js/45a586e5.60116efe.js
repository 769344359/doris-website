"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32284],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},455557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"SHOW-BACKUP",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",title:"SHOW-BACKUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKUP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-BACKUP",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-ANALYZE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ANALYZE"},next:{title:"SHOW-BACKENDS",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-BACKENDS"}},s={},c=[{value:"SHOW-BACKUP",id:"show-backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-backup"},"SHOW-BACKUP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW BACKUP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b BACKUP \u4efb\u52a1"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP [FROM db_name]\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    1. Doris \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002\n    2. \u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        JobId\uff1a                  \u552f\u4e00\u4f5c\u4e1aid\n        SnapshotName\uff1a           \u5907\u4efd\u7684\u540d\u79f0\n        DbName\uff1a                 \u6240\u5c5e\u6570\u636e\u5e93\n        State\uff1a                  \u5f53\u524d\u9636\u6bb5\n            PENDING\uff1a        \u63d0\u4ea4\u4f5c\u4e1a\u540e\u7684\u521d\u59cb\u72b6\u6001\n            SNAPSHOTING\uff1a    \u6267\u884c\u5feb\u7167\u4e2d\n            UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u5b8c\u6210\uff0c\u51c6\u5907\u4e0a\u4f20\n            UPLOADING\uff1a      \u5feb\u7167\u4e0a\u4f20\u4e2d\n            SAVE_META\uff1a      \u5c06\u4f5c\u4e1a\u5143\u4fe1\u606f\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\n            UPLOAD_INFO\uff1a    \u4e0a\u4f20\u4f5c\u4e1a\u5143\u4fe1\u606f\n            FINISHED\uff1a       \u4f5c\u4e1a\u6210\u529f\n            CANCELLED\uff1a      \u4f5c\u4e1a\u5931\u8d25\n        BackupObjs\uff1a             \u5907\u4efd\u7684\u8868\u548c\u5206\u533a\n        CreateTime\uff1a             \u4efb\u52a1\u63d0\u4ea4\u65f6\u95f4\n        SnapshotFinishedTime\uff1a   \u5feb\u7167\u5b8c\u6210\u65f6\u95f4\n        UploadFinishedTime\uff1a     \u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\n        FinishedTime\uff1a           \u4f5c\u4e1a\u7ed3\u675f\u65f6\u95f4\n        UnfinishedTasks\uff1a        \u5728 SNAPSHOTING \u548c UPLOADING \u9636\u6bb5\u4f1a\u663e\u793a\u8fd8\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1id\n        Status\uff1a                 \u5982\u679c\u4f5c\u4e1a\u5931\u8d25\uff0c\u663e\u793a\u5931\u8d25\u4fe1\u606f\n        Timeout\uff1a                \u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b example_db \u4e0b\u6700\u540e\u4e00\u6b21 BACKUP \u4efb\u52a1\u3002"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW BACKUP FROM example_db;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, BACKUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);