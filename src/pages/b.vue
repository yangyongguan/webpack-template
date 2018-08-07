<template>
  <div v-if="isLoading">
    我是B组件：{{count}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'b',
  computed: {
    ...mapGetters(['count']),
    isLoading () {
      return this.$store.state.app.isLoading
    }
  }
}
</script>

<style scoped>

</style>
