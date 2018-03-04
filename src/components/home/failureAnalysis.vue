<template>
    <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
</template>

<script>
    export default {
        data() {
            return {
                id: 'failureAnalysis',
                styleObject: {
                    width: 4.3 + 'rem',
                    height: 2.7 + 'rem'
                },
                option: {
                    chart: {
                        type: 'scatter', //指定图表的类型
                        backgroundColor: '#000', //背景色
                        plotBackgroundColor: '#000', //绘图背景色
                        margin: [10, 10, 40, 50],
                        borderWidth: 50,
                        borderColor: '#575b6c'
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
                        labels: {
                            format: '{value} h', //标签格式化
                            style: {
                                fontSize: 10,
                                color: '#fff'
                            },
                            align: 'center' //标签居中对齐
                        },
                        gridLineWidth: 1, //网格线宽度
                        lineWidth: 0, //轴线宽度
                        tickWidth: 0, //刻度线宽度
                        showFirstLabel: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: null //指定y轴的标题
                        },
                        labels: {
                            style: {
                                fontSize: 10,
                                color: '#fff'
                            },
                            align: 'center' //标签居中对齐
                        }
                    },
                    series: [
                        {
                            //指定数据列
                            name: 'warn',
                            color: 'yellow',
                            data: [[800, 0.58], [1200, 0.48], [1350, 0.68], [1700, 0.8], [2000, 1.08]] //数据
                        },
                        {
                            //指定数据列
                            name: 'error',
                            color: 'red',
                            data: [[650, 0.48], [1000, 0.75], [1500, 0.88], [1700, 0.82], [2200, 0.75], [2350, 1]], //数据
                            marker: {
                                symbol: 'circle'
                            }
                        },
                        {
                            //指定数据列
                            name: 'success',
                            color: 'green',
                            data: [[490, 0.6], [500, 1.2], [1200, 1], [1500, 0.2]], //数据
                            marker: {
                                symbol: 'circle'
                            }
                        }
                    ],
                    legend: { enabled: false },
                    labels: {
                        style: {                         // 标签全局样式
                            color: "#fff",
                            fontSize: '12px',
                            fontWeight: 'normal'
                        },
                        items: [{                       // items 数组，可以设置多个标签
                            html: 'html 标签内容',
                            style: {                    // 标签样式，会继承和重写上层全局样式
                                left: '0px',
                                top: '0px',
                                color: 'red',
                                fontSize: '12px',
                                fontWeight: 'normal',
                                fontFamily: '',
                                transform: 'rotate(90deg)'
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

