<!-- inforCard 标题 详情 列表 -->
<template>
    <div class="infor_card">
        <div class="title_box">
            <div class="left_item">
                <span class="title">{{title}}</span>
            </div>
            <div class="right_item" @click="toDetailList(id, classify)">
                查看详情<i class="el-icon-arrow-right"></i>
            </div>
       </div>
       <div>
           <inforList v-for="item in list" :key="item.id" 
           :title="item.policyName" 
           :brief="item.policyContent" 
           :id="item.id" 
           :src="item.src"></inforList>
       </div>
    </div>
</template>

<script>
import inforList from './inforList'

export default {
    data () {
        return {
            infornList: [
                {
                    id: 123,
                    src: require('@/assets/fj.jpg'),
                    title: '南宁市出台若干措施促消费稳增长',
                    brief: '17日上午，2019年全国食品安全宣传周广西活动暨第七届广西食品安全论坛启动仪式在南宁举办，主题是“尚德守法，食品安全让生活'
                },{
                    id: 124,
                    src: require('@/assets/fj.jpg'),
                    title: '南宁市出台若干措施促消费稳增长',
                    brief: '17日上午，2019年全国食品安全宣传周广西活动暨第七届广西食品安全论坛启动仪式在南宁举办，主题是“尚德守法，食品安全让生活'
                },{
                    id: 125,
                    src: '',
                    title: '南宁市出台若干措施促消费稳增长',
                    brief: '17日上午，2019年全国食品安全宣传周广西活动暨第七届广西食品安全论坛启动仪式在南宁举办，主题是“尚德守法，食品安全让生活'
                }
            ]
        };
    },
    props: ['title', 'classify', 'type', 'list'],
    components: {inforList},
    methods: {
        toDetailList(id, classify) {
            //查看详情
            this.$router.push(`/inforDetail?id=${id}&type=${classify}`);
        }
    }
}

</script>
<style lang='less' scoped>
.infor_card {
    background-color: #fff;
    margin-top: .16rem;
    .title_box {
        padding: .1rem .2rem;
        margin-bottom: .2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        .right_item {
            font-size: .22rem;
            color: #999;
            cursor: pointer;
        }   
        .title {
            font-size: .38rem;
            font-weight: 500;
            color: #333;
        }
    }
   
}
</style>