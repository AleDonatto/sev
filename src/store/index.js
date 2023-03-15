import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    step: 0,
    count: 0,
    countShowImage: 1,
    windowSize:null,
    windowHeight:null,
    canNext:true,
    section: 2, 
    audioInitialized: false,

    answeredQuiz1: false,
    answeredQuiz2: false,
    answeredQuiz3: false,

    audioPaused:true,
    mainMenuLoaded:false,
    //liderazgo
    option:0,
    //estilos-liderazgo
    opt:0,
  },
  actions,
  getters,
  mutations

})
