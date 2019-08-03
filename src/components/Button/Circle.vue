<template>
  <div class="components_Button components_circleButton">
    <div class="components_circleButton__relativeWrapper" :style="sizeStyle">
      <div class="components_circleButton__content">

        <span v-if="caption"
              class="components_circleButton__caption"
              :class="captionClassList">{{ caption }}</span>
        <button class="components_circleButton__button"
                :style="sizeStyle"
                @click="buttonClick"
        >
          <slot></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from './../../Vue'
    import { isTouch } from '../Utils/Detection';
    import { IButton } from "./interface/IButton";


    export interface ICircleButtonProps {
        radius?: string
        wrapCaption?: boolean
        caption?: string
        captionClass?: string
    }

    @Component({
        props: {
            radius: {
                type: String,
                default: '50px'
            },
            wrapCaption: {
                type: Boolean,
                default: false
            },
            caption: String,
            captionClass: String
        }
    })
    export default class CircleButton extends Vue<ICircleButtonProps> implements IButton {

        protected get sizeStyle(): string {
            let styles = `width: ${this.Props.radius}; height: ${this.Props.radius};`;
            return styles;
        }

        private get captionClassList(): string {
            let classList = '';


            if (this.Props.wrapCaption) {
                classList += 'components_circleButton__caption_wrap';
            } else {
                classList += 'components_circleButton__caption_noWrap';
            }

            if (this.Props.captionClass) {
                classList += ' ' + this.Props.captionClass;
            }

            return classList
        }

        private buttonClick(e: MouseEvent): void {
            this.$emit('buttonClick', e, this);
        }

    }
</script>

<style lang="scss">
  .components_Button {
  }

  .components_circleButton {
  }

  .components_circleButton__relativeWrapper {
    position: relative;
  }

  .components_circleButton__content {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }

  .components_circleButton__caption {
    padding-right: 10px;
  }

  .components_circleButton__caption_wrap {

  }

  .components_circleButton__caption_noWrap {
    white-space: nowrap;
  }

  .components_circleButton__button {
    flex-shrink: 0;
    border-radius: 50%;
    border: 0;
  }
</style>