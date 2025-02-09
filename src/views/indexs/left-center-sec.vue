<!--
 * @Author: wang ao
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-25 09:18:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
    <div>
        <div class="flex" style="margin-top: 20px; justify-content: space-around">
            <div class="flex-d">
                <div class="top-pic1 center">90
                    <span class="dan-w">万+</span>
                </div>
                <p class="title-b">微信粉丝数</p>

            </div>
            <div class="flex-d">
                <div class="top-pic2 center">89
                    <span class="dan-w">%</span>
                </div>
                <p class="title-b">传播力</p>
            </div>
            <div class="flex-d">
                <div class="top-pic3 center">344
                    <span class="dan-w">%</span>
                </div>
                <p class="title-b">勤勉度</p>
            </div>
            <div class="flex-d">
                <div class="top-pic4 center">31
                    <span class="dan-w">%</span>
                </div>
                <p class="title-b">热点热词覆盖率</p>
            </div>
        </div>

    </div>

    <!--  <Reacquire v-else @onclick="getData" style="line-height:200px">-->
    <!--    重新获取-->
    <!--  </Reacquire>-->
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {
        },
        mounted() {
        },
        beforeDestroy() {

        },
        methods: {},
    };
</script>
<style lang='scss' scoped>


    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 25px;
        color: white;
        position: relative;
    }

    .dan-w {
        font-size: 12px;
        position: absolute;
        right: 5px;
        top: 20px;
    }
    .title-b{
        color: #CCFFFF;
        font-size: 16px;
        margin-top: 4px;
    }

    .top-pic1 {
        width: 84px;
        height: 84px;
        animation: breathing 3s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/z2390.png");
    }

    .top-pic2 {
        width: 84px;
        height: 84px;
        animation: breathing 3s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/z2391.png");
    }

    .top-pic3 {
        width: 84px;
        height: 84px;
        animation: breathing 3s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/z2392.png");
    }

    .top-pic4 {
        animation: breathing 3s ease-in-out infinite;
        width: 84px;
        height: 84px;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/z2393.png");
    }

    .flex-d {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        perspective: 1000px; /* 透视效果，增强 3D 感 */
    }

    /* 关键帧动画 */
    @keyframes breathing {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1); /* 稍微放大 */
        }
        100% {
            transform: scale(1);
        }
    }

</style>