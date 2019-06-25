<!-- activityDetail  -->
<template>
    <div class="avtivity_Detail_box"  :style="{minHeight: minH + 'px'}">
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
        <div class="article" v-html="article"></div>
        <div class="sign_btn" @click="signup" v-if="allowSign != 0">报名</div>
    </div>
</template>

<script>
import headerWithPhone from '@/components/headerWithPhone'
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            minH: 0,
            title: '',
            address: "",
            time: "", 
            src: "",
            id: 0,
            article: '',
            allowSign: 0, //0不允许报名，1允许
        };
    },
    components: {headerWithPhone},
    created() {
        let id = this.$route.query.id;
        ajaxGet(`${apiUrl.baseURL}app/act/${id}`, {}, res => {
            this.title = res.actName;
            this.article = res.actContent;
            this.address = res.actPlace; 
            this.time = res.activeTime;
            this.id = res.id;
            this.src = res.imageList != null ? res.imageList[0].url : '';
            this.allowSign = res.allowSign;
        })
    },
    mounted() {
        this.minH = document.documentElement.clientHeight - 60;
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
    position: relative;
    .head {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 199;
    }
    .avtivity_card {
        display: flex;
        padding: .24rem 0;
        margin: 0 .32rem .6rem;
        border-bottom: 1px solid #cfcfcf;
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
        position: absolute;
        bottom: 0;
    }
}

</style>