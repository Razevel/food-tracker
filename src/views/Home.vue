<
<template>
  <div class="home">
    <h1>This is a home page</h1>
    <router-link to="/">Home</router-link>&nbsp;|&nbsp;
    <router-link to="/meals" class="link">Продукты</router-link>&nbsp;|&nbsp;
    <router-link to="/diary" class="link">Дневник</router-link>&nbsp;|&nbsp;
    <router-link to="/about" class="link">About</router-link>
  </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {
    }
</script>

<style lang="scss">
  .link {
    color: #2c3e50;
  }
</style>