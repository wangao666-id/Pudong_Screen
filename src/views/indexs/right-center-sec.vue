<!--
 * @Author: daidai
 * @Date: 2022-03-01 15:51:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-29 15:12:46
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\right-bottom.vue
-->
<template>
    <div class="right_bottom">
        <div class="flex cen" style="margin-top: 20px;">
            <div class="fk"></div>
            <p class="title-main">每年举办“创业浦东”青年创新创业大赛</p>
        </div>
        <div style="margin-top: 6px;margin-left: 25px;" class="text">
            <span class="title-sm">累计参赛项目</span>&nbsp;
            <span class="title-m">4700</span>
            <span class="title-m-s">余个</span>&nbsp;
            <span class="title-sm">服务创业青年</span>&nbsp;
            <span class="title-m">20000</span>&nbsp;
            <span class="title-m-s">余人次</span>
        </div>
        <div class="flex cen" style="margin-top: 10px;">
            <div class="fk"></div>
            <p class="title-main">成立上海市大学生科创基金浦东分会</p>
        </div>
        <div  style="margin-top: 6px;margin-left: 25px;" class="text">
            <span class="title-sm">累计投入</span>&nbsp;
            <span class="title-red">6000</span>
            <span class="title-red-s">余万元</span>&nbsp;
            <span class="title-sm">资助项目</span>&nbsp;
            <span class="title-red">136</span>
            <span class="title-red-s">个</span>&nbsp;
            <span class="title-sm">资助金额</span>&nbsp;
            <span class="title-red">3980</span>
            <span class="title-red-s">余万元</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        created() {

        },
        computed: {},
        mounted() {
        },
        beforeDestroy() {
        },
        methods: {},
    };
</script>
<style lang='scss' scoped>
    .fk {
        width: 14px;
        margin-right: 10px;
        height: 12px;
        background-size: 100% 100%;
        background-image: url("../../assets/img/image/hjx.png");
    }

    .cen {
        align-items: center;
    }

    .right_bottom {
        padding: 0 20px;
        box-sizing: border-box;
    }
    .text{
        height: 20px;
        line-height: 20px;
    }

    .title-main {
        font-size: 18px;
        color: #C0E7FF;
    }

    .title-sm {
        color: white;
        font-size: 12px;
    }

    .title-m {
        color: #7AEFFF;
        font-size: 20px;
    }

    .title-m-s {
        color: #7AEFFF;
        font-size: 14px;
    }

    .title-red {
        color: #FF706C;
        font-size: 20px;
    }
    .title-red-s {
        color: #FF706C;
        font-size: 14px;
    }


</style>