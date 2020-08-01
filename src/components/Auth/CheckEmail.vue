//Checking email if user already exist
<template>
    <div class="auth-container">
        <h5 class="auth-title">Login</h5>
        <p class="subtitle">enter your credentials</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
            <input type='email' id="email" name='email' placeholder='E-mail'
            v-model="user.email" required/>
            <input type='submit' value="submit"/>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
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
