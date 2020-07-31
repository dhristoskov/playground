<template>
    <nav>
        <router-link to='/' tag='li'>Home</router-link>
        <router-link to='/' tag='li'>Something</router-link>
        <router-link to='/account' tag='li'>Account</router-link>
        <router-link to='/login' tag='li'>Login</router-link>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        display: flex;
        width: 30%;
        justify-content: space-between;
        li {
            list-style: none;
            text-transform: uppercase;
            font-size: 14px;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 420px) {
        nav {
            display: none;
        }
    }
</style>
