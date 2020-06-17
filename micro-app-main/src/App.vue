<template>
  <div id="main-app">
    <!-- ? 挂载节点问题，container 内容不能出现routerView内-->
    <!-- ! router-view 一级路由路由使用挂载节点，导致qiankun获取不到子节点，后期如果发现解决方法，Oliver_web@163.com -->
    <!-- $route 里面寻找唯一标识 -->
    <router-view v-if="$route.matched.length" />
    <layout v-else />
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
