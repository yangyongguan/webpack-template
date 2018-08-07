import * as types from '../mutation-types'

export const storeLoading = (store, data) => {
  store.commit(types.LOADING_STATUS, data)
}

export const storeCountNum = (store, data) => {
  store.commit(types.COUNT_NUM, data)
}
