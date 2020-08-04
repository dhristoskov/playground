<template>
   <div>
       <item v-for="song in songs" :song='song' :key="song.id"/>
   </div>
</template>

<script>
import LibraryItem from './LibraryItem'
import { musicData } from '../../shared-components/data/musicData'

export default {
  components: {
    item: LibraryItem
  },
  data () {
    return {
      songs: musicData
    }
  }
}
</script>
