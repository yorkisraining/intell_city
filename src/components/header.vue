<!-- globalHeader -->
<template>
    <div class="g_title" v-if="ifShowHeader">
        <div class="return_icon" v-if="returnBtn" @click="() => {this.$router.go(-1)}"><i class="el-icon-arrow-left"></i></div>
        <div class="title">{{title | filterTitle}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },
    props: ['title', 'returnBtn', 'ifShowHeader'],
    filters: {
        filterTitle(val) {
            return val.length > 8 ? val.slice(0, 8) + '...' : val;
        }
    },
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
    position: relative;
    padding: 0 .3rem;
    .title {
        margin: 0 auto;
        text-align: center;
    }
    .return_icon {
        position: absolute;
        left: .3rem;
        top: 50%;
        transform: translateY(-50%);
    }
}


</style>