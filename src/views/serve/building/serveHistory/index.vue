<!-- serve/building/serveHistory 服务记录 -->
<template>
    <div class="serve_his_box" :style="{minHeight: minH + 'px'}">
        <hisCard v-for="item in hisCardList" :key="item.id" 
        :status="item.status" 
        :orderName="item.orderName" 
        :orderId="item.id" 
        :orderTime="item.orderTime"></hisCard>
    </div>
</template>

<script>
import hisCard from './hisCard'

export default {
    data () {
        return {
            minH: 0,
            hisCardList: [
                {
                    id: 1323441243,
                    status: 0,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441242,
                    status: 1,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441241,
                    status: 2,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441245,
                    status: 3,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                }
            ]
        };
    },
    components: {hisCard},
    computed: {},
    mounted() {
      this.minH = document.documentElement.clientHeight;
    },
    methods: {}
}

</script>
<style lang='less' scoped>
    .serve_his_box {
        background-color: #f3f3f3;
    }
</style>