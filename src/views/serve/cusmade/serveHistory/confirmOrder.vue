<!-- serve/building/confirmOrder 订单信息确认 or 订单详情 -->
<template>
    <div class="confirm_order"  :style="{minHeight: minH + 'px'}">
        <div class="confirm_order_box">
            <div class="card_item">
                <div class="title">{{serveType}}</div>
                <anOrderList class="order_list" v-for="item in orderList" :key="item.id" :orderName="item.goodName" :orderMoney="item.price" :orderCount="item.orderNum"></anOrderList>
            </div>
            <div class="card_item">
                <div class="title">订单信息</div>
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>订单编号</div>
                        <div>{{orderId}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>服务分类</div>
                        <div>{{serveType}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>下单时间</div>
                        <div>{{createTime}}</div>
                    </div>
                </div>
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>店铺优惠</div>
                        <div>{{dpDiscount}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>会员优惠</div>
                        <div>{{vipDiscount}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>优惠金额</div>
                        <div class="orange">-￥{{discount}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>合计金额</div>
                        <div class="orange">￥{{totalPrice}}</div>
                    </div>
                </div>
            </div>
            <div class="card_item" v-if="type == 1">
                <div class="title">联系信息</div>
                <!-- <div class="msg_list" v-if="type == 0">
                    <div class="msg_list_item">
                        <div>姓名</div>
                        <div>{{user.name}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>电话</div>
                        <div>{{user.tel}}</div>
                    </div>
                    <div class="msg_list_item">
                        <div>地址</div>
                        <div>{{user.address}}</div>
                    </div>
                </div> -->
                <div class="msg_list">
                    <div class="msg_list_item">
                        <div>姓名</div>
                        <div><input type="text" class="input_item" v-model="user.name" /></div>
                    </div>
                    <div class="msg_list_item">
                        <div>电话</div>
                        <div><input type="text" class="input_item" v-model="user.tel" /></div>
                    </div>
                    <div class="msg_list_item">
                        <div>地址</div>
                        <div><input type="text" class="input_item" v-model="user.address" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['type_btn', {'default_btn': type == 0}]"  @click="pay(type)">{{type | filterTypeBtn}}</div>
    </div>
</template>

<script>
import anOrderList from '@/components/anOrderList'
import { Toast, Dialog } from 'vant';
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api'

export default {
    data () {
        return {
            minH: 0,
            serveType: '',
            createTime: '',
            orderId: '',
            orderList: [],
            totalPrice: 0,
            discount: 0, //优惠
            dpDiscount: '无',
            vipDiscount: '无',
            type: 1, //订单详情还是确认订单
            user: {
                name: '',
                tel: '',
                address: ''
            },

        };
    },
    components: {anOrderList},
    filters: {
        filterTypeBtn(val) {
            //0 是订单详情 1 是订单确认
            return val == 0 ? '已完成' : '去支付';
        }
    },
    created() {
        let query = this.$route.query;
        this.orderId = query.id;
        this.type = query.type;

        ajaxGet(`${apiUrl.baseURL}app/goodOrder/info/${this.orderId}`, {}, res => {
            this.orderList = res.detailList;
            this.createTime = res.createTime;
            this.serveType = res.orderType;//服务分类
            this.decount = res.orderMoney - res.realMoney;
            this.totalPrice = this.orderMoney;

            let discount = res.discountList;
            for (let i=0; i<discount.length; i++) {
                if (discount[i].scopName == 'huiyuan') {
                    //会员优惠
                    this.vipDiscount = `￥${discount[i].money}`;
                } else {
                    //店铺
                    this.dpDiscount = `￥${discount[i].money}`;
                }
            }
        })

    },
    mounted() {
        this.minH = document.documentElement.clientHeight - 60;
    },
    methods: {
        pay(type) {
            //支付
            if (type == 1) {
                if (this.user.name != '' && this.user.tel != '' &&this.user.address != '') {
                    //提交地址信息
                    
                    ajaxGet(`${apiUrl.baseURL}app/goodOrder/link/${this.orderId}`, {
                        address: this.user.address,
                        mobile: this.user.tel,
                        linkMan: this.user.username
                    }, res => {
                        this.$router.push(`/choosePayFn?module=3&id=${this.orderId}`);
                    })
                    
                } else {
                    Toast({
                        message: '请填写个人信息',
                        duration: 2000
                    });
                }
            }
        }
    },
}

</script>
<style lang='less' scoped>
.confirm_order {
    background-color: #f3f3f3;
    position: relative;
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
            .input_item {
                border: none;
                text-align: right;
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
        position: absolute;
        bottom: 0;
        &.default_btn {
            background-color: #FFFFFF;
            font-size: .34rem;
            color: #666;
        }
    }
}

</style>