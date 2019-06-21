<!-- inforDetailList 分类查看更多 -->
<template>
    <div class="infor_detail_list">
        <inforList v-for="item in infornList" :key="item.id" 
           :title="item.title" 
           :brief="item.brief" 
           :id="item.id" 
           :src="item.src"
           :type="type"
           ></inforList>
    </div>
</template>

<script>
import {ajaxPost} from '@/common/js/public'
import inforList from './inforList'

export default {
    data () {
        return {
            type: ''
        };
    },
    created() {
        let id = this.$route.query.id,
            type = this.$route.query.type, //大分类
            classify = this.$route.query.classify; // 文章小分类
            
        switch (type) {
            case 0:
            //招商
            this.$store.dispatch('inforModule/getPolicyList', {
                page: this.page,
                limit: this.limit,
                type: classify
            });
            break;
            case 1:
            //商务  
            this.$store.dispatch('inforModule/getBusiList', {
                page: this.page,
                limit: this.limit,
                type: classify
            });
            break;
            case 2:
            //租赁    
            this.$store.dispatch('inforModule/getRentList', {
                page: this.page,
                limit: this.limit,
                type: classify
            });
            break;
        }
    },
    computed: {
        infornList() {
            return this.$store.state.inforModule.detailList;
        }
    },
}

</script>
<style lang='less' scoped>
</style>