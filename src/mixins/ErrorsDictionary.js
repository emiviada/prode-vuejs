export const ErrorsDictionary = {
  data () {
    return {
      errorsDictionary: {
        custom: {
          email: {
            required: () => 'Debes ingresar tu email.',
            email: () => 'Debes ingresar un email válido.'
          },
          password: {
            required: () => 'La contraseña es requerida.',
            min: () => 'Al menos 6 caracteres.'// ,
            // max: () => 'Invalid password.',
            // regex: () => 'Invalid password.'
          },
          confirmPassword: {
            required: () => 'La confirmación de contraseña es requerida.',
            confirmed: () => 'Las contraseñas no concuerdan.'
          }
        }
      }
    }
  }
}
