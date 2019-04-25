<template>
  <div class="clearfix">
    <button type="button" class="close" aria-label="Close" @click="$modal.hide(modalToClose)">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'close-modal',
  props: {
    modalToClose: String
  }
}
</script>
