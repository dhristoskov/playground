<template>
    <auth-layout>
      <Registration :paramsEmail='paramsEmail' />
    </auth-layout>
</template>

<script>
import Registration from '../components/Auth/Registration'
import AuthLayout from '../shared-components/Layouts/AuthLayout'

export default {
  components: {
    Registration,
    authLayout: AuthLayout
  },
  data () {
    return {
      paramsEmail: this.$route.params.email
    }
  }
}
</script>
