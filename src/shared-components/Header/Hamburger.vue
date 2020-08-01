// To be changed later
<template>
    <div class='hamburger'>
        <div class='one'/>
        <div class='two'/>
        <div class='three'/>
    </div>
</template>

<style lang="scss" scoped>
    .hamburger {
        display: block;
        width: 40px;
        cursor: pointer;
        &:hover div {
            width: 35px;
            background: rgb(230, 68, 68);
        }
        div {
            height: 3px;
            background:blue;
            margin: 4px 0;
            transition: all .5s ease-in-out;
        }
        .one {
            width: 40px;
        }
        .two {
            width: 20px;
        }
        .three {
            width: 30px;
        }
    }
    @media screen and (min-width: 421px) {
        .hamburger {
            display: none;
        }
    }
</style>
