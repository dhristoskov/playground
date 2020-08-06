<template>
    <div class="lib-layout">
        <LibraryNav />
        <LibraryList :openSongPlayer='openSongPlayer'/>
    </div>
</template>

<script>
import LibraryNav from '../components/Library/LibraryNav'
import LibraryList from '../components/Library/LibraryList'

export default {
  components: {
    LibraryNav,
    LibraryList
  },
  methods: {
    openSongPlayer (sid) {
      console.log(sid)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
