<template>
    <div>
        <div class="notification">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .notification {
        position: fixed;
        font-size: 15px;
        padding: 15px 25px;
        z-index: 40;
        background-color: #6dbebe;
        width: 40%;
        border: none;
        border-radius: 30px;
        left: 50%;
        top: 10%;
        transform: translate(-50%, -50%);
        p {
            color: #FDFF85;
            text-align: center;
            span {
               color: #172727;
               font-weight: 700;
            }
        }
    }
    @media screen and (max-width: 1024px) {
      .notification {
        width: 35%;
      }
    }
    @media screen and (max-width: 450px) {
      .notification{
        width: 85%;
      }
    }
</style>
