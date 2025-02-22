<!--
 * @Author: wang ao
 * @Date: 2022-01-12 14:23:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 14:47:24
 * @FilePath: \web-pc\src\pages\big-screen\view\home.vue
-->
<template>
    <!-- <div id="index" ref="appRef" class="index_home" :class="{ pageisScale: isScale }"> -->
    <ScaleScreen
        :width="1920"
        :height="1080"
        class="scale-wrap"
        :selfAdaption="$store.state.setting.isScale"
    >
        <div class="bg">
            <dv-loading v-if="loading">Loading...</dv-loading>
            <div v-else class="host-body">
                <!-- 头部 s -->
                <div class="d-flex  title_wrap">
                    <div class="d-flex jc-center">
                        <div class="title">
                            <p class="title-text">浦东共青团大数据</p>
                            <p></p>
                        </div>
                    </div>
<!--                    <div class="center-item">-->

                        <div class="flex center-item">
                            <div class="item-bj">
                                <p class="number">14-35岁青年</p>
                                <p class="number-text">{{formatNumberWithDots('1756900')}}名</p>
                            </div>
                            <div class="item-bj" style="position: relative;left: -20px">
                                <p class="number">共青团员</p>
                                <p class="number-text">{{formatNumberWithDots('1756900')}}名</p>
                            </div>
                            <div class="item-bj" style="position: relative;left: -40px">
                                <p class="number">少先队员</p>
                                <p class="number-text">{{formatNumberWithDots('1756900')}}名</p>
                            </div>
                            <div class="item-bj" style="position: relative;left: -60px">
                                <p class="number">团组织</p>
                                <p class="number-text">{{formatNumberWithDots('1756900')}}家</p>
                            </div>
                            <div class="item-bj" style="position: relative;left: -80px">
                                <p class="number">少先队大队</p>
                                <p class="number-text">{{formatNumberWithDots('362')}}个</p>
                            </div>
                        </div>
<!--                    </div>-->

                    <div class="timers">
                       <p style="color: #9ee9f3;font-size: 30px"> {{ dateDay }} </p>

                       <div style="color: #9ee9f3;font-size: 20px;margin-left: 15px">
                           <p style="margin-bottom: 4px">
                               {{ today }}.{{dateWeek}}
                           </p>
                           <p>{{ dateYear }}</p>
                       </div>

<!--                                    <i-->
<!--                                      class="blq-icon-shezhi02"-->
<!--                                      style="margin-left: 10px"-->
<!--                                      @click="showSetting"-->
<!--                                    ></i>-->
                    </div>

                </div>
                <!-- 头部 e-->
                <!-- 内容  s-->
                <router-view></router-view>
                <!-- 内容 e -->

                <div class="screen-bottom"></div>


            </div>

        </div>
        <Setting ref="setting"/>
    </ScaleScreen>
    <!-- </div> -->
</template>

<script>
    import {formatTime,formatNumberWithDots} from "@/utils";
    import Setting from "./setting.vue";
    import ScaleScreen from "@/components/scale-screen/scale-screen.vue";

    export default {
        components: {Setting, ScaleScreen},
        data() {
            return {
                timing: null,
                loading: true,
                dateDay: null,
                dateYear: null,
                today:null,
                dateWeek: null,
                weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                dataArr: [
                    {
                        title: '14-35岁青年',
                        code: '名',
                        num: 1756900
                    },
                    {
                        title: '共青团员',
                        code: '名',
                        num: 1756900
                    },
                    {
                        title: '少先队员',
                        code: '名',
                        num: 1756900
                    },
                    {
                        title: '团组织',
                        code: '家',
                        num: 1756900
                    },
                    {
                        title: '少先队大队',
                        code: '个',
                        num: 326
                    }
                ],
            };
        },
        filters: {
            numsFilter(msg) {
                return msg || 0;
            },
        },
        computed: {},
        created() {
        },
        mounted() {
            this.timeFn();
            this.cancelLoading();
            this.getToday()
        },
        beforeDestroy() {
            clearInterval(this.timing);
            if (this.timer) {
                clearInterval(this.timer);
            }
        },
        methods: {
            formatNumberWithDots,
            showSetting() {
                this.$refs.setting.init();
            },
            getToday() {
                // 获取当前日期
                const date = new Date();

                // 获取今天是周几（0-6，0 表示周日）
                const dayOfWeek = date.getDay();

                // 将数字映射为英文缩写
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                this.today = days[dayOfWeek];
            },
            timeFn() {
                this.timing = setInterval(() => {
                    this.dateDay = formatTime(new Date(), "HH: mm: ss");
                    this.dateYear = formatTime(new Date(), "yyyy.MM.dd");
                    this.dateWeek = this.weekday[new Date().getDay()];
                }, 1000);
            },
            cancelLoading() {
                let timer = setTimeout(() => {
                    this.loading = false;
                    clearTimeout(timer);
                }, 500);
            },
        },
    };
</script>

<style lang="scss">
    @import "./home.scss";
</style>
