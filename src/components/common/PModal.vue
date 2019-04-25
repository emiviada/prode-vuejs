<template>
  <modal v-bind:name="modalName" :pivotY="pivotY" :width="width" :height="height">
    <component v-bind:is="contentComponent"></component>
  </modal>
</template>

<script>
export default {
  name: 'p-modal',
  props: {
    modalName: String,
    component: String
  },
  computed: {
    contentComponent () {
      return () => import(`@/components/common/${this.component}`)
    },
    pivotY () {
      return (window.innerWidth > 576) ? 0.5 : 0
    },
    width () {
      return (window.innerWidth > 576) ? 600 : '100%'
    },
    height () {
      return (window.innerWidth > 576) ? 300 : '100%'
    }
  }
}
</script>
