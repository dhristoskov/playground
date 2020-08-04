<template>
    <auth-layout>
      <Login :parameEmail='parameEmail'/>
    </auth-layout>
</template>

<script>
import Login from '../components/Auth/Login'
import AuthLayout from '../shared-components/Layouts/AuthLayout'

export default {
  components: {
    Login,
    authLayout: AuthLayout
  },
  data () {
    return {
      email: this.$route.params.email
    }
  }
}
</script>
