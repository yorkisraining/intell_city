<!-- building/serveClassify/serveDetail 服务详情 -->
<template>
    <div class="serve_detail_box">
        <div class="serve_list_card">
            <div class="serve_img">
                <img :src="src" alt="">
            </div>
            <div class="serve_detail">
                <div class="title">{{title}}</div>
                <div class="brief">{{brief}}</div>
                <div class="price_box">
                    <div class="price">￥<span>{{price}}</span></div>
                </div>
            </div>
        </div> 
        <div class="article_box">
            {{article}}
        </div>
    </div> 
</template>

<script>
export default {
    data () {
        return {
            id: 54124321,
            price: 188,
            title: '自主研发产权服务',
            brief: '入驻条件为，科技信息产业相关且入驻条件为',
        }
    },
}

</script>
<style lang='less' scoped>
.serve_detail_box {
    .serve_list_card {
        display: flex;
        align-items: top; 
        border-bottom: .16rem solid #F5F8FD;
        padding-top: .22rem;
        .serve_img {
            width: 1.8rem;
            height: 1.8rem;
            overflow: hidden;
            margin-right: .24rem;
            img {
                width: 100%;
            }
        }
        .serve_detail {
            width: calc(100% - 1.8rem - .24rem);
            .title {
                font-size: .34rem;
                line-height: .48rem;
                color: #333;
            }
            .brief {
                font-size: .26rem;
                color: #999;
                width: 100%;
                line-height: .38rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price_box {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-top: .24rem;
                .price {
                    font-size: .28rem;
                    color: #F14D2A;
                    span {
                        font-size: .48rem;
                    }
                }
            }
        }
    }
    .article_box {
        padding: .24rem .32rem;
        img {
            width: 100%;
        }
    }
}
</style>