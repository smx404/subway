<template>
    <div class="failure-count">
        <div class="item"><span class="count">{{count}}</span>条</div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'count']
    };
</script>

<style lang="less" scoped>
    .failure-count {
        .item {
            width: 0.7rem;
            height: 0.7rem;
            border-radius: 50%;
            box-shadow: 0 0 0.1rem 0.08rem #1a4570;
            background-color: #000;
            margin: 0.2rem;
            color: #fff;
            text-align: center;
            padding: 0.11rem 0;
            .count {
                font-family: 'number-font';
                color: #4ec8f6;
                font-size: 0.44rem;
                display: inline-block;
                padding-right: 0.04rem;
                transform: skewX(8deg);
            }
        }
        .title {
            text-align: center;
            color: #fff;
            font-size: 0.18rem;
        }
    }
</style>

