<template>
    <div class="auth-container">
        <h5 class="auth-title">Login</h5>
        <p class="subtitle">enter your credentials</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
            <input type='email' id="email" name='email' placeholder='E-mail'
            v-model="user.email" required/>
            <input type='password' id="password" name='password' placeholder='Password'
            v-model="user.password" required/>
            <input type='submit' value="submit"/>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      user: {
        email: '',
        password: ''
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
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  }
}
</script>
