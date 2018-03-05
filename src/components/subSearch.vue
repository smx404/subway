<template>
    <div class="search">
        <ul class="searchWidth">
            <li><span>线路：</span>
                <el-select style="width: 1.5rem; background: none" v-model="value" placeholder="请选择" size="mini">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    };
</script>
<style lang="less" >
    .el-input__inner {
        background: none !important;
    }
</style>
