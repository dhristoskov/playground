<template>
    <modal v-if="openModal" :closeModal='closeModal'>
        <CheckEmail />
    </modal>
</template>

<script>
import AuthModal from '../shared-components/Modal/AuthModal'
import CheckEmail from '../components/Auth/CheckEmail'

export default {
  props: ['openModal', 'closeModal'],
  components: {
    modal: AuthModal,
    CheckEmail
  }
}
</script>
