<template>
    <div>
        <!-- <v-sub-search></v-sub-search> -->
        <div class="tab">
            <ul class="title">
                <li v-on:click="tabShow=true" v-bind:class="tabShow?'active':''">实时报警信息</li>
                <li v-on:click="tabShow=false" v-bind:class="tabShow?'':'active'">以往历史事件</li>
            </ul>
            <v-search-list v-bind:other="otherInfo" v-bind:label="info1" v-bind:list="equList.data"></v-search-list>
            <div class="pagination">
                <el-pagination background @current-change="changePages" :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next " :total="equList.total "></el-pagination>
                </el-pagination>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tabShow: true,
                currentPage: 1, //当前页数
                pageSize: 9, //每页显示数量
                otherInfo: {
                    isCheck: true, //是否显示多选框
                    style: 2 // 列表共有三种样式，传不同的值，列表显示不同的样子
                },
                info1: [{
                    'label': '设备',
                    'width': 15,
                    'value': 'num'
                }, {
                    'label': '设备名称',
                    'width': 26,
                    'value': 'company'
                }, {
                    'label': '时间',
                    'width': 15,
                    'value': 'project'
                }, {
                    'label': '报警事件',
                    'width': 25,
                    'value': 'line'
                }, {
                    'label': '状态',
                    'width': 15,
                    'value': 'station'
                }],
                equList: {
                    total: 9,
                    amount1: 39,
                    amount2: 87,
                    amount3: 16,
                    amount4: 57,
                    data: [{
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }, {
                        num: '1',
                        company: '测试',
                        project: '测试',
                        line: '测试',
                        station: '测试',
                        equSystem: '测试',
                        equName: '测试',
                        contract: '测试',
                        address: '测试',
                        brand: '测试',
                        factory: '测试',
                        standard: '测试'
                    }]
                }
            };
        },
        props: ['list', 'label', 'checked'],
        methods: {
            currentList(index) {
                this.indexed = index;
            },
            //改变当前页数
            changePages(val) {
                this.currentPage = val;
                // this.list();
            }
        }
    };
</script>

<style scoped lang="less">
    .tab {
        width: 98.5%;
        margin: 0px auto;
        .title {
            padding-top: 0.11rem;
            background: #666b79;
            overflow: hidden;
            padding-left: 0.57rem;
            li {
                width: 2rem;
                height: 0.39rem;
                line-height: 0.39rem;
                font-size: 0.2rem;
                float: left;
                text-align: center;
                background: #4a4d5e;
                color: #ffffff;
                border-radius: 8px 8px 0px 0px;
                margin-left: 0.05rem;
                cursor: pointer;
            }
            li.active {
                background: #d7d9db;
                color: #1f1e1e;
            }
        }
        .pagination {
            text-align: center;
            padding: 0.14rem 0;
            background: #45484f;
        }
    }
</style>


