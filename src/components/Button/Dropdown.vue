<template>
  <div class="components_Button_dropdown" @focusout="onFocusOut">
    <div class="components_Button_dropdown__wrapper">

      <CircleButton class="components_Button_dropdown__button"
                    caption="Добавить"
                    @buttonClick="onMainButtonClick"
                    captionClass="components_Button_dropdown__mainButton__caption">
        <i class="fa fa-plus"></i>
      </CircleButton>

      <div :class="additionalButtonsClassList">
        <div class="components_Button_dropdown__additionalButtonsList__item">
          <CircleButton class="components_Button_dropdown__button"
                        caption="Прием пищи">
            <i class="fa fa-plus"></i>
          </CircleButton>
        </div>
        <div class="components_Button_dropdown__additionalButtonsList__item">
          <CircleButton class="components_Button_dropdown__button" caption="Блюдо">
            <i class="fa fa-plus"></i>
          </CircleButton>
        </div>
        <div class="components_Button_dropdown__additionalButtonsList__item">
          <CircleButton class="components_Button_dropdown__button" caption="Продукт">
            <i class="fa fa-plus"></i>
          </CircleButton>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from './../../Vue';
    import CircleButton, { ICircleButtonProps } from './Circle';
    import { isTouch } from '../Utils/Detection';


    interface IDropdownButtonsProps {

    }

    @Component({
        components: {
            CircleButton
        }
    })
    export default class Dropdown extends Vue<IDropdownButtonsProps> {
        private shown = false;

        protected get additionalButtonsClassList():string {
            let classList = 'components_Button_dropdown__additionalButtonsList';

            if (isTouch()) {
                if (!this.shown) {
                    classList += ' components_Button_dropdown__additionalButtonsList_hidden';
                } else {
                    classList += ' components_Button_dropdown__additionalButtonsList_shown';
                }
            }

            return classList;
        }

        private onMainButtonClick(event: MouseEvent, button: CircleButton){
            if (!isTouch()) {
                return;
            }
            this.shown = !this.shown;
        }

        private onFocusOut(e: FocusEvent): void {
            if (isTouch()) {
                setTimeout(() => {
                    this.shown = false;
                }, 100);
            }
        }

    }
</script>

<style lang="scss">

  .components_Button_dropdown * {
    outline: none;
  }
  .components_Button_dropdown__wrapper {
    position: relative;
  }

  .components_Button_dropdown__button {
  }

  .components_Button_dropdown__mainButton__caption {

  }

  .components_Button_dropdown__additionalButtonsList {
    position: absolute;
    bottom: 100%;
    padding-bottom: 20px;
  }

  .components_Button_dropdown__additionalButtonsList__item {
    margin-bottom: 10px;
  }

  .app-is-touch .components_Button_dropdown__additionalButtonsList_hidden,
  .app-is-no-touch .components_Button_dropdown__additionalButtonsList {
    visibility: hidden;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }

  .app-is-touch .components_Button_dropdown__additionalButtonsList_shown,
  .app-is-no-touch .components_Button_dropdown__wrapper:hover .components_Button_dropdown__additionalButtonsList {
      opacity: 1;
      visibility: visible;
      filter: alpha(opacity=100);
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
  }

</style>