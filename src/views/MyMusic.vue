<template>
  <div class="music-layout">
    <music-nav />
    <music-list />
  </div>
</template>

<script>
import MusicNav from '../components/MyMusic/MusicNav'
import MyMusicList from '../components/MyMusic/MyMusicList'

export default {
  components: {
    musicNav: MusicNav,
    musicList: MyMusicList
  }
}
</script>
