<!-- activity  -->
<template>
    <div class="avtivity_box">
        <headerWithPhone :title="'活动'" :linkMsg="'报名记录'" class="head" @clickLink="toHis"></headerWithPhone>
        <van-tabs :swipe-threshold="3" :line-width="'.4rem'" color="#0D9BED" title-active-color="#0D9BED" >
            <van-tab title="企业沙龙">
                <activityList :type="0"></activityList>
            </van-tab>
            <van-tab title="创业大赛">
                <activityList :type="1"></activityList>
            </van-tab>
            <van-tab title="企业培训">
                <activityList :type="2"></activityList>
            </van-tab>
            <van-tab title="全部活动">
                <activityList :type="3"></activityList>
            </van-tab>
        </van-tabs>
        <div class="fix_bottom_nav">
            <el-row>
                <el-col :span="8" class="nav_item"  v-for="item in bottomNavList" :key="item.name">
                    <mainNav 
                    :title="item.title" 
                    :src="item.src" 
                    :mButton="'.1rem'"
                    :w="'.5rem'"
                    :h="'.5rem'"
                    :link="item.link"
                    @toThisNavEmit="toThisNav"></mainNav>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import headerWithPhone from '@/components/headerWithPhone'
import activityList from './activityList'
import mainNav from '@/components/mainNav'

export default {
    data () {
        return {
            bottomNavList: [
                {
                name: 'home',
                title: '协同',
                src: require('@/assets/button_xt.png'),
                link: '/'
                },
                {
                name: 'project',
                title: '项目',
                src: require('@/assets/button_xm.png'),
                link: ''
                },
                {
                name: 'active',
                title: '活动',
                src: require('@/assets/button_hd_cur.png'),
                link: ''
                },
            ],
            list: []
        };
    },
    components: {headerWithPhone, activityList, mainNav},
    methods: {
        toHis() {
            this.$router.push('/activityHistory')
        },
        toThisNav(url) {
            this.$router.push(url);
        },
    }
}

</script>
<style lang='less' scoped>
.avtivity_box {
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 199;
    }
    .fix_bottom_nav {
        position: fixed;
        bottom: -1px;
        background-color: #fff;
        width: 100%;
        z-index: 19950606;
        background-attachment: fixed;
    }
}

</style>