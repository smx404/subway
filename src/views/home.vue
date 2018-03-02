<template>
    <div class="home">
        <v-card-container class="timely-alarm" title="实时报警信息">
            <v-timely-alarm :data="timelyAlarm"></v-timely-alarm>
        </v-card-container>
        <v-card-container class="failure-analysis" title="故障原因分析">
            <v-failure-analysis></v-failure-analysis>
        </v-card-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                timelyAlarm: [
                    {
                        datetime: '2018.1.26 18:06:20',
                        event: '苹果园南路站A出入口下段PGN-FT-A-1扶手带断裂',
                        type: 2
                    },
                    {
                        datetime: '2018.1.26 18:06:20',
                        event: '廖公庄站B段风道LGZ-ZSF-B变频器综合故障',
                        type: 0
                    },
                    {
                        datetime: '2018.1.26 18:06:20',
                        event: '廖公庄站D出入口上段LGZ-FT-D-4数据中断',
                        type: 1
                    },
                    {
                        datetime: '2018.1.26 18:06:20',
                        event: '苹果园南路站A出入口下段PGN-FT-A-1扶手带断裂',
                        type: 2
                    }
                ]
            };
        }
    };
</script>

<style lang="less" scoped>
    .home {
        background-color: #7c8298;
        .timely-alarm {
            left: 0.05rem;
            top: 0.1rem;
            width: 4.3rem;
            height: 3rem;
        }
        .failure-analysis {
            right: 0.05rem;
            top: 0.1rem;
            width: 4.3rem;
            height: 3rem;
        }
    }
</style>


