<!-- inforDetailList 分类查看更多 -->
<template>
    <div class="infor_detail_list">
        <van-list v-model="scrollSetting.loading"
                :finished="scrollSetting.finished"
                finished-text="没有更多了"
                @load="getList"
            >
            <inforList v-for="item in list" :key="item.id" 
            :title="item.policyName" 
            :brief="item.policyContent" 
            :id="item.id" 
            :src="item.src"
            :type="type" ></inforList>
        </van-list>
    </div>
</template>

<script>
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'
import inforList from './inforList'

export default {
    data () {
        return {
            type: '', //大类，如商务
            classify: '', //文章小分类，如政策
            ajaxUrl: '',
            list: [],
            page: 0, //未支付
            limit: 10,
            totalPage: 0, //总页码
            scrollSetting: {
                loading: false,
                finished: false
            },
        };
    },
    components: {inforList},
    created() {
        let query = this.$route.query;
        let id = query.id,
            type = query.type;

        this.classify = query.classify;
            
        switch (type) {
            case 0:
            //招商
            this.ajaxUrl = apiUrl.inforPocilyList
            break;
            case 1:
            //商务  
            this.ajaxUrl = apiUrl.inforBusiList
            break;
            case 2:
            //租赁    
            this.ajaxUrl = apiUrl.inforRentList
            break;
        }
    },
    methods: {
        getList() {
            this.page += 1;
            ajaxPost(this.ajaxUrl, {
                page: this.page,
                limit: this.limit,
                type: this.classify
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
    },
}

</script>
<style lang='less' scoped>
</style>