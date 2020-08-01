<template>
    <section class='header'>
        <router-link to='/' tag='div'><Logo /></router-link>
        <Navigation />
    </section>
</template>

<script>
import Navigation from './Navigation'
import Logo from './Logo'

export default {
  components: {
    Navigation,
    Logo
  }
}
</script>

<style lang="scss" scoped>
    .header {
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 420px) {
        .header {
            justify-content: center;
        }
    }
</style>
