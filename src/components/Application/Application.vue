<template>
  <div class="components_App_Application">
    <Header :sticky="true" position="100px" class="components_App_Application__header"/>
    <div class="components_App_Application__content">
    <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Header from './Header/Header';

    @Component({
        components: {
            Header
        },
    })
    export default class Application extends Vue {
    }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }
  body {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: rgb(237, 238, 240);
  }
  .components_App_Application__header {
    z-index: 999;
  }
  .components_App_Application__content {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>