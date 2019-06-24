<!-- foods/hisCard -->
<template>
    <div class="hisCard_box" @click="toDetail(orderId)">
        <div class="top_box">
            <span class="order_id">订单编号：{{orderId}}</span>
            <span class="status">{{status | filterStatus}}</span>
        </div>
        <div class="bottom_box">
            <div class="order_list">
                <div class="order_list_box">
                    <div class="order_list_item" v-for="(item, index) in orderList" :key="index">{{item.name}}<span> ×{{item.count}}</span></div>
                </div>
                <div class="order_time">
                    <div style="color: #999;">下单时间</div>
                    <div>{{orderTime}}</div>
                </div>
            </div>
            <div class="msg">
                <div class="appoint_time">预约时间 <span> {{appointTime}}</span></div>
                <div v-if="status == 0 || status == 1">
                    <div class="status_btn cancel" v-if="status == 0" @click.stop="cacelOrder(orderId)">取消订单</div>
                    <div class="status_btn cancel" v-if="status == 1" @click.stop="refund(orderId)">申请退款</div>
                    <div class="status_btn" @click.stop="toPay(status, orderId)" v-show="status != 1">{{status | filterBtn}}</div>
                    <div class="status_btn" v-show="status == 1">{{useType | filterUseT}} {{checkCode}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiUrl } from '@/common/js/api'
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { Dialog  } from 'vant';

export default {
    data () {
        return {
        };
    },
    props: ['orderId', 'status', 'orderList', 'orderTime', 'appointTime', 'checkCode', 'useType'],
    filters: {
        filterStatus(val) {
            /* 未付款0;已付款1;已过期2;已撤销9;已接单3;已使用4;已退款5;已申请6 */
            switch (val) {
                case 0:
                    return '未支付'
                    break;
                case 1:
                    return '已支付'
                    break;
                case 2:
                    return '已过期'
                    break;
                case 3:
                    return '已接单'
                    break;
                case 4:
                    return '已使用'
                    break;
                case 5:
                    return '已退款'
                    break;
                case 6:
                    return '已申请'
                    break;
                case 9:
                    return '已撤销'
                    break;
            }
        },
        filterBtn(val) {
            switch (val) {
                case 0:
                    return '去支付'
                    break;
                case 4:
                    return '已完成'
                    break;
            }
        },
        filterUseT(val) {
            if (val == 1) {
                return '确认';
            } else {
                return '取餐码'
            }
        }
    },
    methods: {
        toPay(status, id) {
            if (status == 0) {
                this.$emit('toPay', {
                    id: id,
                    status: status
                });
            }
        },
        cacelOrder(id) {
            //撤单
            Dialog.confirm({
                message: '是否确认取消订单？'
            }).then(() => {
                // on confirm
                ajaxPost(`${apiUrl.baseURL}app/goodOrder/cancel/${id}`, {}, res => {
                    res = res.result.data;
                    this.$emit('cancelOrder', {
                        id: id
                    })
                })
            }).catch(() => {});
        },
        refund(id) {
            //退款
            Dialog.confirm({
                message: '是否确认退款？'
            }).then(() => {
                // on confirm
                ajaxPost(apiUrl.refund, {
                    orderId: id,
                    reason: ''
                }, res => {
                    res = res.result.data;
                    this.$emit('refundOrder', {
                        id: id
                    })
                })
            }).catch(() => {});
        },
        toDetail(id) {
            //查看详情
            let type = this.status != 0 ? 0 : 1;
            this.$router.push(`/coffeeOrderComfirm?type=${type}&id=${id}`);
        }
    }
}

</script>
<style lang='less' scoped>
.hisCard_box {
    padding: .24rem;
    margin-top: .24rem;
    background-color: #fff;
    border-radius: .1rem;
    overflow: hidden;
    .top_box {
        padding-bottom: .18rem;
        margin-bottom: .16rem;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        .order_id {
            font-size: .3rem;
            color: #333;
        }
        .status {
            font-size: .26rem;
            color: #666;
        }
    }
    .bottom_box {
        font-size: .26rem;
        color: #333; 
        
        .msg {
            display: flex;
            justify-content: space-between;
            align-items: center; 
            margin-bottom: .16rem;
        }
        .status_btn {
            font-size: .28rem;
            color: #333;
            text-align: center;
            width: 1.4rem;
            height: .6rem;
            line-height: .6rem;
            background-color: #FFCB44;
            border-radius: .04rem;
            float: right;
            margin-left: .16rem;
            &.cancel {  
                background-color: #fff;
                border: 1px solid #d2d2d2;
                line-height: .58rem;
            }
        }
        .appoint_time {
            font-size: .26rem;
            color: #999;
            span {
                color: #F34C2A;
            }
        }
        .order_list {
            .order_list_box {
                .order_list_item {
                    margin-bottom: .16rem;
                }
            }
            .order_time {
                display: flex;
                justify-content: space-between;
                color: #333;
                font-size: .26rem;
                padding: .1rem 0;
                margin-bottom: .14rem;
                border-top: 1px solid #F2F2F2;
                border-bottom: 1px solid #F2F2F2;
            }
        }
    }   
}

</style>