<!-- inforArticle 资讯文章页 -->
<template>
    <div class="infor_article_box">
        {{article}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            article: ''
        };
    },
    created() {
        let id = this.$route.query.id;
        console.log('id::', id);
    },
    methods: {

    }
}

</script>
<style lang='less' scoped>
</style>