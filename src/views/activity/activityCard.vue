<!-- activityCard  -->
<template>
    <div class="avtivity_card" @click="toDetail(id)"> 
        <div class="img_box">
            <img :src="src" />
        </div>
        <div class="msg">
            <div class="title">{{title}}</div>
            <div class="msg_bottom">
                <div class="detail_msg">
                    <div>时间：<span>{{time}}</span></div>
                    <div>地点：<span>{{address}}</span></div>
                </div>
                <div class="sign_up" @click.stop="signUp(id)">
                    <div><img class="sign_up_icon" src="@/assets/activ_icon.png" /></div>
                    <div>报名</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['id', 'title', 'src', 'time', 'address'],
    components: {},
    methods: {
        toDetail(id) {
            this.$router.push(`/activityDetail?id=${id}`)
        },
        signUp(id) {
            this.$router.push(`/activitySignUp?id=${id}`)
        }
    }
}

</script>
<style lang='less' scoped>
.avtivity_card {
    display: flex;
    padding: .24rem 0;
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
        .msg_bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .detail_msg {
                font-size: .22rem;
                color: #666;
                line-height: .3rem;
                border-right: 1px dotted #cbcbcb;
                width: calc(100% - .9rem);
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
            .sign_up {
                width: .9rem;
                text-align: center;
                color: #FFA122;
                font-size: .22rem;
                .sign_up_icon {
                    width: .22rem;
                }
            }
        }
    }

}

</style>