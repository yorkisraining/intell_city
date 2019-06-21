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
            
        let url = [`app/infor/policy/info/${id}`, `app/infor/busi/info/${id}`,  `app/infor/rent/info/${id}`]

        ajaxPost(url[type], {}, res => {
            this.article = res.absContent;
        })
    },
}

</script>
<style lang='less' scoped>
</style>