(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b12ce9fa"],{"6f93":function(e,o,t){"use strict";t("f6b8")},a358:function(e,o,t){"use strict";t.d(o,"b",(function(){return a})),t.d(o,"a",(function(){return c})),t.d(o,"d",(function(){return s})),t.d(o,"c",(function(){return i}));var r=t("cbef"),n=t.n(r),l=t("b775");const a={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",someJob:"controller.example.someJob",timerJobProgress:"controller.example.timerJobProgress",hello:"controller.example.hello"},c={ExecDll:"controller.out.execDll.execDll"},s={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,o)=>{const t=n.a.get("httpServiceConfig"),r=t.server||"http://localhost:7071";let a=e.split(".").join("/");return a=r+"/"+a,console.log("url:",a),Object(l["b"])({url:a,method:"post",data:o,params:{},timeout:6e4})}},f6b8:function(e,o,t){},fa8c:function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-other"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.startServer()}}},[e._v(" 启动java项目 ")]),o("a-button",{on:{click:function(o){return e.sendRequest()}}},[e._v(" 测试接口 ")]),o("a-button",{on:{click:function(o){return e.closeServer()}}},[e._v(" 关闭java项目 ")])],1)],1)])},n=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 请求java服务接口 ")])])}],l=t("cbef"),a=t.n(l),c=t("a358"),s={data(){return{server:""}},mounted(){},methods:{startServer(){this.$ipc.invoke(c["b"].startJavaServer,{}).then(e=>{0!=e.code&&this.$message.error(e.msg),this.$message.info("异步启动"),a.a.set("javaService",e.server)})},closeServer(){this.$ipc.invoke(c["b"].closeJavaServer,{}).then(e=>{0!=e.code&&this.$message.error(e.msg),this.$message.info("异步关闭"),a.a.remove("javaService")})},sendRequest(){const e=a.a.get("javaService")||"";if(""==e)return void this.$message.error("服务未开启 或 正在启动中");let o=e+"/test1/get",t={url:o,method:"get",params:{id:"1111111"},timeout:6e4};this.$http(t).then(e=>{this.$message.info("java服务返回: "+e)})}}},i=s,p=(t("6f93"),t("e607")),m=Object(p["a"])(i,r,n,!1,null,"667b49cb",null);o["default"]=m.exports}}]);
//# sourceMappingURL=chunk-b12ce9fa.6c76718d.js.map