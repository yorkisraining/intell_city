<!-- serve/cusmade 定制化服务 -->
<template>
    <div class="cusmade_containt">
        <cusCard v-for="item in cardList" :key="item.id" :title="item.title" :brief="item.brief" :src="item.classify"></cusCard>
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
    }
}

</script>
<style lang='less' scoped>
</style>