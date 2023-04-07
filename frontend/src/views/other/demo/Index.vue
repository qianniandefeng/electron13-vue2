<template>
  <div>
    <a-row>
      <a-col :span="16">
        <div>
          <div id="main1"></div>
          <div id="main2"></div>
          <div id="main3"></div>
          <div id="main4"></div>
        </div>
      </a-col>
      <a-col :span="8">
        <a-table :columns="columns" :data-source="data" size="small">
          <a slot="name" slot-scope="text">{{ text }}</a>

          <template slot="value" slot-scope="text">
            {{ $moment(new Date(parseInt(text))).format('yyyy-MM-DD HH:mm:ss') }}
          </template>


        </a-table>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="16">
        <div>
          <div id="main5"></div>
        </div>
      </a-col>
      <a-col :span="8">
        <a-button @click="sendMsgStart">开始</a-button>
        <a-button @click="sendMsgStop">结束</a-button>
        <br>
        结果：{{ messageString }}
      </a-col>


    </a-row>



  </div>
</template>

<script>
import { ipcApiRoute, specialIpcRoute } from '@/api/main'

export default {
  name: "Index",
  data() {
    return {
      messageString: '',
      chartInitData: [
        {
          title: 'Throttle',
          min: 0,
          max: 100,
          unit: '%'
        },
        {
          title: 'Speed',
          min: 0,
          max: 8,
          unit: 'rpm'
        },
        {
          title: 'Torque',
          min: -100,
          max: 300,
          unit: 'Nm'
        },
        {
          title: 'Power',
          min: -100,
          max: 300,
          unit: 'Kw'
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'title',
          key: 'name',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Min',
          dataIndex: 'min',
          key: 'min',
          width: 50,
        },
        {
          title: 'Max',
          dataIndex: 'max',
          key: 'max',
          width: 50,
        },
        {
          title: 'Unit',
          dataIndex: 'unit',
          key: 'unit',
          width: 50,
        },
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'value',
          width: 160,
          scopedSlots: { customRender: 'value' },
        },
      ],
      data: []
    }
  },

  mounted() {
    this.init();

  },
  methods: {
    // 仪表盘
    getGaugeOption(data) {
      return {
        animation: false,
        title: {
          text: data.title
        },
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: data.min,
            max: data.max,
            splitNumber: 4,
            itemStyle: {
              color: '#58D9F9',
              shadowColor: 'rgba(0,138,255,0.45)',
              shadowBlur: 5,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              width: 8
            },
            pointer: {
              icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
              length: '75%',
              width: 10,
              offsetCenter: [0, '5%']
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 8
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: '#999'
              }
            },
            axisLabel: {
              distance: -45,
              color: '#999',
              fontSize: 14
            },
            title: {
              show: false
            },
            detail: {
              backgroundColor: '#fff',
              borderColor: '#999',
              borderWidth: 2,
              width: '60%',
              lineHeight: 30,
              height: 30,
              borderRadius: 8,
              offsetCenter: [0, '35%'],
              valueAnimation: true,
              formatter: function (value) {
                return '{value|' + value.toFixed(0) + `}{unit|${data.unit}}`;
              },
              rich: {
                value: {
                  fontSize: 20,
                  fontWeight: 'bolder',
                  color: '#777'
                },
                unit: {
                  fontSize: 14,
                  color: '#999',
                  padding: [0, 0, -20, 10]
                }
              }
            },
            data: [
              {
                value: data.value
              }
            ]
          }
        ]
      }
    },
    // 折线图
    getCategoryOption(data) {
      return {
        animation: false,
        xAxis: {
          type: 'category',
          data: ['', '', '', '', '', '', '']
        },
        yAxis: [
          {
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 8000,
            interval: 2000,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 200,
            interval: 50,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: 'Evaporation',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              200, 490, 700, 2320, 2560, 3670, 3560, 3900
            ]
          },
          {
            name: 'Precipitation',
            type: 'line',
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data: [
              26, 59, 90, 264, 287, 707, 1756, 1822
            ]
          },
        ]
      }
    },
    init () {
      const self = this;
      let myChart1 = this.$echarts.init(document.getElementById('main1'));
      let myChart2 = this.$echarts.init(document.getElementById('main2'));
      let myChart3 = this.$echarts.init(document.getElementById('main3'));
      let myChart4 = this.$echarts.init(document.getElementById('main4'));
      let myChart5 = this.$echarts.init(document.getElementById('main5'));
      // console.log(myChart1);
      myChart1.setOption(this.getGaugeOption({...this.chartInitData[0], value: 0}))
      myChart2.setOption(this.getGaugeOption({...this.chartInitData[1], value: 0}))
      myChart3.setOption(this.getGaugeOption({...this.chartInitData[2], value: 0}))
      myChart4.setOption(this.getGaugeOption({...this.chartInitData[3], value: 0}))
      myChart5.setOption(this.getCategoryOption())

      // 避免重复监听，或者将 on 功能写到一个统一的地方，只加载一次
      this.$ipc.removeAllListeners(ipcApiRoute.ipcSendMsg);
      this.$ipc.on(ipcApiRoute.ipcSendMsg, (event, result) => {
        // console.log('[ipcRenderer] [socketMsgStart] result:', result);

        self.messageString = result.substr(13, 2);
        // console.log(self.messageString);
        // console.log(result.substr(12, 16));
        if(result === '停止了') {
          myChart1.setOption(this.getGaugeOption({...this.chartInitData[0], value: 0}))
          myChart2.setOption(this.getGaugeOption({...this.chartInitData[1], value: 0}))
          myChart3.setOption(this.getGaugeOption({...this.chartInitData[2], value: 0}))
          myChart4.setOption(this.getGaugeOption({...this.chartInitData[3], value: 0}))
        } else {
          myChart1.setOption(this.getGaugeOption({...this.chartInitData[0], value: self.messageString}))
          myChart2.setOption(this.getGaugeOption({...this.chartInitData[1], value: self.messageString}))
          myChart3.setOption(this.getGaugeOption({...this.chartInitData[2], value: self.messageString}))
          myChart4.setOption(this.getGaugeOption({...this.chartInitData[3], value: self.messageString}))
          this.data.unshift({...this.chartInitData[0], value: result.substr(3, 19)})
        }

        // 调用后端的另一个接口
        // event.sender.send(ipcApiRoute.hello, 'electron-egg');
      })

    },
    sendMsgStart() {
      const params = {
        type: 'start',
        content: '开始'
      }
      this.$ipc.send(ipcApiRoute.ipcSendMsg, params)
    },
    sendMsgStop() {
      const params = {
        type: 'end',
        content: ''
      }
      this.$ipc.send(ipcApiRoute.ipcSendMsg, params)
    },
  }
}
</script>

<style scoped>
.one-block-2 {
  display: block;
}
#main1, #main2, #main3, #main4 {
  display: inline-block;
  width: 300px;
  height: 300px;
}
#main5 {
  width: 600px;
  height: 400px;
}
</style>
