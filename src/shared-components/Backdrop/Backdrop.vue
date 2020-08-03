//Backdrop for the Modal Pop-up
<template>
    <div class="backdrop"  @click='closeModal'>
    </div>
</template>

<script>
export default {
  props: ['closeModal']
}
</script>

<style lang="scss" scoped>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(253, 255, 133, 0.7);
        z-index: 30;
    }
</style>
