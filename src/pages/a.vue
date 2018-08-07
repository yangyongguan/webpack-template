<template>
  <div>
    <el-input v-model="addValue" placeholder="请输入内容"/>
    <el-button type="primary" @click="add">add</el-button>
    <el-button type="primary" @click="addInput">添加输入框值</el-button>
  </div>
</template>
<script>
import * as aStore from '../store/api/api'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'a',
  data () {
    return {
      addValue: 0
    }
  },
  computed: {
    ...mapGetters(['loadingStatus', 'count'])
  },
  methods: {
    ...mapMutations({
      // 将 `this.storeLoading()` 映射为 `this.$store.commit('LOADING_STATUS')`
      storeLoading: types.LOADING_STATUS
    }),
    ...mapActions({
      // 将 `this.addCount()` 映射为 `this.$store.dispatch('countAddAction')`
      addCount: 'countAddAction'
    }),
    add () {
      // aStore.storeLoading(this.$store, !this.loadingStatus)
      this.storeLoading(!this.loadingStatus)
      aStore.storeCountNum(this.$store, this.count + 1)
      this.$emit('ontest', `当前数值为${this.count}`)
    },
    addInput () {
      this.storeLoading(true)
      this.addCount(parseInt(this.addValue)).then(() => {
        alert(`完成action，count=${this.count}`)
      })
    }
  }
}
</script>

<style scoped>

</style>
