<!-- serve/building/payFail 支付失败 -->
<template>
    <div class="pay_success">
        <div class="icon_img">
            <img src="@/assets/payFail.png" alt="">
        </div>
        <div class="bold_msg">订单支付失败</div>
        <div class="normal_msg">订单支付失败，请重新支付或返回</div>
        <div class="btn repay" @click="repayFn">重新支付</div>
        <div class="btn return" @click="returnFn">返回</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            module: 0,
            id: 0
        };
    },
    created() {
        let query = this.$route.query;
        this.module = query.module;
        this.id = query.id;
    },
    methods: {
        repayFn() {
            //重新支付
            this.$router.push(`/choosePayFn?module=${this.module}&id=${this.id}`);
        },
        returnFn() {
            //返回，返回订单详情
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
        }
    }
}

</script>
<style lang='less' scoped>
.pay_success {
    text-align: center;
    margin-top: 1.24rem;
    .icon_img {
        width: 1.3rem;
        height: 1.3rem;
        margin: 0 auto .24rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .bold_msg {
        font-size: .38rem;
        color: #666666;
        margin-bottom: .28rem;
    }
    .normal_msg {
        font-size: .3rem;
        color: #999;
        margin-bottom: 1.28rem;
        span {
            color: #009BED;
        }
    }
    .btn {
        color: #fff;
        font-size: .34rem;
        height: .98rem;
        width: 6.86rem;
        line-height: .98rem;
        border-radius: .5rem;
        background-color: #009BED;
        margin: 0 auto .4rem;
        &.return {
            background-color: #fff;
            border: 1px solid #009BED;
            color: #009BED;
        }
    }
}

</style>