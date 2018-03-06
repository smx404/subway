<template>
    <div class="table">
        <div class="table-header flex">
            <div class="column" v-for="(item, index) in title" :style="{width: widths[index] + '%'}">{{item}}</div>
        </div>
        <ul class="table-body">
            <li class="flex" v-for="row in list">
                <div class="column" :style="{width: widths[index] + '%'}" v-for="(values, keys, index) in row">{{values}}</div>
            </li>
        </ul>

        <button class="more">更多</button>
    </div>
</template>

<script>
    export default {
        props: ['title', 'list', 'widths']
    };
</script>

<style lang="less" scoped>
    .table {
        width: 100%;
        height: 100%;
        background-color: #525667;
        padding-top: 0.06rem;
        border-radius: 0.1rem;
        overflow: hidden;
        position: relative;
        .column {
            color: #fff;
            text-align: center;
        }
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
            padding: 0.3rem 0.1rem 0.05rem 0.1rem;
            overflow-y: auto;
            font-size: 0.14rem;
            li {
                padding: 0.1rem;
                margin: 0.06rem 0;
                background-color: #000;
                box-shadow: 0px -1px 1px #f3f3f3 inset;
                min-height: 0.33rem;
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
        .more {
            position: absolute;
            right: 0.1rem;
            bottom: 0.1rem;
            border-radius: 0.05rem;
            color: #fff;
            background-color: #65666a;
            font-size: 0.16rem;
            box-shadow: -1px -1px 1px 1px #929292 inset;
            padding: 0.02rem 0.08rem;
        }
    }
</style>


