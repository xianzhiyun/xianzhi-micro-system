<template>
  <div id="main-app">
    <!-- ? 挂载节点问题，container 内容不能出现routerView内-->
    <!-- ! router-view 一级路由路由使用挂载节点，导致qiankun获取不到子节点，后期如果发现解决方法，Oliver_web@163.com -->
    <layout />
    <!--<router-view />-->
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
