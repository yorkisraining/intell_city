<!-- globalHeader -->
<template>
    <div class="g_title">
        <div class="return_icon"><i class="el-icon-arrow-left"></i></div>
        <div class="title">{{title | filterTitle}}</div>
        <div class="fn_btn" @click="clickFn">{{fnName}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['title', 'fnName'],
    filters: {
        filterTitle(val) {
            return val.length > 8 ? val.slice(0, 8) + '...' : val;
        }
    },
    methods: {
        clickFn() {
            this.$emit('clickFn');
        }
    }
}

</script>
<style lang='less' scoped>
.g_title {
    height: 60px;
    background-color: #0D9BED;
    color: #fff;
    line-height: 60px;
    font-size: .38rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
}
</style>