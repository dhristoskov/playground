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
        z-index: 40;
        background-color: white;
        width: 20%;
        border: 1px solid black;
        box-shadow: 1px 1px 1px black;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>