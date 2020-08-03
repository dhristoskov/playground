<template>
    <div class="auth-container">
        <h5 class="auth-title">Registration</h5>
        <p class="subtitle">create an account</p>
        <form class="auth-form" @submit.prevent="onSubmitHandler">
          <div class="input-wrapper">
            <p class="ident-icon"><i class="fas fa-user"></i></p>
            <input type='text' id="name" name='name' placeholder='Name'
            v-model="user.name" @blur="$v.user.name.$touch()" required/>
            <p class="error" v-if="!$v.user.name.minLength">
            <span><i class="fas fa-exclamation-circle"></i></span> name must be at least 2 letters!</p>
          </div>
          <EmailInput :value="user.email" @emailEntry='user.email = $event'
          :error='!$v.user.email.email' />
          <PasswordInput :value="user.password" @passwordEntry='user.password = $event'
          :error='!$v.user.password.minLength'/>
          <div class="input-wrapper">
            <p class="ident-icon"><i class="fas fa-lock"></i></p>
            <input type='password' id="password2" name='password2' placeholder='Confirm Password'
            v-model.trim="user.password2" @blur="$v.user.password2.$touch()" required/>
            <p class="error" v-if="!$v.user.password2.samePassword">
            <span><i class="fas fa-exclamation-circle"></i></span>password and confirmed password must match!</p>
          </div>
          <input type='submit' value="submit"/>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'

export default {
  components: {
    PasswordInput,
    EmailInput
  },
  mixins: [validationMixin],
  data () {
    return {
      unvisible: 'password',
      user: {
        name: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    onSubmitHandler (e) {
      console.log(this.user)
      e.target.reset()
    },
    toggleVisibility () {
      this.unvisible = this.unvisible === 'password' ? 'text' : 'password'
    }
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      password2: {
        required,
        samePassword: sameAs('password')
      }
    }
  }
}
</script>

<style lang="scss">
$base-text-color: #FDFF85;
$base-border-color: #E9ECEB;

    .auth-container {
        width: 25%;
        margin: 0 auto;
        .auth-title {
            text-align: center;
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 700;
            color: $base-text-color;
        }
        .subtitle {
            text-align: center;
            font-size: 14px;
            margin: 5px 0 15px 0;
        }
        .auth-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            .input-wrapper{
              position: relative;
              min-height: 60px;
              .error {
                  position: absolute;
                  font-size: 12px;
                  left: 0;
                  span {
                    margin-right: 10px;
                  }
              }
              .visibility {
                position: absolute;
                right: 2px;
                bottom: 25px;
                font-size: 12px;
                color: $base-text-color;
                cursor: pointer;
              }
              .ident-icon{
                position: absolute;
                left: 2px;
                bottom: 25px;
                font-size: 12px;
                color: $base-text-color;
              }
              input[type=text],
              input[type=password],
              input[type=email]{
                  width: 100%;
                  padding: 20px 15px 5px 20px;
                  margin-bottom: 10px;
                  border: none;
                  outline: none;
                  color: $base-border-color;
                  border-bottom: 2px solid $base-text-color;
                  background-color: transparent;
              }
              input::placeholder {
                  color: $base-border-color;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1px;
              }
            }
            input[type=submit]{
                align-self: center;
                width: 50%;
                margin-top: 20px;
                padding: 10px;
                outline: none;
                text-transform: uppercase;
                cursor: pointer;
                background-color: transparent;
                color: $base-text-color;
                border: 1px solid $base-text-color;
                letter-spacing: 3px;
                font-weight: 700;
                border-radius: 30px;
                transition: all .3s ease-in-out;
                &:hover {
                    background-color: $base-text-color;
                    color: #172727;
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .auth-container {
            width: 30%;
        }
    }
    @media screen and (max-width: 450px) {
        .auth-container {
            width: 80%;
        }
    }
</style>
