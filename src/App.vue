<template>
    <div>
        <p>Hello Vue</p>
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
 * {
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
</style>
