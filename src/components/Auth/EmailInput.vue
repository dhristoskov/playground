//  Simple E-mail input field
<template>
    <div class="input-wrapper">
        <p class="ident-icon"><i class="fas fa-at"></i></p>
        <input type='email' id="email" name='email' placeholder='E-mail'
        :value="value" @input="$emit('entry', $event.target.value)" required/>
        <p class="error" v-if="error">
        <span><i class="fas fa-exclamation-circle"></i></span>invalide email input!</p>
    </div>
</template>

<script>
export default {
  props: ['value', 'error']
}
</script>
