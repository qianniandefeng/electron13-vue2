(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e32c636"],{"022e":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-db"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:8}},[e._v(" • 大数据量: 0-1024GB(单库) ")]),t("a-col",{attrs:{span:8}},[e._v(" • 高性能 ")]),t("a-col",{attrs:{span:8}},[e._v(" • 类mysql语法 ")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-input",{attrs:{value:e.data_dir,"addon-before":"数据目录"},model:{value:e.data_dir,callback:function(t){e.data_dir=t},expression:"data_dir"}})],1),t("a-col",{attrs:{span:2}}),t("a-col",{attrs:{span:5}},[t("a-button",{on:{click:e.selectDir}},[e._v(" 修改目录 ")])],1),t("a-col",{attrs:{span:5}},[t("a-button",{on:{click:e.openDir}},[e._v(" 打开目录 ")])],1)],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.all_list)+" ")])],1)],1),e._m(3),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.name,"addon-before":"姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.age,"addon-before":"年龄"},model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.sqlitedbOperation("add")}}},[e._v(" 添加 ")])],1)],1)],1),e._m(4),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.search_age,"addon-before":"年龄"},model:{value:e.search_age,callback:function(t){e.search_age=t},expression:"search_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.sqlitedbOperation("get")}}},[e._v(" 查找 ")])],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.userList)+" ")])],1)],1),e._m(5),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_name,"addon-before":"姓名(条件)"},model:{value:e.update_name,callback:function(t){e.update_name=t},expression:"update_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_age,"addon-before":"年龄"},model:{value:e.update_age,callback:function(t){e.update_age=t},expression:"update_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.sqlitedbOperation("update")}}},[e._v(" 更新 ")])],1)],1)],1),e._m(6),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.delete_name,"addon-before":"姓名"},model:{value:e.delete_name,callback:function(t){e.delete_name=t},expression:"delete_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(t){return e.sqlitedbOperation("del")}}},[e._v(" 删除 ")])],1)],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. sqlite本地数据库 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 数据目录 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 3. 测试数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 添加数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 获取数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 5. 修改数据 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 6. 删除数据 ")])])}],l=a("a358"),s={data(){return{name:"李四",age:20,userList:["空"],search_age:20,update_name:"李四",update_age:31,delete_name:"李四",all_list:["空"],data_dir:""}},mounted(){this.init(),this.getAllTestData()},methods:{init(){const e={action:"getDataDir"};this.$ipc.invoke(l["b"].sqlitedbOperation,e).then(e=>{this.data_dir=e.result})},getAllTestData(){const e=this,t={action:"all"};this.$ipc.invoke(l["b"].sqlitedbOperation,t).then(t=>{if(0==t.all_list.length)return!1;e.all_list=t.all_list})},selectDir(){this.$ipc.invoke(l["b"].selectFolder,"").then(e=>{this.data_dir=e,this.modifyDataDir(e)})},openDir(){console.log("dd:",this.data_dir),this.$ipc.invoke(l["b"].openDirectory,{id:this.data_dir}).then(e=>{})},modifyDataDir(e){const t={action:"setDataDir",data_dir:e};this.$ipc.invoke(l["b"].sqlitedbOperation,t).then(e=>{this.all_list=e.all_list})},sqlitedbOperation(e){const t=this,a={action:e,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==e&&0==this.name.length&&t.$message.error("请填写数据"),this.$ipc.invoke(l["b"].sqlitedbOperation,a).then(a=>{if(console.log("res:",a),"get"==e){if(0==a.result.length)return void t.$message.error("没有数据");t.userList=a.result}0!=a.all_list.length?(t.all_list=a.all_list,t.$message.success("success")):t.all_list=["空"]})}}},r=s,i=(a("e1eb"),a("e607")),c=Object(i["a"])(r,o,n,!1,null,"e34e7b1a",null);t["default"]=c.exports},"9e7c":function(e,t,a){},a358:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c}));var o=a("cbef"),n=a.n(o),l=a("b775");const s={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",someJob:"controller.example.someJob",timerJobProgress:"controller.example.timerJobProgress",hello:"controller.example.hello"},r={ExecDll:"controller.out.execDll.execDll"},i={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},c=(e,t)=>{const a=n.a.get("httpServiceConfig"),o=a.server||"http://localhost:7071";let s=e.split(".").join("/");return s=o+"/"+s,console.log("url:",s),Object(l["b"])({url:s,method:"post",data:t,params:{},timeout:6e4})}},e1eb:function(e,t,a){"use strict";a("9e7c")}}]);
//# sourceMappingURL=chunk-6e32c636.f4b88255.js.map