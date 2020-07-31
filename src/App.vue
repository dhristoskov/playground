<template>
    <div>
        <home />
    </div>
</template>

<script>
import Home from './views/Home'

export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

 * {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-family: 'Play', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
</style>
