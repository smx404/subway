<template>
    <div class="machine-summary">
        <div class="line1">
            <div class="title"></div>
            <div class="chart flex">
                <v-solidgauge id="running1" title="自动扶梯" :total="912" :current="48"></v-solidgauge>
                <v-solidgauge id="running2" title="风机" :total="912" :current="48"></v-solidgauge>
                <v-solidgauge id="running3" title="站台门" :total="912" :current="48"></v-solidgauge>
            </div>
        </div>
        <div class="line2"></div>
    </div>
</template>
