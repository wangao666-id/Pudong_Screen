<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-20 17:57:11
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
    <div>
        <div class="flex" style="margin-top: 30px">
            <div class="flex-center">
                <div class="item-bj-pic"></div>
                <div>
                    <p class="title-top">
                        青年学习社
                    </p>
                    <p class="title-btn">
                        228 家
                    </p>
                </div>
            </div>
            <div class="flex-center">
                <div class="item-bj-pic-1"></div>
                <div>
                    <p class="title-top">
                        开展活动
                    </p>
                    <p class="title-btn">
                        346 场
                    </p>
                </div>
            </div>
            <div class="flex-center">
                <div class="item-bj-pic-2"></div>
                <div>
                    <p class="title-top">
                        参与人数
                    </p>
                    <p class="title-btn">
                        10308 人
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {currentGET} from 'api/modules'

    let style = {
        fontSize: 24
    }
    export default {
        data() {
            return {}
        },
        filters: {},
        created() {
        },
        mounted() {
        },
        beforeDestroy() {

        },
        methods: {}
    }
</script>
<style lang='scss' scoped>
.item-bj-pic{
    width: 40px;
    height: 40px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../../assets/img/image/ic1.png");
}
.item-bj-pic-2{
    width: 40px;
    height: 40px;
    margin-right: 5px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../../assets/img/image/ic3.png");
}
.item-bj-pic-1{
    width: 40px;
    margin-right: 5px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../../assets/img/image/ic2.png");
}
.flex-center{
    display: flex;
    align-items: center;
}
.flex{
    display: flex;
    justify-content: space-around;
}
.title-btn{
    font-size: 20px;
    color: #CCFFFF;
}
.title-top{
    margin-bottom: 4px;
    color: #8ab8f7;
    font-size: 14px;

}
</style>