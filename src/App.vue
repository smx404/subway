<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style lang="less">
    @import './style/index.less';
    @import './style/element.css';
    html,
    body {
        background-color: #f3f3f3;
        font-family: '苹方', '微软雅黑', '宋体';
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
