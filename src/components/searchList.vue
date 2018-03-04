<template>
    <div class="g-table">
        <ul class="title">
            <li>1</li>
            <li>序号</li>
            <li>运营公司</li>
            <li>项目部</li>
            <li>线路</li>
            <li>设备系统</li>
            <li>设备名称</li>
            <li>设备名称</li>
            <li>安装合同编号</li>
            <li>位置</li>
            <li>品牌</li>
            <li>生产厂</li>
            <li>规格</li>
        </ul>
        <dl class="content">
            <dd v-for="(item, index) in list">
                <span>1</span>
                <span>{{item.num}}</span>
                <span>{{item.company}}</span>
                <span>{{item.project}}</span>
                <span>{{item.line}}</span>
                <span>{{item.station}}</span>
                <span>{{item.equSystem}}</span>
                <span>{{item.equName}}</span>
                <span>{{item.contract}}</span>
                <span>{{item.address}}</span>
                <span>{{item.brand}}</span>
                <span>{{item.factory}}</span>
                <span>{{item.standard}}</span>
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
        props: ['list'],
        methods: {
            currentList(index) {
                this.indexed = index;
            }
        }
    };
</script>
<style lang="less" scoped>
    .g-table {
        width: 100%;
        border-top: 1px solid #343740;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
        .title {
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
                width: 8%;
            }
            li:first-child {
                width: 4%;
            }
        }
        .content {
            dd {
                display: flex;
                -webkit-flex-flow: row wrap;
                justify-content: space-around;
                text-align: center;
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
</style>
