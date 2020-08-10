<template>
  <div class="song-wrapper">
    <div class="sond-item" @click="openSongPlayer(song.id)">
      <!-- Add photo of every song -->
      <p class="song-name">{{ song.singer }}</p>
      <p class="song-singer"> - {{ song.name }}</p>
      <p class="duration">{{ song.duration }} s.</p>
    </div>
    <div class="buttons">
      <p><i class="fas fa-play-circle"></i></p>
      <!-- this is <i class="fas fa-stop-circle"></i> <-- stop button -->
      <p @click="addToMyLibrary"><i class="fas fa-plus-circle"></i></p>
    </div>
    <Notification v-if="notification">
        <p>Song <span>{{ song.name }}</span> was added to your library</p>
    </Notification>
  </div>
</template>

<script>
import Notification from '../../shared-components/Notification/Notification'

export default {
  data () {
    return {
      notification: false
    }
  },
  components: {
    Notification
  },
  props: ['song', 'openSongPlayer'],
  methods: {
    addToMyLibrary () {
      //  Add logic to add song to persons library
      if (!this.$store.state.myMusic.includes(this.song)) {
        this.notification = true
        this.$store.commit('addSong', this.song)
        //  Remove Notification window
        setTimeout(() => {
          this.notification = false
        }, 3000)
      }
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
  .buttons {
    width: 10%;
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
