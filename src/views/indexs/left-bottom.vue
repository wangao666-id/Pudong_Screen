<!--
 * @Author: wang ao
 * @Date: 2022-03-01 09:43:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 11:40:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-bottom.vue
-->
<template>
    <div
        v-if="pageflag"
        class="left_boottom_wrap beautify-scroll-def"
        :class="{ 'overflow-y-auto': !sbtxSwiperFlag }"
    >
        <component :is="components" :data="list" :class-option="defaultOption">
            <div style="margin-top: 15px">
                <div class="flex" style="margin-bottom:5px;" v-for="item in arrItem">
                    <div style="width: 200px;margin-right: 15px">
                        <el-progress :stroke-width="10" :define-back-color="'#39486c'" :percentage="item.value">
                            <template #default="{ percentage }">
                                <div
                                    class="custom-progress"
                                    :style="{
          width: percentage + '%',
          background: 'linear-gradient(to right, red, orange, yellow, green)',
        }"
                                ></div>
                            </template>
                        </el-progress>
                    </div>
                    <div class="flex"
                         style="justify-content: space-between;width: 250px; border-bottom: 2px solid  #525e7d;padding-bottom: 4px;box-sizing: border-box">
                        <div class="flex" style="align-items: center">
                            <div class="point"></div>
                            <p style="color: #88BAF2;font-size: 17px">{{item.title}}</p>
                        </div>
                        <div>
                            <span class="ren-shu">{{item.num}}</span>
                            <span style="color: #8bb0e3">{{item.dw}}</span>
                        </div>
                    </div>

                </div>
            </div>
        </component>
    </div>

    <Reacquire v-else @onclick="" style="line-height: 200px"/>
</template>

<script>
    import {currentGET} from "api";
    import vueSeamlessScroll from "vue-seamless-scroll"; // vue2引入方式
    import Kong from "../../components/kong.vue";

    export default {
        components: {vueSeamlessScroll, Kong},
        data() {
            return {
                list: [],
                pageflag: true,
                components: vueSeamlessScroll,
                defaultOption: {
                    ...this.$store.state.setting.defaultOption,
                    singleHeight: 240,
                    limitMoveNum: 5,
                    step: 0,
                },
                arrItem: [
                    {
                        title: '优秀团员团干部',
                        value: 70,
                        num: 1298,
                        dw: '人'
                    },
                    {
                        title: '青年岗位能手',
                        value: 36,
                        num: 392,
                        dw: '人'
                    },
                    {
                        title: '浦东十大杰出青年',
                        value: 6,
                        num: 40,
                        dw: '人'
                    },
                    {
                        title: '红旗(特色)团组织',
                        value: 60,
                        num: 743,
                        dw: '家'
                    },
                    {
                        title: '青年文明号',
                        value: 30,
                        num: 249,
                        dw: '个'
                    },
                    {
                        title: '青年突击队',
                        value: 35,
                        num: 285,
                        dw: '个'
                    },
                    {
                        title: '培训团干部',
                        value: 95,
                        num: 14300,
                        dw: '人次'
                    },
                    {
                        title: '青年英才',
                        value: 38,
                        num: 299,
                        dw: '名'
                    },
                    {
                        title: '招募有志青年',
                        value: 31,
                        num: 229,
                        dw: '人'
                    },
                    {
                        title: '大学生暑期实践',
                        value: 45,
                        num: 469,
                        dw: '人'
                    }

                ]
            };
        },
        computed: {
            sbtxSwiperFlag() {
                let sbtxSwiper = this.$store.state.setting.sbtxSwiper;
                if (sbtxSwiper) {
                    this.components = vueSeamlessScroll;
                } else {
                    this.components = Kong;
                }
                return sbtxSwiper;
            },
        },
        created() {

        },

        mounted() {
            // this.getData();
        },
        methods: {
            addressHandle(item) {
                let name = item.provinceName;
                if (item.cityName) {
                    name += "/" + item.cityName;
                    if (item.countyName) {
                        name += "/" + item.countyName;
                    }
                }
                return name;
            },
            // getData() {
            //     this.pageflag = true;
            //     // this.pageflag =false
            //     currentGET("big3", {limitNum: 20}).then((res) => {
            //         console.log("设备提醒", res);
            //         if (res.success) {
            //             this.countUserNumData = res.data;
            //             this.list = res.data.list;
            //             let timer = setTimeout(() => {
            //                 clearTimeout(timer);
            //                 this.defaultOption.step =
            //                     this.$store.state.setting.defaultOption.step;
            //             }, this.$store.state.setting.defaultOption.waitTime);
            //         } else {
            //             this.pageflag = false;
            //             this.$Message({
            //                 text: res.msg,
            //                 type: "warning",
            //             });
            //         }
            //     });
            // },
        },
    };
</script>
<style lang='scss' scoped>
    .left_boottom_wrap {
        overflow: hidden;
        width: 100%;
        height: 351px;
    }

    .doudong {
        //  vertical-align:middle;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .overflow-y-auto {
        overflow-y: auto;
    }

    .left_boottom {
        width: 100%;
        height: 100%;
        margin-top: 25px;
        overflow: hidden;

        .left_boottom_item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            font-size: 14px;
            margin: 10px 0;

            .orderNum {
                margin: 0 16px 0 -20px;
            }

            .info {
                margin-right: 10px;
                display: flex;
                align-items: center;
                color: #fff;

                .labels {
                    flex-shrink: 0;
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.6);
                }

                .zhuyao {
                    color: $primary-color;
                    font-size: 15px;
                }

                .ciyao {
                    color: rgba(255, 255, 255, 0.8);
                }

                .warning {
                    color: #e6a23c;
                    font-size: 15px;
                }
            }

            .inner_right {
                position: relative;
                height: 100%;
                width: 380px;
                flex-shrink: 0;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;

                .dibu {
                    position: absolute;
                    height: 2px;
                    width: 104%;
                    background-image: url("../../assets/img/zuo_xuxian.png");
                    bottom: -10px;
                    left: -2%;
                    background-size: cover;
                }

                .addresswrap {
                    width: 100%;
                    display: flex;
                    margin-top: 8px;
                }
            }

            .wangguan {
                color: #1890ff;
                font-weight: 900;
                font-size: 15px;
                width: 80px;
                flex-shrink: 0;
            }


            .time {
                font-size: 12px;
                // color: rgba(211, 210, 210,.8);
                color: #fff;
            }

            .address {
                font-size: 12px;
                cursor: pointer;
                // @include text-overflow(1);
            }

            .types {
                width: 30px;
                flex-shrink: 0;
            }

            .typeRed {
                color: #fc1a1a;
            }

            .typeGreen {
                color: #29fc29;
            }
        }
    }

    :deep(.el-progress-bar__inner) {
        background: linear-gradient(to right, #2F63E7, #9AE3FE);
    }

    :deep(.el-progress-bar__outer) {
        background: #39486d;
    }

    :deep(.el-progress__text) {
        color: white;
        display: none;
    }

    :deep(.el-progress-bar) {
        padding-right: 0;
    }

    .point {
        background: #7FA6FF;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 0 5px;
    }

    .ren-shu {
        color: #66d7fb;
        font-weight: 500;
    }
</style>