<template>
    <div class="g-container">
        <div class="g-header">
            <v-header></v-header>
        </div>
        <div class="g-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .g-container {
        width: 100%;
        min-width: 13.66rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .g-header {
            height: 0.75rem;
        }
        .g-content {
            flex-grow: 1;
        }
    }
</style>

