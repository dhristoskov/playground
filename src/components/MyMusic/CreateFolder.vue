<template>
    <div>
        <form class="folder-form" @submit.prevent="onSubmitHandler">
            <input type="text" name='name' v-model="name"
            placeholder='Create folder' required>
            <input type="submit" value="create">
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>
