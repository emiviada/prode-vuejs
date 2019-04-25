<template>
  <div>
    <input type="password" v-model="password" class="form-control form-control-sm" id="password" name="password" placeholder="Contraseña" v-validate="'required|min:6'" @blur="onBlur" autocomplete="off" />
    <span v-show="errors.has('password')" class="error">{{ errors.first('password') }}</span>
    <!-- Password confirmation -->
    <div v-if="confirm" class="mt-3">
      <input type="password" v-model="password_confirmation" class="form-control form-control-sm" id="confirmPassword" name="confirmPassword" v-validate="{ required: true, confirmed: password }" placeholder="Confirmar Contraseña" />
      <span v-show="errors.has('confirmPassword')" class="error">{{ errors.first('confirmPassword') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  inject: {
    $validator: '$validator'
  },
  props: {
    confirm: { type: Boolean, default: false }
  },
  data () {
    return {
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    onBlur () {
      this.$emit('onBlurPassword', this.password)
    }
  }
}
</script>
