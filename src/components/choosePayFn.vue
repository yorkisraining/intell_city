<!-- choosePayFn 选择支付方式 -->
<template>
    <div class="choose_payfn_box">
        <div class="pay_fn_top">
            <div class="time">剩余支付时间{{time}}</div>
            <div class="price">¥<span>{{price}}</span></div>
            <div class="order_detail">订单详情</div>
        </div>
        <div class="pay_fn">
            <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell clickable title="" @click="radio = '1'">
                    <template slot="title">
                        <span class="pay_title">微信支付</span>
                    </template>
                    <van-radio checked-color="#FFCB44" name="1" />
                </van-cell>
                <van-cell clickable title="" @click="radio = '2'">
                    <template slot="title">
                        <span class="pay_title">支付宝支付</span>
                    </template>
                    <van-radio checked-color="#FFCB44" name="2" />
                </van-cell>
            </van-cell-group>
            </van-radio-group>
        </div>
        <div class="pay_btn"  @click="pay(type)">确认支付</div>
    </div>

</template>

<script>
import {aliPay, wxPay} from '@/common/js/pay'

export default {
    data () {
        return {
            time: '14:00',
            price: '26',
            radio: '1',
            goodsList: [],
            totolPrice: 0,
            
        };
    },
    props: ['orderName', 'orderMoney', 'orderCount'],
    created() {
        /* 
            从哪儿过来的，该查哪个vuex表
            0 foods
            1 coffee
            2 serve
        */
        let vuexModule = this.$route.query.module;

        switch (vuexModule) {
            case 0:
            this.$store.state.serveModule.serveList.chooseServeList  
                break;
            case 0:
            this.$store.state.serveModule.serveList.chooseServeList    
                break;
            case 0:
            this.$store.state.serveModule.serveList.chooseServeList    
                break;
            default:
                break;
        }
    },
    methods: {
        pay(type) {
            /* 
                "createTime": "2019-06-21T02:51:14.194Z",
                "goodId": 0,
                "goodName": "string",
                "goodType": "string",
                "goodTypeName": "string",
                "id": 0,
                "imageUrl": "string",
                "orderId": "string",
                "orderNum": 0,
                "price": 0
            */

        }
    }
}

</script>
<style lang='less' scoped>

.choose_payfn_box {
    .pay_fn_top {
        text-align: center;
        .time {
            margin-top: 1.2rem;
            font-size: .22rem;
            color: #666;
            line-height: .3rem;
        }
        .price {
            font-size: .42rem;
            font-weight: bold;
            span {
                font-size: .72rem;
            }
        }
        .order_detail {
            font-size: .22rem;
            color: #666;
            line-height: .3rem;
            margin-bottom: 1.2rem;
        }
    }
    .pay_title {
        font-size: .28rem;
        color: #666;
    }
    .van-cell {
        justify-content: space-between;
        .van-cell__value {
            flex: none;
        }
    }
    .pay_btn {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: .98rem;
        font-size: .34rem;
        text-align: center;
        line-height: .98rem;
        color: #393733;
        background-color: #FFCB44;
        border: 1px solid #DCDCDC;
        border-radius: .1rem;
    }
}
</style>