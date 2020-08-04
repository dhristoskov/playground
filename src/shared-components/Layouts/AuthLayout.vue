<template>
    <div class="auth-main-section">
       <slot></slot>
    </div>
</template>

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
