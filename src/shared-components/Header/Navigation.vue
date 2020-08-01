<template>
    <nav>
        <router-link exact to='/' tag='li'>Home</router-link>
        <router-link to='/something' tag='li'>Something</router-link>
        <router-link to='/account' tag='li'>Account</router-link>
        <router-link to='/login' tag='li'>Login</router-link>
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
        width: 30%;
        justify-content: space-between;
        li {
            list-style: none;
            text-transform: uppercase;
            font-size: 13px;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover,
            &.active,
            &.exact-active{
                color: #10C1E5;
            }
        }
    }
    @media screen and (max-width: 420px) {
        nav {
            display: none;
        }
    }
</style>
