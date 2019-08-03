<template>
  <div class="components_App_MainLogo__logo">
    <span class="components_App_MainLogo__logo__big">{{ mainText }}</span>
    <span class="components_App_MainLogo__logo__small">{{ additionalText }}</span>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {},
        props: {
            mainText: {
                type: String,
                default: 'Food Tracker'
            },
            additionalText: {
                type: String,
                default: 'Calc your nutrition'
            }
        }
    })
    export default class MainLogo extends Vue {
    }
</script>

<style lang="scss">

  .components_App_MainLogo__logo {
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
  }

  .components_App_MainLogo__logo__big {
    font-size: 24px;
    font-weight: bold;
  }

  .components_App_MainLogo__logo__small {
    text-transform: uppercase;
    font-size: 8px;
    color: #d1d1d1;
    letter-spacing: 2.9px;
    text-align: center;
  }

  @media only screen and (min-width : 960px) {
    .components_App_MainLogo__logo__big {
      font-size: 32px;
    }

    .components_App_MainLogo__logo__small {
      font-size: 8px;
      letter-spacing: 5.6px;
    }
  }

</style>
