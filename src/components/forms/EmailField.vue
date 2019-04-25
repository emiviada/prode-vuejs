<template>
  <div>
    <input type="email" v-model="email" class="form-control form-control-sm" id="email" name="email" placeholder="Dirección de e-mail" v-validate="'required'" @blur="onBlur">
    <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
  </div>
</template>

<script>
export default {
  name: 'EmailField',
  inject: {
    $validator: '$validator'
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    onBlur () {
      this.$emit('onBlurEmail', this.email)
    }
  }
}
</script>
