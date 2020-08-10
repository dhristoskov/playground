<template>
  <div class="song-wrapper">
    <div class="sond-item">
      <p class="song-name">{{ song.singer }}</p>
      <p class="song-singer"> - {{ song.name }}</p>
      <p class="duration">{{ song.duration }} s.</p>
    </div>
     <div class="buttons">
      <p><i class="fas fa-play-circle"></i></p>
      <p @click="removeSong(song.id)"><i class="fas fa-minus-circle"></i></p>
      <p><i class="fas fa-shopping-cart"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['song'],
  methods: {
    removeSong (id) {
      this.$store.commit('removeSong', id)
    }
  }
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
    width: 86%;
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
  .buttons {
    width: 13%;
    display: flex;
    justify-content: space-around;
    p {
      cursor: pointer;
      font-size: 13px;
      transition: all .4s ease-in-out;
      &:hover{
        color: #FDFF85;
      }
    }
  }
}
</style>
