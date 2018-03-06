<template>
    <div class="counter-summary">
        <div class="tabs flex">
            <p class="tab" :class="{active: !activeIndex}" @click="activeIndex = 0">当月各站故障次数</p>
            <p class="tab" :class="{active: activeIndex}" @click="activeIndex = 1">当月人员工作量</p>
        </div>
        <div class="tables">
            <v-table-small v-show="!activeIndex" :title="['序号','姓名','故障单']" :list="failureCount" :widths="[10,30,60]"></v-table-small>
            <v-table-small v-show="activeIndex" :title="['排名','姓名','状态']" :list="workload" :widths="[10,30,60]"></v-table-small>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 0,
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
                workload: [{
                    sequence: 1,
                    name: 'xxx3',
                    str: '饱和'
                },
                {
                    sequence: 2,
                    name: 'xxx4',
                    str: '空闲'
                }]
            };
        }
    };
</script>

<style lang="less" scoped>
    .counter-summary {
        width: 4.3rem;
        height: 100%;
        flex-direction: column;
        .tabs {
            height: 0.3rem;
            width: 100%;
            align-items: flex-end;
            padding-left: 0.2rem;
            .tab {
                background-color: #7b8399;
                color: #fff;
                height: 0.28rem;
                border-radius: 0.1rem 0.1rem 0 0;
                padding: 0 0.1rem;
                margin: 0 0.02rem;
                line-height: 0.28rem;
                &.active {
                    background-color: #525667;
                }
            }
        }
        .tables {
            width: 100%;
            height: 3.4rem;
        }
    }
</style>


