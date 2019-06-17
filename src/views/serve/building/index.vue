<!-- serve/building -->
<template>
    <div>
        <div class="change_btn_group">
            <div class="btn_item curr">未解决</div>
            <div class="btn_item">已解决</div>
        </div>
        <orderCard v-for="item in orderCardList" :key="item.id" 
        :status = "item.status"
        :orderId = "item.orderId"
        :orderType = "item.orderType"
        :createTime = "item.createTime"
        :contain = "item.contain"
        :remark = "item.remark"
        :doneTime = "item.doneTime"
        ></orderCard>
    </div>
</template>

<script>
import orderCard from './orderCard'

export default {
    data () { 
        return {
            orderCardList: [
                {
                    status: 0,
                    orderId: 1235234753425,
                    orderType: '投诉',
                    createTime: '2019-03-12 03:42',
                    contain: '五楼办501办公室，灯泡坏了，希望7月12号前解决（50个字）',
                    remark: '维修师傅已经抢修完成，现在可以正常使用了，给你带来不便请谅解。',
                    doneTime: '2019-03-12 03:42',
                },
                {
                    status: 1,
                    orderId: 1235234753425,
                    orderType: '投诉',
                    createTime: '2019-03-12 03:42',
                    contain: '五楼办501办公室，灯泡坏了，希望7月12号前解决（50个字）',
                    remark: '已安排维修师傅过去抢修，预计明天上午即可正常使用。',
                    doneTime: '2019-03-12 03:42',
                },
                {
                    status: 2,
                    orderId: 1235234753425,
                    orderType: '投诉',
                    createTime: '2019-03-12 03:42',
                    contain: '五楼办501办公室，灯泡坏了，希望7月12号前解决（50个字）',
                }
            ]
        };
    },
    components: {orderCard},
    methods: {
    }
}

</script>
<style lang='less' scoped>
.change_btn_group {
    margin: .24rem auto;
    display: flex;
    justify-content: center;
    .btn_item {
        width: 2.46rem;
        height: .68rem;
        background-color: #fff;
        color: #666;
        text-align: center;
        line-height: .68rem;    
        font-size: .26rem;
        &:first-child {
            border-radius: .1rem 0 0 .1rem;
        }
        &:last-child {
            border-radius: .1rem 0 0 .1rem;
        }
        &.curr {
            background-color: #FFA122;
            color: #fff;
        }
    }
}
</style>