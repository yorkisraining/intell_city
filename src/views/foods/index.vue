<!-- foods 美食服务首页 -->
<template>
    <div class="foods_containt">
        <headerWithPhone :title="spwCompanyMsg.companyName" :linkMsg="'服务记录'" class="head" @clickLink="toHis"></headerWithPhone>
        <div class="carousel_block">
            <el-carousel :height="setting.height" >
                <el-carousel-item v-for="item in topCarImgList" :key="item.id" >
                    <img :src="item.image" :alt="item.remark" @click="toThisNav(item.url)">
                </el-carousel-item>
            </el-carousel>
        </div> 
        <div class="address_box">
            <div class="address_item">
                <img src="@/assets/address.png">
                <div>地址：<span>{{spwCompanyMsg.address}}</span></div>
            </div>
            <div class="tel" @click="telFn"><img src="@/assets/phone.png" /></div>
        </div>
        <van-popup v-model="isTelshow" position="bottom" class="popup_tel" >
            <div class="popup_box">
                <div class="popup_top">
                    <div style="color: #999">拨打电话</div>
                    <div style="color: #333" @click="callTel">{{spwCompanyMsg.linkPhone}}</div>
                </div>
                <div class="popup_return" @click="returnFn" style="color: #666">返回</div>
            </div>
        </van-popup>
        <div class="foods_list_box">
            <van-list v-model="scrollSetting.loading"
                :finished="scrollSetting.finished"
                finished-text="没有更多了"
                @load="getMsgList"
            >
                <foodsListCard v-for="item in foodsList" :key="item.id" 
                class="food_list_card"
                :price="item.price" 
                :title="item.name" 
                :brief="item.brief"
                :id="item.id"
                :count="item.count"
                :src="item.src" 
                :totalPrice="totalPrice"
                :chooseListLength="chooseList.length"
                @changePrice="changePrice" ></foodsListCard>
            </van-list>
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
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'
import { Toast } from 'vant';

export default {
    data () {
        return {
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            spwCompanyMsg: {
                "companyName": "三品王",
                "createTime": "2019-06-20T09:25:16.400Z",
                "createUserId": 0,
                "id": 0,
                "inTime": "2019-06-20T09:25:16.400Z",
                "linkMan": "string",
                "linkPhone": "15478451242",
                "outTime": "2019-06-20T09:25:16.400Z",
                "scope": "string",
                "shortName": "string",
                "status": 0,
                "type": "string",
                "updateTime": "2019-06-20T09:25:16.400Z",
                "updateUserId": 0
            },
            topCarImgList: [{
                "createTime": "2019-06-20T08:49:21.203Z",
                "id": 1,
                "image": require('@/assets/fj.jpg'),
                "remark": "string",
                "sort": 0,
                "status": 0,
                "title": "string",
                "type": 0,
                "url": "string"
            }, {
                "createTime": "2019-06-20T08:49:21.203Z",
                "id": 2,
                "image": require('@/assets/fj.jpg'),
                "remark": "string",
                "sort": 0,
                "status": 0,
                "title": "string",
                "type": 0,
                "url": "string"
            }, {
                "createTime": "2019-06-20T08:49:21.203Z",
                "id": 3,
                "image": require('@/assets/fj.jpg'),
                "remark": "string",
                "sort": 0,
                "status": 0,
                "title": "string",
                "type": 0,
                "url": "string"
            }],
            page: 0,
            limit: 10,
            totalPage: 0,
            scrollSetting: {
                loading: false,
                finished: false
            },
            isTelshow: false,
            isCartshow: false,
            foodsList: [{
                id: 54124321,
                price: 20,
                name: '麻辣牛腩粉',
                brief: '月销量八千，销量第一',
                count: 0,
                src: require('@/assets/th.jpg')
            }, {
                id: 415241,
                price: 14,
                name: '酸辣牛肉粉',
                brief: '月销量300份',
                count: 0,
                src: require('@/assets/th.jpg')
            }, {
                id: 5325632,
                price: 14.9,
                name: '高汤牛肉粉',
                brief: '日销50份，店长推荐',
                count: 0,
                src: require('@/assets/th.jpg')
            }, {
                id: 5325635,
                price: 13.88,
                name: '高汤牛肉粉',
                brief: '日销50份，店长推荐',
                count: 0,
                src: require('@/assets/th.jpg')
            }],//商品列表
            totalPrice: 0, //总价
            chooseList: [],
            preferentPrice: 100, //优惠金额
        };
    },
    components: {foodsListCard, cartCard, headerWithPhone},
    created() {
        //重置vuex数据
        this.$store.commit('cartModule/resetSPW');

        //请求banner
        ajaxPost(apiUrl.banner, {
            type: 2
        }, res => {
            this.topCarImgList = res
        })
        
        //请求公司信息
        ajaxPost(apiUrl.spwMsg, {}, res => {
            this.spwCompanyMsg = res;
        })

    },
    methods: {
        getMsgList() {
            this.page += 1;
            //获取商品列表
            ajaxPost(apiUrl.spwGoods, {
                page: this.page,
                limit: this.limit
            }, res => {
                let list = res.list;
                for (let i=0; i<list.length; i++) {
                    list[i]['count'] = 0;
                    this.foodsList.push(list[i]);
                }
                this.totalPage = res.totalPrice;
                this.scrollSetting.loading = false;
            }, res => {
                this.scrollSetting.loading = false;
                this.scrollSetting.finished = true;
            })
            if (this.page > this.totalPage) {
                this.scrollSetting.finished = true;
            }
        },
        toThisNav(url) {
            //图片链接
            window.location.href = url;
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

            this.foodsList[sidx].count = count;

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
            });
        },
        toPay() {
            //下单  
            if (this.chooseList.length > 0) {
                let list = [];
                for (let i=0; i<this.chooseList.length; i++) {
                    list.push({
                        goodId: this.chooseList[i].id,
                        orderNum: this.chooseList[i].count
                    })
                }
                ajaxPost(apiUrl.pay, {
                    list: list
                }, res => {
                    this.$router.push(`/foodsOrderComfirm?id=${res}&company=${this.spwCompanyMsg.companyName}&type=1`);
                })
            } else {
                Toast({
                    message: '请选择商品',
                    duration: 2000
                });
            }
        }
    },
}

</script>
<style lang='less' scoped>
.foods_containt {
    padding-bottom: 1.1rem;
    
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 199;
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
    .food_list_card {
        padding: 0 .32rem;
    } 
    .foods_list_box {
        margin-top: .24rem;
    }

}
</style>