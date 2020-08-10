<template>
    <div>
        <form class="folder-form" @submit.prevent="onSubmitHandler">
            <input type="text" name='newFolder' v-model="newFolder" @blur="$v.newFolder.$touch()" placeholder='Add folder' required>
            <p class="error" v-if="!$v.newFolder.minLength">
            <span><i class="fas fa-exclamation-circle"></i></span>folder name must be at least 2 letters!</p>
            <input type="submit" value="+">
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      newFolder: ''
    }
  },
  methods: {
    onSubmitHandler (e) {
      this.$store.commit('add', this.newFolder)
      e.target.reset()
    }
  },
  validations: {
    newFolder: {
      required,
      minLength: minLength(2)
    }
  }
}
</script>

<style lang="scss" scoped>
$base-text-color: #FDFF85;
$base-border-color: #E9ECEB;

    .folder-form{
        position: absolute;
        top: 1%;
        left: 1%;
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        width: 100%;
        padding: 0 6px;
        .error {
            position: fixed;
            font-size: 12px;
            top: 16%;
            left: 19%;;
            span {
                margin-right: 10px;
            }
        }
        input[type=text]{
            width: 86%;
            padding: 10px 5px 5px 5px;
            border: none;
            outline: none;
            color: $base-border-color;
            border-bottom: 2px solid $base-text-color;
            background-color: transparent;
        }
        input[type=submit]{
            width: 13%;
            outline: none;
            font-size: 20px;
            font-weight:700;
            cursor: pointer;
            background-color: transparent;
            border: none;
            color: $base-text-color;
            transition: all .3s ease-in-out;
            &:hover {
                color: $base-border-color;
            }
        }
        input::placeholder {
            color: $base-border-color;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
        }
    }
</style>
