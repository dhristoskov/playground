<template>
  <div class="sond-item">
    <!-- Add photo of every song -->
    <p>{{ song.name }}</p>
    <p> - {{ song.singer }}</p>
    <p>{{ song.duration }} s.</p>
    <div class="buttons">
      <p><i class="fas fa-play-circle"></i></p>
      <!-- this is <i class="fas fa-stop-circle"></i> <-- stop button -->
      <p><i class="fas fa-plus-circle"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['song']
}
</script>

<style lang="scss" scoped>
  .sond-item {
    display: flex;
    .buttons {
      display: flex;
    }
  }
</style>
