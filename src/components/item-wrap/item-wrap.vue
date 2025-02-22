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
            <span @click="openImg(title)"> &nbsp;&nbsp;{{title}}&nbsp;&nbsp; </span>
            <span v-if="showSecTitle" class="yellow">获评“全国青年创新创业示范区”</span>
        </div>
        <div class="item_title_content_def">
            <slot></slot>
        </div>
        <el-image id="album_preview" :src="sheQv" style="width:0; height:0;"
                  :preview-src-list="previewList" :initial-index="0">
        </el-image>
    </div>
</template>

<script>
    import sheQv from '../../assets/img/image/sheqv.jpg'

    export default {
        data() {
            return {
                previewList: [],
                sheQv
            };
        },
        props: {
            title: {
                type: String,
                default: () => "",
            },
            showSecTitle: {
                type: Boolean,
                default: false
            }
        },
        created() {
        },

        mounted() {
        },
        methods: {
            openImg(title) {
                if (title === '引领区青年说') {
                    setTimeout(() => {
                        document.getElementById('album_preview').click()
                    },0)
                    this.previewList = [this.sheQv]
                }
            }
        },
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
            cursor: pointer;
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

    .yellow {
        color: #FDD985;
        font-size: 14px;
        position: absolute;
        right: 10px;
    }
</style>