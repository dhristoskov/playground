<template>
    <section class='header'>
        <router-link to='/' tag='div'><Logo /></router-link>
        <Navigation />
        <Hamburger />
    </section>
</template>

<script>
import Navigation from './Navigation'
import Hamburger from './Hamburger'
import Logo from './Logo'

export default {
  components: {
    Navigation,
    Hamburger,
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
</style>
