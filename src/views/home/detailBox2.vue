<!-- home/detailBox2 左图右文 -->
<template>
    <div>
        <div class="box" @click="clickFn(link)">
            <img :src="src" class="list_img">
            <div class="list_desc">
                <p class="title">{{title}}</p>
                <p class="remark">{{remark}}</p>
                <div class="mark">
                    <span class="green">政策法规</span>
                    <span class="fg">|</span>
                    <span class="time">2019/06/14</span>
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
    props: ['title', 'remark', 'src', 'link'],
    methods: {
        clickFn(url) {
            this.$emit('toThisNavEmit', url);
        }
    }
}

</script>
<style lang='less' scoped>
    .box {
        margin-bottom: .4rem;
        position: relative;
        padding: .2rem 0;
        margin: 0 .15rem;
        border-bottom: 1px solid #f2f2f2;
        cursor: pointer;
        .list_img {
            width: 1.4rem;
            height: 1.6rem;
            border-radius: 4px;
            margin-right: .16rem;
            vertical-align: top;
        }
        .list_desc {
            vertical-align:top;
            display: inline-block;
            margin: 0 auto;
            opacity: .8;
            text-align: left;
            word-break: break-all;
            .title {
                font-size: .3rem;
                color: #333;
                line-height: .42rem;
            }
            .remark {
                font-size: .22rem;
                line-height: .3rem;
                color: #999;
                
            }
            .mark {
                position: absolute;
                bottom: .2rem;
                font-size: .2rem;
                .green {
                    color: #F86938;
                }
                .fg {
                    margin: 0 .06rem;
                }
                .time {
                    opacity: .7;
                }
            }
        }
    }

    
</style>