<template>
    <div class="lib-layout">
        <SearchBar />
        <LibraryNav :songsEntryType='songsEntryType'/>
        <card v-if="singleSong !== null" :singleSong='singleSong' />
        <LibraryList :openSongPlayer='openSongPlayer' :songs='songs'/>
    </div>
</template>

<script>
import SingleSongCard from '../components/Library/SingleSongCard'
import SearchBar from '../components/Library/SearchBar'
import LibraryNav from '../components/Library/LibraryNav'
import LibraryList from '../components/Library/LibraryList'
import { musicData } from '../shared-components/data/musicData'

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
    SearchBar,
    card: SingleSongCard
  },
  methods: {
    //  Get song ID from the list
    openSongPlayer (sid) {
      this.singleSong = this.songs.find(song => song.id === sid)
    },
    songsEntryType (type) {
      //  To be added later
      const songsArray = this.songs.filter(song => song.label === type)
      console.log(songsArray)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
