<template>
    <div class="logo-wrapper">
        <div class="logo">
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
            <span class="stroke"></span>
        </div>
        <p class="title">your music in one place</p>
    </div>
</template>

<style lang="scss" scoped>
    .logo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            margin-top: 5px;
            font-size: 10px;
            text-transform: uppercase;
            text-align: center;
        }
        .logo {
            height: 30px;
            display: flex;
            align-items: center;
            .stroke {
                display: block;
                position: relative;
                background: #10C1E5;
                height: 100%;
                width: 6px;
                border-radius: 50px;
                margin: 0 5px;
                animation: animate 1.2s linear infinite;
            }
        }
        @keyframes animate {
            50% {
                height: 20%;
            }
            100% {
                height: 100%;
            }
        }
        .stroke:nth-child(1) {
            animation-delay: 0s;
        }
        .stroke:nth-child(2) {
            animation-delay: 0.3s;
        }
        .stroke:nth-child(3) {
            animation-delay: 0.6s;
        }
        .stroke:nth-child(4) {
            animation-delay: 0.9s;
        }
        .stroke:nth-child(5) {
            animation-delay: 0.6s;
        }
        .stroke:nth-child(6) {
            animation-delay: 0.3s;
        }
        .stroke:nth-child(7) {
            animation-delay: 0s;
        }
    }
</style>
