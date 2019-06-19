<!-- foods/foodsOrderComfirm 订单信息确认 or 订单详情 -->
<template>
    <div class="confirm_order"  :style="{minHeight: minH + 'px'}">
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
                    <div>三品王</div>
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
        <div class="explaint">请在下单后6个小时内取餐，过期订单自动失效</div>
        <div class="appoint_btn_box">
            <div :class="['appoint_btn', {cur: curBtn}]" @click="() => {this.curBtn = true}">立即取餐</div>
            <div :class="['appoint_btn', {cur: !curBtn}]" @click="clickAppoint">预约取餐 <span v-show="!curBtn">{{appointTime}}</span></div>
        </div>
        <div :class="['type_btn', {'default_btn': type == 0}]" @click="pay">{{type | filterTypeBtn}}</div>
        <van-popup v-model="ifShowTime" position="bottom">
            <van-datetime-picker
                v-model="appointTime"
                type="time"
                :min-hour="0"
                :max-hour="24"
                @confirm="closePopup"
                @cancel="() => {this.ifShowTime = false}"
            />
        </van-popup>
            
    </div>
</template>

<script>
import anOrderList from '@/components/anOrderList'

export default {
    data () {
        return {
            minH: 0,
            name: '恒伟知识产权服务',
            orderList: this.$store.state.cartModule.foodsList.chooseFoodsList,
            type: 1,
            appointTime: '00:00',
            ifShowTime: false,
            curBtn: true,
            totalPrice: this.$store.state.cartModule.foodsList.totalPrice,
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
        clickAppoint() {
            //预约取餐
            this.ifShowTime = true;
        },
        closePopup(val) {
            this.ifShowTime = false;
            this.curBtn = false;
        },
        pay() {
            //支付
        }
    },
    
}

</script>
<style lang='less' scoped>
.confirm_order {
    background-color: #f3f3f3;
    padding: .24rem 0;
    .card_item {
        background-color: #fff;
        padding: .18rem .24rem .24rem;
        margin-bottom: .32rem;
        margin: 0 .32rem .32rem;
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
        border-radius: .1rem;
        position: fixed;
        bottom: 0;
        &.default_btn {
            background-color: #FFFFFF;
            font-size: .34rem;
            color: #666;
        }
    }
    .appoint_btn_box {
        display: flex;
        font-size: .3rem;
        padding: 0 .32rem;
        .appoint_btn {
            margin-right: .18rem;
            width: calc(100% / 2);
            height: .88rem;
            line-height: .88rem;
            color: #999;
            text-align: center;
            border-radius: .1rem;
            background: #FFF;
            border: 1px solid #DCDCDC;
            &:last-child {
                margin: 0;
            }
            &.cur {
                background-color: #FFCB44;
                color: #333;
                border: none;
            }
        }
    }
    .explaint {
        font-size: .2rem;
        color: #666;
        padding: 0 .32rem .16rem;
    }
}

</style>