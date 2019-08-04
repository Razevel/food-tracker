<template>
  <div class="components_ProgressBar__Circle">
    <div class="components_ProgressBar__Circle__wrapper">
      <div class="components_ProgressBar__Circle__outer" :style="outerWidthStyle">
        <div class="components_ProgressBar__Circle__inner" :style="innerWidthStyle">
            <slot v-if="$slots.innerLabel"  name="innerLabel"></slot>
        </div>
      </div>

      <div v-if="$slots.outerLabel" class="components_ProgressBar__Circle__progressCaption">
        <slot name="outerLabel"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import Vue from './../../Vue';


    export interface ICircleProgressBarProps {
        radius?: string,
        lineWidth?: number
        indicatorColor?: string,
        backgroundColor?: string,
    }

    @Component({
        props: {
            radius: {
                type: String,
                default: '50px'
            },
            lineWidth: {
                type: Number,
                default: 2
            },
            indicatorColor: {
                type: String,
                default: '#ff7e22'
            },
            backgroundColor: {
                type: String,
                default: '#fff'
            }
        }
    })
    export default class CircleProgressBar extends Vue<ICircleProgressBarProps> {

        private get outerWidthStyle(): string {
            const
                bgColor = `background-color: ${this.Props.indicatorColor};`,
                radius = this.Props.radius;

            return `${bgColor} width: ${radius}; height: ${radius}; `;
        }

        private get innerWidthStyle(): string {
            const radius = cssSizeToNumber(this.Props.radius) - this.Props.lineWidth * 2;
            const bgColor = `background-color: ${this.Props.backgroundColor};`;

            // W+H, because of it is a circle.
            return `${bgColor} width: ${radius}px; height: ${radius}px;`;
        }

    }

    function cssSizeToNumber(val: string | number): number {
        if (typeof val === "string") {
            return +val.replace(/[^0-9]/g, '');
        } else if (typeof val === "number") {
            return val;
        } else {
            throw new Error("cssSizeToNumber: val is not string | number");
        }
    }
</script>

<style lang="scss">
  .components_ProgressBar__Circle {
    display: inline-block;
  }
  .components_ProgressBar__Circle__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .components_ProgressBar__Circle__indicator {

  }
  .components_ProgressBar__Circle__outer {
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .components_ProgressBar__Circle__inner {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .components_ProgressBar__Circle__progressCaption {

  }

</style>