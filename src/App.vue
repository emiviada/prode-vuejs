<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    layout () {
      const isAuth = false
      const layout = isAuth ? 'Layout' : 'AuthLayout'
      return () => import(`@/components/common/${layout}`)
    }
  }
}
</script>

<style lang="scss">
  // Bootstrap and its default variables
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  // Styles
  @import 'assets/styles/styles.scss';
</style>
