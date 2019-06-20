<!-- foods/foodsHistory 订单记录 -->
<template>
    <div class="order_history">
        <div class="tabs_box">
            <van-tabs @click="onClick">
                <van-tab title="未消费">
                    <hisCard v-for="item in hisCardList" :key="item.id" v-if="item.status != 2"
                    :status="item.status" 
                    :orderList="item.orderList" 
                    :orderId="item.id" 
                    :orderTime="item.orderTime" 
                    :appointTime="item.appointTime" 
                    @toPay="toPay"></hisCard>
                </van-tab>
                <van-tab title="历史订单">
                    <hisCard v-for="item in hisCardList" :key="item.id"
                    :status="item.status" 
                    :orderList="item.orderList" 
                    :orderId="item.id" 
                    :orderTime="item.orderTime" 
                    :appointTime="item.appointTime"></hisCard>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import hisCard from './hisCard'

export default {
    data () {
        return {
            hisCardList: [
                {
                    id: 1323441243,
                    status: 0,
                    orderList: [{
                        name: '拿铁',
                        count: 1
                    },{
                        name: '抹茶拿铁',
                        count: 2
                    },{
                        name: '牛排',
                        count: 1
                    }],
                    orderTime: '2019-07-13 08:30',
                    appointTime: '13:20',
                },{
                    id: 1323441242,
                    status: 1,
                    orderList: [{
                        name: '冰咖啡',
                        count: 1
                    }],
                    orderTime: '2019-07-13 08:30',
                    appointTime: '13:20',
                },{
                    id: 1323441241,
                    status: 2,
                    orderList: [{
                        name: '拿铁',
                        count: 1
                    }],
                    orderTime: '2019-07-13 08:30',
                    appointTime: '13:20',
                },{
                    id: 1323441245,
                    status: 3,
                    orderList: [{
                        name: '拿铁',
                        count: 1
                    },{
                        name: '拿铁',
                        count: 2
                    },{
                        name: '抹茶拿铁',
                        count: 1
                    }],
                    orderTime: '2019-07-13 08:30',
                    appointTime: '13:20',
                }
            ]
        };
    },
    components: {hisCard},
    methods: {
        toPay(obj) {
            //去支付
            this.$router.push('/coffeeOrderComfirm');
        }
    }
}

</script>
<style lang='less' scoped>
</style>