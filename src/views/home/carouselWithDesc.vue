<!-- home/carouselWithDesc 左图右字无时间有背景 -->
<template>
    <div class="with_desc_carousel" :style="{backgroundColor: bgColor % 2 == 0 ? '#F0F5FF' : '#FFF1F0'}" @click="clickFn(link)">
        <img :src="src" class="list_img">
        <div class="list_desc">
            <p class="title">{{title}}</p>
            <p class="remark">{{desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['src', 'title', 'desc', 'bgColor', 'link'],
    methods: {
        clickFn(url) {
            this.$emit('toThisNavEmit', url);
        }
    }
}

</script>
<style lang='less' scoped>
    .with_desc_carousel {
        width: 6.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .24rem;
        cursor: pointer;
        .list_img {
            border-radius: 4px;
            width: 2.68rem;
            height: 1.92rem;
            margin-right: .24rem;
        }
        .list_desc {
            opacity: .8;
            text-align: left;
            word-break: break-all;
            .title {
                font-size: .32rem;
                font-weight: 500;
                color: #333;
                margin-bottom: .04rem;
            }
            .remark {
                font-size: .24rem;
                line-height: 1.5;
                color: #666;
            }
        }
    }
</style>