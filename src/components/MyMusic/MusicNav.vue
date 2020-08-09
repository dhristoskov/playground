<template>
    <div class="music-navbar">
        <p><i class="fas fa-compact-disc"></i><span>my music</span></p>
        <folder v-for="folder in folders" :folder='folder' :key="folder.id" />
    </div>
</template>

<script>
import FolderItem from './FolderItem'

export default {
  props: ['folders'],
  components: {
    folder: FolderItem
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .music-navbar {
        position: absolute;
        top: 22%;
        left: 3%;
        width: 130px;
        height: 100vh;
        padding: 20px 10px;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,.3);
        p {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 15px;
            text-transform: uppercase;
            font-size: 13px;
            transition: all .3s ease-in-out;
            span {
                margin-left: 5px;
                font-size: 11px;
            }
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
