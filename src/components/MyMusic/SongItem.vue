<template>
  <div class="song-wrapper">
    <div class="sond-item">
      <p class="song-name">{{ song.singer }}</p>
      <p class="song-singer"> - {{ song.name }}</p>
      <p class="duration">{{ song.duration }} s.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['song']
}
</script>

<style lang="scss" scoped>
.song-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 2px solid #E9ECEB;
  padding: 5px 2px;
  .sond-item {
    display: flex;
    width: 89%;
    align-items: baseline;
    cursor: pointer;
    p {
      font-size: 13px;
    }
    .song-name {
      margin-right: 5px;
      color: #FDFF85;
      font-weight: 700;
    }
    .duration {
      margin-left: 10px;
      font-size: 10px;
      color: #FDFF85;
    }
  }
}
</style>
