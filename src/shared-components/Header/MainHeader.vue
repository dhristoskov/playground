<template>
    <section class='header'>
        <router-link to='/' tag='p'>Logo</router-link>
        <nav>
            <router-link to='/' tag='li'>Home</router-link>
            <router-link to='/' tag='li'>Something</router-link>
            <router-link to='/account' tag='li'>Account</router-link>
            <router-link to='/login' tag='li'>Login</router-link>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
    .header {
        padding: 25px 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            cursor: pointer;
        }
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
    }
</style>
