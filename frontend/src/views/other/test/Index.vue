<template>
  <div id="app-other">
    <div class="one-block-1">
      <span>
        待开发...
      </span>
    </div>
    <div class="one-block-2">
      <a-input-group size="large">
        <a-row :gutter="8">
          <a-col :span="5">
            <a-input v-model="testa"></a-input>
          </a-col>
          <a-col :span="8">
            <a-input v-model="testb"></a-input>
          </a-col>
        </a-row>
      </a-input-group>
      <br>
      <div>result: {{this.result}}</div>
      <a-button type="primary" @click="dllTestBtn" style="margin-right: 15px">
        dllTest
      </a-button>
      <a-button type="primary" @click="testBtn">
        test
      </a-button>
    </div>
  </div>
</template>
<script>
import { ipcApiRoute, dllApiRoute } from '@/api/main'

export default {
  data() {
    return {
      testa: 0,
      testb: 0,
      result: {}
    };
  },
  methods: {
    dllTestBtn () {
      this.$ipc.invoke(dllApiRoute.ExecDll, {a: this.testa, b: this.testb}).then(res => {
        this.result = res
        console.log('ExecDll:', res);
      })
    },
    testBtn () {
      this.$ipc.invoke(ipcApiRoute.test).then(res => {
        console.log('test:', res);
      })
    },
  }
};
</script>
<style lang="less" scoped>
#app-other {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
