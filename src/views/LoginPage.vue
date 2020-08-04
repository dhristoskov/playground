<template>
     <auth-layout>
        <Login />
    </auth-layout>
</template>

<script>
import Login from '../components/Auth/Login'
import AuthLayout from '../shared-components/Layouts/AuthLayout'

export default {
  components: {
    Login,
    authLayout: AuthLayout
  }
}
</script>
