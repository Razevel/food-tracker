<template>
  <Application id="app" :class="classes"/>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Application from './components/Application/Application';
    import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
    import { isTouch } from './Types/Utils/Detection'

    @Component({
        components: {
            Application
        },
    })
    export default class App extends Vue {
        private classes: string | Record<string, boolean> = 'app-is-touch';

        private get classList() {
            return {
                'app-is-touch': isTouch(),
                'app-is-no-touch': !isTouch()
            }
        }

        mounted(): void {
            this.classes = this.classList;
        }
    }
</script>