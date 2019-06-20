<!-- inforTabs -->
<template>
    <div>
        <div class="carousel_block">
            <el-carousel :height="setting.height" >
                <el-carousel-item v-for="item in topCarImgList" :key="item.id" >
                    <img :src="item.src" alt="" @click="toThisNav(item.link)">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <inforCard v-for="(item, index) in inforCardList" :key="index" :title="item"></inforCard>
        </div>
    </div>
</template>

<script>
import inforCard from './inforCard'

export default {
    data () {
        return {
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            topCarImgList: [{
                id: 1010,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1011,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1012,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1013,
                src: require('@/assets/fj.jpg'),
                link: '/',
            }],
            inforCardList: ['政策法规', '投资环境', '城市规划']
        };
    },
    /* type 0招商信息 1商务信息 2租赁信息 */
    props: ['type'],
    components: {inforCard},
    methods: {}
}

</script>
<style lang='less' scoped>
    .el-carousel__item img {
        width: 100%;
        border-radius: 4px;
    }

    .carousel_block {
        margin-bottom: .15rem;
        margin-top: -1px;
    }
</style>