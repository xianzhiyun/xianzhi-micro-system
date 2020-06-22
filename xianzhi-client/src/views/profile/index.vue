<template>
  <div class="app-container">
    <h1>个人中心页面</h1>
    <div>接受主应用的消息: {{ token || '暂无' }}</div>
    <div>获取本地localstorage: {{ userInfo.username || '暂无' }}</div>
  </div>
</template>

<script>

import actions from '@/shared/actions'
export default {
  name: 'Profile',
  data() {
    return {
      token: null,
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  mounted() {
    actions.onGlobalStateChange(state => {
      const { token } = state
      this.token = token
    }, true)
  }
}
</script>
