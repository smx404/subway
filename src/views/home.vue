<template>
    <div class="home">
        {{name}}
        <ul>
            <li v-for="city in cities">
                {{city.city}}
            </li>
        </ul>

        <el-row>
            <el-col :span="2">1</el-col>
            <el-col :span="20">
                <span class="el-icon-loading"></span>
                <el-button>默认按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="text">文字按钮</el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                    <el-button type="primary">下一页
                        <i class="el-icon-arrow-right el-icon--right"></i>
                    </el-button>
                </el-button-group>
                <el-button type="primary" :loading="true">加载中</el-button>
                <el-button size="mini" round>超小按钮</el-button>
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
                <el-radio-group v-model="radio3">
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="北京"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                </el-radio-group>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                    <el-checkbox label="禁用" disabled></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
            </el-col>
            <el-col :span="2">3</el-col>
        </el-row>
        <el-alert title="成功提示的文案" type="success"></el-alert>
        <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
    </div>

</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        data() {
            return {
                name: '首页',
                cities: [],
                radio: 1,
                radio3: '上海',
                checked: true,
                checkList: ['选中且禁用', '复选框 A']
            };
        },
        props: [],
        created() {
            this.getCityList();
        },
        computed: {
            ...mapState([]),
            ...mapGetters([])
        },
        methods: {
            ...mapMutations([]),
            ...mapActions(['_ajax']),
            getCityList() {
                this._ajax({
                    name: 'cityList'
                }).then(res => {
                    this.cities = res.findCityAll;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .home {
        background-color: #f3f3f3;
        li {
            color: blue;
        }
    }
</style>


