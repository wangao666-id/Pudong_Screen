<template>
    <div>
        <div class="map-container">
            <div ref="echartsMap" class="map"></div>
        </div>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    // import chinaGeoJson from "@/assets/geojson/china.json"; //
    import shanghaiGeoJson from "@/assets/geojson/pudong-new.json"; // 浦东新区的 GeoJSON

    export default {

        data() {
            return {}
        },
        mounted() {
            this.initMap();
        },
        methods: {
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
                        show: true,
                        color: ['#ff4601', '#fffc00', '#87cffa'],
                        min: 0,
                        max: 100,
                        calculable: true,
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
                            normal: {
                                areaColor: '#76b1ff',
                                borderColor: '#eee',
                                shadowColor: '#76b1ff',
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
                            data: this.getHeatmapData()
                        }
                    ]
                };

                myChart.setOption(option);
            },
            getHeatmapData() {
                // 模拟热力数据（真实项目可从 API 获取）
                return [
                    [121.5, 31.2, 50], // 经度, 纬度, 热力值
                    [121.6, 31.25, 80],
                    [121.55, 31.22, 100],
                    [121.58, 31.28, 40],
                    [121.62, 31.21, 1000]
                ];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .map-container {
        width: 100%;
        height: 100vh;
    }

    .map {
        width: 100%;
        height: 100%;
    }
</style>