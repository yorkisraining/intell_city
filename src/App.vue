<template>
  <div id="app">
    <globalHeader :title="title"></globalHeader>
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
    .title {
      text-align: center;
      font-size: .38rem;
      font-weight: 500;
    }
  }

</style>
