<!-- foods 美食服务首页 -->
<template>
    <div class="foods_containt">
        <headerWithPhone :title="'三品王'" :linkMsg="'服务记录'" class="head" @clickLink="toHis"></headerWithPhone>
        <div class="carousel_block">
            <el-carousel :height="setting.height" >
                <el-carousel-item v-for="item in topCarImgList" :key="item.id" >
                    <img :src="item.src" alt="" @click="toThisNav(item.link)">
                </el-carousel-item>
            </el-carousel>
        </div> 
        <div class="address_box">
            <div class="address_item">
                <img src="@/assets/address.png">
                <div>地址：<span>{{address}}</span></div>
            </div>
            <div class="tel" @click="telFn"><img src="@/assets/phone.png" /></div>
        </div>
        <van-popup v-model="isTelshow" position="bottom" class="popup_tel" >
            <div class="popup_box">
                <div class="popup_top">
                    <div style="color: #999">拨打电话</div>
                    <div style="color: #333" @click="callTel">{{tel}}</div>
                </div>
                <div class="popup_return" @click="returnFn" style="color: #666">返回</div>
            </div>
        </van-popup>
        <div class="foods_list_box">
            <foodsListCard v-for="item in foodsList" :key="item.id" 
            :price="item.price" 
            :title="item.name" 
            :brief="item.brief"
            :id="item.id"
            :count="item.count"
            :totalPrice="totalPrice"
            :chooseListLength="chooseList.length"
            @changePrice="changePrice" ></foodsListCard>
        </div>
        <div class="cart">
            <div class="cart_left"  @click="showCard">
                <img src="@/assets/cart.png" class="cart_icon">
                <div class="cart_price">
                    <div>合计:<span class="total_price">￥{{totalPrice}}</span></div>
                    <div class="preferent">已优惠{{preferentPrice}}</div>
                </div>
            </div>
            <div class="cart_right cart_btn" @click="toPay">下单</div>
        </div>
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
</template>

<script>
import foodsListCard from './foodsListCard'
import cartCard from './cartCard'
import headerWithPhone from '@/components/headerWithPhone'

export default {
    data () {
        return {
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            topCarImgList: [{
                id: 1010,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1011,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1012,
                src: require('@/assets/fj.jpg'),
                link: '/',
            },{
                id: 1013,
                src: require('@/assets/fj.jpg'),
                link: '/',
            }],
            address: '广西南宁市兴宁区民族大道10号',
            tel: '15573957203',
            isTelshow: false,
            isCartshow: false,
            preferentPrice: 100, //优惠金额
            totalPrice: this.$store.state.cartModule.foodsList.totalPrice, //总价
            foodsList: this.$store.state.cartModule.foodsList.originList,
            chooseList: this.$store.state.cartModule.foodsList.chooseFoodsList,
        };
    },
    components: {foodsListCard, cartCard, headerWithPhone},
    mounted() {
        this.$store.commit('cartModule/changeFoodsReduce', this.reduce);
    },
    methods: {
        toThisNav() {

        },
        toHis() {
            //服务记录
            this.$router.push('/foodsHistory');
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
        findFoodsList(id) {
            for (let i=0; i<this.foodsList.length; i++) {
                if (this.foodsList[i].id == id) {
                    return i;
                }
            }
        },
        changePrice(obj) {
            this.totalPrice += obj.type * obj.price;

            const cidx = this.findChooseList(obj.id),
                    sidx = this.findFoodsList(obj.id);
            
            let count = this.foodsList[sidx].count + obj.type;

            //不管怎么样都先修改serlist里的count
            this.$set(this.foodsList[sidx], 'count', count);

            if (obj.count == 0) {
                //count为0，chooseList删掉这个选择的商品
                this.chooseList.splice(cidx, 1);
            } else {
                if (cidx != -1) {
                    //找到了，修改chooselist里这个商品的数量
                    this.$set(this.chooseList[cidx], 'count', count);
                } else {
                    //没找到，添加进去
                    this.chooseList.push(this.foodsList[sidx]);
                }
            }
            this.$store.commit('cartModule/changeFoodsList', {
                list: this.chooseList,
                total: this.totalPrice,
                origin: this.foodsList
            });
        },
        toPay() {
            //下单  
            this.$router.push('/foodsOrderComfirm');
        }
    },
}

</script>
<style lang='less' scoped>
.foods_containt {
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
    }
    .el-carousel__item img {
        width: 100%;
        border-radius: 4px;
    }

    .carousel_block {
        margin-bottom: .15rem;
        margin-top: -1px;
        padding: .16rem .32rem;
    }

    .address_box {
        padding: .16rem .32rem;
        border-bottom: .1rem solid #f2f2f2;
        border-top:  1px solid #f2f2f2;
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

    .foods_list_box {
        padding: .24rem .32rem;
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
        border-top: .01rem solid #CBCBCB;
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