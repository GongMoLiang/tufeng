import axios from 'axios'
export default {
  namespaced: true,
  state: {
    lineList: [],
    total: 0
  },
  getters: {},
  mutations: {
    setlineList(state, payload) {
      state.lineList = payload
    },
    setTotal(state, payload) {
      state.total = payload
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
          // console.log(response.data.data)
          let total = response.data.data.total_count
          contect.commit('setlineList', contect.state.lineList.concat(result))
          contect.commit('setTotal', total)
          payload.callback && payload.callback()
        })
    }
  }
}
