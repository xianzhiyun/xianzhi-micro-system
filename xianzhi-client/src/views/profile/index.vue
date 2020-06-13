<template>
  <div class="app-container">
    <h1>个人中心页面</h1>
    <div>token: {{ token || '暂无' }}</div>
  </div>
</template>

<script>

import actions from '@/shared/actions'
export default {
  name: 'Profile',
  data() {
    return {
      token: null
    }
  },
  mounted() {
    actions.onGlobalStateChange(state => {
      const { token } = state
      this.token = token
      console.log(`%c 子应用获取到了`, 'font-size: 16px; font-weight: bold;color:green', token)
    }, true)
  }
}
</script>
