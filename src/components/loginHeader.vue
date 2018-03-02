<template>
    <div class="header">
        <img class="logo" src="~assets/header/logo.png" />
        <span class="title">机电设备运维服务智能监控系统</span>
    </div>
</template>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 1.07rem;
        position: fixed;
        top: 0;
        left: 0;
        background: url('~assets/login/login_header_bg.png') no-repeat;
        background-size: 100% 100%;
        text-align: center;
        z-index: 10001;
        .logo {
            position: absolute;
            left: 1.44rem;
            top: 50%;
            margin-top: -0.36rem;
            width: 2.45rem;
            height: 0.72rem;
        }
        .title {
            display: block;
            height: 1.07rem;
            line-height: 1.07rem;
            margin: 0px auto;
            font-size: 0.45rem;
            text-align: center;
            text-shadow: 0rem 0.06rem #3c3332;
            color: #a3a7ba;
            letter-spacing: 0.01rem;
            font-weight: bold;
        }
    }
</style>
