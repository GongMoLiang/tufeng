import axios from 'axios'
export default {
  namespaced: true,
  state: {
    lineList: []
  },
  getters: {},
  mutations: {
    setlineList(state, payload) {
      state.lineList = payload
    }
  },
  actions: {
    getlineList(contect, payload) {
      axios
        .get('https://app.toursforfun.com/api/search/category', {
          params: {
            customCurrency: 'CNY',
            custom_tag: '',
            page: payload.page,
            pageSize: 10,
            product_line: payload.type
          }
        })
        .then(response => {
          let result = response.data.data.product_list
          contect.commit('setlineList', contect.state.lineList.concat(result))
        })
    }
  }
}
