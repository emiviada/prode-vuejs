<template>
  <form @submit.prevent="onSignIn" novalidate>
    <div class="form-group">
      <email-field v-on:onBlurEmail="onBlurEmail" />
    </div>
    <div class="form-group">
      <password-field v-on:onBlurPassword="onBlurPassword" />
      <span v-show="generalError" class="error">{{ generalError }}</span>
    </div>
    <button type="submit" :disabled="errors.any() || submitting" class="btn btn-sm btn-block btn-primary">Ingresar</button>
  </form>
</template>

<script>
import { ErrorsDictionary } from '@/mixins/ErrorsDictionary'
import EmailField from '@/components/forms/EmailField'
import PasswordField from '@/components/forms/PasswordField'

export default {
  name: 'LoginForm',
  components: { EmailField, PasswordField },
  mixins: [ ErrorsDictionary ],
  data () {
    return {
      email: '',
      password: '',
      submitting: false,
      generalError: ''
    }
  },
  methods: {
    onBlurEmail (email) {
      this.email = email
      this.generalError = ''
    },
    onBlurPassword (password) {
      this.password = password
      this.generalError = ''
    },
    onSignIn () {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          // let loader = this.$loading.show()
          this.submitting = true
          const { email, password } = this
          this.$store.dispatch('SIGN_IN', { email, password })
            .then(response => {
              if (response && response.status !== 200) {
                this.generalError = response.data.error
              } else {
                this.$router.push({ name: 'Dashboard' })
              }
            }).finally(() => {
              // loader.hide()
              this.submitting = false
            })
        }
      })
    }
  },
  mounted () {
    this.$validator.localize('es', this.errorsDictionary)
  }
}
</script>
