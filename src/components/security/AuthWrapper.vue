<template>
  <div class="login">
    <h1>
      <router-link :to="{ name: 'Home'}">
        <img src="@/assets/images/prode-logo.png">
        Prodedeamigos.com
      </router-link>
    </h1>

    <p class="pt-1 pb-1">
      {{ intro }}
    </p>

    <component v-bind:is="formComponent"></component>

    <hr/>
    <a class="btn btn-block btn-social btn-facebook mt-1 mb-2 text-center">
        <span><font-awesome-icon :icon="['fab', 'facebook-f']"></font-awesome-icon></span>
        Ingresa con Facebook
    </a>

    <small v-if="route === 'register'" class="form-text text-muted text-center">Al crear tu cuenta aceptas los</small>
    <router-link v-else :to="{ name: 'Register'}" class="d-block text-center terms">Registrarse</router-link>
    <a class="d-block text-center terms" href="#" @click="showModal">Términos y condiciones</a>

    <div v-if="route === 'register'">
      <hr/>
      <router-link :to="{ name: 'Login'}" class="d-block text-center terms">¿Ya tienes una cuenta?</router-link>
    </div>

    <!-- Modal -->
    <p-modal :modalName="'terms'" :component="'Terms'"></p-modal>

  </div>
</template>

<script>
import PModal from '@/components/common/PModal'

const introRegister = 'Bienvenidos a Prode de Amigos! Por favor, ingresa con tu dirección de e-mail, contraseña y confirma tu contraseña para crear una cuenta, o ingresa con tu cuenta de Facebook y comienza a jugar!'
const introLogin = 'Bienvenidos a Prode de Amigos! Por favor, ingresa con tu dirección de e-mail y contraseña, o con tu cuenta de Facebook y comienza a jugar!'

export default {
  name: 'AuthWrapper',
  components: { PModal },
  props: {
    route: String,
    default: 'login'
  },
  data () {
    return {
      submitting: false
    }
  },
  computed: {
    intro () {
      return this.route === 'register' ? introRegister : introLogin
    },
    formComponent () {
      let form = this.route === 'register' ? 'RegisterForm' : 'LoginForm'
      return () => import(`@/components/forms/${form}`)
    }
  },
  methods: {
    showModal () {
      this.$modal.show('terms')
    }
  }
}
</script>
