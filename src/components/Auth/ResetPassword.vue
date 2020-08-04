<template>
    <div class="auth-container">
        <h5 class="auth-title">Reset password</h5>
        <p class="subtitle">we will send you reset link per e-mail</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
          <EmailInput :value="user.email" @emailEntry='user.email = $event'
          :error='!$v.user.email.email' />
          <input type='submit' value="submit"/>
        </form>
        <router-link class="back-login" to='/' tag='li'>Back to Login</router-link>
    </div>
</template>
//  <i class="far fa-arrow-alt-circle-left"></i> <-- back arrow

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import EmailInput from './EmailInput'

export default {
  props: ['checkUser'],
  components: {
    EmailInput
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