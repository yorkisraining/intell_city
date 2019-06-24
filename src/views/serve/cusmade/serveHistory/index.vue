<!-- serve/building/serveHistory 服务记录 -->
<template>
    <div class="serve_his_box" :style="{minHeight: minH + 'px'}">
        <div class="tabs_box">
            <van-tabs  color="#FFA036" line-width=".4rem" title-active-color="#333" class="serve_tab_line">
                <van-tab title="未支付" class="scroll_item">
                    <van-list v-model="scrollSetting1.loading"
                        :finished="scrollSetting1.finished"
                        finished-text="没有更多了"
                        @load="getHisList1"
                    >
                        <hisCard v-for="item in hisCardList1" :key="item.id" v-if="item.status == 0" 
                        :status="item.status" 
                        :orderList="item.detailList" 
                        :orderId="item.id" 
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
import VueBetterScroll from 'vue2-better-scroll'
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            minH: 0,
            hisCardList1: [
                {
                    id: 1323441243,
                    status: 0,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441242,
                    status: 1,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441241,
                    status: 2,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441245,
                    status: 3,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441245,
                    status: 4,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                }
            ],
            hisCardList2: [
                {
                    id: 1323441243,
                    status: 0,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441242,
                    status: 1,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441241,
                    status: 2,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 1323441245,
                    status: 3,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                },{
                    id: 13234441245,
                    status: 4,
                    orderName: '商标注册服务',
                    orderTime: '2019-07-13 08:30'
                }
            ],
            page1: 0, //未支付
            page2: 1, //历史订单
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
    computed: {},
    mounted() {
      this.minH = document.documentElement.clientHeight - 60;
    },
    methods: {
        getHisList1(page) {
            this.page1 += 1;
            ajaxPost(apiUrl.serveList, {
                page: this.page1,
                limit: this.limit,
                status: '0'
            }, res => {
                this.totalPage1 = res.totalPage;
                this.hisCardList1 = res.list;
                this.scrollSetting1.loading = false;
            }, res => {
                this.scrollSetting1.loading = false;
                this.scrollSetting1.finished = true;
            })
            if (this.page1 > this.totalPage) {
                this.scrollSetting1.finished = true;
            }
        },
        getHisList2(page) {
            this.page2 += 1;
            ajaxPost(apiUrl.serveList, {
                page: this.page2,
                limit: this.limit
            }, res => {
                this.totalPage2 = res.totalPage;
                this.hisCardList2 = res.list;
                this.scrollSetting2.loading = false;
            }, res => {
                this.scrollSetting2.loading = false;
                this.scrollSetting2.finished = true;
            })
            if (this.page2 > this.totalPage) {
                this.scrollSetting2.finished = true;
            }
        },
        cancelOrder(obj) {
            let findOrder = (id, list) => {
                for (let i=0; i<list.length; i++) {
                    if (list[i].id == id) {
                        list[i].status = 4;
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
        },
        toPay(id) {
            //去支付
            this.$router.push(`/confirmOrder?id=${id}&type=1`)
        }
    }
}

</script>
<style lang='less' scoped>
    .serve_his_box {
        background-color: #f3f3f3;
        .serve_tab_line {
            .van-tabs__wrap {
                width: 50%;
            }
        }
    }
</style>