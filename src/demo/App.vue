<template>
    <div>
        <div class="timeline">
            <div class="timeline__wrap">
                <div class="timeline__items">
                    <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                      <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                      <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                      <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                      <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                      <div class="timeline__item">
                        <div class="timeline__content">
                            您的内容/标记
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import timeline from "../index";
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class App extends Vue {
    mounted() {
        timeline(document.querySelectorAll('.timeline'),{
            mode: 'horizontal',
        })
    }
}
</script>

<style scoped>

</style>
