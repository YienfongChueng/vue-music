<template>
    <div class="layout-footer">
        <div class="layout-footer-play">
            <span class="layout-footer-play-before">
                <i class="el-icon-arrow-left"></i>
            </span>
            <span class="layout-footer-play-begin">
                <i class="el-icon-video-play"></i>
            </span>
            <span class="layout-footer-paly-next">
                <i class="el-icon-arrow-right"></i>
            </span>
        </div>
        <div class="layout-footer-processing">
            <span class="layout-footer-processing-bar">11111</span>
            <span class="layout-footer-processing-time">2222</span>
        </div>
        <ul class="layout-footer-operation-list">
            <li class="layout-footer-operation-item">1</li>
            <li class="layout-footer-operation-item">2</li>
            <li class="layout-footer-operation-item">3</li>
            <li class="layout-footer-operation-item">4</li>
            <li class="layout-footer-operation-item">5</li>
            <li class="layout-footer-operation-item">6</li>
            <li class="layout-footer-operation-item">7</li>
            <li class="layout-footer-operation-item">8</li>
            <li class="layout-footer-operation-item">9</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'layout-footer'
}
</script>
<style lang="scss">
    $height: 65px;
    .layout-footer{
        width: 100%;
        position: absolute;
        background: #007fde;
        height: $height;
        bottom: 0;
        color: #fff;
        
        &-play {
            // margin: 10px;
            width: 180px;
            display: inline-block;
            vertical-align: middle;
            // height: 30px;
            line-height: 65px;
            font-size: 40px;
            padding-left: 15px;
             box-sizing: border-box;
        };
        &-processing {
            display: inline-block;
            vertical-align: middle;
            background: #e34;
            &-bar {

            };
            &-time {

            }
        }
        &-operation-list {
            // display: inline-block;
            vertical-align: middle;
            width: 393px;
            background: #555;
            float: right;
            margin-right: 10px;
        }
        &-operation-item {
            // float: left;
            display: inline-block;
            margin-right: 10px;
            // float: right;
        }
    }

</style>