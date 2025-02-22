<!--
 * @Author: daidai
 * @Date: 2022-03-01 09:16:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-29 15:12:34
 * @FilePath: \web-pc\src\pages\big-screen\components\item-wrap\item-wrap.vue
-->
<template>
    <div class="lr_titles">
        <div class="item_title" style="display: flex">
            <div style="width: 4px;height: 25px;background: #66d7fb"></div>
            <span> &nbsp;&nbsp;{{title}}&nbsp;&nbsp; </span>
            <span v-if="showSecTitle" class="yellow">获评“全国青年创新创业示范区”</span>
        </div>
        <div class="item_title_content_def">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            title: {
                type: String,
                default: () => "",
            },
            showSecTitle:{
                type: Boolean,
                default: false
            }
        },
        created() {
        },

        mounted() {
        },
        methods: {},
    };
</script>
<style lang='scss' scoped>
    $item-title-height: 38px;
    $item_title_content-height: calc(100% - 38px);

    .lr_titles {
        box-sizing: border-box;


        :deep(.border-box-content) {
            box-sizing: border-box;
            padding: 6px 16px 0px;
        }

        .item_title {
            height: $item-title-height;
            line-height: $item-title-height;
            width: 100%;
            color: #d4fcfc;
            font-weight: 700;
            font-size: 22px;
            font-style: italic;
            position: relative;
            padding: 10px 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;

        }

        .item_title_content_def {
            width: 100%;
            //height: 100%;
        }
    }
    .yellow{
        color: #FDD985;
        font-size: 14px;
        position: absolute;
        right: 10px;
    }
</style>