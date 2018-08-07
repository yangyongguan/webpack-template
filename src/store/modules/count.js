import * as types from '../mutation-types'

const state = {
  count: 0
}

const getters = {
  count: state => state.count
}

const mutations = {
  [types.COUNT_NUM] (state, status) {
    state.count = status
  }
}

const actions = {
  countAddAction ({commit, state}, reload) {
    // setTimeout(() => {
    //   commit(types.COUNT_NUM, state.count + reload)
    // }, 3000)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.COUNT_NUM, state.count + reload)
        resolve()
      }, 3000)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
