<template>
    <nav class="side-bar">
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
  .side-bar {
    position: fixed;
    top: 15%;
    left: 50%;
    display: none;
    flex-direction: column;
    height: 150px;
    justify-content: space-between;
    align-items: center;
     li {
        list-style: none;
        font-size: 18px;
        cursor: pointer;
        transition: all .3s ease-in-out;
          &:hover,
          &.active,
          &.exact-active{
            color: #FDFF85;
          }
        }
  }
  @media screen and (max-width: 460px) {
        .side-bar {
            display: flex;
        }
  }
</style>
