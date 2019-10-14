import Vue from 'vue'
import Vuex from 'vuex'
import lineModle from './modules/linelist'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    linelist: lineModle
  }
})
export default store
