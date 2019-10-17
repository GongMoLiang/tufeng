// 用来做收藏的Vuex 库
export default {
  namespaced: true,
  state: {
    collectList: []
  },
  mutations: {
    setcollectList(state, payload) {
      state.collectList.push(payload)
    }
  }
}
