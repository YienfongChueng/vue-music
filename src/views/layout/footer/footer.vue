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
                   @timeupdate="onTimeupdate"
                   @loadedmetadata="onLoadedmetadata"
                   :src="musicDetail.music" controls="controls" muted autoplay hidden>
            </audio>
                <!-- <audio controls hidden id="myAudio" >
                    <source id="palyer" v-bind:src="musicSrc" type="audio/mpeg">
                </audio> -->
                <i :class="playAndPauseClass"></i>
            </span>
            <span class="layout-footer-paly-next" @click="palyNext">
                <i class="el-icon-arrow-right"></i>
            </span>
        </div>
        <div class="layout-footer-processing">
            <span class="layout-footer-processing-bar">
                <span class="layout-footer-processing-bar-inner" :style="{ width: playPercent + '%' }"></span>
                <span class="layout-footer-processing-bar-dot" :style="{ left: playPercent + '%' }"></span>
            </span>
            <span class="layout-footer-processing-info">
                <span class="layout-footer-processing-speed">倍速</span>
                <span class="layout-footer-processing-time">{{audio.currentTime | formatSecond}} / {{audio.maxTime | formatSecond}}</span>  
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
import { mapState } from 'vuex';
import * as Api from '@api';

function realFormatSecond(second) {
    let secondType = typeof second;
    if (secondType === 'number' || secondType === 'string'){
        second = parseInt(second);
        let hours = Math.floor(second / 3600 );
        second = second - hours * 3600;
        let minute = Math.floor(second / 60);
        second = second - minute * 60;
        return hours + ":" + ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2);
    }else {
        return '0:00:00';
    }
}

export default {
    name: 'layout-footer',
    data() {
        return {
            audio: {
                playing: false,
                currentTime: 0,//音频当前播放时长
                maxTime: 0 //音频最大播放时长
            },
        }
    },
    methods: {
        //控制音频的播放与暂停
        playAndPause() {
            return this.audio.playing ? this.pause() : this.play();
        },
        //播放音频
        play() {
            this.audioRef.play();
        },
        pause() {
            this.audioRef.pause();
        },
        //当音频播放
        onPlay() {
            this.audio.playing = true;
        },
        //当音频暂停
        onPause() {
            this.audio.playing = false;
        },
        //当timeupdate事件大概每秒一次，用来更新音频的当前播放时间
        onTimeupdate(res) {
            this.audio.currentTime = res.target.currentTime;
        },
        onLoadedmetadata(res) {
            this.audio.maxTime = parseInt(res.target.duration);
        },
        palyBefore() {
            this.$store.commit('opMusicIndex', 'pre');
            this.$store.dispatch('getDetailMusic').then(() => {
                this.audioRef.play();
            })
        },
        palyNext() {
            this.$store.commit('opMusicIndex', 'add');
            this.$store.dispatch('getDetailMusic').then(() => {
                this.audioRef.play();
            })
        },
    },
    computed: {
        //计算属性动态改变按钮的现实
        playAndPauseClass: function() {
            return  (this.audio.playing) ? 'playAndPause el-icon-video-pause' : 'playAndPause el-icon-video-play' 
        },
        playPercent: function() {
            return (this.audio.currentTime / this.audio.maxTime) * 100;
        },
        ...mapState([
            'musicList',
            'musicDetail',
            'musicIndex',
            'audioRef'
        ])
    },
    filters: {
        //将整数转化成时分秒
        formatSecond(second = 0) {
            return realFormatSecond(second);
        }
    },
    mounted() {
        this.$store.commit('getAudio',this.$refs.audio);
    }
}
</script>
<style lang="scss">
    $height: 65px;
    @keyframes dotShine {
        from {
            box-shadow: none;
        }
        to {
            box-shadow: 0 0 20px 2px #FFFEA1;
        }
    }
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
                position: relative;
                display: inline-block;
                width: 700px;
                height: 2px;
                background: #ffd;
                &-inner {
                    position: absolute;
                    height: 100%;
                    width: 0;
                    background: linear-gradient(left, #C5C5FF, #A2DDFF);
                    top: 0;
                    left: 0;
                }
                &-dot {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    animation: dotShine 3s linear 0s infinite;
                    animation-direction: alternate;
                }

            }
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