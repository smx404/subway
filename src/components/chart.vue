<template>
    <div :id="id" :style="styleObject"></div>
</template>

<script>
    import HighCharts from 'highcharts';
    import HighChartsMore from 'highcharts/highcharts-more';
    import HighChartsSolidGauge from 'highcharts/modules/solid-gauge';
    HighChartsMore(HighCharts);
    HighChartsSolidGauge(HighCharts);

    export default {
        props: ['id', 'option', 'styleObject'],
        mounted() {
            HighCharts.chart(this.id, this.option);
        }
    };
</script>