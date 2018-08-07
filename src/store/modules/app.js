import * as types from '../mutation-types'

const state = {
  isLoading: false
}

const getters = {
  loadingStatus: state => state.isLoading
}

const mutations = {
  [types.LOADING_STATUS] (state, status) {
    state.isLoading = status
  }
}

export default {
  state,
  getters,
  mutations
}
