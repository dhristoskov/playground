<template>
    <p><i class="fas fa-compact-disc"></i><span>{{ folder.name }}</span><span @click="removeFolder(folder.id)">
        <i class="fas fa-minus"></i></span></p>
</template>

<script>
export default {
  props: ['folder'],
  methods: {
    removeFolder (id) {
      this.$store.commit('removeFolder', id)
    }
  }
}
</script>

<style lang="scss" scoped>
    p {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 13px;
        transition: all .3s ease-in-out;
        span {
            margin-left: 5px;
            font-size: 11px;
        }
        &:hover,
        &.active{
            color: #FDFF85;
        }
    }
</style>
