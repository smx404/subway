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
        box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 1);
        color: #303133;
        background-color: #676a7b;
        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            position: absolute;
            box-shadow: 0 2px 2px 2px rgb(49, 41, 41) inset;
        }
        .card-header {
            font-size: 0.2rem;
            background-color: #777a8b;
            color: #fff;
            height: 0.3rem;
            position: absolute;
            width: 100%;
            .title {
                background-color: #c5c8cf;
                color: #000;
                height: 0.3rem;
                font-weight: bold;
                border-radius: 0.08rem;
                padding: 0 0.2rem;
            }
        }
        .card-content {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) inset;
            height: 100%;
            padding-top: 0.3rem;
        }
    }
</style>
