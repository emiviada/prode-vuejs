<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'layout',
  created () {
    console.log('Layout')
  }
}
</script>
