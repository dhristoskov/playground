<template>
    <p><i class="fas fa-compact-disc"></i><span>{{ folder.name }}</span></p>
</template>

<script>
export default {
  props: ['folder']
}
</script>

<style lang="scss" scoped>
    p {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-size: 12px;
        transition: all .3s ease-in-out;
        span {
            margin-left: 5px;
        }
        &:hover,
        &.active{
            color: #FDFF85;
        }
    }
</style>
