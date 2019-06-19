<template>
  <div id="app">
    <globalHeader :title="title" :returnBtn="returnBtn" :ifShowHeader="ifShowHeader" ></globalHeader>
    <router-view/>
  </div>
</template>

<script>
import globalHeader from '@/components/header'

export default {
    name: 'App',
    data() {
      return  {
        title: '中国-东盟新型智慧城市协同创新中心',
        returnBtn: false,
        ifShowHeader: true,
      }
    },
    components: {globalHeader},
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
    watch: {
      $route(now, old) {
        console.log(now)
        this.title = now.name;
        
        now.matched.some(res => {
          this.ifShowHeader = res.props.default.ifShowHeader;
          this.returnBtn = res.props.default.returnBtn;
        })
        
      }
    },
}
</script>
<style scoped lang="less">
  .el-header {
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
  }

</style>
