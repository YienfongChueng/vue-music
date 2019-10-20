import Vue from 'vue'
import Vuex from 'vuex'
import * as Api from '@api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicDetail: {},
    musicList: [],
    musicIndex: 0,
    total: 0,
    audioRef: null
  },
  mutations: {
    getMusicList(state, {list,total}) {
      state.musicList = list;
      state.total = total;
    },
    getMusicDetail(state,value) {
      state.musicDetail = value;
    },
    opMusicIndex(state,op='add') {
      let index = state.musicIndex;
      let currentIndex = op === 'add' ? ++index : --index;
      let musicLen = state.musicList.length;
      state.musicIndex = (currentIndex + musicLen) %  musicLen;
    },
    modifyMusicIndex(state,index) {
      state.musicIndex = index;
    },
    getAudio(state,value) {
      state.audioRef = value;
    }

  },
  actions: {
    getDetailMusic(context) {
      return new Promise((resolve,reject) => {
        Api.Music.getMusicDetail(context.state.musicList[context.state.musicIndex]['id']).then(res => {
          context.commit('getMusicDetail',res.detail);
          resolve();
        });
      });
    }
  }
})
