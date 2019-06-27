<!-- choosePayFn 选择支付方式 -->
<template>
    <div class="choose_payfn_box">
        <div class="pay_fn_top">
            <div class="time">剩余支付时间 {{time}}</div>
            <div class="price">¥<span>{{price}}</span></div>
            <div class="order_detail" @click="toDetail">订单详情</div>
        </div>
        <div class="pay_fn">
            <van-radio-group v-model="radio">
            <van-cell-group>
                <van-cell clickable title="" @click="radio = '1'">
                    <template slot="title">
                        <img src="@/assets/wx_icon.png" class="icon" />
                        <span class="pay_title">微信支付</span>
                    </template>
                    <van-radio checked-color="#FFCB44" name="1" />
                </van-cell>
                <van-cell clickable title="" @click="radio = '2'">
                    <template slot="title">
                        <img src="@/assets/ali_icon.png" class="icon" />
                        <span class="pay_title">支付宝支付</span>
                    </template>
                    <van-radio checked-color="#FFCB44" name="2" />
                </van-cell>
            </van-cell-group>
            </van-radio-group>
        </div>
        <div class="pay_btn"  @click="pay">确认支付</div>
    </div>

</template>

<script>
import {aliPay, wxPay} from '@/common/js/pay'
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            time: '00:00:00',
            price: 0,
            radio: '1',
            module: 1,
            orderId: '',
            endTime: '1561428799535',//订单创建时间+24，做倒计时,
            countTime: ''
        };
    },
    props: ['orderName', 'orderMoney', 'orderCount'],
    created() {
        /* 
            module从哪儿过来的
            1 foods
            2 coffee
            3 serve
        */
        let query = this.$route.query;
        this.module = query.module;
        this.orderId = query.id;
        
        /* 查询订单详情，计算剩余时间，从下单开始24小时倒计时，做个倒计时 */
        ajaxGet(`${apiUrl.baseURL}app/goodOrder/info/${this.orderId}`, {}, res => {
            this.endTime = new Date(res.createTime).getTime() + 1000 * 60 * 60 * 24;
            this.countTime = this.endTime - new Date().getTime();
            this.count();
            this.price = (res.realMoney / 100).toFixed(2)
        })

    },
    methods: {
        pay() {
           if (this.radio == 1) {
                //微信
                wxPay({
                    orderNo: this.orderId
                }, this.orderId, this.module)
            } else {
               //支付宝
                aliPay({
                    orderNo: this.orderId
                }, this.orderId, this.module)
            }
        },
        toDetail() {
            //查看详情
            switch (Number(this.module)) {
                case 1:
                    this.$router.push('/foodsHistory')
                    break;
                case 2:
                    this.$router.push('/coffeeHistory')    
                    break;
                case 3:
                    this.$router.push('/serveHistory')
                    break;
                default:
                    break;
            }
            
        },
        formatDuring(mss) {
            let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) {
                hours = '0' + hours;
            }
            let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            let seconds = parseInt((mss % (1000 * 60)) / 1000);
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            this.time = `${hours}:${minutes}:${seconds}`;
        },
        count() {
            const _this = this;
            if (this.countTime > 0) {
                this.countTime -= 1000;
                this.formatDuring(this.countTime);
                setTimeout(function() {
                    _this.count();
                }, 1000);
            }
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
    .icon {
        width: .32rem;
        margin-right: .2rem;
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