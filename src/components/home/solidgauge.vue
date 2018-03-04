<template>
    <v-chart :id="id" :option="option" :styleObject="styleObject"></v-chart>
</template>

<script>
    export default {
        props: ['id', 'title', 'total', 'current'],
        data() {
            return {
                styleObject: {
                    width: 0.8 + 'rem',
                    height: 0.8 + 'rem'
                },
                option: {
                    chart: {
                        type: 'solidgauge'
                    },
                    title: null,
                    pane: {
                        center: ['50%', '50%'],
                        size: '100%',
                        startAngle: 90,
                        endAngle: -270,
                        background: {
                            innerRadius: '90%',
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
                        title: {
                            y: -70,
                            text: '速度'
                        },
                        labels: {
                            y: 190
                        },
                        min: 0,
                        max: 912
                    },
                    plotOptions: {
                        solidgauge: {
                            dataLabels: {
                                y: 10,
                                borderWidth: 0,
                                useHTML: true
                            }
                        }
                    }, credits: {
                        enabled: false
                    },
                    series: [{
                        name: '速度',
                        data: [48],
                        dataLabels: {
                            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                            ('black') + '">{y}</span><br/>' +
                            '<span style="font-size:12px;color:silver">km/h</span></div>'
                        },
                        innerRadius: 90,
                        radius: 100,
                        tooltip: {
                            valueSuffix: ' km/h'
                        }
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

</style>

