<!-- serve/building/confirmOrder 订单信息确认 or 订单详情 -->
<template>
    <div class="confirm_order"  :style="{minHeight: minH + 'px'}">
        <div class="confirm_order_box">
            <div class="card_item">
                <div class="title">{{name}}</div>
                <anOrderList class="order_list" v-for="item in orderList" :key="item.id" :orderName="item.name" :orderMoney="item.price" :orderCount="item.count"></anOrderList>
            </div>
            <div class="card_item">
                <div class="title">订单信息</div>
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>订单编号</div>
                        <div>23545132344124</div>
                    </div>
                    <div class="msg_list_item">
                        <div>服务分类</div>
                        <div>恒伟知识产权服务</div>
                    </div>
                    <div class="msg_list_item">
                        <div>下单时间</div>
                        <div>2019-07-12 08:30</div>
                    </div>
                </div>
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>店铺优惠</div>
                        <div>无</div>
                    </div>
                    <div class="msg_list_item">
                        <div>优惠金额</div>
                        <div class="orange">-￥100</div>
                    </div>
                    <div class="msg_list_item">
                        <div>合计金额</div>
                        <div class="orange">￥{{totalPrice}}</div>
                    </div>
                </div>
            </div>
            <div class="card_item">
                <div class="title">联系信息</div>
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>姓名</div>
                        <div>李太白</div>
                    </div>
                    <div class="msg_list_item">
                        <div>电话</div>
                        <div>15548745124</div>
                    </div>
                    <div class="msg_list_item">
                        <div>地址</div>
                        <div>广西大学</div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['type_btn', {'default_btn': type == 0}]"  @click="pay(type)">{{type | filterTypeBtn}}</div>
    </div>
</template>

<script>
import anOrderList from '@/components/anOrderList'

export default {
    data () {
        return {
            minH: 0,
            name: '恒伟知识产权服务',
            orderList: this.$store.state.serveModule.serveList.chooseServeList,
            totalPrice: this.$store.state.serveModule.serveList.totalPrice,
            type: 1
        };
    },
    components: {anOrderList},
    filters: {
        filterTypeBtn(val) {
            //0 是订单详情 1 是订单确认
            return val == 0 ? '已完成' : '去支付';
        }
    },
    mounted() {
        this.minH = document.documentElement.clientHeight;
    },
    methods: {
        pay(type) {
            //支付
            if (type == 1) {
                this.$router.push('/choosePayFn?module=2');
            }
        }
    },
}

</script>
<style lang='less' scoped>
.confirm_order {
    background-color: #f3f3f3;
    .confirm_order_box {
        padding: .24rem .32rem;
    }
    .card_item {
        background-color: #fff;
        padding: .18rem .24rem .24rem;
        margin-bottom: .32rem;
        border-radius: .1rem;
        .title {
            font-size: .32rem;
            color: #333;
            padding-bottom: .16rem;
            margin-bottom: .16rem;
            border-bottom: 1px solid #f2f2f2;
        }
        .order_list {
            margin-bottom: .32rem;
            &:last-child {
                margin: 0;
            }
        }
        .msg_list {
            border-bottom: 1px solid #f2f2f2;
            padding-bottom: .08rem;
            margin-bottom: .16rem;
            &:last-child {
                border: none;
                padding-bottom: 0;
                margin-bottom: 0;
            }
            .msg_list_item {
                display: flex;
                justify-content: space-between;
                align-items: center; 
                font-size: .26rem;
                margin-bottom: .16rem;
                div {
                    color: #333;
                    &:first-child {
                        color: #999;
                    }
                }
                .orange {
                    color: #F14D2A;
                }
            }
        }
    }
    .type_btn {
        width: 100%;
        height: .98rem;
        font-size: .34rem;
        text-align: center;
        line-height: .98rem;
        color: #393733;
        background-color: #FFCB44;
        border: 1px solid #DCDCDC;
        position: fixed;
        bottom: 0;
        &.default_btn {
            background-color: #FFFFFF;
            font-size: .34rem;
            color: #666;
        }
    }
}

</style>