<template>
    <div class="layout-main clear-fix">
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
                    <span class="layout-main-nav-parent-item-text">默认列表</span>
                    <ul class="layout-main-child-list">
                        <li class="layout-main-nav-clild-item">111</li>
                        <li class="layout-main-nav-clild-item">222</li>
                        <li class="layout-main-nav-clild-item">333</li>
                    </ul>
                </li>
                <li class="layout-main-nav-parent-item">
                     <span class="layout-main-nav-parent-item-text">最近播放</span>
                      <ul class="layout-main-nav-child-list">
                        <li class="layout-main-nav-clild-item">111</li>
                        <li class="layout-main-nav-clild-item">222</li>
                        <li class="layout-main-nav-clild-item">333</li>
                    </ul>
                </li>
                <li class="layout-main-nav-parent-item">
                    <span class="layout-main-nav-parent-item-text">最近播放视频</span>
                      <ul class="layout-main-child-list">
                        <li class="layout-main-nav-clild-item">111</li>
                        <li class="layout-main-nav-clild-item">222</li>
                        <li class="layout-main-nav-clild-item">333</li>
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
                <span class="layout-main-content-header-record">专辑</span>
                <span class="layout-main-content-header-lric">歌词</span>
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
        &-nav {
            box-sizing: border-box;
            width: 300px;
            float: left;
            border-right: 1px solid #f5f5f5;
            &-top {
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #f5f5f5;
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
                width: 300px;
                border: 1px 0 sold #f5f5f5;
            };
            &-parent-item {
                padding: 10px;
                border-bottom: 1px solid #f5f5f5;
                &-text {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            &-clild-item {
                font-size: 12px;
                padding-left: 20px;
            }

        };
        &-content {
            float: left;
            text-align: center;
            width: 900px;
            &-top {
                height: 37px;
                line-height: 37px;
                border-bottom: 1px solid #f5f5f5;
                &-stock,&-radio,&-online,&-listing,&-lric,&-ktv {
                    margin-left: 50px;
                    padding: 0 10px;
                    cursor: pointer;
                };
                &-stock:hover,&-radio:hover,&-online:hover,&-listing:hover,&-lric:hover,&-ktv:hover {
                     border-bottom: #018fe3 2px solid;
                     color: #018fe3;
                }
                &-stock {
                    border-bottom: #018fe3 2px solid;
                }
            };
            &-header {
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                border-bottom: #f5f5f5 1px solid;
                &-single,&-listing,&-mv,&-record,&-lric {
                    padding: 0 10px;
                    margin-left: 50px;
                    cursor: pointer;
                    font-size: 12px;
                };
                &-single:hover,&-listing:hover,&-mv:hover,&-record:hover,&-lric:hover {
                    color: #018fe3;
                }
            }
        }
    }

</style>