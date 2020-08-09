<template>
    <div class="music-navbar">

    </div>
</template>

<script>
export default {
  props: ['songsEntryType']
}
</script>

<style lang="scss" scoped>
    .music-navbar {
        position: absolute;
        top: 15%;
        left: 3%;
        width: 130px;
        height: 100vh;
        padding: 20px 10px;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3);
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
    @media screen and (max-width: 460px) {
        .music-navbar {
            left: 1%;
        }
    }
</style>
