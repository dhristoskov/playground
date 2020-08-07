<template>
   <div class="list-songs">
       <item v-for="song in songs"
       :song='song' :key="song.id"
       :openSongPlayer='openSongPlayer'/>
   </div>
</template>

<script>
import LibraryItem from './LibraryItem'

export default {
  props: ['openSongPlayer', 'songs'],
  components: {
    item: LibraryItem
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-songs {
    width: 40%;
  }
</style>
