import Vue from 'vue'
import Vuex from 'vuex'
import lineModle from './modules/linelist'
import collectModle from './modules/collect'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    linelist: lineModle,
    collect: collectModle
  }
})
export default store
