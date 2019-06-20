<template>
  <div id="app">
    <globalHeader :title="title" :returnBtn="returnBtn" :ifShowHeader="ifShowHeader" class="head"></globalHeader>
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
        this.title = now.name;
        if (now.path == '/') {
          this.returnBtn = false;
        } else {
          this.returnBtn = true;
        }
        now.matched.some(res => {
          this.ifShowHeader = res.props.default.ifShowHeader;
        })
        
      }
    },
}
</script>
<style scoped lang="less">
#app {
  padding-top: 1.2rem;
  .head {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 199;
  }
}
  

</style>
