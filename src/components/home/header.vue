<template>
    <div class="header flex">
        <img class="logo" src="~assets/header/logo.png" />
        <span class="title flex-auto">机电设备运维服务智能监控系统</span>
        <div class="btn-group flex">
            <button><img src="~assets/header/icon_home.png" /></button>
            <button><img src="~assets/header/icon_mine.png" /></button>
            <button><img src="~assets/header/icon_search.png" /></button>
            <button><img src="~assets/header/icon_setting.png" /></button>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .header {
        height: 100%;
        background: url('~assets/header/bg_header.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        .logo {
            padding-left: 0.75rem;
            height: 100%;
            height: 0.72rem;
        }
        .title {
            text-align: center;
            font-size: 0.4rem;
            text-align: center;
            text-shadow: 0rem 0.06rem #3c3332;
            color: #bbc7d7;
            padding-bottom: 0.06rem;
            letter-spacing: 0.01rem;
        }
        .btn-group {
            background: url('~assets/header/bg_btns.png') no-repeat;
            background-size: 100% 100%;
            height: 0.4rem;
            padding: 0 0.3rem;
            button {
                background-color: transparent;
                padding: 0.04rem;
                width: 0.36rem;
                height: 0.36rem;
                margin: 0 0.04rem;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
        }
    }
</style>
