<template>
  <div class="diary">
    <h1>This is your diary!</h1>
    <DropdownButton class="components_Diary__addButton" :mainButton="mainButton" :additionalButtons="additionalButtons"/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DropdownButton from './../controls/Button/Dropdown';
    import Product from './../components/Nutrition/Product';
    import {Model} from '../Types/Model';
    import {Products} from '../Tmp/MockedData';

    @Component({
        components: {
            DropdownButton,
            Product
        }
    })
    export default class Diary extends Vue {
        carrot = {};
        milk;
        private additionalButtonBackgroundColor = "#FF9B17";

        mainButton = {
            caption: 'Добавить',
            color: '#fafafa',
            icon: 'fa-plus',
            backgroundColor: '#009f26',
            clickHandler: (_, button) => {
            }
        };

        additionalButtons = [
            {
                caption: 'Продукт',
                color: '#fafafa',
                backgroundColor: this.additionalButtonBackgroundColor,
                icon: 'fa-shopping-bag'
            },
            {
                caption: 'Блюдо',
                color: '#fafafa',
                backgroundColor: this.additionalButtonBackgroundColor,
                icon: 'fa-birthday-cake'
            },
            {
                caption: 'Прием пищи',
                color: '#fafafa',
                backgroundColor: this.additionalButtonBackgroundColor,
                icon: 'fa-calendar-plus-o'
            }
        ];
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
  .components_Diary__productsList {
    display: flex;
    flex-direction: column;
    /*flex-wrap: wrap;*/
  }

  .components_Diary__product {
    margin: 5px;
    display: flex;
  }

  .components_Diary__addButton {
    position: fixed;
    bottom: 30px;
    right: 10px;
  }
</style>