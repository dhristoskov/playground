<template>
    <div>
        <div class="notification">
            <p><i class="far fa-times-circle"></i></p>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .notification {
        position: fixed;
        z-index: 40;
        background-color: white;
        width: 30%;
        min-height: 40px; //To be removed <---
        border: 1px solid black;
        box-shadow: 1px 1px 1px black;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
</style>
