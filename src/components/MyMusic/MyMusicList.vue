<template>
   <div class="list-songs">
       <item v-for="song in myMusic"
       :song='song' :key="song.id"/>
   </div>
</template>

<script>
import SongItem from './SongItem'

export default {
  computed: {
    folders () {
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
</style>
