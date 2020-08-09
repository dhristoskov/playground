<template>
    <div class="input-wrapper">
        <p class="ident-icon"><i class="fas fa-lock"></i></p>
        <input :type='unvisible' id='password' name='password' placeholder='Password'
        :value="value" @input="$emit('passwordentry', $event.target.value)" required/>
        <p class="visibility" @click="toggleVisibility">
            <span v-if="unvisible==='password'">show</span>
            <span v-else>hide</span>
        </p>
        <p class="error" v-if="error">
        <span><i class="fas fa-exclamation-circle"></i></span>password must be at least 6 letters!</p>
    </div>
</template>

<script>
export default {
  props: ['value', 'error'],
  data () {
    return {
      unvisible: 'password'
    }
  },
  methods: {
    toggleVisibility () {
      this.unvisible = this.unvisible === 'password' ? 'text' : 'password'
    }
  }
}
</script>
