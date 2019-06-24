<!-- serve/index -->
<template>
    <div class="serve_contain"  :style="{minHeight: minH + 'px'}">
        <headerWithPhone :title="'企业服务'" :linkMsg="'服务记录'" class="head" @clickLink="toHis"></headerWithPhone>
        <div class="tabs_box">
            <van-tabs v-model="active" color="#0D9BED" line-width=".4rem" title-active-color="#0D9BED" >
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
import headerWithPhone from '@/components/headerWithPhone'

export default {
    data () {
        return {
            active: 0,
            minH: 0
        };
    },
    components: {building, cusMade, headerWithPhone},
    methods: {
        toHis() {
            //服务记录
            this.$router.push('/serveHistory');
        },
    },
    mounted() {
        this.minH = document.documentElement.clientHeight - 60;
        this.$router.beforeEach((to, from, next) => {
            if (from.path == '/serveClassify') {
                this.active = 1;
            }
            next();
        })
    },
}

</script>
<style lang='less' scoped>
    .serve_contain {
        background-color: #f3f3f3;
        .head {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 199;
        }
    }
</style>