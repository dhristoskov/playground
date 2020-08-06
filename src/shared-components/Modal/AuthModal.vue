//Pop-up auth modal for email checking
<template>
    <div>
      <Backdrop :closeModal='closeModal'/>
      <div class="auth-modal">
        <p @click='closeModal'><i class="far fa-times-circle"></i></p>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import Backdrop from '../Backdrop/Backdrop'
export default {
  props: ['closeModal'],
  components: {
    Backdrop
  }
}
</script>

<style lang="scss" scoped>
    .auth-modal {
        position: fixed;
        padding: 20px 25px;
        z-index: 40;
        background-color: #172727;
        width: 30%;
        border: none;
        border-radius: 30px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        p {
            position: fixed;
            top: 15px;
            right: 15px;
            color: #FDFF85;
            font-size: 20px;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 1024px) {
      .auth-modal {
        width: 35%;
      }
    }
    @media screen and (max-width: 450px) {
      .auth-modal {
        width: 85%;
      }
    }
</style>
