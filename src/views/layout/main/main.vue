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
                <div class="layout-main-content-table-bar">
                    <span class="layout-main-content-table-bar-search-result">
                        搜素到 <a href="#" class="layout-main-content-table-bar-search-result-singer">"周杰伦"</a>
                        的相关歌曲             
                    </span>
                    <span class="layout-main-content-table-bar-response">
                        对结果：
                        <a class="layout-main-content-table-bar-response-happy" href="#">满意</a>
                        <a class="layout-main-content-table-bar-response-said" href="#">不满意</a>
                    </span>
                    <span class="layout-main-content-table-bar-buttom">
                        <a href="#" class="layout-main-content-table-bar-buttom-all">
                            <i class="layout-main-content-table-bar-buttom-all-tan"></i>
                            播放全部
                        </a>
                        <a href="#" class="layout-main-content-table-bar-buttom-add">添加</a>
                        <a href="#" class="layout-main-content-table-bar-buttom-download">下载</a>
                    </span>

                </div>
                <div class="layout-main-content-table-main">
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        height="100%"
                        style="width: 100%;"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                            type="selection"
                            width="30">
                        </el-table-column>
                        <el-table-column
                            prop="song"
                            label="歌曲名"
                            width="350">
                        </el-table-column>
                        <el-table-column
                            prop="record"
                            label="专辑"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="times"
                            label="时长">
                        </el-table-column>
                        <el-table-column
                            prop="pop"
                            label="热度">
                        </el-table-column>
                        <el-table-column
                            label="操作">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout-main',
    data() {
      return {
        tableData: [{
          song: '周杰伦-告别气球',
          record: '《中国好声音》',
          times: '04:04',
          pop: '5'
        }, {
          song: '周杰伦-彩虹',
          record: '《我很忙》',
          times: '04:04',
          pop: '5'
        }, {
          song: '周杰伦-搁浅',
          record: '《七里香》',
          times: '04:04',
          pop: '5'
        }, {
          song: '周杰伦-东方破',
          record: '《中国好声音》',
          times: '04:04',
          pop: '5'
        }, {
          song: '周杰伦-告别气球1',
          record: '《中国好声音》',
          times: '04:04',
          pop: '5'
        }, {
          song: '周杰伦-告别气球2',
          record: '《中国好声音》',
          times: '04:04',
          pop: '5'
        },
        {
          song: '周杰伦-告别气球33',
          record: '《中国好声音》',
          times: '04:04',
          pop: '4'
        },
        {
          song: '周杰伦-告别气球333',
          record: '《中国好声音》',
          times: '04:04',
          pop: '2'
        },
         {
          song: '周杰伦-告别气球3',
          record: '《中国好声音》',
          times: '04:04',
          pop: '5'
        }],
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
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
            overflow-y: auto;
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
            width:880px;
            overflow: auto;
            height: 100%;
            padding: 0 18px 0 18px;
            box-sizing: border-box;
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
                border-bottom: #f5f5f5 2px solid;
                &-single,&-listing,&-mv,&-record,&-lric {
                    padding: 0 10px;
                    margin-left: 50px;
                    cursor: pointer;
                    font-size: 12px;
                };
                &-single:hover,&-listing:hover,&-mv:hover,&-record:hover,&-lric:hover {
                    color: #018fe3;
                }
            };
            &-table {
                //position: absolute;
                //top: 122px;
                //bottom: 66px;
                &-bar {
                    height: 40px;
                    line-height: 40px;
                    &-search-result {
                        float: left;
                        padding-left: 10px;
                        font-size: 12px;
                        color: #999;
                        &-singer {
                            color: #018fe3;
                            font-size: 14px;
                            cursor: pointer;
                        }
                    };
                    &-response {
                        color: #999;
                        font-size: 12px;
                        padding-left: 15px;
                        position: relative;
                        left: 135px;
                        &-happy,&-said {
                            color: #555;
                            border-bottom: #555 2px solid; 
                            padding: 0 5px;
                            font-size: 14px;
                            margin: 0 8px;
                            cursor: pointer;
                        }
                    };
                    &-buttom {
                        float: right;
                        font-size: 14px;
                        &-all {
                              color: #fff;
                              background: #169af3;
                              border: 1px solid #169af3;
                              border-radius: 2px;
                              padding: 5px;
                              padding-left: 25px;
                              position: relative;
                              margin-right: 5px;
                              &-tan {
                                  content: '';
                                  position: absolute;
                                  border-width: 10px;
                                  border-style: solid;
                                  top: 5px;
                                  left: 6px;
                                  border-color: transparent transparent transparent #fff;
                              }
                        };
                        &-add,&-download {
                            color: #666;
                            padding: 5px;
                            margin: 5px;
                            border: 1px solid #ccc;
                            border-radius: 5px;
                        }
                    }
                };
                &-main {
                   //position: absolute;
                   //top: 166px;
                   //bottom: 66px;
                }
            }
        }
      
    }

</style>