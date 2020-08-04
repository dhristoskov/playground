<template>
    <modal v-if="openModal" :closeModal='closeModal'>
        <CheckEmail :checkUser='checkUser'/>
    </modal>
</template>

<script>
import AuthModal from '../shared-components/Modal/AuthModal'
import CheckEmail from '../components/Auth/CheckEmail'

export default {
  props: ['openModal', 'closeModal'],
  data () {
    return {
      result: null,
      email: '',
      emails: ['mike@mail.bg', 'user@user.com']
    }
  },
  components: {
    modal: AuthModal,
    CheckEmail
  },
  methods: {
    checkUser (email) {
      this.email = email
      this.result = this.emails.some(e => e === email)
      this.redirectTo(this.result)
      this.closeModal()
    },
    redirectTo () {
      if (this.result) {
        this.$router.push({ path: `/login/${this.email}` })
      } else {
        this.$router.push({ path: `/register/${this.email}` })
      }
    }
  }
}
</script>
