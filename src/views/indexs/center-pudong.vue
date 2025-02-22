<template>
    <div style="height: 100%">
        <div class="top-btn">
            <div v-for="item in selArr" :key="item.key" class="btn-item"
                 @click="clickTab(item.key)" :style="{backgroundImage:`url(${sleIndex===item.key?picSel:pic})`}">
                {{item.title}}
            </div>
        </div>

        <div style="border: 2px solid #86B8EF;height: 100%;" :class="[sleIndex===4?'center':'']">
            <mapFirst v-if="sleIndex!==4"/>
            <FriendQuan v-else/>
        </div>

    </div>
</template>

<script>
    import pic from '@/assets/img/image/ic-bj-a.png'
    import picSel from '@/assets/img/image/ic-bj-r.png'
    import mapFirst from './map-first.vue'
    import FriendQuan from './friend-quan.vue'


    export default {
        components: {
            mapFirst,
            FriendQuan
        },
        data() {
            return {
                sleIndex: 1,
                pic,
                picSel,
                selArr: [
                    {
                        title: "青年在哪里",
                        key: 1
                    },
                    {
                        title: "共青团在哪里",
                        key: 2
                    },
                    {
                        title: "阵地在哪里",
                        key: 3
                    },
                    {
                        title: "朋友圈",
                        key: 4
                    }

                ]
            }
        },
        methods: {
            clickTab(k) {
                this.sleIndex = k
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-btn {
        display: flex;
        justify-content: space-between;
    }

    .btn-item {
        width: 204px;
        height: 51px;
        line-height: 51px;
        text-align: center;
        cursor: pointer;
        font-weight: 700;
        font-style: italic;
        font-size: 18px;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>