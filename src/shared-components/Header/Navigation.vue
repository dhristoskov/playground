<template>
    <nav>
        <CheckEmailPage :openModal='openModal' :closeModal='closeModalHandler'/>
        <router-link exact to='/' tag='li'><i class="fas fa-home"></i></router-link>
        <!-- <router-link to='/library' tag='li'><i class="fas fa-headphones"></i></router-link> -->
        <li @click="openModalHandler"><i class="fas fa-headphones"></i></li>
        <router-link to='/login' tag='li'><i class="fas fa-user-alt"></i></router-link>
        <router-link to='/register' tag='li'><i class="fas fa-sign-out-alt"></i></router-link>
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
    nav {
        display: flex;
        width: 20%;
        justify-content: space-between;
        align-items: center;
        li {
            list-style: none;
            text-transform: uppercase;
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
        nav {
            display: none;
        }
    }
</style>
