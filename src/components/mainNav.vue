<!-- home/mainNav -->
<template>
    <div class="box" :style="{ marginBottom: mButton }" @click="clickFn(link)">
        <div>
            <img :src="src" class="nav_img" :style="{width: w, height: h}">
        </div>
        <div class="nav_title">{{title}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    props: ['src', 'title', 'mButton', 'w', 'h', 'link'],
    components: {},
    methods: {
        clickFn(url) {
            this.$emit('toThisNavEmit', url);
        }
    }
}

</script>
<style lang='less' scoped>
    .box {
        text-align: center;
        padding-top: .1rem;
        cursor: pointer;
        .nav_img {
            margin-bottom: .04rem;
        }
        .nav_title {
            font-size: .2rem;
            color: #333;
        }
    }

    

</style>