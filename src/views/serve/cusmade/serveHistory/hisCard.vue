<!-- serveHitory/hisCard -->
<template>
    <div class="hisCard_box"  @click="toDetail(orderId)">
        <div class="top_box">
            <span class="order_id">订单编号：{{orderId}}</span>
            <span class="status">{{status | filterStatus}}</span>
        </div>
        <div class="bottom_box">
            <div class="msg" v-for="item in orderList" :key="item.id">
                <div class="order_name">{{item.goodName}}</div>
                <div class="order_time">{{item.createTime}}</div>
            </div>
            <div v-if="status == 0 || status == 1">
                <div class="status_btn cancel" v-if="status == 0" @click.stop="cacelOrder(orderId)">取消订单</div>
                <div class="status_btn cancel" v-if="status == 1" @click.stop="refund(orderId)">申请退款</div>
                <div class="status_btn" @click.stop="toPay(status, orderId)" v-show="status != 1">{{status | filterBtn}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiUrl } from '@/common/js/api'
import { ajaxGet } from '@/common/js/public.js'
import { Dialog  } from 'vant';

export default {
    data () {
        return {
        };
    },
    props: ['orderId', 'status', 'orderName', 'orderTime', 'orderList'],
    filters: {
        filterStatus(val) {
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
    },
    methods: {
        toPay(status, id) {
            if (status == 0) {
                this.$emit('toPay', id);
            }
        },
        cacelOrder(id) {
            //撤单
            Dialog.confirm({
                message: '是否确认取消订单？'
            }).then(() => {
                // on confirm
                ajaxGet(`${apiUrl.baseURL}app/goodOrder/cancel/${id}`, {}, res => {
                    res = res.result.data;
                    this.$emit('cancelOrder', {
                        id: id
                    })
                })
            }).catch(() => {
                console.log('cancel')
            });
        },
        refund(id) {
            //退款
            Dialog.confirm({
                message: '是否确认退款？'
            }).then(() => {
                // on confirm
                ajaxGet(apiUrl.refund, {
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
            this.$router.push(`/confirmOrder?type=${type}&id=${id}`);
        }
    }
}

</script>
<style lang='less' scoped>
.hisCard_box {
    padding: .24rem;
    margin: .24rem .32rem 0;
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
            vertical-align: top;
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
    }   
}

</style>