//Checking email if user already exist
<template>
    <div class="auth-container">
        <h5 class="auth-title">Email Validation</h5>
        <p class="subtitle">check, if you already have an account</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
          <EmailInput :value="user.email" @emailEntry='user.email = $event'
          :error='!$v.user.email.email' />
          <input type='submit' value="submit"/>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import EmailInput from './EmailInput'

export default {
  components: {
    EmailInput
  },
  mixins: [validationMixin],
  data () {
    return {
      user: {
        email: ''
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
