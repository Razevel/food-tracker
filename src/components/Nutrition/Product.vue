<template>
  <div class="components_Nutrition__Product">
    <div class="components_Nutrition__Product__wrapper">

      <div class="components_Nutrition__Product__card__firstLine">
        <div class="components_Nutrition__Product__caption">{{ Props.product.get('Название') }}</div>
        <div class="components_Nutrition__Product__more" @focusout="hideDetails">
          <button
              @click="onShowDetailsClick"
              class="components_Nutrition__Product__moreButton">
            <i class="fa fa-ellipsis-h"></i>
          </button>
          <div :class="detailsClassList">
            <ul class="components_Nutrition__Product__more__details__list">
              <li>
                <a href="#"
                   class="components_Nutrition__Product__more__details__list__item"
                   @click.prevent="function() {}">Редактировать</a>
              </li>
              <li>
                <a href="#"
                   class="components_Nutrition__Product__more__details__list__item"
                   @click.prevent="hideDetails">Закрыть</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="components_Nutrition__Product__card__secondLine">
        <div class="components_Nutrition__Product__kbjy">
          <CircleProgressBar :radius="kbjyIndicatorRadius" class="components_Nutrition__Product__kbjyProgress">
            <template v-slot:innerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__innerLabel">{{ Props.product.get('k') }}</div>
            </template>
            <template v-slot:outerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__outerLabel">ККал</div>
            </template>
          </CircleProgressBar>

          <CircleProgressBar :radius="kbjyIndicatorRadius" class="components_Nutrition__Product__kbjyProgress">
            <template v-slot:innerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__innerLabel">{{ Props.product.get('b') }}</div>
            </template>
            <template v-slot:outerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__outerLabel">Белки</div>
            </template>
          </CircleProgressBar>

          <CircleProgressBar :radius="kbjyIndicatorRadius" class="components_Nutrition__Product__kbjyProgress">
            <template v-slot:innerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__innerLabel">{{ Props.product.get('j') }}</div>
            </template>
            <template v-slot:outerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__outerLabel">Жиры</div>
            </template>
          </CircleProgressBar>

          <CircleProgressBar :radius="kbjyIndicatorRadius" class="components_Nutrition__Product__kbjyProgress">
            <template v-slot:innerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__innerLabel">{{ Props.product.get('y') }}</div>
            </template>
            <template v-slot:outerLabel>
              <div class="components_Nutrition__Product__bkjyProgress__outerLabel">Углеводы</div>
            </template>
          </CircleProgressBar>
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from './../../Vue';
    import { Model } from '../../Types/Model';
    import CircleProgressBar from './../ProgressBar/Circle'


    export interface IProductProps {
        product?: Model
    }

    @Component({
        components: {
            CircleProgressBar
        },
        props: {
            product: {
                type: Object as () => Model
            }
        }
    })
    export default class Product extends Vue<IProductProps> {
        private kbjyIndicatorRadius: string = '42px';
        private isDetailsShown: boolean = false;


        private get detailsClassList(): string {
            let classList = 'components_Nutrition__Product__more__details';

            if (this.isDetailsShown) {
                classList += ' components_Nutrition__Product__more__details_shown';
            }

            return classList;
        }

        private onShowDetailsClick(e: MouseEvent) {
            this.isDetailsShown = !this.isDetailsShown;
            this.$emit('showDetailsClick');
            if (this.isDetailsShown) {
                this.$emit('detailsHasBeenShown');
            } else {
                this.$emit('detailsHasBeenHidden');
            }
        }

        private hideDetails(e: FocusEvent | MouseEvent) {
            this.isDetailsShown = false;
            this.$emit('detailsHasBeenHidden');
        }

    }
</script>

<style lang="scss">
  @import "./../../controls/LessMixins/Animation/ToggleBy/visibility";

  .components_Nutrition__Product {
    background-color: #fff;
  }

  .components_Nutrition__Product__wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    border-radius: 4px;
    padding: 5px 10px;
  }

  .components_Nutrition__Product__card__firstLine {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .components_Nutrition__Product__caption {
    color: #0d0d0d;
  }

  .components_Nutrition__Product__more {
    display: inline-block;
    position: relative;
  }

  .components_Nutrition__Product__more__details {
    @include visibility_hide();
    position: absolute;
    z-index: 10;
    top: 0;
    right: -50%;
    background-color: #fff;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    border-radius: 4px;
    padding: 5px 0;
  }

  .components_Nutrition__Product__more__details__list {
    list-style: none;
  }

  .components_Nutrition__Product__more__details__list__item {
    display: block;
    padding: 5px;
    text-decoration: none;
    color: #858585;
  }

  .components_Nutrition__Product__more__details_shown {
    @include visibility_show();
  }

  .components_Nutrition__Product__moreButton {
    padding: 0;
    margin: 0;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    color: slategray;
  }

  .components_Nutrition__Product__kbjy {
    display: flex;
    justify-content: space-around;
  }

  .components_Nutrition__Product__kbjyProgress:not(:last-child) {
    margin-right: 10px;
  }

  .components_Nutrition__Product__bkjyProgress__innerLabel {
    font-size: 14px;
  }

  .components_Nutrition__Product__bkjyProgress__outerLabel {
    font-size: 12px;
    text-align: center;
  }

</style>