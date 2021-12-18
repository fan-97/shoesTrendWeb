<template>
    <div class="hello">
        <!-- 折线图 -->
        <v-chart :options="myline" style="width:100%" ref='mychart'/>
    </div>
</template>

<script>
// import ECharts from 'vue-echarts';
import {getTrendByArticle} from '@/requests/api'
import { ElMessage } from 'element-plus'
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
            getTrendByArticle({
                "articleNumber":"GV9872",
                "startTime":"",
                "endTime":""
            }).then(res=>{
                console.log(res);
                let data = res.data;
                 this.show_option(data);
            }).catch(res=>{
                console.log('catch:',res);
                ElMessage.error(res.message)
            });
        },
        show_option(data){
            console.log(data,111)
            console.log(this.$refs.mychart.options)
            let seriesData = data['seriesData'];
            for (let s in seriesData){
                this.myline.series.push({
                    name: s['size'],
                    type:"line",
                    stack:"价格",
                    label:{
                        show:true,
                        formatter:'￥{c}'
                    },
                    smooth:true,
                    data: s['price']
                })
            }
            this.myline.legend.data = data['legend'];
            this.myline.title.text = data['titleText'];
            this.myline.title.subtext = data['titleSubText'];
            this.myline.xAxis.data = data['date'];

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
