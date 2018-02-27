<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style lang="less">
    @import './style/index.less';

    html,
    body {
        background-color: #f3f3f3;
        font-family: '苹方', '微软雅黑', '宋体';
    }
</style>
