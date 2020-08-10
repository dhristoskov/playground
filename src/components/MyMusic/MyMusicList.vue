<template>
   <div class="list-songs">
       <span v-if="myMusic.length > 0">
            <item v-for="song in myMusic"
            :song='song' :key="song.id"/>
       </span>
       <span v-else>
           <p class="empty-list">Your music Library is still empty !!!</p>
       </span>
   </div>
</template>

<script>
import SongItem from './SongItem'

export default {
  computed: {
    myMusic () {
      return this.$store.state.myMusic
    }
  },
  components: {
    item: SongItem
  }
}
</script>

<style lang="scss" scoped>
  .list-songs {
    width: 40%;
    margin: 0 auto;
  }
  .empty-list {
    margin-top: 50px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #FDFF85;
  }
</style>
