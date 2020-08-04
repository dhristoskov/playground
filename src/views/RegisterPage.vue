<template>
    <auth-layout>
        <Registration />
    </auth-layout>
</template>

<script>
import Registration from '../components/Auth/Registration'
import AuthLayout from '../shared-components/Layouts/AuthLayout'

export default {
  components: {
    Registration,
    authLayout: AuthLayout
  }
}
</script>
