<template>
    <auth-layout>
      <Login :paramsEmail='paramsEmail'/>
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
      paramsEmail: this.$route.params.email
    }
  }
}
</script>
