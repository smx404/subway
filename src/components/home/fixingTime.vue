<template>
    <div class="txt-center">
        <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
    </div>
</template>

<script>
    export default {
        props: ['id', 'title', 'max', 'current', 'bg'],
        data() {
            return {
                styleObject: {
                    width: 3 + 'rem',
                    height: 3 + 'rem'
                },
                option: {
                    chart: {
                        type: 'solidgauge',
                        backgroundColor: 'transparent'
                    },
                    title: {
                        text: this.title,
                        verticalAlign: 'bottom',
                        style: {
                            color: '#fff'
                        },
                        y: 10
                    },
                    pane: {
                        center: ['50%', '65%'],
                        size: '100%',
                        startAngle: -90,
                        endAngle: 90,
                        background: {
                            backgroundColor: this.bg,
                            borderWidth: 0,
                            innerRadius: '60%',
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
                            style: {
                                color: '#fff',
                                fontSize: '0.2rem'
                            },
                            y: 20,
                            align: 'center'
                        },
                        tickPositions: [0, this.max],
                        tickPosition: 'outside',
                        min: 0,
                        max: this.max
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
                            y: this.current,
                            color: '#32f4fb'
                        }],
                        dataLabels: {
                            format: `<div style="text-align:center;padding-top:0.4rem;">
                                        <span style="font-size:0.34rem;color:#fff;">${this.current}</span>
                                    </div>`,
                            borderWidth: 0
                        },
                        innerRadius: 60,
                        radius: 100
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

