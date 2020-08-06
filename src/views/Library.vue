<template>
    <div class="lib-layout">
        <LibraryNav />
        <LibraryList />
    </div>
</template>

<script>
import LibraryNav from '../components/Library/LibraryNav'
import LibraryList from '../components/Library/LibraryList'

export default {
  components: {
    LibraryNav,
    LibraryList
  }
}
</script>

<style lang="scss" scoped>
</style>
