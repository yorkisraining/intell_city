<!-- foods/foodsHistory 订单记录 -->
<template>
    <div class="order_history" :style="{minHeight: minH + 'px'}">
        <div class="tabs_box">
            <van-tabs sticky :offset-top="60">
                <van-tab title="未消费" class="scroll_item">
                    <van-list v-model="scrollSetting1.loading"
                        :finished="scrollSetting1.finished"
                        finished-text="没有更多了"
                        @load="getHisList1"
                    >
                    <hisCard v-for="item in hisCardList1" :key="item.id" v-if="item.status == 0"
                    :status="item.status" 
                    :orderList="item.detailList" 
                    :orderId="item.id" 
                    :checkCode="item.checkCode" 
                    :useType="item.useType" 
                    :orderTime="item.createTime" 
                    :appointTime="item.bookTime" 
                    @refundOrder="refundOrder"
                    @toPay="toPay"  
                    @cancelOrder="cancelOrder"></hisCard>
                    </van-list>
                </van-tab>
                <van-tab title="历史订单" class="scroll_item">
                    <van-list v-model="scrollSetting2.loading"
                        :finished="scrollSetting2.finished"
                        finished-text="没有更多了"
                        @load="getHisList2"
                    >
                    <hisCard v-for="item in hisCardList2" :key="item.id"
                    :status="item.status" 
                    :orderList="item.detailList" 
                    :orderId="item.id" 
                    :orderTime="item.createTime" 
                    :appointTime="item.bookTime" 
                    :checkCode="item.checkCode" 
                    :useType="item.useType" 
                    @refundOrder="refundOrder"
                    @cancelOrder="cancelOrder"></hisCard>
                    </van-list>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import hisCard from './hisCard'
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            minH: 0,
            hisCardList1: [],
            hisCardList2: [],
            page1: 0, //未支付
            page2: 0, //历史订单
            limit: 10,
            totalPage1: 0,
            totalPage2: 0,
            scrollSetting1: {
                loading: false,
                finished: false
            },
            scrollSetting2: {
                loading: false,
                finished: false
            },
        };
    },
    components: {hisCard},
    mounted() {
        this.minH = document.documentElement.clientHeight - 60;
    },
    methods: {
        getHisList1() {
            this.page1 += 1;
            ajaxGet(apiUrl.spwOrderList, {
                page: this.page1,
                limit: this.limit,
                status: '0,1,3'
            }, res => {
                this.hisCardList1 = res.list;
                this.totalPage1 = res.totalPage;
                this.scrollSetting1.loading = false;
            }, res => {
                this.scrollSetting1.loading = false;
                this.scrollSetting1.finished = true;
            })
            if (this.page1 > this.totalPage1) {
                this.scrollSetting1.finished = true;
            }
        },
        getHisList2() {
            this.page2 += 1;
            ajaxGet(apiUrl.spwOrderList, {
                page: this.page2,
                limit: this.limit
            }, res => {
                this.hisCardList2 = res.list;
                this.totalPage2 = res.totalPage;
                this.scrollSetting2.loading = false;
            }, res => {
                this.scrollSetting2.loading = false;
                this.scrollSetting2.finished = true;
            })
            if (this.page2 > this.totalPage2) {
                this.scrollSetting2.finished = true;
            }
        },
        toPay(obj) {
            //去支付
            this.$router.push(`/foodsOrderComfirm?type=1&id=${obj.id}`);
        },
        cancelOrder(obj) {
            let findOrder = (id, list) => {
                for (let i=0; i<list.length; i++) {
                    if (list[i].id == id) {
                        list[i].status = 9;
                    }
                }
            }

            findOrder(obj.id, this.hisCardList1)
            findOrder(obj.id, this.hisCardList2)
        },
        refundOrder(obj) {
            let findOrder = (id, list) => {
                for (let i=0; i<list.length; i++) {
                    if (list[i].id == id) {
                        list[i].status = 5;
                    }
                }
                
            }

            findOrder(obj.id, this.hisCardList1)
            findOrder(obj.id, this.hisCardList2)
        }
    }
}

</script>
<style lang='less' scoped>
.order_history {
    background-color: #f3f3f3;
    .scroll_item {
        padding: 0 .32rem .24rem;
        border-radius: .1rem;
    }
}
</style>