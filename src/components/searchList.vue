<template>
    <div v-bind:class="'g-table-' + other.style">
        <ul class="title">
            <li style="width: 4%" v-if="other.isCheck"><img src="../assets/search/check.png" /></li>
            <li v-for="(item, index) in label" v-bind:style="{width:item.width+'%'}">{{item.label}}</li>
        </ul>
        <dl class="content">
            <dd v-for="(item, index) in list">
                <span style="width: 4%" v-if="other.isCheck"><img src="../assets/search/check.png"/></span>
                <span v-for="(item1, index) in label" v-bind:style="{width:item1.width+'%'}">{{item[item1.value]}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        props: ['list', 'label', 'other'],
        created() {

        },
        methods: {
            currentList(index) {
                this.indexed = index;
            }
        }
    };
</script>
<style lang="less" scoped>
    .g-table-1 {
        width: 100%;
        border-top: 1px solid #343740;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
        ul {
            display: flex;
            -webkit-flex-flow: row wrap;
            justify-content: space-around;
            text-align: center;
            border-bottom: 1px solid #abaeb5;
            color: #fff;
            background: url('../assets/search/sub_title_bg.png') repeat-x;
            font-size: 0.2rem;
            height: 0.39rem;
            line-height: 0.38rem;
            li {
                img {
                    width: 0.29rem;
                    height: 0.29rem;
                    vertical-align: top;
                    margin-top: 0.05rem;
                }
            }
        }
        .content {
            dd {
                display: flex;
                -webkit-flex-flow: row wrap;
                justify-content: space-around;
                text-align: center;
                img {
                    width: 0.29rem;
                    height: 0.29rem;
                    vertical-align: top;
                    margin-top: 0.165rem;
                }
                span {
                    width: 8%;
                    height: 0.62rem;
                    line-height: 0.62rem;
                    font-size: 0.18rem;
                    color: #fff;
                }
                span:first-child {
                    width: 4%;
                }
            }
            dd:nth-child(2n-1) {
                background: #414455;
            }
            dd:nth-child(2n) {
                background: #4d505f;
            }
        }
    }
    .g-table-2 {
        width: 100%;
        border-top: 1px solid #caccce;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
        ul {
            display: flex;
            -webkit-flex-flow: row wrap;
            justify-content: space-around;
            text-align: center;
            color: #0e0e0e;
            background: #d7d9db;
            font-size: 0.2rem;
            height: 0.52rem;
            line-height: 0.52rem;
            li {
                img {
                    width: 0.29rem;
                    height: 0.29rem;
                    vertical-align: top;
                    margin-top: 0.115rem;
                }
            }
        }
        .content {
            dd {
                display: flex;
                -webkit-flex-flow: row wrap;
                justify-content: space-around;
                text-align: center;
                img {
                    width: 0.29rem;
                    height: 0.29rem;
                    vertical-align: top;
                    margin-top: 0.205rem;
                }
                span {
                    width: 8%;
                    height: 0.7rem;
                    line-height: 0.7rem;
                    font-size: 0.22rem;
                    color: #ffa600;
                }
                span:first-child {
                    width: 4%;
                }
            }
            dd:nth-child(2n-1) {
                background: #3c3f46;
            }
            dd:nth-child(2n) {
                background: #45484f;
            }
        }
    }
</style>
