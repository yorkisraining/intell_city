<!-- anOrderList 左名称 又价格和数量 -->
<template>
    <div class="order_list_card">
        <div class="order_name">{{orderName}}</div>
        <div>
            <div class="order_money">￥{{orderMoney}}</div>
            <div class="order_count">X{{orderCount}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['orderName', 'orderMoney', 'orderCount'],
    methods: {}
}

</script>
<style lang='less' scoped>

.order_list_card {
    display: flex;
    justify-content: space-between;
    align-items: top; 
    text-align: right;
    .order_name {
        text-align: left;
        font-size: .3rem;
        color: #333;
    }
    .order_money {
        color: #F37054;
        font-size: .26rem;
    }
    .order_count {
        color: #666;
        font-size: .26rem;
    }
}
</style>