<template>
    <div class="auth-container">
        <h5 class="auth-title">Registration</h5>
        <p class="subtitle">create an account</p>
        <form class="auth-form">
            <input type='text' id="name" name='name' placeholder='Name' />
            <input type='email' id="email" name='email' placeholder='E-mail' />
            <input type='password' id="password" name='password' placeholder='Password'  />
            <input type='password' id="password2" name='password2' placeholder='Confirm Password' />
            <input type='submit' value="submit"/>
        </form>
    </div>
</template>

<style lang="scss">
$base-text-color: #FDFF85;
$base-border-color: #E9ECEB;

    .auth-container {
        width: 25%;
        margin: 0 auto;
        .auth-title {
            text-align: center;
            font-size: 22px;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 700;
            color: $base-text-color;
        }
        .subtitle {
            text-align: center;
            font-size: 16px;
            margin: 5px 0 15px 0;
        }
        .auth-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            input[type=text],
            input[type=password],
            input[type=email]{
                padding: 20px 15px 5px 10px;
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
            input[type=submit]{
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
