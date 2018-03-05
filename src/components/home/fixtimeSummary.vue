<template>
    <div class="fixtime-summary flex">
        <v-monthly-reliability></v-monthly-reliability>
        <v-fixing-time id="dailyFixingTime" title="平均每日修复时间" :max="10" :current="2.3" bg="#e61e1f"></v-fixing-time>
        <v-fixing-time id="fixOuttime" title="报修超时率" :max="0.3" :current="0.2" bg="#79c72f"></v-fixing-time>
    </div>
</template>

<style lang="less" scoped>
    .fixtime-summary {
        justify-content: space-around;
    }
</style>

