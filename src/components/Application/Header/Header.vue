<template>
  <div :class="HeaderClassList" :style="HeaderStyleList">
    <div class="components_App_Header__content">
      <div class="components_App_Header__leftColumn">
        <MainLogo class="components_App_Header__logo"/>
      </div>
      <div class="components_App_Header__centerColumn">
      </div>
      <div class="components_App_Header__rightColumn"></div>
    </div>

  </div>
</template>

<script lang="ts">
    import Vue from '../../../Vue';
    import { Component } from 'vue-property-decorator';
    import MainLogo from './MainLogo';

    export interface IHeaderProps {
        sticky: boolean
        position: 'top' | 'bottom' | string
    }

    @Component({
        components: {
            MainLogo
        },
        props: {
            sticky: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top'
            }
        }
    })
    export default class Header extends Vue<IHeaderProps> {

        protected get HeaderClassList(): string {
            let classList = 'components_App_Header';

            if (this.Props.sticky) {
                classList += ' components_App_Header_sticky';
            }

            return classList;
        }

        protected get HeaderStyleList(): string {
            return '';
        }

        mounted() {
        }

    }
</script>

<style lang="scss">

  // Text color
  .components_App_Header,
  a {
    color: #f2f2f2;
  }

  .components_App_Header {
    background-color: #009f26;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .components_App_Header_sticky {
    position: sticky;
    top: 0px;
  }

  .components_App_Header__content {
    width: 100%;
    padding: 5px 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .components_App_Header__leftColumn {
    flex-shrink: 0;
  }

  .components_App_Header__centerColumn {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    justify-content: flex-end;
  }

  .components_App_Header__rightColumn {
  }

  .components_App_Header__logo {
    padding: 5px 0;
  }

  @media only screen and (min-width : 960px) {
    .components_App_Header__content {
      max-width: 1280px;
      flex-wrap: nowrap;
    }
  }

</style>
