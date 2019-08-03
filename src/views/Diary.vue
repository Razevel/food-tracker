<template>
  <div class="diary">
    <h1>This is you Diary!</h1>
    <DropdownButton class="components_Diary__addButton"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DropdownButton from './../components/Button/Dropdown'

    @Component({
        components: {
            DropdownButton
        }
    })
    export default class Diary extends Vue {

    }
</script>

<style lang="scss">
  .components_Diary__addButton {
    position: fixed;
    bottom: 30px;
    right: 10px;
  }
</style>