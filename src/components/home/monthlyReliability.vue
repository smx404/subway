<template>
    <div class="txt-center">
        <v-chart id="monthlyReliability" :option="option" :styleObject="styleObject"></v-chart>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styleObject: {
                    width: '3rem',
                    height: '3rem'
                },
                option: {
                    chart: {
                        type: 'solidgauge',
                        backgroundColor: 'transparent'
                    },
                    title: {
                        text: '月可靠度',
                        verticalAlign: 'bottom',
                        style: {
                            color: '#fff'
                        },
                        y: 10
                    },
                    pane: {
                        center: ['50%', '50%'],
                        size: '80%',
                        startAngle: -10,
                        endAngle: 350,
                        background: {
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            innerRadius: '70%',
                            outerRadius: '100%',
                            shape: 'arc'
                        }
                    },
                    tooltip: {
                        enabled: false
                    },
                    yAxis: {
                        lineWidth: 0,
                        minorTickInterval: null,
                        minorTickWidth: 1,
                        tickWidth: 0,
                        labels: {
                            enabled: false
                        },
                        min: 0,
                        max: 360
                    },
                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                y: -15,
                                borderWidth: 0,
                                useHTML: true
                            }
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        data: [{
                            y: 99.3 / 100 * 360,
                            color: '#0ed4eb'
                        }],
                        dataLabels: {
                            format: `<div style="text-align:center">
                                        <span style="font-size:0.24rem;color:#fff">99.3%</span>
                                    </div>`,
                            borderWidth: 0
                        },
                        innerRadius: 60,
                        radius: 90
                    }],
                    legend: {
                        enabled: false
                    }
                }
            };
        }
    };
</script>

<style lang="less" scoped>
    .title {
        text-align: center;
        color: #fff;
        font-size: 0.18rem;
    }
</style>

