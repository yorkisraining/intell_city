<!-- activityDetail  -->
<template>
    <div class="avtivity_Detail_box">
        <headerWithPhone :title="'活动'" :linkMsg="'报名记录'" class="head" @clickLink="toHis"></headerWithPhone>
        <div class="avtivity_card"> 
            <div class="img_box">
                <img :src="src" />
            </div>
            <div class="msg">
                <div class="title">{{title}}</div>
                <div class="detail_msg">
                    <div>时间：<span>{{time}}</span></div>
                    <div>地点：<span>{{address}}</span></div>
                </div>
            </div>
        </div>
        <div class="article">{{article}}</div>
        <div class="sign_btn" @click="signup">报名</div>
    </div>
</template>

<script>
import headerWithPhone from '@/components/headerWithPhone'
import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            title: '招募明日最优秀企业家大型活动',
            address: "广西文化艺术中心 广西省南宁市良庆区龙堤路25号",
            time: "2019.7.23", 
            src: "",
            id: 0,
            article: ''
        };
    },
    components: {headerWithPhone},
    created() {
        let id = this.$route.query.id;
        ajaxPost(`${apiUrl.baseUrl}app/act/${id}`, {}, res => {
            this.title = res.actName;
            this.article = res.actContent;
            this.address = res.actPlace; 
            this.time = res.activeTime;
            this.id = res.id;
            this.src = res.imageList[0].url;
        })
    },
    methods: {
        toHis() {
            this.$router.push('/activityHistory')
        },
        signup() {
            this.$router.push(`/activitySignUp?id=${this.id}`)
        }
    }
}

</script>
<style lang='less' scoped>
.avtivity_Detail_box {
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 199;
    }
    .avtivity_card {
        padding: 0 .32rem;
        display: flex;
        padding: .24rem 0;
        border-bottom: 1px solid #cfcfcf;
        margin-bottom: .6rem;
        .img_box {
            width: 2.1rem;
            height: 2.5rem;
            border-radius: .1rem;
            margin-right: .24rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .title {
            font-size: .34rem;
            color: #333;
            line-height: .48rem;
            margin-top: .08rem;
            margin-bottom: .24rem;
        }
        .msg {
            width: calc(100% - 2.1rem - .24rem);
            .detail_msg {
                font-size: .22rem;
                color: #666;
                line-height: .3rem;
                padding-right: .4rem;
                div {
                    margin-bottom: .08rem;
                    span {
                        color: #999;
                    }
                    &:last-child {
                        margin: 0;
                    }
                }
            }
        }
    }
    .article {
        padding: 0 .32rem;
    }
    .sign_btn {
        width: 100%;
        height: .98rem;
        color: #fff;
        font-size: .34rem;
        line-height: .98rem;
        text-align: center;
        background-color: #42BD56;
        position: fixed;
        bottom: 0;
    }
}

</style>