<template>
    <div class="timeline-content">
        <div class="timeline">
            <div class="timeline__wrap">
                <div class="timeline__items">
                    <div class="timeline__item">
                        <div class="timeline__content">
                            公司成立
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            签约杭州市经信委
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            签约杭州市公安局<br/>
                            签约泰一指尚数据产品<br/>
                            高新<br/>
                            双软<br/>
                            “雏鹰计划”<br/>
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            签约省高速交警数据中心<br/>
                            签约华为数据营销<br/>
                            签约网易数据中心<br/>
                            CMMI3<br/>
                            网易战略合作<br/>
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            签约部分市级交通质监<br/>
                            签约省交通质监数据中心<br/>
                            “智慧质监”试点<br/>
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            推广行业大数据应用解决方案<br/>
                            华为战略合作<br/>
                            腾讯合作伙伴<br/>
                        </div>
                    </div>
                    <div class="timeline__item">
                        <div class="timeline__content">
                            疫情大数据
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
        timeline(document.querySelectorAll('.timeline'), {
            mode: 'horizontal',
            horizontalStartPosition: 'bottom',
            visibleItems: 7
        })
    }
}
</script>

<style scoped lang="scss">
.timeline-content {
    width: 1200px;
    height: 807px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
