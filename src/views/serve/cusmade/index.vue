<!-- serve/cusmade 定制化服务 -->
<template>
    <div class="cusmade_containt">
        <cusCard v-for="item in cardList" :key="item.id" :id="item.id" :title="item.title" :brief="item.brief" :src="item.classify" @toDetail="toDetail"></cusCard>
    </div>
</template>

<script>
import cusCard from './cusCard'

export default {
    data () {
        return {
            cardList: [
                {
                    id: 123,
                    classify: 0,
                    title: '恒伟知识产权服务',
                    brief: '入驻条件为，科技信息产业相关且在协同创新大大大'
                },{
                    id: 124,
                    classify: 1,
                    title: '云宝宝企业服务',
                    brief: '入驻条件为，科技信息产业相关且在协同创新大大大'
                },{
                    id: 125,
                    classify: 2,
                    title: '伊达企业保险服务',
                    brief: '入驻条件为，科技信息产业相关且在协同创新大大大'
                },{
                    id: 126,
                    classify: 3,
                    title: '伊达企业金融服务',
                    brief: '入驻条件为，科技信息产业相关且在协同创新大大大'
                }
            ]
        };
    },
    components: {cusCard},
    methods: {
        toDetail(obj) {
            this.$router.push(`/serveClassify?id=${obj.id}&title=${obj.title}`);
        }
    }
}

</script>
<style lang='less' scoped>
</style>