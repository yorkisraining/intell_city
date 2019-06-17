<template>
  <div id="app">
    <el-header>
      <div class="title">{{title}}</div>
    </el-header>
    <router-view/>
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
    name: 'App',
    data() {
      return  {
        title: '中国-东盟新型智慧城市协同创新中心',
        bottomNavList: [
            {
              name: 'home',
              title: '协同',
              src: require('@/assets/button_xt_cur.png'),
              link: '/'
            },
            {
              name: 'project',
              title: '项目',
              src: require('@/assets/button_xm.png'),
              link: '/'
            },
            {
              name: 'active',
              title: '活动',
              src: require('@/assets/button_hd.png'),
              link: '/'
            },
        ],
      }
    },
    components: {mainNav},
    filters: {
      filterTitle(val) {
        return val.length > 8 ? val.slice(0, 8) + '...' : val;
      }
    },
    methods: {
        toThisNav(url) {
            console.log(url)
            this.$router.push(url);
        },
    },
}
</script>
<style scoped lang="less">
  .fix_bottom_nav {
      position: fixed;
      bottom: -1px;
      background-color: #fff;
      width: 100%;
      z-index: 19950606;
      background-attachment: fixed;
  }

  .el-header, .el-footer {
    background-color: #0d92eb;
    color: #fff;
    line-height: 60px;
    position: relative;
    .el-icon-arrow-left {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    .title {
      text-align: center;
      font-size: .38rem;
      font-weight: 500;
    }
  }

</style>
