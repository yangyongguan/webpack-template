import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import count from './modules/count'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    app,
    count
  }
})

export default store
