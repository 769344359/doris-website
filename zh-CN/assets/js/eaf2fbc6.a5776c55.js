"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76009],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>g});var t=a(296540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?t.createElement(g,r(r({ref:n},p),{},{components:a})):t.createElement(g,r({ref:n},p))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},446811:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(58168),o=(a(296540),a(15680));const s={title:"Persistent Volume and ConfigMap",language:"en"},r=void 0,i={unversionedId:"install/cluster-deployment/k8s-deploy/persistent-volume",id:"version-2.1/install/cluster-deployment/k8s-deploy/persistent-volume",title:"Persistent Volume and ConfigMap",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/install/cluster-deployment/k8s-deploy/persistent-volume.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/persistent-volume",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/persistent-volume",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Persistent Volume and ConfigMap",language:"en"}},l={},c=[{value:"StorageClass",id:"storageclass",level:2},{value:"Customized ConfigMap",id:"customized-configmap",level:2},{value:"Add special configuration files to the conf directory",id:"add-special-configuration-files-to-the-conf-directory",level:2},{value:"BE multi-disk configuration",id:"be-multi-disk-configuration",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...a}=e;return(0,o.yg)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris-Operator supports mounting PV (Persistent Volume) on pods of various Doris components."),(0,o.yg)("p",null,"PV is generally created by the kubernetes system administrator. Doris-Operator does not use PV directly when deploying Doris services. Instead, it declares a set of resources through PVC to apply for PV from the kubernetes cluster.\nWhen a PVC is created, Kubernetes will attempt to bind it to an available PV that meets the requirements.\nStorageClass shields administrators from the process of manually creating PVs. When there are no ready-made PVs that meet PVC requirements, PVs can be dynamically allocated based on StorageClass.\nPV provides a variety of storage types, mainly divided into two categories: network storage and local storage. Based on their respective principles and implementations, the two provide users with different performance and usage experiences. Users can choose according to their own containerized service types and their own needs."),(0,o.yg)("p",null,"If PVC is not configured during deployment, Doris-Operator uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"emptyDir")," mode by default to store metadata data files and run logs. When the pod is restarted, related data will be lost."),(0,o.yg)("p",null,"Recommended node directory type for persistent storage:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"FE: doris-meta, log"),(0,o.yg)("li",{parentName:"ul"},"BE: storage, log"),(0,o.yg)("li",{parentName:"ul"},"CN: storage, log"),(0,o.yg)("li",{parentName:"ul"},"BROKER: log")),(0,o.yg)("p",null,"Doris-Operator outputs logs to the console and the specified directory at the same time. If the user's Kubernetes system has complete log collection capabilities, log information at the Doris INFO level (default) can be collected through console output.\nHowever, it is still recommended to configure PVC to persist log files, because in addition to INFO level logs, there are also logs such as fe.out, be.out, audit.log and garbage collection logs, which facilitates quick problem location and audit log backtracking."),(0,o.yg)("p",null,"ConfigMap is a resource object used to store configuration files in Kubernetes. It allows dynamically mounting configuration files and decouples configuration files from applications, making configuration management more flexible and maintainable.\nLike PVCs, ConfigMap can be referenced by Pods in order to use configuration data in the application."),(0,o.yg)("h2",{id:"storageclass"},"StorageClass"),(0,o.yg)("p",null,"Doris-Operator provides Kubernetes default ",(0,o.yg)("inlineCode",{parentName:"p"},"StorageClass")," mode to support FE and BE data storage, where the storage path (mountPath) uses the default configuration in the image.\nIf users need to specify the StorageClass themselves, they need to modify ",(0,o.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec.storageClassName")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"spec.feSpec.persistentVolumes"),", as shown below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-storageclass1\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/fe/doris-meta\n      name: storage0\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          # notice: if the storage size less 5G, fe will not start normal.\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/fe/log\n      name: storage1\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/be/storage\n      name: storage2\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/log\n      name: storage3\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,o.yg)("h2",{id:"customized-configmap"},"Customized ConfigMap"),(0,o.yg)("p",null,"Doris uses ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," in Kubernetes to decouple configuration files and services. Before deploying ",(0,o.yg)("inlineCode",{parentName:"p"},"doriscluster"),", you need to deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," you want to use under the same ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," in advance. The following example shows that FE uses ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," named fe-configmap and BE uses ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," named be-configmap. Cluster related yaml:"),(0,o.yg)("p",null,"ConfigMap sample for FE"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-configmap\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    # the output dir of stderr and stdout\n    LOG_DIR = ${DORIS_HOME}/log\n\n    JAVA_OPTS="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$CUR_DATE"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$CUR_DATE:time"\n\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n    \n    enable_fqdn_mode = true\n')),(0,o.yg)("p",null,"Note that when using FE's ConfigMap, you must add ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.conf"),". For specific reasons, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/cluster-management/fqdn"},"document here")),(0,o.yg)("p",null,"BE's ConfigMap sample"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,lg_tcache_max:20,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"doriscluster")," deployment example using the above two ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-configmap\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      # use kubectl create configmap fe-configmap --from-file=fe.conf\n      configMapName: fe-configmap\n      resolveKey: fe.conf\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      # use kubectl create configmap be-configmap --from-file=be.conf\n      configMapName: be-configmap\n      resolveKey: be.conf\n  brokerSpec:\n    replicas: 3\n    image: selectdb/doris.broker-ubuntu:2.0.2\n    limits:\n      cpu: 2\n      memory: 4Gi\n    requests:\n      cpu: 2\n      memory: 4Gi\n    configMapInfo:\n      # use kubectl create configmap broker-configmap --from-file=apache_hdfs_broker.conf\n      configMapName: broker-configmap\n      resolveKey: apache_hdfs_broker.conf\n\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"resolveKey")," here is the name of the incoming configuration file (must be ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.conf"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"be.conf")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"apache_hdfs_broker.conf"),", the cn node is also ",(0,o.yg)("inlineCode",{parentName:"p"},"be.conf"),") used to parse the incoming Doris cluster configuration file, doris-operator will parse the file to guide the customized deployment of doriscluster."),(0,o.yg)("h2",{id:"add-special-configuration-files-to-the-conf-directory"},"Add special configuration files to the conf directory"),(0,o.yg)("p",null,"This paragraph is for reference. Containerized deployment solutions that configure other files need to be placed in the conf directory of the Doris node. For example, the common HDFS/Hive configuration file mapping of ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/hive"},"Data Lake Multi-catalog"),"."),(0,o.yg)("p",null,"Here we take BE's ConfigMap and the core-site.xml file that needs to be added as an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n  core-site.xml: |\n    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    <configuration>\n      <property>\n      <name>hadoop.security.authentication</name>\n        <value>kerberos</value>\n      </property>\n    </configuration>\n    ...\n')),(0,o.yg)("p",null,"Note that the data structure in ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," is as follows: key-value pair mapping:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"data:\n  file_name_1:\n    file_content_1\n  file_name_2:\n    file_content_2\n  file_name_3:\n    file_content_3\n")),(0,o.yg)("h2",{id:"be-multi-disk-configuration"},"BE multi-disk configuration"),(0,o.yg)("p",null,"Doris' BE service supports multi-disk mounting, which can well solve the problem of mismatch between computing resources and storage resources in the server era. At the same time, using multiple disks can also greatly improve the storage efficiency of doris. On Kubernetes, Doris can also mount multiple disks to maximize storage efficiency. Using multiple disks on Kubernetes requires using configuration files.\nIn order to achieve decoupling of service and configuration, doris uses ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," as the bearer of configuration to dynamically mount configuration files for service use.\nThe following is the doriscluster configuration in which the BE service uses ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," to host the configuration file and mount two disks for BE use:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: doris.selectdb.com/v1\nkind: DorisCluster\nmetadata:\n  labels:\n    app.kubernetes.io/name: doriscluster\n  name: doriscluster-sample-storageclass1\nspec:\n  feSpec:\n    replicas: 3\n    image: selectdb/doris.fe-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/fe/doris-meta\n      name: storage0\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          # notice: if the storage size less 5G, fe will not start normal.\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/fe/log\n      name: storage1\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      configMapName: be-configmap\n      resolveKey: be.conf\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/be/storage\n      name: storage2\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/storage1\n      name: storage3\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/log\n      name: storage4\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,o.yg)("p",null,"Compared with the default example, the configuration of ",(0,o.yg)("inlineCode",{parentName:"p"},"configMapInfo")," is added, and a configuration of ",(0,o.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec")," is also added, ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#PersistentVolumeClaimSpec"},(0,o.yg)("inlineCode",{parentName:"a"},"persistentVolumeClaimSpec"))," fully follows the definition format of the Kubernetes native resource PVC spec.\nIn the example, ",(0,o.yg)("inlineCode",{parentName:"p"},"configMapInfo")," identifies which ConfigMap under the same ",(0,o.yg)("inlineCode",{parentName:"p"},"namespace")," and which key corresponding content will be used as the configuration file after BE is deployed, where the key must be be.conf. The following is an example of the above ",(0,o.yg)("inlineCode",{parentName:"p"},"doriscluster")," ConfigMap that needs to be pre-deployed:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,lg_tcache_max:20,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n    \n    storage_root_path = /opt/apache-doris/be/storage,medium:ssd;/opt/apache-doris/be/storage1,medium:ssd\n')),(0,o.yg)("p",null,"When using multiple disks, the path in the corresponding value of ",(0,o.yg)("inlineCode",{parentName:"p"},"storage_root_path")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"ConfigMap")," should correspond to each mounting path of ",(0,o.yg)("inlineCode",{parentName:"p"},"persistentVolume")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"doriscluster"),". ",(0,o.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/admin-manual/config/be-config/#storage_root_path"},(0,o.yg)("inlineCode",{parentName:"a"},"storage_root_path"))," For the corresponding writing rules, please refer to the document in the link.\nWhen using cloud disks, the media is uniformly ",(0,o.yg)("inlineCode",{parentName:"p"},"SSD"),"."))}m.isMDXComponent=!0}}]);