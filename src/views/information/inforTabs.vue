<!-- inforTabs -->
<template>
    <div>
        <div class="carousel_block">
            <el-carousel :height="setting.height" >
                <el-carousel-item v-for="item in topCarImgList" :key="item.id" >
                    <img :src="item.image" alt="" @click="toThisNav(item.url)">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <inforCard v-for="(item, index) in inforCardList" :key="index" :title="item.typeName" :type="type" :classify="item.type" :list="item.list"></inforCard>
        </div>
    </div>
</template>

<script>
import inforCard from './inforCard'
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            topCarImgList: [],
            inforCardList: [],
            
        };
    },
    /* type 0招商信息 1商务信息 2租赁信息 */
    props: ['type'],
    components: {inforCard},
    created() {
        switch (Number(this.type)) {
            case 0:
            this.getBanner(apiUrl.banner, 5);
            this.getList(apiUrl.inforPocilyIndex);
                break;
            case 1:
            this.getBanner(apiUrl.banner, 6);
            this.getList(apiUrl.inforBusiIndex);    
                break;
            case 2:
            this.getBanner(apiUrl.banner, 7);
            this.getList(apiUrl.inforRentIndex);    
                break;
        }
        
    },
    methods: {
        getBanner(url, type) {
            ajaxGet(url, {
                type: type
            }, res => {
                this.topCarImgList = res;
            })
        },
        getList(url) {
            ajaxGet(url, {
                num: 5
            }, res => {
                this.inforCardList = res
                console.log(this.inforCardList)
            })
        }
    },
}

</script>
<style lang='less' scoped>
    .el-carousel__item img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .carousel_block {
        margin-bottom: .15rem;
        margin-top: -1px;
    }
</style>