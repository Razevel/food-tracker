<template>
  <div class="components_Button components_circleButton">
    <div class="components_circleButton__relativeWrapper" :style="sizeStyle">
      <div class="components_circleButton__content">
        <span v-if="caption" :class="captionClassList" :style="captionStyleList">{{ caption }}</span>
        <button class="components_circleButton__button" :style="buttonStyle" @click="buttonClick">
          <slot></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from './../../Vue'
    import { IButton } from "./interface/IButton";


    export interface ICircleButtonProps {
        radius?: string
        wrapCaption?: boolean
        caption?: string
        captionClass?: string
        backgroundColor?: string
        color?: string
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
            captionClass: String,
            backgroundColor: {
                type: String,
                default: "initial"
            },
            color: {
                type: String,
                default: "initial"
            }
        }
    })
    export default class CircleButton extends Vue<ICircleButtonProps> implements IButton {

        protected get sizeStyle(): string {
            return `width: ${this.Props.radius}; height: ${this.Props.radius};`;
        }

        protected get buttonStyle(): string {
            return `${this.sizeStyle} background-color: ${this.Props.backgroundColor}; color: ${this.Props.color};`;
        }

        private get captionClassList(): string {
            let classList = 'components_circleButton__caption';


            if (this.Props.wrapCaption) {
                classList += ' components_circleButton__caption_wrap';
            } else {
                classList += ' components_circleButton__caption_noWrap';
            }

            if (this.Props.captionClass) {
                classList += ' ' + this.Props.captionClass;
            }

            return classList
        }

        private get captionStyleList(): string {
            let styles = `background-color: ${this.Props.backgroundColor}; color: ${this.Props.color};`;
            return styles;
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
    font-size: 12px;
    padding: 2px 4px;
    padding-bottom: 3px;
    border-radius: 5px;
    margin-right: 3px;
    cursor: pointer;
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
    cursor: pointer;
  }
</style>