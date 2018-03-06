<template>
    <div class="home">
        <v-card-container class="timely-alarm" title="实时报警信息">
            <v-timely-alarm :data="timelyAlarm"></v-timely-alarm>
        </v-card-container>
        <v-card-container class="today-alarm" title="今日报警统计">
            <v-today-alarm :data="timelyAlarm"></v-today-alarm>
        </v-card-container>
        <v-card-container class="failure-analysis" title="故障原因分析">
            <v-failure-analysis></v-failure-analysis>
        </v-card-container>
        <v-card-container class="today-patrol" title="今日巡检比例">
            <v-today-patrol></v-today-patrol>
        </v-card-container>
        <v-subway-line class="subway-line"></v-subway-line>
        <div class="panel">
            <v-machine-summary class="machine-summary"></v-machine-summary>
            <v-fixtime-summary class="fixtime-summary"></v-fixtime-summary>
            <v-counter-summary class="counter-summary"></v-counter-summary>
        </div>
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
        .today-alarm {
            left: 0.05rem;
            top: 3.1rem;
            width: 4.3rem;
            height: 3rem;
        }
        .failure-analysis {
            right: 0.05rem;
            top: 0.1rem;
            width: 4.3rem;
            height: 3rem;
        }
        .today-patrol {
            right: 0.05rem;
            top: 3.1rem;
            width: 4.3rem;
            height: 3rem;
        }
        .subway-line {
            position: absolute;
            top: 0.1rem;
            left: 4.35rem;
            right: 4.35rem;
            height: 5.55rem;
        }
        .panel {
            position: absolute;
            bottom: 0;
            height: 3.73rem;
            width: 100%;
            background-color: #1f2129;
            .machine-summary {
                width: 3.83rem;
                height: 3.73rem;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            .fixtime-summary {
                left: 4.35rem;
                right: 4.35rem;
                height: 3.93rem;
                position: absolute;
                bottom: 0;
            }
            .counter-summary {
                width: 4.3rem;
                height: 3.73rem;
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
</style>


