<!-- inforArticle 资讯文章页 -->
<template>
    <div class="infor_article_box">
        {{article}}
    </div>
</template>

<script>
import {ajaxPost} from '@/common/js/public'

export default {
    data () {
        return {
            article: '',
            createTime: '',
            title: ''
        };
    },
    created() {
        let id = this.$route.query.id,
            type = this.$route.query.type,
            title = this.$route.query.title;
            
        let url = [`app/infor/policy/info/${id}`, `app/infor/busi/info/${id}`,  `app/infor/rent/info/${id}`];
        /* 0 招商 1 商务 2 租赁 */
        ajaxPost(url[type], {}, res => {
            this.article = res.absContent;
        })
    },
}

</script>
<style lang='less' scoped>
    .infor_article_box {
        padding: .24rem .32rem;
    }
</style>