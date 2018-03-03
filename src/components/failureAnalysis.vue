<template>
    <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
</template>

<script>
    export default {
        data() {
            return {
                id: 'chart1',
                styleObject: {
                    width: 4.3 + 'rem',
                    height: 2.7 + 'rem',
                    backgroundColor: 'black'
                },
                option: {
                    chart: {
                        type: 'column' //指定图表的类型，默认是折线图（line）
                    },
                    credits: {
                        enabled: false
                    }, //去掉地址
                    title: {
                        text: null //指定图表标题
                    },
                    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
                    xAxis: {
                        title: {
                            text: null
                        },
                        categories: [0, 500, 1500, 2000, 2500], //指定x轴分组
                        labels: {
                            formatter: function() {
                                return this.value + 'h';
                            },
                            style: {
                                fontSize: '8px'
                            }
                        },
                        gridLineWidth: 1
                    },
                    yAxis: {
                        title: {
                            text: null //指定y轴的标题
                        }
                    },
                    plotOptions: {
                        column: {
                            colorByPoint: true
                        }
                    },
                    series: [
                        {
                            //指定数据列
                            name: '小明',
                            data: [
                                {
                                    y: 0,
                                    color: 'red'
                                },
                                0.2,
                                0.4,
                                0.6,
                                0.8
                            ] //数据
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

