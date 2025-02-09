<template>
    <div style="">
        <div class="flex cen">
            <div class="center-box">
                <div style="font-size: 40px;font-weight: 700;font-style: italic">
                    <p style="position: relative;top: 10px">浦东</p>
                    <p style="position: relative;top: -40px">共青团</p>
                </div>
            </div>
            <div class="w-bj">
                <div class="n-bj"></div>
                <div class="center-box1">
                    <span style="font-size: 13px">学生</span>
                    <span>联合会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box2">
                    <span style="font-size: 13px">金融青年</span>
                    <span>联谊</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box3">
                    <span style="font-size: 13px">青农</span>
                    <span>联谊会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box4">
                    <span style="font-size: 13px">青年</span>
                    <span>志愿者协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box5">
                    <span style="font-size: 13px">青年商会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w1">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w2">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w3">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w4">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w5">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w6">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
                <div class="center-box-w7">
                    <span style="font-size: 13px">青年</span>
                    <span>创业立业协会</span>
                    <div>
                        <span style="font-size: 22px;color: #eac658">112</span>
                        <span style="font-size: 16px;color: #eac658">人</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .w-bj {
        position: relative;
        width: 700px;
        height: 700px;
        background-image: url("../../assets/img/image/wbj.png");
    }

    .cen {
        align-items: center;
        justify-content: center;
    }

    .n-bj {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        background-size: 100% 100%;
        height: 500px;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/image/nbj.png");
    }

    .center-box {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        text-align: center;
        line-height: 100px;

    }

    .center-box1 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 150px;
        left: 43%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box2 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        animation: breathing 4s ease-in-out infinite;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 280px;
        left: 20%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box3 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 280px;
        right: 20%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: breathing 3s ease-in-out infinite;
        line-height: 20px;
    }
    .center-box4 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 180px;
        left: 30%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box5 {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 180px;
        right: 30%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w1 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        animation: breathing 4s ease-in-out infinite;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 230px;
        right: 5%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w2 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 60px;
        right: 25%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w3 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 30%;
        left: 5%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w4 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 10px;
        left: 40%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w5 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 20%;
        left: 10%;
        animation: breathing 5s ease-in-out infinite;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w6 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        top: 20%;
        right: 10%;
        animation: breathing 5s ease-in-out infinite;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
    }
    .center-box-w7 {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        animation: breathing 3s ease-in-out infinite;
        background: #447eb3;
        border: 4px solid #488fc2;
        position: absolute;
        bottom: 60px;
        left: 25%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 20px;
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