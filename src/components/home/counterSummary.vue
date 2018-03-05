<template>
    <div class="counter-summary flex">
        <div class="tab">
            <p>当月各站故障次数</p>
            <p>当月人员工作量</p>
        </div>
        <div class="tables">
            <v-table-small v-if="1" :title="['序号','姓名','故障单']" :list="failureCount"></v-table-small>
            <v-table-small v-if="0" :title="['排名','姓名','状态']" :list="workload"></v-table-small>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                failureCount: [{
                    sequence: 1,
                    name: 'xxx',
                    str: '故障单1'
                },
                {
                    sequence: 2,
                    name: 'xxx2',
                    str: '故障单2'
                }],
                workload: []
            };
        }
    };
</script>

<style lang="less" scoped>
    .counter-summary {
        width: 4.3rem;
        height: 100%;
        flex-direction: column;
        .tab {
            height: 0.3rem;
            width: 100%;
        }
        .tables {
            width: 100%;
            flex: auto;
        }
    }
</style>


