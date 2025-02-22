<template>
    <div>
        <div class="map-container">
            <div class="abs" v-if="current===1">
                <div v-for="item in numArr" :key="item.title" class="flex" style="margin-bottom: 10px;">
                    <div :style="{background:item.color}" class="item-box"></div>
                    <p class="title-box">{{item.title}}</p>
                </div>
            </div>
            <div class="left-box" v-if="current===1">
                <div v-for="item in leftTitle"
                     class="pic"
                     :class="[sleIndex===item.key?'sel-color':'']"
                     :style="{backgroundImage:`url(${sleIndex===item.key?item.pic:item.picSel})`}"
                     @click.self="clickTab(item.key)"
                     :key="item.key">
                    {{item.title}}
                </div>
            </div>
            <div class="bottom-box" v-if="current===1 && sleIndex===1"></div>
            <div class="bottom-box-day" v-if="current===1 && sleIndex===2"></div>
            <div class="bottom-box-tab2" v-if="current===2"></div>
            <div class="bottom-box-tab3" v-if="current===3"></div>
<!--            <div ref="echartsMap" class="map"></div>-->
            <div
                class="gif-container"
                :style="{ backgroundImage: `url('${getGifUrl()}')` }"
                v-if="sleIndex"
            ></div>
        </div>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    import p1 from '@/assets/img/image/p1.png'
    import p2 from '@/assets/img/image/p2.png'
    import r1 from '@/assets/img/image/r1.png'
    import r2 from '@/assets/img/image/r2.png'
    import n1 from '@/assets/img/image/n1.png'
    import n2 from '@/assets/img/image/n2.png'
    import {GAO_QIAO, JINYANG_XINCUN} from '@/common/const'
    import shanghaiGeoJson from "@/assets/geojson/pd-code.json"; // 浦东新区的 GeoJSON

    export default {
        props: {
            current: {
                type: Number,
                default: 1,

            }
        },

        data() {
            return {
                sleIndex: 1,
                dataArr: [],
                GAO_QIAO,
                JINYANG_XINCUN,
                leftTitle: [
                    {
                        title: '常住青年人数热力图',
                        key: 1,
                        pic: p1,
                        picSel: p2,
                    }, {
                        title: '青创日间分布热力图',
                        key: 2,
                        pic: r2,
                        picSel: r1,
                    }, {
                        title: '青创夜间分布热力图',
                        key: 3,
                        pic: n2,
                        picSel: n1,
                    }


                ],
                numArr: [
                    {
                        number: '5000',
                        title: '< 120000',
                        color: '#e65254'
                    },
                    {
                        number: '5000',
                        title: '< 100000',
                        color: '#e86de3'
                    },
                    {
                        number: '80000',
                        title: '< 80000',
                        color: '#ebb26c'
                    },
                    {
                        number: '60000',
                        title: '< 60000',
                        color: '#fdf3a6'
                    },
                    {
                        number: '5000',
                        title: '< 50000',
                        color: '#9ee8f3'
                    },
                    {
                        number: '5000',
                        title: '< 40000',
                        color: '#bbf7fd'
                    },
                    {
                        number: '5000',
                        title: '< 20000',
                        color: '#94c8f5'
                    },
                    {
                        number: '5000',
                        title: '< 10000',
                        color: '#6592e8'
                    }
                ],
            }
        },
        mounted() {
            // this.dataArr = [...this.updateHeatmapValues(this.JINYANG_XINCUN, 500000)]
            // this.$nextTick(() => {
            //     this.initMap();
            // })
        },
        methods: {
            // 生成 热力图 坐标点
            updateHeatmapValues(data, newValue = 120000) {
                return data.map(item => [item[0], item[1], newValue]);
            },
            getGifUrl() {
                if (this.sleIndex === 1) return require(`@/assets/img/image/usually.gif`) + '?timestamp=' + Date.now();
                if (this.sleIndex === 2) return require(`@/assets/img/image/day.gif`) + '?timestamp=' + Date.now();
                if (this.sleIndex === 3) return require(`@/assets/img/image/night.gif`) + '?timestamp=' + Date.now();
                return '';
            },

            // 输出前 10 条示例
            clickTab(k) {
                this.sleIndex = k
            },
            initMap() {
                let myChart = echarts.init(this.$refs.echartsMap);
                // 注册浦东新区地图
                echarts.registerMap("pd", shanghaiGeoJson);

                let option = {
                    title: {
                        text: "",
                        left: "center",
                        textStyle: {color: "#fff"}
                    },
                    tooltip: {trigger: "item"},
                    visualMap: {
                        bottom: 20,
                        left: 10,
                        show: false,

                        inRange: {
                            color: ['#e65254', '#e86de3', '#ebb26c', '#fdf3a6', '#9ee8f3', '#bbf7fd', '#94c8f5', '#6592e8'],
                        },
                        min: 0,
                        max: 120000,
                        // calculable: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                    geo: {
                        map: "pd",
                        roam: true,
                        label: {
                            show: true,
                            normal: {
                                show: true,
                                color: '#fff'
                            },
                            emphasis: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            areaColor: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [
                                    {offset: 0, color: "#ff0000"}, // 渐变起始色
                                    {offset: 1, color: "#0000ff"}  // 渐变结束色
                                ]
                            },
                            normal: {
                                areaColor: '#608be7',
                                borderColor: '#eee',
                                shadowColor: '#608be7',
                                shadowBlur: 10,
                                borderWidth: 1
                            },
                            emphasis: {
                                // 鼠标移入颜色
                                areaColor: '#409EFF',
                                borderWidth: 0
                            }
                        },
                    },

                    series: [
                        {
                            name: "热力图",
                            type: "heatmap",
                            coordinateSystem: "geo",
                            pointSize: 15, // 控制点大小
                            // blurSize: 20, // 控制模糊程度
                            data: this.getHeatmapData()
                            // data: this.dataArr
                        }
                    ]
                };

                myChart.setOption(option);
            },
            getHeatmapData() {

                return [
                    [121.5, 31.2, 120000], // 经度, 纬度, 热力值
                    [121.6, 31.25, 20000],
                    [121.55, 31.22, 40000],
                    [121.58, 31.28, 90000],
                    [121.62, 31.21, 60000],
                    [121.61, 31.29, 200000], // 经度, 纬度, 热力值
                    [121.62, 31.55, 90000],
                    [121.51, 31.32, 10000],
                    [121.57, 31.31, 20000],
                    [121.69, 31.30, 300000],
                    [121.62, 31.55, 900000],
                    [121.51, 31.32, 10000],
                    [121.57, 31.31, 20000],
                    [121.69, 31.30, 30000],
                    [
                        121.58,
                        31.36,
                        100000
                    ],
                    [
                        121.60,
                        31.60,
                        300000
                    ],
                    [
                        121.59,
                        31.36,
                        100000
                    ],
                    [
                        121.59,
                        31.35,
                        1200000
                    ],
                    [
                        121.91,
                        30.87,
                        200000
                    ],
                    [
                        121.90,
                        30.87,
                        300000
                    ],
                    [
                        121.80,
                        30.86,
                        600000
                    ],
                ];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .map-container {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .map {
        width: 900px;
        height: 900px;
        position: relative;
        left: 80px;
    }

    .item-box {
        width: 28px;
        height: 18px;
        border-radius: 10px;
        margin-right: 10px;

    }

    .title-box {
        color: #93b9ed;
        font-size: 16px;
        font-weight: 500;
    }

    .abs {
        position: absolute;
        right: 30px;
        top: 50px;
        overflow: hidden;
    }

    .pic {
        height: 47px;
        width: 220px;
        background-repeat: no-repeat;
        margin-bottom: 20px;
        align-items: center;
        line-height: 47px;
        font-style: italic;
        font-size: 18px;
        font-weight: 700;
        color: #6580ab;
        padding-left: 70px;
    }

    .left-box {
        position: absolute;
        left: 30px;
        top: 40px;
        z-index: 1000;
    }

    .sel-color {
        color: #c2f0f2;
    }

    .bottom-box {
        position: absolute;
        bottom: -70px;
        left: 30px;
        background-size: 100% 100%;
        width: 436px;
        height: 219px;
        background-image: url('../../assets/img/image/jiade.png');

    }

    .bottom-box-day {
        position: absolute;
        bottom: -70px;
        left: 30px;
        background-size: 100% 100%;
        width: 400px;
        height: 136px;
        background-image: url('../../assets/img/image/day.png');
    }

    .bottom-box-tab2 {
        position: absolute;
        bottom: -70px;
        left: 30px;
        background-size: 100% 100%;
        width: 400px;
        height: 180px;
        background-image: url('../../assets/img/image/tab2.png');
    }

    .bottom-box-tab3 {
        position: absolute;
        bottom: -70px;
        left: 30px;
        background-size: 100% 100%;
        width: 400px;
        height: 203px;
        background-image: url('../../assets/img/image/tab3.png');
    }
    .gif-container {
        position: absolute;
        right: -80px;
        top: 50px;
        background-repeat: no-repeat;
        background-size: contain;
        width: 700px;
        height: 703px;
    }
</style>