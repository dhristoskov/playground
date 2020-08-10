<template>
    <div>
        <form class="folder-form" @submit.prevent="onSubmitHandler">
            <input type="text" name='newFolder' v-model="newFolder" @blur="$v.newFolder.$touch()" placeholder='Create folder' required>
            <p class="error" v-if="!$v.newFolder.minLength">
            <span><i class="fas fa-exclamation-circle"></i></span>folder name must be at least 2 letters!</p>
            <input type="submit" value="create">
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
      //  this.$store.state.folders.push({ id: Date.now(), name: this.newFolder })
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
        top: 12%;
        left: 3%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 15%;
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
            width: 64%;
            padding: 20px 15px 5px 5px;
            border: none;
            outline: none;
            color: $base-border-color;
            border-bottom: 2px solid $base-text-color;
            background-color: transparent;
        }
        input[type=submit]{
            width: 35%;
            padding: 5px;
            outline: none;
            text-transform: uppercase;
            font-size: 11px;
            cursor: pointer;
            background-color: transparent;
            color: $base-text-color;
            border: 1px solid $base-text-color;
            letter-spacing: 1px;
            border-radius: 30px;
            transition: all .3s ease-in-out;
            &:hover {
                background-color: $base-text-color;
                color: #172727;
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
