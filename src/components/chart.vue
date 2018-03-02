<template>
    <div :id="id" :style="styleObject">{{styleObject}}</div>
</template>

<script>
    import HighCharts from 'highcharts';

    export default {
        props: ['id', 'option', 'styleObject'],
        created() {
            console.log(this.styleObject);
        },
        mounted() {
            HighCharts.chart(this.id, this.option);
        }
    };
</script>