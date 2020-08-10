<template>
  <div class="music-layout">
    <create />
    <music-nav />
    <music-list />
  </div>
</template>

<script>
import MusicNav from '../components/MyMusic/MusicNav'
import CreateFolder from '../components/MyMusic/CreateFolder'
import MyMusicList from '../components/MyMusic/MyMusicList'

export default {
  components: {
    musicNav: MusicNav,
    create: CreateFolder,
    musicList: MyMusicList
  }
}
</script>
