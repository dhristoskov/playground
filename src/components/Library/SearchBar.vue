<template>
    <div>
        <form class="search-from" @submit.prevent="onSubmitHandler">
            <input type="text" name='search' v-model="search"
            placeholder='Search by name or author' required>
            <input type="submit" value="search">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onSubmitHandler (e) {
      console.log(this.search)
      e.target.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
$base-text-color: #FDFF85;
$base-border-color: #E9ECEB;

.search-from{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 40%;
    margin: 20px auto 50px auto;
    input[type=text]{
        width: 80%;
        padding: 20px 15px 5px 5px;
        border: none;
        outline: none;
        color: $base-border-color;
        border-bottom: 2px solid $base-text-color;
        background-color: transparent;
    }
    input[type=submit]{
        width: 18%;
        padding: 5px;
        outline: none;
        text-transform: uppercase;
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
