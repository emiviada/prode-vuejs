<template>
  <auth-wrapper :route="'register'" />
</template>

<script>
import AuthWrapper from '@/components/security/AuthWrapper'

export default {
  name: 'Register',
  components: { AuthWrapper }
}
</script>
