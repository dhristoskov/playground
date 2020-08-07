<template>
    <div class="archiv-nav">
        <p>Whats new?</p>
        <p>Trending</p>
        <p>Most Listened</p>
        <p>Our Choice</p>
        <p>Charts</p>
        <p>by Styles</p>
        <p>by Country</p>
        <p>by Artist</p>
        <p>Old but gold</p>
    </div>
</template>

<style lang="scss" scoped>
    .archiv-nav {
        position: absolute;
        right: 1%;
        width: 130px;
        height: 100vh;
        padding: 20px 10px;
        box-shadow: -2px 2px 2px 2px rgba(0,0,0,.3);
        p {
            cursor: pointer;
            margin-bottom: 15px;
            font-size: 14px;
             transition: all .3s ease-in-out;
            &:hover,
            &.active{
                color: #FDFF85;
            }
        }
    }
</style>
