<!--
 * @Author: daidai
 * @Date: 2022-03-01 14:13:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 15:04:49
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\right-top.vue
-->
<template>
<div style="margin-top: 10px;">
    <div class='video'>
        <video class="video-box" ref="videoPlayer" controls="true" :src="videoSrc" autoplay="true" loop="true"></video>
    </div>

</div>
</template>

<script>
import { currentGET } from "api/modules";
import {graphic} from "echarts"
export default {
  data() {
    return {
        videoSrc: require("@/assets/video/pd-video.mp4"), // 视频地址
    };
  },
  created() {

  },

  mounted() {
  },
  beforeDestroy() {
  },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
.video{
    width: 470px;
    height: 275px;
    border: 2px solid #46AEF7;
    border-radius: 6px 6px 6px 6px;
}
.video-box{
    width: 470px;
    height: 275px;
}
</style>