<template>
  <div style="padding: 10px">
    <h1>欢迎小伙伴- 我是主应用</h1>
    <div>
      <div>
        name: {{ userInfo.username || '-' }}
      </div>
      <el-button style="margin-top: 10px" type="primary" size="small" @click="sendToChildren">发消息给子应用消息</el-button>
    </div>
  </div>
</template>

<script>
import actions from '@/shared/actions'
export default {
  name: 'Dashboard',
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log('主应用观察者：token 改变前的值为 ', prevState.token)
      console.log('主应用观察者：登录状态发生改变，改变后的 token 的值为 ', state.token)
    })
  },
  methods: {
    sendToChildren() {
      const token = new Date().getTime()
      window.localStorage.setItem('token', token)
      actions.setGlobalState({ token })
    }
  }
}
</script>
<style lang="scss" scoped></style>
