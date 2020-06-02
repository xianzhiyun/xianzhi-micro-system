<template>
  <div style="padding:30px;">
    <div>hello</div>
    <el-alert :closable="false" title="menu 2" />
  </div>
</template>
<script>
export default {
  name: 'Menu2',
  activated() {
    console.log(`%c activated`, 'font-size: 16px; font-weight: bold;color:green',)
  },
  deactivated() {
    console.log(`%c deactivated`, 'font-size: 16px; font-weight: bold;color:green',)
  }
}
</script>
