<template>
    <div class="g-container" :style="styleObject">
        <div class="g-header">
            <v-header></v-header>
        </div>
        <div class="g-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                styleObject: {}
            };
        },
        created() {
            // let documentWidth = window.document.documentElement.clientWidth;
            // let documentHeight = window.document.documentElement.clientHeight;

            // if(documentWidth / documentHeight > 1920 / 1080) {
            //     this.styleObject = {
            //         width: (documentHeight * 1920 / 1080) + 'px',
            //         height: '100%'
            //     };
            // } else {
            //     this.styleObject = {
            //         width: (documentHeight * 1920 / 1080) + 'px',
            //         height: '100%'
            //     };
            // }
        }
    };
</script>


<style lang="less" scoped>
    .g-container {
        width: 100%;
        min-height: 10.8rem;
        overflow: auto;
        display: flex;
        flex-direction: column;
        background-color: #7c8298;
        .g-header {
            height: 0.75rem;
        }
        .g-content {
            position: relative;
            flex-grow: 1;
        }
    }
</style>

