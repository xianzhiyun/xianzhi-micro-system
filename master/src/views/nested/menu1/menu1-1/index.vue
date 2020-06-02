<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-1" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
<script>
export default {
  name: 'Menu11',
    created() {

    },
    activated() {
    console.log(`%c activated`, 'font-size: 16px; font-weight: bold;color:green',)
  },
  deactivated() {
    console.log(`%c deactivated`, 'font-size: 16px; font-weight: bold;color:green',)
  }
}
</script>
