<template>
    <div class="card-container" :style="{'width': width + 'rem', 'height': height + 'rem'}">
        <div class="card-header">
            <button class="title">{{title}}</button>
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        props: ['title', 'width', 'height']

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
            }
        }
        .card-content {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) inset;
            height: 100%;
            padding-top: 0.3rem;
        }
    }
</style>
