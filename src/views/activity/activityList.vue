<!-- activityList  -->
<template>
    <div class="avtivity_list">
        <van-list v-model="scrollSetting.loading"
            :finished="scrollSetting.finished"
            finished-text="没有更多了"
            @load="getMsgList"
        >
            <activityCard v-for="item in list" :key="item.id" 
            :title="item.actName" 
            :time="item.activeTime" 
            :address="item.actPlace" 
            :src="item.imageList[0].url" 
            class="list_card"></activityCard>
        </van-list>
    </div>
</template>

<script>
import activityCard from './activityCard'
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            scrollSetting: {
                loading: false,
                finished: false
            },
            page: 0,
            limit: 10,
            totalPage: 0,
            list: []
        };
    },
    components: {activityCard},
    props: ['type'],
    /* type
        0 沙龙
        1 创业
        2 培训
        3 全部
    */
    methods: {
        getMsgList() {
            this.page += 1;
            //获取活动列表
            this.scrollSetting.loading = false;
            ajaxPost(apiUrl.activityList, {
                page: this.page,
                limit: this.limit,
                type: this.type
            }, res => {
                this.list = res.list;
                this.totalPage = res.totalPage;
                this.scrollSetting.loading = false;
            }, res => {
                this.scrollSetting.loading = false;
                this.scrollSetting.finished = true;
            })
            if (this.page > this.totalPage) {
                this.scrollSetting.finished = true;
            }
        },
    }
}

</script>
<style lang='less' scoped>
.avtivity_list {
    padding: 0 .32rem;
}
</style>