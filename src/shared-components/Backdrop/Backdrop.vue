<template>
    <div class="backdrop"  @click='hideModal'>
    </div>
</template>

<script>
export default {
     props: ['hideModal']
}
</script>

<style lang="scss" scoped>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(153, 154, 155, 0.85);
        z-index: 30;
    }
</style>