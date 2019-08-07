<template>
  <div class="meals">
    <div class="components_Meals__productsList">
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
      <Product class="components_Meals__product" :product="milk"/>
    </div>
    <DropdownButton class="components_Meals__addButton" :mainButton="mainButton"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DropdownButton from './../controls/Button/Dropdown';
    import Product from './../components/Nutrition/Product';
    import {Model} from './../Types/Model';
    import {Products} from './../Tmp/MockedData';

    @Component({
        components: {
            DropdownButton,
            Product
        }
    })
    export default class Meals extends Vue {
        milk;

        mainButton = {
            color: '#fafafa',
            icon: 'fa-plus',
            backgroundColor: '#009f26'
        };

        constructor(){
            super();

            this.milk = new Model({
                idProperty: 'id',
                data: Products.milk
            });

        }
    }
</script>

<style lang="scss">
  .components_Meals__productsList {
    display: flex;
    flex-direction: column;
    /*flex-wrap: wrap;*/
  }

  .components_Meals__product {
    margin: 5px;
    display: flex;
  }

  .components_Meals__addButton {
    position: fixed;
    bottom: 30px;
    right: 10px;
  }
</style>