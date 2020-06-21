<template>
  <div id="main-app">
    <!-- ? 挂载节点问题，container 内容不能出现routerView内-->
    <layout/>
  </div>
</template>

<script>
import Layout from '@/layout'
export default {
  name: 'App',
  components: {
    Layout
  },
  watch: {
    '$route': {
      handler(val) {
        console.log(`%c 当前路由名称`, 'font-size: 16px; font-weight: bold;color:green', val)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
