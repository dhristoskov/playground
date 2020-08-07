<template>
    <div class="lib-layout">
        <LibraryNav />
        <card v-if="singleSong !== null" :singleSong='singleSong' />
        <LibraryList :openSongPlayer='openSongPlayer' :songs='songs'/>
    </div>
</template>

<script>
import LibraryNav from '../components/Library/LibraryNav'
import LibraryList from '../components/Library/LibraryList'
import { musicData } from '../shared-components/data/musicData'
import SingleSongCard from '../components/Library/SingleSongCard'

export default {
  data () {
    return {
      songs: musicData,
      singleSong: null
    }
  },
  components: {
    LibraryNav,
    LibraryList,
    card: SingleSongCard
  },
  methods: {
    //  Get song ID from the list
    openSongPlayer (sid) {
      this.singleSong = this.songs.find(song => song.id === sid)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
