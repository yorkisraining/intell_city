<!-- building/serveClassify 服务分类主 -->
<template>
    <div class="server_classify">
        <headerWithPhone :title="title" :linkMsg="''" class="head" @clickLink="toHis"></headerWithPhone>
        <!-- <div class="address_box">
            <div class="address_item">
                <img src="@/assets/address.png">
                <div>地址：<span>{{companyMsg.address}}</span></div>
            </div>
            <div class="tel" @click="telFn"><img src="@/assets/phone.png" /></div>
        </div> -->
        <div>
            <div class="serve_list">
                <vue-better-scroll class="wrapper"
                ref="scroll"
                :scrollbar="scrollSetting.scrollbarObj"
                :pullUpLoad="scrollSetting.pullUpLoadObj"
                :startY="parseInt(scrollSetting.startY)"
                @pullingUp="onPullingUp">
                    <serveListCard v-for="item in serveList" :key="item.id" 
                    :price="item.price" 
                    :title="item.goodName" 
                    :brief="item.remark"
                    :id="item.id"
                    :count="item.count"
                    :src="item.imageUrl"
                    :totalPrice="totalPrice"
                    :chooseListLength="chooseList.length"
                    @changePrice="changePrice" 
                    @toThisDetail="toThisDetail"></serveListCard>
                </vue-better-scroll>
            </div>
            <div class="cart" @click="showCard">
                <div class="cart_left">
                    <img src="@/assets/cart.png" class="cart_icon">
                    <div class="cart_price">
                        <div>合计:<span class="total_price">￥{{totalPrice}}</span></div>
                        <div class="preferent">已优惠{{preferentPrice}}</div>
                    </div>
                </div>
                <div class="cart_right cart_btn" @click="toPay">下单</div>
            </div>
            <!-- <van-popup v-model="isTelshow" position="bottom" class="popup_tel" >
                <div class="popup_box">
                    <div class="popup_top">
                        <div style="color: #999">拨打电话</div>
                        <div style="color: #333" @click="callTel">{{companyMsg.linkPhone}}</div>
                    </div>
                    <div class="popup_return" @click="returnFn" style="color: #666">返回</div>
                </div>
            </van-popup> -->
            <van-popup v-model="isCartshow" position="bottom" class="popup_cart">
                <div class="popup_cart_box">
                    <div class="popup_cart_preferent">有优惠券可使用，已优惠{{preferentPrice}}元</div>
                    <div class="popup_cart_title">已选服务</div>
                    <cartCard class="popup_cart_card" v-for="item in chooseList" 
                    :key="item.id" 
                    :id="item.id" 
                    :title="item.name" 
                    :price="item.price" 
                    :count="item.count" 
                    :totalPrice="totalPrice" 
                    :chooseListLength="chooseList.length" 
                    @changePrice="changePrice"></cartCard>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import serveListCard from './serveListCard'
import cartCard from './cartCard'
import headerWithPhone from '@/components/headerWithPhone'
import {ajaxPost} from '@/common/js/public'
import { apiUrl } from '@/common/js/api.js'
import VueBetterScroll from 'vue2-better-scroll'

export default {
    data () {
        return {
            scrollSetting: {
                // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
                scrollbarObj: {
                    fade: true
                },
                // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
                pullUpLoadObj: {
                    threshold: -20,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                },
                startY: 0,
            },  
            title: '',
            id: '',
            //isTelshow: false,
            isCartshow: false,
            preferentPrice: 100, //优惠金额
            totalPrice: this.$store.state.serveModule.serveList.totalPrice, //总价
            chooseList: this.$store.state.serveModule.serveList.chooseServeList,
        };
    },
    components: {serveListCard, cartCard, headerWithPhone, VueBetterScroll },
    created() {
        let query = this.$router.history.current.query;
        this.id = query.id;
        this.title = query.title;

        //请求信息

        /* 
            进入页面数据全部清除从新获取
        */
        this.$store.commit('serveModule/initServeList');

        //获取公司信息及商品列表
        
    },
    computed: {
        companyMsg() {
            return this.$store.state.serveModule.serveCompanyMsg;
        },
        serveList() {
            return this.$store.state.serveModule.serveList.originList;
        }
    },

    methods: {
        onPullingUp() {
            //上拉刷新
            this.$store.commit('serveModule/addServeOriginList', [{
                "createTime": "2019-06-20T13:58:49.320Z",
                "createUserId": 0,
                "freeFlag": 0,
                "goodName": "自主研发产权服务1",
                "goodType": "string",
                "goodTypeName": "string",
                "id": parseInt(Math.random() * 100),
                "imageUrl": "string",
                "price": 188,
                "remark": "入驻条件为，科技信息产业相关且入驻条件为",
                "shopId": 0,
                "sort": 0,
                "status": 0,
                "count": 0,
                "updateTime": "2019-06-20T13:58:49.320Z",
                "updateUserId": 0
            },{
                "createTime": "2019-06-20T13:58:49.320Z",
                "createUserId": 0,
                "freeFlag": 0,
                "goodName": "自主研发产权服务2",
                "goodType": "string",
                "goodTypeName": "string",
                "id": parseInt(Math.random() * 100),
                "imageUrl": "string",
                "price": 188,
                "remark": "入驻条件为，科技信息产业相关且入驻条件为",
                "shopId": 0,
                "sort": 0,
                "status": 0,
                "count": 0,
                "updateTime": "2019-06-20T13:58:49.320Z",
                "updateUserId": 0
            },{
                "createTime": "2019-06-20T13:58:49.320Z",
                "createUserId": 0,
                "freeFlag": 0,
                "goodName": "自主研发产权服务3",
                "goodType": "string",
                "goodTypeName": "string",
                "id": parseInt(Math.random() * 100),
                "imageUrl": "string",
                "price": 188,
                "remark": "入驻条件为，科技信息产业相关且入驻条件为",
                "shopId": 0,
                "sort": 0,
                "status": 0,
                "count": 0,
                "updateTime": "2019-06-20T13:58:49.320Z",
                "updateUserId": 0
            },])
            this.$refs.scroll.forceUpdate(true)
        },
        telFn() {
            this.isTelshow = true;
        },
        callTel() {
            window.location.href = `tel:${this.tel}`;
        },
        returnFn() {
            this.isTelshow = false;
            this.isCartshow = false;
        },
        showCard() {
            this.isCartshow = true;
        },
        findChooseList(id) {
            for (let i=0; i<this.chooseList.length; i++) {
                if (this.chooseList[i].id == id) {
                    return i;
                }
            }
            return -1;
        },
        findServeList(id) {
            for (let i=0; i<this.serveList.length; i++) {
                if (this.serveList[i].id == id) {
                    return i;
                }
            }
        },
        changePrice(obj) {
            this.totalPrice += obj.type * obj.price;

            const cidx = this.findChooseList(obj.id),
                    sidx = this.findServeList(obj.id);
            
            let count = this.serveList[sidx].count + obj.type;

            //不管怎么样都先修改serlist里的count
            this.$set(this.serveList[sidx], 'count', count);

            if (obj.count == 0) {
                //count为0，chooseList删掉这个选择的商品
                this.chooseList.splice(cidx, 1);
            } else {
                if (cidx != -1) {
                    //找到了，修改chooselist里这个商品的数量
                    this.$set(this.chooseList[cidx], 'count', count);
                } else {
                    //没找到，添加进去
                    this.chooseList.push(this.serveList[sidx]);
                }
            }
            this.$store.commit('serveModule/changeServeList', {
                list: this.chooseList,
                total: this.totalPrice,
                origin: this.serveList
            });
        },
        toPay() {
            //下单  
            this.$router.push('/confirmOrder');
        },
        toThisDetail(id) {
            this.$router.push(`/serveDetail?id=${id}`);
        },
        toHis() {

        }
    }
}

</script>
<style lang='less' scoped>
.server_classify {
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 199;
    }
    .address_box {
        padding: .16rem .32rem;
        border-bottom: 1px solid #CBCBCB;
        font-size: .26rem;
        color: #999;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .address_item {
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
        .tel img {
            width: .26rem;
            height: 100%;
        }
    }
    .serve_list {
        padding: 0 .32rem;
        position: fixed;
        top: 1.76rem;
        left: 0;
        right: 0;
        bottom: 1.02rem;
    }
    .popup_cart {
        bottom: 1.08rem;
    }
    .popup_tel {
        z-index: 199506060 !important;
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
            padding: .25rem 0;
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