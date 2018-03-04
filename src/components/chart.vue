<template>
    <div :id="id" :style="styleObject"></div>
</template>

<script>
    import HighCharts from 'highcharts';

    export default {
        props: ['id', 'option', 'styleObject'],
        mounted() {
            HighCharts.chart(this.id, this.option);
        }
    };
</script>