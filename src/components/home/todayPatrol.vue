<template>
    <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
</template>

<script>
    export default {
        data() {
            return {
                id: 'todayPatrol',
                styleObject: {
                    width: 4.3 + 'rem',
                    height: 2.7 + 'rem'
                },
                option: {
                    chart: {
                        type: 'bar', //指定图表的类型
                        backgroundColor: '#575b6c' //背景色
                    },
                    credits: {
                        enabled: false //去掉地址
                    },
                    title: {
                        text: null //指定图表标题
                    },
                    xAxis: {
                        title: {
                            text: null
                        },
                        categories: ['综合巡检率', '自动扶梯', '屏幕门', '风机'],
                        labels: {
                            style: {
                                color: '#fff'
                            },
                            align: 'center' //标签居中对齐
                        },
                        lineWidth: 0, //轴线宽度
                        tickWidth: 0, //刻度线宽度
                        showFirstLabel: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: null //指定y轴的标题
                        },
                        gridLineColor: '#2f4554',
                        labels: {
                            style: {
                                color: '#fff'
                            },
                            align: 'center' //标签居中对齐
                        },
                        lineColor: '#2f4554',
                        lineWidth: 1,
                        tickWidth: 1,
                        tickColor: '#2f4554',
                        showLastLabel: false
                    },
                    plotOptions: {
                        bar: {
                            borderWidth: 0,
                            maxPointWidth: 30
                        }
                    },
                    series: [
                        {
                            //指定数据列
                            name: ' ',
                            color: '#2f4554',
                            data: [92, 72, 40, 48] //数据
                        }
                    ],
                    legend: {
                        enabled: false
                    },
                    labels: {
                        style: {                         // 标签全局样式
                            color: "#fff",
                            fontSize: '12px',
                            fontWeight: 'normal'
                        },
                        items: [{                       // items 数组，可以设置多个标签
                            html: '(%)',
                            style: {                    // 标签样式，会继承和重写上层全局样式
                                top: 228,
                                left: 300,
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: 'normal',
                                textShadow: '1px 1px 1px black'
                            }
                        }]
                    }
                }
            };
        }
    };
</script>

<style lang="less" scoped>

</style>

