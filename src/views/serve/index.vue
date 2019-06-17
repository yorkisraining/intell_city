<!-- serve/index -->
<template>
    <div class="serve_contain"  :style="{minHeight: minH + 'px'}">
        <div class="tabs_box">
            <van-tabs @click="changeTabs" color="#0D9BED" line-width=".4rem" title-active-color="#0D9BED" >
                <van-tab class="tabs_item" title="楼宇服务">
                    <building></building>
                </van-tab>
                <van-tab class="tabs_item" title="定制化服务">
                    <cusMade></cusMade>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import building from './building'
import cusMade from './cusmade'

export default {
    data () {
        return {
            whichTabs: 'build',
            minH: 0
        };
    },
    components: {building, cusMade},
    methods: {
        changeTabs(index, title) {
            this.whichTabs = title;
        }
    },
    mounted() {
      this.minH = document.documentElement.clientHeight;
    }
}

</script>
<style lang='less' scoped>
    .serve_contain {
        background-color: #f3f3f3;
    }
</style>