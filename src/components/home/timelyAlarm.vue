<template>
    <div class="table">
        <div class="table-header flex">
            <span>序号</span>
            <span>日期</span>
            <span>报警事件</span>
            <span>状态</span>
        </div>
        <ul class="table-body">
            <li class="flex" v-for="(item, index) in data" :class="'status-' + item.type">
                <span class="col1">{{index + 1}}</span>
                <span class="col2">{{item.datetime}}</span>
                <span class="col3">{{item.event}}</span>
                <span class="col4"><span class="light"></span></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['data']
    };
</script>

<style lang="less" scoped>
    .table {
        width: 100%;
        height: 100%;
        .table-header {
            height: 0.3rem;
            justify-content: space-between;
            position: absolute;
            padding: 0 0.2rem;
            color: #cfd6f0;
            left: 0.05rem;
            right: 0.05rem;
            background: url('~assets/card/bg_theader.png') no-repeat;
            background-size: 100% 100%;
            padding-bottom: 0.05rem;
        }

        .table-body {
            height: 100%;
            padding: 0.3rem 0.05rem 0.05rem 0.05rem;
            overflow-y: auto;
            font-size: 0.14rem;
            li {
                padding: 0.1rem;
                margin: 0.02rem 0;
                background-color: #000;
                box-shadow: 1px 1px 1px #b3aeae inset;
                min-height: 0.56rem;
                &.status-1 {
                    color: #a17c26;
                    .light {
                        width: 0.1rem;
                        height: 0.1rem;
                        display: block;
                        background-color: #a17c26;
                        border-radius: 50%;
                        box-shadow: 0 0 10px 4px #fff;
                        margin: 0 auto;
                    }
                }
                &.status-2 {
                    color: #cc0000;
                    .light {
                        width: 0.1rem;
                        height: 0.1rem;
                        display: block;
                        background-color: #cc0000;
                        border-radius: 50%;
                        box-shadow: 0 0 10px 4px #fff;
                        margin: 0 auto;
                    }
                }
                &.status-0 {
                    color: #adadad;
                    .light {
                        width: 0.1rem;
                        height: 0.1rem;
                        display: block;
                        background-color: #adadad;
                        border-radius: 50%;
                        box-shadow: 0 0 10px 4px #fff;
                        margin: 0 auto;
                    }
                }
            }
            .col1 {
                width: 0.2rem;
                flex: 0 0 auto;
            }
            .col2 {
                width: 1.4rem;
                flex: 0 0 auto;
            }
            .col3 {
                flex: auto;
            }
            .col4 {
                width: 0.4rem;
                flex: 0 0 auto;
            }
        }
    }
</style>


