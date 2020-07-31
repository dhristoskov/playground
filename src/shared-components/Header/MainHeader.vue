<template>
    <section class='header'>
        <router-link to='/' tag='p'>Logo</router-link>
        <Navigation />
        <Hamburger />
    </section>
</template>

<script>
import Navigation from './Navigation'
import Hamburger from './Hamburger'

export default {
  components: {
    Navigation,
    Hamburger
  }
}
</script>

<style lang="scss" scoped>
    .header {
        padding: 25px 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid black;
        p{
            cursor: pointer;
        }
    }
    @media screen and (max-width: 420px) {
        .header{
            justify-content: center;
        }
    }
</style>
