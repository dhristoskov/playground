<template>
    <nav>
        <CheckEmailPage :openModal='openModal' :closeModal='closeModalHandler'/>
        <router-link exact to='/' tag='li'><i class="fas fa-home"></i></router-link>
        <router-link to='/library' tag='li'><i class="fas fa-headphones"></i></router-link>
        <router-link to='/account' tag='li'><i class="fas fa-user-alt"></i></router-link>
        <li @click="openModalHandler"><i class="fas fa-sign-out-alt"></i></li>
    </nav>
</template>

<script>
import CheckEmailPage from '../../views/CheckEmailPage'

export default {
  components: {
    CheckEmailPage
  },
  data () {
    return {
      openModal: false
    }
  },
  methods: {
    openModalHandler () {
      this.openModal = true
    },
    closeModalHandler () {
      this.openModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
// ToDo side bar 
</style>