<!-- building/serveClassify 服务分类主 -->
<template>
    <div class="server_classify">
        <div class="address_box">
            <img src="@/assets/address.png">
            <div>地址：<span>{{address}}</span></div>
        </div>
        <div class="serve_list">
            <serveListCard v-for="item in serveList" :key="item.id" 
            :price="item.price" 
            :title="item.name" 
            :brief="item.brief"></serveListCard>
        </div>
    </div>
</template>

<script>
import serveListCard from './serveListCard'

export default {
    data () {
        return {
            address: '广西南宁市兴宁区民族大道10号',
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
            }]
        };
    },
    components: {serveListCard},
    methods: {}
}

</script>
<style lang='less' scoped>
.server_classify {
    .address_box {
        padding: .16rem .32rem;
        border-bottom: 1px solid #CBCBCB;
        font-size: .26rem;
        color: #999;
        img {
            width: .22rem;
            height: 100%;
        }
        span {
            color: #999;
        }
    }
    .serve_list {
        padding: .18rem .32rem;
    }
}
    
</style>