<template>
    <div class="auth-container">
        <h5 class="auth-title">Login</h5>
        <p class="subtitle">enter your credentials</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
          <EmailInput :value="user.email" @entry='user.email = $event'
          :error='!$v.user.email.email' />
          <PasswordInput :value="user.password" @passwordentry='user.password = $event'
          :error='!$v.user.password.minLength'/>
          <input type='submit' :disabled='$v.$invalid' value="submit"/>
        </form>
        <p class='psw-question' @click='onPasswordReset'>Forgotten password?</p>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'

export default {
  props: ['paramsEmail'],
  components: {
    PasswordInput,
    EmailInput
  },
  mixins: [validationMixin],
  data () {
    return {
      user: {
        email: '' || this.paramsEmail,
        password: ''
      }
    }
  },
  methods: {
    onSubmitHandler (e) {
      console.log(this.user)
      e.target.reset()
      this.$router.push({ name: 'MyMusic' })
    },
    onPasswordReset () {
      this.$router.push({ path: `/reset-password/${this.paramsEmail}` })
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
}
</script>
