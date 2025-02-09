<!--
 * @Author: daidai
 * @Date: 2022-03-01 15:27:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-07 11:24:14
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\right-center.vue
-->
<template>
  <div class="" style="margin-top: 20px;">
      <div class="flex" style="justify-content: space-around">
          <div class="flex" style="flex-direction: column;align-items: center">
              <div class="pic"></div>
              <p style="color: #CCFFFF;font-size: 16px">
                  团聚爱
              </p>
          </div>
          <div class="flex" style="flex-direction: column;align-items: center">
              <div class="pic1"></div>
              <p style="color: #CCFFFF;font-size: 16px">
                  健康节
              </p>
          </div>
          <div class="flex" style="flex-direction: column;align-items: center">
              <div class="pic2"></div>
              <p style="color: #CCFFFF;font-size: 16px">
                  预青服务
              </p>
          </div>
          <div class="flex" style="flex-direction: column;align-items: center">
              <div class="pic3"></div>
              <p style="color: #CCFFFF;font-size: 16px">
                  青年就业
              </p>
          </div>
          <div class="flex" style="flex-direction: column;align-items: center">
              <div class="pic4"></div>
              <p style="color: #CCFFFF;font-size: 16px">
                  冬日暖阳
              </p>
          </div>
      </div>
  </div>


</template>

<script>
export default {

  data() {
    return {


    };
  },
  computed: {
  },
  created() {
  },

  mounted() { },
  methods: {

  },
};
</script>
<style lang='scss' scoped>
    .pic{
        background-repeat: no-repeat;
        width: 83px;
        height: 83px;
        background-image: url('../../assets/img/image/icon1.png');
    }
    .pic1{
        background-repeat: no-repeat;
        width: 83px;
        height: 83px;
        background-image: url('../../assets/img/image/icon2.png');
    }
    .pic2{
        background-repeat: no-repeat;
        width: 83px;
        height: 83px;
        background-image: url('../../assets/img/image/icon3.png');
    }
    .pic3{
        background-repeat: no-repeat;
        width: 83px;
        height: 83px;
        background-image: url('../../assets/img/image/icon4.png');
    }
    .pic4{
        background-repeat: no-repeat;
        width: 83px;
        height: 83px;
        background-image: url('../../assets/img/image/icon5.png');
    }

</style>