<template>
    <div class="hello">
        <!-- 折线图 -->
        <v-chart :options="myline" style="width:100%" />
    </div>
</template>

<script>
import ECharts from 'vue-echarts';
// echarts-gl包含大部分图表所需要的依赖模块
// import 'echarts-gl';

// 按需引入不同的图表需要的依赖
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/chart/gauge';

export default {
    name: "HelloWorld",
    data() {
        return {
            myline: {
                title: {
                    textStyle:{
                        color:'#1E90FF',
                        fontStyle:'italic'
                    },
                    text: '', //鞋子标题
                    subtext:'', // 鞋子货号
                    // top:"10%",
                    right:"50%",
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 20,
                    top: 20,
                    bottom: 20,
                    data: [] // 尺码信息
                },
                grid: {
                    // left: "3%",
                    // right: "10%",
                    // bottom: "8%",
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    name:"日期",
                    type: "category",
                    boundaryGap: false,
                    data: [] // 日期
                },
                yAxis: {
                    name:"价格",
                    type: "value"
                },
                series:[],
                // media:{
                    
                // }
            },
        
        };
    },
    components: {
        // 'v-chart': ECharts
    },
    mounted (){
        this.getData();
    },
    methods:{
        getData: function(){
            // 从后台去获取 TODO
            this.myline.series = [ {
                        name: "35",
                        type: "line",
                        stack: "价格",
                        label:{
                            show:true,
                            formatter:'￥{c}'
                        },
                        smooth:true,
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: "36",
                        type: "line",
                        stack: "价格",
                        label:{
                            show:true,
                            formatter:'￥{c}'
                        },
                        smooth:true,
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: "37",
                        type: "line",
                        stack: "价格",
                        label:{
                            show:true,
                            formatter:'￥{c}'
                        },
                        smooth:true,
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: "38",
                        type: "line",
                        stack: "价格",
                        label:{
                            show:true,
                            formatter:'￥{c}'
                        },
                        smooth:true,
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: "39",
                        type: "line",
                        stack: "价格",
                        label:{
                            show:true,
                            formatter:'￥{c}'
                        },
                        smooth:true,
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }];
            this.myline.legend.data = ["35","36","37","38","39"];
            this.myline.title.text = "FW4255";
            this.myline.title.subtext = "超级好看的鞋子";
            this.myline.xAxis.data = ["2021-12-10","2021-12-11","2021-12-12","2021-12-13","2021-12-14","2021-12-15","2021-12-16"];

        }
    }
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

</style>
