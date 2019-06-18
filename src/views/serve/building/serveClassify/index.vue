<!-- building/serveClassify 服务分类主 -->
<template>
    <div class="server_classify">
        <div class="address_box">
            <img src="@/assets/address.png">
            <div>地址：<span>{{address}}</span></div>
            <span @click="telFn">155</span>
        </div>
        <div class="serve_list">
            <serveListCard v-for="item in serveList" :key="item.id" 
            :price="item.price" 
            :title="item.name" 
            :brief="item.brief"></serveListCard>
        </div>
        <div class="cart" @click="showCard">
            <div class="cart_left">
                <img src="@/assets/cart.png" class="cart_icon">
                <div class="cart_price">
                    <div>合计:<span class="total_price">￥{{totalPrice}}</span></div>
                    <div class="preferent">已优惠{{preferentPrice}}</div>
                </div>
            </div>
            <div class="cart_right cart_btn">下单</div>
        </div>
        <van-popup v-model="isTelshow" position="bottom" >
            <div class="popup_box">
                <div class="popup_top">
                    <div style="color: #999">拨打电话</div>
                    <div style="color: #333">{{tel}}</div>
                </div>
                <div class="popup_return" @click="returnFn" style="color: #666">返回</div>
            </div>
        </van-popup>
        <van-popup v-model="isCartshow" position="bottom" class="popup_cart">
            <div class="popup_cart_box">
                <div class="popup_cart_preferent">有优惠券可使用，已优惠{{preferentPrice}}元</div>
                <div class="popup_cart_title">已选服务</div>
                <cartCard v-for="item in chooseList" :key="item.id" :title="item.name" :price="item.price" class="popup_cart_card"></cartCard>
            </div>
        </van-popup>
    </div>
</template>

<script>
import serveListCard from './serveListCard'
import cartCard from './cartCard'

export default {
    data () {
        return {
            address: '广西南宁市兴宁区民族大道10号',
            tel: '15573957203',
            isTelshow: false,
            isCartshow: false,
            preferentPrice: 100,
            totalPrice: 88,
            serveList: [{
                id: 54124321,
                price: 88,
                name: '自主研发产权服务',
                brief: '入驻条件为，科技信息产业相关且入驻条件为'
            },{
                id: 415241,
                price: 88,
                name: '自主研发产权服务',
                brief: '入驻条件为，科技信息产业相关且入驻条件为'
            },{
                id: 5325632,
                price: 0,
                name: '自主研发产权服务',
                brief: '入驻条件为，科技信息产业相关且入驻条件为'
            }],
            chooseList: [{
                id: 54124321,
                price: 88,
                name: '自主研发产权服务',
                brief: '入驻条件为，科技信息产业相关且入驻条件为'
            },{
                id: 415241,
                price: 88,
                name: '自主研发产权服务',
                brief: '入驻条件为，科技信息产业相关且入驻条件为'
            },]
        };
    },
    components: {serveListCard, cartCard},
    methods: {
        telFn() {
            this.isTelshow = true;
        },
        returnFn() {
            this.isTelshow = false;
            this.isCartshow = false;
        },
        showCard() {
            this.isCartshow = true;
        }
    }
}

</script>
<style lang='less' scoped>
.server_classify {
    .address_box {
        padding: .16rem .32rem;
        border-bottom: 1px solid #CBCBCB;
        font-size: .26rem;
        color: #999;
        display: flex;
        align-items: flex-end;
        img {
            width: .22rem;
            height: 100%;
            margin-right: .16rem;
        }
        span {
            color: #333;
        }
    }
    .serve_list {
        padding: .18rem .32rem;
    }
    .popup_cart {
        bottom: 1.08rem;
    }
    .popup_box {
        font-size: .34rem;
        text-align: center;
        .popup_top {
            div {
                &:first-child {
                    margin: .25rem 0 .4rem;
                }
                &:last-child {
                    margin-bottom: .15rem;
                }
            }
            border-bottom: .1rem solid #f2f2f2;
        }
        .popup_return {
            margin: .25rem 0;
        }
    }
    .cart {
        position: fixed;
        bottom: 0;
        z-index: 19950606;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .12rem .32rem;
        background-color: #fff;
        border-top: 1px solid #CBCBCB;
        .cart_left {
            display: flex;
            align-items: center;
            .cart_icon {
                width: .6rem;
                height: 100%;
                margin-right: .2rem;
            }
            .cart_price {
                font-size: .26rem;
                color: #333;
                .total_price {
                    color: #F14D2A;
                    font-size: .38rem;
                }
                .preferent {
                    color: #F14D2A;
                    font-size: .2rem;
                }
            }
        }
        .cart_btn {
            background-image: linear-gradient(90deg, #FFCF47 0%, #FFA122 100%);
            border-radius: .36rem;
            color: #333;
            font-size: .32rem;
            width: 1.8rem;
            height: .74rem;
            text-align: center;
            line-height: .74rem;
        }
    }
    .popup_cart_box {
        .popup_cart_preferent {
            background-color: #FFF7E6;
            border-radius: 0 0 .1rem .1rem;
            color: #666;
            font-size: .2rem;
            text-align: center;
            padding: .1rem 0;
        }
        .popup_cart_title {
            padding: .23rem .32rem .4rem;
            font-size: .3rem;
            color: #999;
        }
        .popup_cart_card {
            margin-bottom: .6rem;
            &:last-child {
                margin-bottom: .36rem;
            }
        }
    }
}
    
</style>