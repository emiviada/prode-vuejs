<template>
  <auth-wrapper :route="'login'" />
</template>

<script>
import AuthWrapper from '@/components/security/AuthWrapper'

export default {
  name: 'Login',
  components: { AuthWrapper }
}
</script>
