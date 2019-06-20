<!-- serveHitory/hisCard -->
<template>
    <div class="hisCard_box">
        <div class="top_box">
            <span class="order_id">订单编号：{{orderId}}</span>
            <span class="status">{{status | filterStatus}}</span>
        </div>
        <div class="bottom_box">
            <div class="msg">
                <div class="order_name">{{orderName}}</div>
                <div class="order_time">{{orderTime}}</div>
            </div>
            <div v-if="status != 2" class="status_btn" @click="toPay(status, orderId)">{{status | filterBtn}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['orderId', 'status', 'orderName', 'orderTime'],
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
                    return '已预约'
                    break;
                case 3:
                    return '已消费'
                    break;
            }
        },
        filterBtn(val) {
            switch (val) {
                case 0:
                    return '去支付'
                    break;
                case 1:
                    return '确认'
                    break;
                case 3:
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
        }
    }   
}

</style>