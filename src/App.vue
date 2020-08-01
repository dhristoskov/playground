<template>
    <div>
        <Header />
        <router-view/>
    </div>
</template>

<script>
import Header from './shared-components/Header/MainHeader'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

$base-color: #172727;
$base-text-color: #E9ECEB;

 * {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-family: 'Play', sans-serif;
    background-color: $base-color;
    color: $base-text-color;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
</style>
