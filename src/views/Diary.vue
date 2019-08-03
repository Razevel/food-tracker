<template>
  <div class="diary">
    <h1>This is you Diary!</h1>
    <div class="content" style="height: 2000px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti, deserunt dolor, ea facilis fugiat possimus quod ratione repellendus sed sunt tempore? Architecto consequuntur in natus vero? Dolorum molestias, voluptate!
    </div>




    dsdads



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