import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import App from './App'
import router from './router'
import { VueAxios } from './utils/request'
import moment from 'moment'
import * as echarts from 'echarts' // 导入echarts
import { ipc } from '@/utils/ipcRenderer'

// 使用antd
Vue.use(antd)

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

// 全局注入IPC通信
Vue.prototype.$ipc = ipc

Vue.prototype.$moment = moment // 引入日期处理类库

Vue.prototype.$echarts = echarts // 绑定原型，以后可以在组件中使用this.$echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
