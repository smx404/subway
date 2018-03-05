<template>
    <div class="txt-center">
        <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        props: ['id', 'title', 'max', 'current'],
        data() {
            let _this = this;

            return {
                styleObject: {
                    width: 1.1 + 'rem',
                    height: 1.1 + 'rem'
                },
                option: {
                    chart: {
                        type: 'solidgauge',
                        backgroundColor: 'transparent'
                    },
                    title: null,
                    pane: {
                        center: ['50%', '50%'],
                        size: '100%',
                        startAngle: 90,
                        endAngle: -270,
                        background: {
                            backgroundColor: '#2d74bd',
                            borderWidth: 0,
                            innerRadius: '85%',
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
                        max: 912
                    },
                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                y: 23,
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
                            y: _this.current,
                            color: '#0ed4eb'
                        }],
                        dataLabels: {
                            format: `<div style="text-align:center">
                                        <span style="font-size:0.12rem;color:#0ed4eb">{y}</span>
                                        <div style="background-color:#a0a1a2;height:0.02rem;width:180%;margin-left:-40%;"></div>
                                        <span style="font-size:0.12rem;color:#0ed4eb">${_this.max}</span>
                                    </div>`
                        },
                        innerRadius: 85,
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

