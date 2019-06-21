<!-- serve/cusmade 定制化服务 -->
<template>
    <div class="cusmade_containt">
        <cusCard v-for="item in cardList" :key="item.id + Math.random()" :id="item.id" :title="item.name" :brief="item.catDesc" :src="item.code" @toDetail="toDetail(item.code, item.name)"></cusCard>
    </div>
</template>

<script>
import cusCard from './cusCard'

export default {
    data () {
        return {
        };
    },
    components: {cusCard},
    computed: {
        cardList() {
            return this.$store.state.serveModule.serveCardList;
        }
    },
    created() {
        if (this.cardList.length == 0) {
            //请求服务大类
            this.$store.dispatch('serveModule/getServeGoodsData');
        }
    },
    methods: {
        toDetail(code, name) {
            this.$router.push(`/serveClassify?goodtype=${code}&title=${name}`);
        }
    }
}

</script>
<style lang='less' scoped>
</style>