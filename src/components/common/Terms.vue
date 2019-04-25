<template>
  <div>
    <close-modal :modalToClose="'terms'" />
    Hello, world!
  </div>
</template>

<script>
import CloseModal from '@/components/common/CloseModal'

export default {
  name: 'terms',
  components: { CloseModal }
}
</script>
