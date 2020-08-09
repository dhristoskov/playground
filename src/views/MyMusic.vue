<template>
  <div class="music-layout">
    <create />
    <music-nav />
  </div>
</template>

<script>
import MusicNav from '../components/MyMusic/MusicNav'
import CreateFolder from '../components/MyMusic/CreateFolder'

export default {
  components: {
    musicNav: MusicNav,
    create: CreateFolder
  }
}
</script>
