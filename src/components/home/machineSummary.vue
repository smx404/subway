<template>
    <div class="machine-summary">
        <div class="line1">
            <div class="title flex">
                <span class="text">本月设备运行时间</span>
                <span class="line"></span>
            </div>
            <div class="chart flex">
                <v-running-time id="running1" title="自动扶梯" :max="912" :current="188"></v-running-time>
                <v-running-time id="running2" title="风机" :max="912" :current="48"></v-running-time>
                <v-running-time id="running3" title="站台门" :max="912" :current="48"></v-running-time>
            </div>
        </div>
        <div class="line2">
            <div class="title flex">
                <span class="text">今日故障待办事项</span>
                <span class="line"></span>
            </div>
            <div class="chart flex">
                <v-failure-count title="自动扶梯" :count="4"></v-failure-count>
                <v-failure-count title="风机" :count="5"></v-failure-count>
                <v-failure-count title="站台门" :count="4"></v-failure-count>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .title {
        color: #fff;
        font-size: 0.22rem;
        text-align: center;
        padding: 0 0.2rem;
        padding-top: 0.1rem;
        justify-content: center;

        .text {
            background-color: #1f2129;
            position: relative;
            z-index: 1;
            padding: 0 0.02rem;
        }
        .line {
            position: absolute;
            z-index: inherit;
            height: 1px;
            background-color: #fff;
            display: block;
            padding: 0 0.2rem;
            left: 0.2rem;
            right: 0.2rem;
            &:before {
                content: '';
                position: absolute;
                height: 1px;
                background-color: #fff;
                width: 0.2rem;
                left: -0.2rem;
                transform: translateY(50%) rotate(-45deg);
                transform-origin: right top;
            }
            &:after {
                content: '';
                position: absolute;
                height: 1px;
                background-color: #fff;
                width: 0.2rem;
                right: -0.2rem;
                transform: translateY(50%) rotate(45deg);
                transform-origin: left top;
            }
        }
    }
    .chart {
        padding: 0 0.2rem;
        justify-content: space-around;
    }

    .line2 {
        padding-top: 0.2rem;
    }
</style>

