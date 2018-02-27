<template>
    <div class="home">
        {{name}}
        <ul>
            <li v-for="city in cities">
                {{city.city}}
            </li>
        </ul>
    </div>

</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

    export default {
        data() {
            return {
                name: '首页',
                cities: []
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


