"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87012],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),y=r,u=d["".concat(s,".").concat(y)]||d[y]||c[y]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},163252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"MySQL Load",language:"en"},i=void 0,o={unversionedId:"data-operate/import/mysql-load-manual",id:"version-2.0/data-operate/import/mysql-load-manual",title:"MySQL Load",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/import/mysql-load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/mysql-load-manual",permalink:"/docs/2.0/data-operate/import/mysql-load-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MySQL Load",language:"en"},sidebar:"docs",previous:{title:"Insert Into",permalink:"/docs/2.0/data-operate/import/insert-into-manual"},next:{title:"Loading Data in JSON Format",permalink:"/docs/2.0/data-operate/import/load-json-format"}},s={},p=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Get started",id:"get-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Create a MySQL Load job",id:"create-a-mysql-load-job",level:3},{value:"View results",id:"view-results",level:3},{value:"Cancel a MySQL Load job",id:"cancel-a-mysql-load-job",level:3},{value:"Manual",id:"manual",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:2},{value:"Specify load timeout",id:"specify-load-timeout",level:3},{value:"Specify allowable error rate",id:"specify-allowable-error-rate",level:3},{value:"Import column mapping",id:"import-column-mapping",level:3},{value:"Specify column and row delimiters",id:"specify-column-and-row-delimiters",level:3},{value:"Specify target partition",id:"specify-target-partition",level:3},{value:"Specify time zone",id:"specify-time-zone",level:3},{value:"Specify the memory limit for the import",id:"specify-the-memory-limit-for-the-import",level:3},{value:"More help",id:"more-help",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Doris is compatible with the MySQL protocol and supports the use of the standard MySQL ",(0,r.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html"},"LOAD DATA")," syntax to import local files. MySQL Load is a synchronous import method where the import result is returned upon completion. That means users can tell whether the import suceeds from the returned result. Generally, the MySQL Load method can be used to ingest files smaller than 10GB in size. For files larger than 10GB, it is recommended to split them into smaller ones. MySQL Load ensures the atomicity of a batch of import tasks, meaning that either all imports succeed or all imports fail."),(0,r.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Supported format")),(0,r.yg)("p",null,"MySQL Load is primarily designed for importing CSV files from the client's local machine or importing data from data streams through programs."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Restrictions")),(0,r.yg)("p",null,"When importing CSV files, it is important to differentiate between null values and empty strings (''):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Null values are represented by the escape sequence \\N. For example, in ",(0,r.yg)("inlineCode",{parentName:"li"},"a,\\N,b"),", the middle column represents a null value."),(0,r.yg)("li",{parentName:"ul"},"Empty strings are represented directly as empty, such as ",(0,r.yg)("inlineCode",{parentName:"li"},"a, ,b"),", where the middle column represents an empty string.")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"MySQL Load is similar to Stream Load in terms of functionality. They both involve importing local files into the Doris cluster. Therefore, the implementation of MySQL Load reuses the basic import capabilities of Stream Load."),(0,r.yg)("p",null,"The main processes of MySQL Load include:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The user submits a LOAD DATA request to the frontend (FE), which performs the parsing and encapsulates the request into a Stream Load task."),(0,r.yg)("li",{parentName:"ol"},"The FE selects a backend (BE) node and sends the Stream Load request to it."),(0,r.yg)("li",{parentName:"ol"},"Meanwhile, the FE reads the local file data from the MySQL client in an asynchronous and streaming manner and sends it in real time to the HTTP request of the Stream Load."),(0,r.yg)("li",{parentName:"ol"},"Once the data transfer from the MySQL client is complete, the FE waits for the Stream Load to finish and displays the import result (success or failure) to the client.")),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("h3",{id:"preparations"},"Preparations"),(0,r.yg)("p",null,"MySQL Load requires INSERT permission on the target table. You can grant permissions to user account using the GRANT command."),(0,r.yg)("h3",{id:"create-a-mysql-load-job"},"Create a MySQL Load job"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Prepare the test data")),(0,r.yg)("p",null,"Create a data file ",(0,r.yg)("inlineCode",{parentName:"p"},"client_local.csv")," containing the following sample data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Connect to MySQL client")),(0,r.yg)("p",null,"Connect to the MySQL client before executing the LOAD DATA command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"mysql --local-infile  -h <fe_ip> -P <fe_query_port> -u root -D testdb\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Specific parameter options need to be used during the connection:"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},"When connecting to the MySQL client, ",(0,r.yg)("inlineCode",{parentName:"li"},"--local-infile")," must be included, otherwise an error might be thrown."),(0,r.yg)("li",{parentName:"ol"},"When connecting via JDBC, ",(0,r.yg)("inlineCode",{parentName:"li"},"allowLoadLocalInfile=true")," must be specified in the URL."))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Create the test table")),(0,r.yg)("p",null,"Create a table as follows in Doris:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE testdb.t1 (\n    pk     INT, \n    v1     INT SUM\n) AGGREGATE KEY (pk) \nDISTRIBUTED BY hash (pk);\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Run the LOAD DATA command")),(0,r.yg)("p",null,"After connecting to the MySQL client, create a Load job. The command is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n")),(0,r.yg)("h3",{id:"view-results"},"View results"),(0,r.yg)("p",null,"MySQL Load is a synchronous import method, and the results of the import are returned to the user in the command-line interface. If the import execution fails, it will display specific error messages."),(0,r.yg)("p",null,"Below is an example of a successful import result, which returns the number of imported rows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n")),(0,r.yg)("p",null,"When there are exceptions during the import, the corresponding error will be displayed on the client:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"ERROR 1105 (HY000): errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows with load id b612907c-ccf4-4ac2-82fe-107ece655f0f\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"loadId")," is included in the error message, based on which you can view the detailed information via the ",(0,r.yg)("inlineCode",{parentName:"p"},"show load warnings")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"show load warnings where label='b612907c-ccf4-4ac2-82fe-107ece655f0f';\n")),(0,r.yg)("h3",{id:"cancel-a-mysql-load-job"},"Cancel a MySQL Load job"),(0,r.yg)("p",null,"Doris does not allow manual cancellation of MySQL Load jobs. In the event of a timeout or import error, the corresponding MySQL Load job will be automatically cancelled by the system."),(0,r.yg)("h2",{id:"manual"},"Manual"),(0,r.yg)("h3",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,"The syntax for LOAD DATA is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE '<load_data_file>'\nINTO TABLE [<db_name>.]<table_name>\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY '<column_terminated_operator>']\n[LINES TERMINATED BY '<line_terminated_operator>']\n[IGNORE <ignore_lines> LINES]\n[(col_name_or_user_var[, col_name_or_user_var] ...)]\n[SET col_name={expr | DEFAULT}[, col_name={expr | DEFAULT}] ...]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n")),(0,r.yg)("p",null,"Descriptions of modules in the Load job:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Module"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INFILE"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the local file path, which can be either a relative path or an absolute path.Currently, load_data_file only supports a single file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTO TABLE"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the database and table, and the database name can be omitted.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PARTITION"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the target partition. If the user can determine the partition corresponding to the data, it is recommended to specify this. Data that does not fit into the specified partitions will be filtered out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"COLUMNS TERMINATED BY"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the column delimiter.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LINE TERMINATED BY"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the row delimiter.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IGNORE num LINES"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the number of rows to skip in the CSV import, typically specified as 1 to skip the header.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"col_name_or_user_var"),(0,r.yg)("td",{parentName:"tr",align:null},"This specifies the column mapping syntax. For more information, refer to ",(0,r.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/2.0/data-operate/import/load-data-convert#column-mapping"},"Column Mapping"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PROPERTIES"),(0,r.yg)("td",{parentName:"tr",align:null},"Parameters for the Load.")))),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"By the ",(0,r.yg)("inlineCode",{parentName:"p"},"PROPERTIES (key1 = value1 [, key2=value2])")," syntax, you can configure the parameters for the Load. "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_filter_ratio"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum filtering rate allowed. Must be between 0 and 1, inclusive. The default value is 0, indicating no tolerance for any error rows.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"The import timeout, measured in seconds. The default value is 600. The range allowed is from 1s to 259200s.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"strict_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable strict mode for this import. Disabled by default.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"The time zone for this import. The default time zone is UTC+8. This parameter will affect the results of any time zone-related functions involved in the import.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exec_mem_limit"),(0,r.yg)("td",{parentName:"tr",align:null},"Memory limit for the import, defaults to 2GB, measured in bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"trim_double_quotes"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean, defaults to false. If this is set to true, the outermost double quotes will be trimmed from each field in the import file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enclose"),(0,r.yg)("td",{parentName:"tr",align:null},'This specifies the enclosure character. When a CSV data field contains line breaks or column delimiters, you can specify a single-byte character as the enclosure character to prevent accidental truncation.For example, if the column delimiter is ",", and the enclosure character is "\'", in data "a,\'b,c\'", "b,c" will be parsed as one field.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"escape"),(0,r.yg)("td",{parentName:"tr",align:null},'This specifies the escape character. This is used when the data contains the same character as the enclosure character, which needs to be treated as part of the field.For example, if the data is "a,\'b,\'c\'", the enclosure character is "\'", and you want "b,\'c" to be parsed as one field, you need to specify a single-byte escape character, such as "\\", to modify the data to "a,\'b,\\\'c\'".')))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"specify-load-timeout"},"Specify load timeout"),(0,r.yg)("p",null,"You can adjust the import timeout by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"timeout")," in PROPERTIES. For example, set it to 100s:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100");\n')),(0,r.yg)("h3",{id:"specify-allowable-error-rate"},"Specify allowable error rate"),(0,r.yg)("p",null,"You can adjust the allowable error rate by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"max_filter_ratio")," in PROPERTIES. For example, set it to 20%:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2");\n')),(0,r.yg)("h3",{id:"import-column-mapping"},"Import column mapping"),(0,r.yg)("p",null,"The following example adjusts the order of columns in the CSV file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\n(k2, k1, v1);\n")),(0,r.yg)("h3",{id:"specify-column-and-row-delimiters"},"Specify column and row delimiters"),(0,r.yg)("p",null,"You can specify the column and row delimiters using the ",(0,r.yg)("inlineCode",{parentName:"p"},"COLUMNS TERMINATED BY")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"LINES TERMINATED BY")," clauses. In the following example, (,) and (\\n) are used as the column and row delimiters, respectively."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n")),(0,r.yg)("h3",{id:"specify-target-partition"},"Specify target partition"),(0,r.yg)("p",null,"You can specify the target partition for the import using the ",(0,r.yg)("inlineCode",{parentName:"p"},"PARTITION")," clause. In the following example, data will be loaded into the specified partitions 'p1' and 'p2', and any data that does not belong to these two partitions will be filtered out:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2);\n")),(0,r.yg)("h3",{id:"specify-time-zone"},"Specify time zone"),(0,r.yg)("p",null,"You can specify the ",(0,r.yg)("inlineCode",{parentName:"p"},"timezone")," in PROPERTIES. In the following example, the timezone is set to Africa/Abidjan:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timezone"="Africa/Abidjan");\n')),(0,r.yg)("h3",{id:"specify-the-memory-limit-for-the-import"},"Specify the memory limit for the import"),(0,r.yg)("p",null,"You can specify the memory limit for the import by the ",(0,r.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," parameter in PROPERTIES. In the following example, the memory limit is set to 10G:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240");\n')),(0,r.yg)("h2",{id:"more-help"},"More help"),(0,r.yg)("p",null,"For more detailed syntax and best practices related to MySQL Load, refer to the ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD/"},"MySQL Load")," command manual."))}c.isMDXComponent=!0}}]);