<template>
    <section class="auth-main-section">
        <Registration />
    </section>
</template>

<script>
// import CheckEmail from '../components/Auth/CheckEmail'
// import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'

export default {
  components: {
    Registration
  }
}
</script>

<style lang="scss" scoped>
  .auth-main-section {
    width: 25%;
    margin: 0 auto;
  }
  @media screen and (max-width: 1024px) {
    .auth-main-section {
      width: 30%;
    }
  }
  @media screen and (max-width: 450px) {
    .auth-main-section {
      width: 80%;
    }
  }
</style>
