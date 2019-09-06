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
            <span class="layout-footer-processing-bar"></span>
            <span class="layout-footer-processing-info">
                <span class="layout-footer-processing-speed">倍速</span>
                <span class="layout-footer-processing-time">00:00/00:00</span>  
            </span>
        </div>
        <ul class="layout-footer-operation-list clear-fix">
            <li class="layout-footer-operation-item">
                <i class="el-icon-star-off"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-download"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-chat-dot-round"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-refresh"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-bell"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-open"></i>
            </li>
            <li class="layout-footer-operation-item">
                <b class="layout-footer-operation-item-text"> 词 </b>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-s-comment"></i>
            </li>
            <li class="layout-footer-operation-item">
                <i class="el-icon-s-unfold"></i>
            </li>
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
            display: inline-block;
            vertical-align: middle;
            line-height: 65px;
            font-size: 40px;
            padding-left: 15px;
            cursor: pointer;
        };
        &-processing {
            display: inline-block;
            vertical-align: middle;
            &-info {
                position: relative;
                height: $height;
            };
            &-speed {
                border: 1px solid #fff;
                border-radius: 8px;
                font-size: 8px;
                padding: 2px;
                position: absolute;
                bottom: 17px;
                width: 27px;
                left: 16px;
                height: 15px;
                width: 40px;
                text-align: center;

            }
            &-bar {
                display: inline-block;
                width: 700px;
                height: 2px;
                background: #ffd;
            };
            &-time {
                font-size: 12px;
                padding: 16px;
            }
        }
        &-operation-list {
            vertical-align: middle;
            float: right;
            padding-right: 10px;
            height: $height;
        }
        &-operation-item {
            float: left;
            line-height: $height;
            padding-right: 8px;
            cursor: pointer;
        }
    }

</style>