<template>
   <div>
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
