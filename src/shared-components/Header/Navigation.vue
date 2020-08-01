<template>
    <nav>
        <router-link exact to='/' tag='li'><i class="fas fa-home"></i></router-link>
        <router-link to='/something' tag='li'><i class="fas fa-headphones"></i></router-link>
        <router-link to='/account' tag='li'><i class="fas fa-user-alt"></i></router-link>
        <router-link to='/login' tag='li'><i class="fas fa-sign-out-alt"></i></router-link>
    </nav>
</template>

<script>
export default {
  //  ToDo
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
    @media screen and (max-width: 420px) {
        nav {
            display: none;
        }
    }
</style>
