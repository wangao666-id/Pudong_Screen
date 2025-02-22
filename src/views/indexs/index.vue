<!--
 * @Author: daidai
 * @Date: 2022-03-04 09:23:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:05:02
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
    <div class="contents">
        <div class="contetn_left">
            <div class="pagetab">
                <!-- <div class="item">实时监测</div> -->

            </div>
            <ItemWrap class="contetn_lr-top-item" title="引领区青年说">
                <LeftTop/>
            </ItemWrap>
            <ItemWrap class="contetn_left-center-item " title="国旗下成长">
                <LeftCenter/>
            </ItemWrap>
            <ItemWrap class="contetn_left-center2-item " title="网上共青团">
                <LeftCenterSec/>
            </ItemWrap>
            <ItemWrap
                class="contetn_left-bottom-item"
                title="青年生力军"
                style="padding: 0 10px 16px 10px"
            >
                <LeftBottom/>
            </ItemWrap>
        </div>
        <div class="contetn_center">
            <CenterPuDong class="contetn_center_top"/>
<!--            <ItemWrap class="contetn_center-bottom" title="安装计划">-->
<!--                <CenterBottom/>-->
<!--            </ItemWrap>-->
        </div>
        <div class="contetn_right">
            <RightTop/>
            <ItemWrap
                class="contetn_right-center-item"
                title="青年发展型城区"
                style="padding: 0 10px 16px 10px"
            >
                <RightCenter/>
            </ItemWrap>
            <ItemWrap
                class="contetn_right-center-sec-item"
                title="创新创业"
                :show-sec-title="true"
                style="padding: 0 10px 16px 10px"
            >
                <RightCenterSec/>
            </ItemWrap>
            <ItemWrap
                class="contetn_right-bottom"
                title="清纯守护者 "
            >
                <RightBottom/>
            </ItemWrap>
        </div>
    </div>
</template>

<script>
    import LeftTop from './left-top.vue'
    import LeftCenter from "./left-center.vue";
    import LeftCenterSec from "./left-center-sec.vue";
    import LeftBottom from "./left-bottom.vue";
    import CenterPuDong from "./center-pudong.vue";
    import CenterBottom from "./center-bottom.vue";
    import RightTop from "./right-top.vue";
    import RightCenter from "./right-center.vue";
    import RightCenterSec from "./right-center-sec.vue";
    import RightBottom from "./right-bottom.vue";

    export default {
        components: {
            LeftTop,
            LeftCenter,
            LeftBottom,
            // CenterMap,
            CenterPuDong,
            RightTop,
            RightCenter,
            RightBottom,
            CenterBottom,
            LeftCenterSec,
            RightCenterSec
        },
        data() {
            return {};
        },
        filters: {
            numsFilter(msg) {
                return msg || 0;
            },
        },
        created() {
        },

        mounted() {
        },
        methods: {},
    };
</script>
<style lang="scss" scoped>


    // 内容
    .contents {
        .contetn_left,
        .contetn_right {
            width: 480px;
            box-sizing: border-box;
            // padding: 16px 0;
        }

        .contetn_lr-top-item {
            height: 128px;
            margin-bottom: 10px;
            background-image: url("../../assets/img/image/th_bg-1.png");
            background-repeat: no-repeat;
        }

        .contetn_left-center-item {
            height: 186px;
            margin-bottom: 10px;
            background-image: url("../../assets/img/image/th_bg-2.png");
            background-repeat: no-repeat;
        }

        .contetn_left-center2-item {
            height: 184px;
            margin-bottom: 10px;
            background-image: url("../../assets/img/image/th_bg-2.png");
            background-repeat: no-repeat;
        }

        .contetn_left-bottom-item {
            height: 351px;
            background-size: 100% 100%;
            background-image: url("../../assets/img/image/th_bg-4.png");
            background-repeat: no-repeat;
        }
        .contetn_right-center-item{
            height: 212px;
            background-size: 100% 100%;
            background-image: url("../../assets/img/image/th_bg-6.png");
            background-repeat: no-repeat;
        }
        .contetn_right-center-sec-item{
            height: 191px;
            background-size: 100% 100%;
            background-image: url("../../assets/img/image/th_bg-6.png");
            background-repeat: no-repeat;
        }
        .contetn_right-bottom{
            height: 191px;
            background-size: 100% 100%;
            background-image: url("../../assets/img/image/th_bg-7.png");
            background-repeat: no-repeat;
        }


        .contetn_center {
            margin-top: 25px;
            width:880px;
        }

        //左右两侧 三个块
        .contetn_lr-item {
            height: 310px;
        }

        .contetn_center_top {
            width: 100%;
        }


        .contetn_center-bottom {
            height: 315px;
        }

        //左边 右边 结构一样
        .contetn_left,
        .contetn_right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;


        }
    }


    @keyframes rotating {
        0% {
            -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
        }
        50% {
            -webkit-transform: rotate(180deg) scale(1.1);
            transform: rotate(180deg) scale(1.1);
        }
        100% {
            -webkit-transform: rotate(360deg) scale(1);
            transform: rotate(360deg) scale(1);
        }
    }
</style>
