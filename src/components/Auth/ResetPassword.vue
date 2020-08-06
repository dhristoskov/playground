<template>
  <auth-layout>
      <div class="auth-container">
          <h5 class="auth-title">Reset password</h5>
          <p class="subtitle">we will send you reset link per e-mail</p>
          <form class="auth-form" @submit.prevent="onSubmitHandler">
            <EmailInput :value="user.email" @emailEntry='user.email = $event'
            :error='!$v.user.email.email' />
            <input type='submit' value="submit"/>
          </form>
          <router-link class="back-login" to='/login' tag='div'>
          <span><i class="far fa-arrow-alt-circle-left"></i></span>Back to Login</router-link>
      </div>
  </auth-layout>
</template>
//  <i class="far fa-arrow-alt-circle-left"></i> -- back arrow

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import AuthLayout from '../../shared-components/Layouts/AuthLayout'
import EmailInput from './EmailInput'

export default {
  props: ['checkUser'],
  components: {
    EmailInput,
    authLayout: AuthLayout
  },
  mixins: [validationMixin],
  data () {
    return {
      paramsEmail: this.$route.params.email,
      user: {
        email: '' || this.paramsEmail
      }
    }
  },
  methods: {
    onSubmitHandler (e) {
      console.log(this.user)
      e.target.reset()
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      }
    }
  }
}
</script>
