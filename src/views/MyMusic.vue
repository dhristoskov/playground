<template>
  <div class="music-layout">
    <create :createNewFolder='createNewFolder' />
    <music-nav :folders='folders' />
  </div>
</template>

<script>
import MusicNav from '../components/MyMusic/MusicNav'
import CreateFolder from '../components/MyMusic/CreateFolder'

export default {
  components: {
    musicNav: MusicNav,
    create: CreateFolder
  },
  data () {
    return {
      folders: []
    }
  },
  methods: {
    createNewFolder (name) {
      this.folders.push({ id: Date.now(), name: name })
    }
  }
}
</script>
