<template>
  <div class="components_Button_dropdown" @focusout="onFocusOut">
    <div class="components_Button_dropdown__wrapper">

      <CircleButton :class="'components_Button_dropdown__button ' + (Props.mainButton && Props.mainButton.class || '')"
                    ref="mainButton_0"
                    :caption="Props.mainButton && Props.mainButton.caption"
                    @buttonClick="onMainButtonClick"
                    :radius="Props.mainButton && Props.mainButton.radius || undefined"
                    :color="Props.mainButton && Props.mainButton.color"
                    :wrapCaption="Props.mainButton && Props.mainButton.wrapCaption || false"
                    :backgroundColor="(Props.mainButton && Props.mainButton.backgroundColor || '')"
                    :captionClass="'components_Button_dropdown__mainButton__caption ' + (Props.mainButton && Props.mainButton.class || '')">
        <i :class="'fa ' + (Props.mainButton && Props.mainButton.icon || '')"></i>
      </CircleButton>

      <div :class="additionalButtonsClassList" v-if="Props.additionalButtons.length">
        <div class="components_Button_dropdown__additionalButtonsList__item"
             v-for="(buttonCfg, index) in Props.additionalButtons">
          <CircleButton class="components_Button_dropdown__button"
                        :ref="'additionalButton_'+index"
                        @buttonClick="additionalButtonHandler(buttonCfg, index)"
                        :radius="buttonCfg.radius"
                        :class="buttonCfg.class"
                        :color="buttonCfg.color"
                        :backgroundColor="buttonCfg.backgroundColor"
                        :captionClass="buttonCfg.captionClass"
                        :wrapCaption="buttonCfg.wrapCaption"
                        :caption="buttonCfg.caption">
            <i :class="'fa ' + buttonCfg.icon"></i>
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
    import { isTouch } from './../../Types/Utils/Detection';


    interface IDropdownButtonsProps {
        mainButton,
        additionalButtons
    }

    @Component({
        props: {
            additionalButtons: {
                type: Array,
                default: () => []
            },
            mainButton: Object
        },
        components: {
            CircleButton
        }
    })
    export default class Dropdown extends Vue<IDropdownButtonsProps> {
        private shown = false;
        private additionalButtonBackgroundColor = "#FF9B17";

        protected get additionalButtonsClassList(): string {
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

        private onMainButtonClick(event: MouseEvent, button: CircleButton) {
            if (!isTouch()) {
                return;
            }

            this.shown = !this.shown;
            if (this.Props.mainButton && this.Props.mainButton.clickHandler) {
                this.Props.mainButton.clickHandler({}, this.$refs['mainButton_0'] || this.$refs['mainButton_0'][0]);
            }
        }

        private onFocusOut(e: FocusEvent): void {
            if (isTouch()) {
                setTimeout(() => {
                    this.shown = false;
                }, 100);
            }
        }

        private defaultAdditionalButtonClick() {

        }

        private additionalButtonHandler(buttonConfig, index) {
            const
                hasHandler = buttonConfig && buttonConfig.clickHandler && typeof buttonConfig.clickHandler === "function",
                handler = hasHandler ? buttonConfig.clickHandler : this.defaultAdditionalButtonClick,
                button = this.$refs['additionalButton_' + index][0];

            handler({}, button);
        }

    }
</script>

<style lang="scss">

  @import "./../LessMixins/Animation/ToggleBy/translate";

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
    @include translateX_hide(-100%);
  }

  .app-is-touch .components_Button_dropdown__additionalButtonsList_shown,
  .app-is-no-touch .components_Button_dropdown__wrapper:hover .components_Button_dropdown__additionalButtonsList {
    @include translateX_show();
  }

</style>