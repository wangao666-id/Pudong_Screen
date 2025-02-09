<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-25 09:18:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
    <div>
        <div class="flex" style="margin-top: 20px; justify-content: space-around">
            <div class="flex-d">
                <div class="pic1">
                    活动开展以来累计数
                </div>
                <div class="cen-num">
                    <span style="color: #f2f4fe;font-size: 25px;font-weight: 500;">75</span>
                    <span>&nbsp;场</span>
                </div>
                <div class="btn-pic1"></div>
            </div>
            <div class="flex-d">
                <div class="pic1">
                    小旗手及宣讲表演
                </div>
                <div class="cen-num">
                    <span style="color: #f2f4fe;font-size: 25px;font-weight: 500;">1255</span>
                    <span>&nbsp;人</span>
                </div>
                <div class="btn-pic2"></div>
            </div>
            <div class="flex-d">
                <div class="pic1">
                    观摩人数
                </div>
                <div class="cen-num">
                    <span style="color: #f2f4fe;font-size: 25px;font-weight: 500;">2800</span>
                    <span>&nbsp;余人</span>
                </div>
                <div class="btn-pic3"></div>
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
    .pic1 {
        color: #b7dce1;
        font-size: 16px;
        margin-bottom: 20px;

    }

    .btn-pic1 {
        width: 120px;
        height: 80px;
        transform-style: preserve-3d; /* 保持子元素 3D 空间 */
        transform-origin: center; /* 以自身中心点旋转 */
        animation: breathing 5s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/-h57.png");
    }

    .btn-pic2 {
        width: 120px;
        transform-style: preserve-3d; /* 保持子元素 3D 空间 */
        height: 80px;
        transform-origin: center; /* 以自身中心点旋转 */
        animation: breathing 3s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/-h58.png");
    }

    .btn-pic3 {
        width: 120px;
        height: 80px;
        transform-style: preserve-3d; /* 保持子元素 3D 空间 */
        transform-origin: center; /* 以自身中心点旋转 */
        animation: breathing 4s ease-in-out infinite;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/-h59.png");
    }

    .flex-d {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        perspective: 1000px; /* 透视效果，增强 3D 感 */
    }

    .cen-num {
        position: absolute;
        top: 35px;
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