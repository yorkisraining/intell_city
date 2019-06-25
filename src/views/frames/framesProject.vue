<!-- framesCompany -->
<template>
    <div class="iframes">
        <iframe :src="reportUrl" width="100%" :height="height" frameborder="0" scrolling="no"></iframe>
        <div class="fix_bottom_nav">
            <el-row>
                <el-col :span="8" class="nav_item"  v-for="item in bottomNavList" :key="item.name">
                    <mainNav 
                    :title="item.title" 
                    :src="item.src" 
                    :mButton="'.1rem'"
                    :w="'.5rem'"
                    :h="'.5rem'"
                    :link="item.link"
                    @toThisNavEmit="toThisNav"></mainNav>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import mainNav from '@/components/mainNav'

export default {
    data () {
        return {
            reportUrl: 'http://111.59.18.58:8081/sys/news/mobile/index.jsp?moduleName=%E4%BC%81%E4%B8%9A%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5&filter=1&queryStr=%2Fsys%2Fnews%2Fsys_news_main%2FsysNewsMainIndex.do%3Fmethod%3DlistChildren%26categoryId%3D16a85f858601a0a042d753c403ea527c%26q.docStatus%3D30%26orderby%3DfdIsTop%253BfdTopTime%253BdocAlterTime%26ordertype%3Ddown',
            height: 0,
            bottomNavList: [
                {
                name: 'home',
                title: '协同',
                src: require('@/assets/button_xt.png'),
                link: '/'
                },
                {
                name: 'project',
                title: '项目',
                src: require('@/assets/button_xm_cur.png'),
                link: '/framesProject'
                },
                {
                name: 'active',
                title: '活动',
                src: require('@/assets/button_hd.png'),
                link: '/activity'
                },
            ],
        };
    },
    components: {mainNav},
    created() {
        this.height = document.documentElement.clientHeight - 115;
    },
    methods: {
        toThisNav(url) {
            this.$router.push(url);
        },
    }
}

</script>
<style lang='less' scoped>
    .fix_bottom_nav {
        position: fixed;
        bottom: -1px;
        background-color: #fff;
        width: 100%;
        z-index: 19950606;
        background-attachment: fixed;
    }
</style>