<template>
    <div class="layout-main">
        <div class="layout-main-nav">
            <div class="layout-main-nav-top">
                <span class="layout-main-nav-top-music">
                    <i class="el-icon-headset"></i>
                </span>
                <span class="layout-main-nav-top-cloud">
                    <i class="el-icon-cloudy"></i>
                </span>
                <span class="layout-main-nav-top-radio">
                    <i class="el-icon-data-line"></i>
                </span>
                <span class="layout-main-nav-top-phone">
                    <i class="el-icon-mobile-phone"></i>
                </span>
                <span class="layout-main-nav-top-download">
                    <i class="el-icon-download"></i>
                </span>
            </div>
            <ul class="layout-main-nav-parent-list">
                <li class="layout-main-nav-parent-item">
                    <span class="layout-main-nav-parent-text">默认列表</span>
                    <ul class="layout-main-child-list">
                        <li class="layout-main-clild-item"></li>
                    </ul>
                </li>
                <li class="layout-main-nav-parent-item">
                     <span class="layout-main-nav-parent-item-text">最近播放</span>
                      <ul class="layout-main-child-list">
                        <li class="layout-main-clild-item"></li>
                    </ul>
                </li>
                <li class="layout-main-nav-parent-item">
                    <span class="layout-main-nav-parent-item-text">最近播放视频</span>
                      <ul class="layout-main-child-list">
                        <li class="layout-main-clild-item"></li>
                    </ul>
                </li>                        
            </ul>
        </div>
        <div class="layout-main-content">
            <div class="layout-main-content-top">
                <span class="layout-main-content-top-stock">乐库</span>
                <span class="layout-main-content-top-radio">电台</span> 
                <span class="layout-main-content-top-listing">歌单</span>
                <span class="layout-main-content-top-online">直播</span>
                <span class="layout-main-content-top-ktv">KTV</span>
                <span class="layout-main-content-top-lric">歌词</span>     
            </div>
            <div class="layout-main-content-header">
                <span class="layout-main-content-header-single">单曲</span>
                <span class="layout-main-content-header-listing">歌单</span>
                <span class="layout-main-content-header-mv">MV</span>
                <span class="layout-main-contetn-header-record">专辑</span>
                <span class="layout-main-colntent-header-lric">歌词</span>
            </div>
            <div class="layout-main-content-table">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout-main'
}
</script>
<style lang="scss"> 
    .layout-main {
        position: absolute;
        top: 49px;
        bottom: 65px;
        width: 100%;
        // background: #778;
        &-nav {
            width: 300px;
            &-top {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #f5f5f5;
                // box-sizing: border-box;
                &-music,&-cloud,&-radio,&-phone,&-download {
                    padding: 15px;
                    font-size: 20px;
                    cursor: pointer;
                };
                &-music:hover,&-cloud:hover,&-radio:hover,&-phone:hover,&-download:hover {
                    color: #018fe3;
                    font-weight: bold;
                };
            };
            &-parent-list {
                // list-style: ;
                height: 39px;
                border: 1px 0 sold #f5f5f5;
            }
        }
    }

</style>