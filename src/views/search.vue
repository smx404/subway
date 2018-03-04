<template>
    <div>
        <v-search></v-search>
        <dl class="middleSort clearfix">
            <dd v-on:click="currentList(1)" v-bind:class="indexed == 1 ?'active':''">
                <p>设备档案 <span>100份</span></p>
                <img v-if="indexed!=1" src="../assets/search/sort01_gray.png" />
                <img v-if="indexed==1" src="../assets/search/sort01_orange.png" />
            </dd>
            <dd v-on:click="currentList(2)" v-bind:class="indexed == 2 ?'active':''">
                <p>报警信息 <span>100份</span></p>
                <img v-if="indexed!=2" src="../assets/search/sort02_gray.png" />
                <img v-if="indexed==2" src="../assets/search/sort02_orange.png" />
            </dd>
            <dd v-on:click="currentList(3)" v-bind:class="indexed == 3 ?'active':''">
                <p>故障工单 <span>100份</span></p>
                <img v-if="indexed!=3" src="../assets/search/sort03_gray.png" />
                <img v-if="indexed==3" src="../assets/search/sort03_orange.png" />
            </dd>
            <dd v-on:click="currentList(4)" v-bind:class="indexed == 4 ?'active':''">
                <p>图片 <span>100张</span></p>
                <img v-if="indexed!=4" src="../assets/search/sort04_gray.png" />
                <img v-if="indexed==4" src="../assets/search/sort04_orange.png" />
            </dd>
            <dd v-on:click="currentList(5)" v-bind:class="indexed == 5 ?'active':''">
                <p>其它</p>
                <img v-if="indexed!=5" src="../assets/search/sort05_gray.png" />
                <img v-if="indexed==5" src="../assets/search/sort05_orange.png" />
            </dd>
        </dl>
        <v-search-list v-if="indexed==1" v-bind:list="equList.data"></v-search-list>
        <div class=" pagination ">
            <el-pagination background @current-change="changePages" :current-page="currentPage" :page-size="pageSize" layout="prev, pager, next " :total="equList.total "></el-pagination>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                indexed: 1,
                currentPage: 1, //当前页数
                pageSize: 7, //每页显示数量
                equList: {
                    total: 9,
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
                    }]
                }
            };
        },
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
    .middleSort {
        font-size: 0.24rem;
        width: 16.5rem;
        margin: 0.37rem auto 0.5rem auto;
        dd {
            width: 2.18rem;
            height: 2.2rem;
            background: rgba(0, 0, 0, 0.28);
            border-radius: 3px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            text-align: center;
            float: left;
            margin-right: 1.4rem;
            box-shadow: 2px 10px 30px rgba(0, 0, 0, 0.18);
            cursor: pointer;
            p {
                height: 0.68rem;
                line-height: 0.68rem;
                color: #3c3f46;
            }
            img {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
        dd.active {
            p {
                color: #fff;
                span {
                    color: #ffba00;
                }
            }
        }
        dd:last-child {
            margin-right: 0;
        }
    }
    .pagination {
        height: 0.66rem;
        text-align: center;
        padding-top: 0.3rem;
    }
</style>