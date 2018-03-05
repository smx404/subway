<template>
    <div class="card-container">
        <div class="card-header">
            <button class="title">{{title}}</button>
        </div>
        <div class="card-content">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title']
    };
</script>


<style lang="less" scoped>
    .card-container {
        border-radius: 4px;
        position: absolute;
        overflow: hidden;
        color: #303133;
        background: url('~assets/card/bg_card.png') no-repeat;
        background-size: 100% 100%;
        .card-header {
            font-size: 0.2rem;
            color: #fff;
            height: 0.3rem;
            position: absolute;
            width: 100%;
            .title {
                color: #000;
                height: 0.3rem;
                font-weight: bold;
                border-radius: 0.08rem;
                padding: 0 0.2rem;
                background: url('~assets/card/bg_title.png') no-repeat;
                background-size: 100% 100%;
                margin-left: 0.05rem;
            }
        }
        .card-content {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) inset;
            height: 100%;
            padding-top: 0.3rem;
            & > div {
                border-radius: 0.05rem;
                overflow: hidden;
                border-top: 1px solid #383737;
            }
        }
    }
</style>
