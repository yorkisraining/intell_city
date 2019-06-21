<!-- information 资讯 -->
<template>
    <div class="information_contain" :style="{minHeight: minH + 'px'}">
        <van-tabs  @click="changeTabs">
            <van-tab title="招商信息">
                <inforTabs :type="0"></inforTabs>
            </van-tab>
            <van-tab title="商务信息">
                <inforTabs :type="1"></inforTabs>
            </van-tab>
            <van-tab title="租赁信息">
                <inforTabs :type="2"></inforTabs>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import inforTabs from './inforTabs'

export default {
    data () {
        return {
            minH: 0,
        };
    },
    components: {inforTabs},
    mounted() {
        this.minH = document.documentElement.clientHeight;
    },
    methods: {
        changeTabs(index, title) {
            
        }
    }
}

</script>
<style lang='less' scoped>
.information_contain {
    background-color: #f3f3f3;
}
</style>