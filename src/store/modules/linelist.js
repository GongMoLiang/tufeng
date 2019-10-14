import axios from 'axios'
export default {
  namespaced: true,
  state: {
    lineList: []
  },
  getters: {},
  mutations: {
    setlineList (state, payload) {
      state.lineList = payload
    }
  },
  actions: {
    getlineList (contect, payload) {
      axios.get('https://app.toursforfun.com/api/search/category?customCurrency=CNY&custom_tag=&page=1&pageSize=10&product_line=boutique').then(response => {
        let result = response.data.data.product_list
        contect.commit('setlineList', result)
      })
    }
  }
}
