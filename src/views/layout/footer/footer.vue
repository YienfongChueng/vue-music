<template>
    <div class="layout-footer">
        <div class="layout-footer-play">
            <span class="layout-footer-play-before" @click="palyBefore">
                <i class="el-icon-arrow-left"></i>
            </span>
            <span class="layout-footer-play-begin" @click="playAndPause" >
                <!-- 此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素 -->
            <audio ref="audio" 
                   @pause="onPause"
                   @play="onPlay"
                   v-bind:src="musicSrc" controls="controls" muted hidden>
            </audio>
                <!-- <audio controls hidden id="myAudio" >
                    <source id="palyer" v-bind:src="musicSrc" type="audio/mpeg">
                </audio> -->
                <i v-bind:class="playAndPauseClass"></i>
            </span>
            <span class="layout-footer-paly-next" @click="palyNext">
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

//  ../../../assets/周深 - 漂洋过海来看你.mp3
//  ../../../assets/纯音乐 - 天空之城 (钢琴版).mp3
//  ../../../assets/纯音乐 - 雨的印记 (钢琴).mp3
export default {
    name: 'layout-footer',
    data() {
        return {
            // playAndPauseClass: 'playAndPause el-icon-video-play',
            musicSrc: '../../../assets/周深 - 漂洋过海来看你.mp3',
            audio: {
                playing: false
            }
        }
    },
    methods: {
        //控制音频的播放与暂停
        playAndPause() {
            return this.audio.playing ? this.pause() : this.play();
        },
        //播放音频
        play() {
            //debug
            console.log(this.$refs.audio);
            // this.$refs.audio.play();
        },
        pause() {
            this.$refs.audio.pause();
        },
        //当音频播放
        onPlay() {
            this.audio.playing = true;
        },
        //当音频暂停
        onPause() {
            this.audio.playing = false;
        },
        
        // playAndPause()  {
        //     let myAudio = document.getElementById("myAudio");
        //     //debug
        //     console.log(myAudio);
        //     if(myAudio && myAudio.paused) {
        //         myAudio.play() ;//播放
        //         this.playAndPauseClass = 'playAndPause el-icon-video-pause';
        //     }else {
        //         myAudio.pause() ;//暂停
        //         this.playAndPauseClass = 'playAndPause el-icon-video-play';
        //     }
        // },
        palyBefore() {
            // let myAudio = document.getElementById("myAudio");
            // this.musicSrc =  "../../../assets/纯音乐 - 天空之城 (钢琴版).mp3";
            // myAudio.play();//播放
            //  //debug
            // console.log("beforre");
            // console.log(myAudio);
               
        },
        palyNext() {
            // let myAudio = document.getElementById("myAudio");
            // this.musicSrc = "../../../assets/纯音乐 - 雨的印记 (钢琴).mp3";
            // myAudio.play() ;//播放
            //  //debug
            // console.log("next");
            // console.log(myAudio);
        }
    },
    computed: {
        //计算属性动态改变按钮的现实
        playAndPauseClass: function() {
            //debug
            console.log(this.audio.playing);
            return  (this.audio.playing) ? 'playAndPause el-icon-video-pause' : 'playAndPause el-icon-video-play' 
        }
    }
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