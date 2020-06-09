<template>
  <div id="main-app">
    <!-- ? 挂载节点问题，container 内容不能出现routerView内 -->
    <layout />
  </div>
</template>

<script>
import Layout from '@/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
