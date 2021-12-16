<template>
    <div class="hello">
        <!-- polar -->
        <v-chart :options="polar" />
        <hr>
        <!-- 折线图 -->
        <v-chart :options="myline" />
        <hr>
        <!-- 仪表图 -->
        <v-chart :options="myyb"></v-chart>
        <hr>
        <!-- 饼状图 -->
        <v-chart :options="mypie"></v-chart>
        <hr>
        <!-- 堆叠柱状图 -->
        <v-chart :options="myzhu"></v-chart>
        <hr>
        <!-- 中国地图 -->
        <v-chart :options="chinaMap"></v-chart>
        <hr>
        <!-- 3D地球模型 -->
        <v-chart :options="globe"></v-chart>
    </div>
</template>

<script>
// import ECharts from 'vue-echarts';
// echarts-gl包含大部分图表所需要的依赖模块
// import 'echarts-gl';

// 按需引入不同的图表需要的依赖
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/chart/gauge';

export default {
    name: "HelloWorld",
    data() {
        let data = [];

        for (let i = 0; i <= 360; i++) {
            let t = (i / 180) * Math.PI;
            let r = Math.sin(2 * t) * Math.cos(2 * t);
            data.push([r, i]);
        }

        return {
            polar: {
                title: {
                    text: "极坐标双数值轴"
                },
                legend: {
                    data: ["line"]
                },
                polar: {
                    center: ["50%", "54%"]
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross"
                    }
                },
                angleAxis: {
                    type: "value",
                    startAngle: 0
                },
                radiusAxis: {
                    min: 0
                },
                series: [
                    {
                        coordinateSystem: "polar",
                        name: "line",
                        type: "line",
                        showSymbol: false,
                        data: data
                    }
                ],
                animationDuration: 2000
            },
            myline: {
                title: {
                    text: "折线图堆叠"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: [
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "直接访问",
                        "搜索引擎"
                    ]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                    ]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        name: "邮件营销",
                        type: "line",
                        stack: "总量",
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: "联盟广告",
                        type: "line",
                        stack: "总量",
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: "视频广告",
                        type: "line",
                        stack: "总量",
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: "直接访问",
                        type: "line",
                        stack: "总量",
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: "搜索引擎",
                        type: "line",
                        stack: "总量",
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            },
            //  饼状图
            mypie: {
                title: {
                    text: "某站点用户访问来源",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [
                        "直接访问",
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "搜索引擎"
                    ]
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [
                            { value: 335, name: "直接访问" },
                            { value: 310, name: "邮件营销" },
                            { value: 234, name: "联盟广告" },
                            { value: 135, name: "视频广告" },
                            { value: 1548, name: "搜索引擎" }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            },
            //  仪表图
            myyb: {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: "业务指标",
                        type: "gauge",
                        detail: { formatter: "{value}%" },
                        data: [{ value: 50, name: "完成率" }]
                    }
                ]
            },
            // 堆叠柱状图
            myzhu: {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: [
                        "直接访问",
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "搜索引擎"
                    ]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "value"
                },
                yAxis: {
                    type: "category",
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                    ]
                },
                series: [
                    {
                        name: "直接访问",
                        type: "bar",
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: "邮件营销",
                        type: "bar",
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: "联盟广告",
                        type: "bar",
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: "视频广告",
                        type: "bar",
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: "搜索引擎",
                        type: "bar",
                        stack: "总量",
                        label: {
                            normal: {
                                show: true,
                                position: "insideRight"
                            }
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            },
            //   中国地图
            chinaMap: {
                dataRange: {
                    show: true,
                    min: 0,
                    max: 1000,
                    x: "left",
                    y: "bottom",
                    color: ["#e0ffff", "#006edd"],
                    text: ["高", "低"], // 文本，默认为数值文本
                    calculable: true
                },
                // 鼠标悬浮提示框
                tooltip: {
                    padding: 10,
                    enterable: true,
                    transitionDuration: 1,
                    textStyle: {
                        color: "#000",
                        decoration: "none"
                    },
                    // formatter: function(params) {
                    //     console.log(params);
                    //     var res =
                    //         '<div style="height:160px;width:300px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa"><div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0"><span style="line-height:50px;margin-left:18px">山东省</span><span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer">点击查看详情</span></div><div style="height:110px;width:100%;border-radius:5px;background:#fff"><div style="padding-left:18px;padding-top:22px"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> <span>有效条数</span><span style="float:right;margin-right:18px">2323万</span></div><div style="padding-left:18px;padding-top:14px"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> <span>质量合格率</span><span style="float:right;margin-right:18px">85%</span></div></div></div>';
                    //     return res;
                    // }
                },
                series: [
                    {
                        name: "自定义名称",
                        type: "map",
                        mapType: "china",
                        itemStyle: {
                            normal: { label: { show: false } },
                            emphasis: { label: { show: true } }
                        },
                        data: [
                            {
                                name: "北京",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "天津",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "上海",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "重庆",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "河北",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "河南",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "云南",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "辽宁",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "黑龙江",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "湖南",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "安徽",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "山东",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "新疆",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "江苏",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "浙江",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "江西",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "湖北",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "广西",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "甘肃",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "山西",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "内蒙古",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "陕西",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "吉林",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "福建",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "贵州",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "广东",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "青海",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "西藏",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "四川",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "宁夏",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "海南",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "台湾",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "香港",
                                value: Math.round(Math.random() * 1000)
                            },
                            {
                                name: "澳门",
                                value: Math.round(Math.random() * 1000)
                            }
                        ]
                    }
                ]
            },
            // 地球3D模型展示
            globe: {
                backgroundColor: "#000",
                globe: {
                    baseTexture: require("../assets/earth/earth.jpg"),

                    heightTexture: require("../assets/earth/bathymetry_bw_composite_4k.jpg"),

                    displacementScale: 0.1,

                    shading: "lambert",

                    environment: require("../assets/earth/starfield.jpg"),

                    light: {
                        ambient: {
                            intensity: 0.1
                        },
                        main: {
                            intensity: 1.5
                        }
                    },

                    layers: [
                        {
                            type: "blend",
                            blendTo: "emission",
                            texture: require("../assets/earth/night.jpg")
                        },
                        {
                            type: "overlay",
                            texture: require("../assets/earth/clouds.png"),
                            shading: "lambert",
                            distance: 5
                        }
                    ]
                },
                series: []
            }
        };
    },
    components: {
        // 'v-chart': ECharts
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
