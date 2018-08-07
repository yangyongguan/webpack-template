<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <A @ontest="ontest"/>
    <B/>
  </div>
</template>

<script>
import A from './pages/a'
import B from './pages/b'

export default {
  name: 'app',
  components: {A, B},
  created () {
    console.log(this.$store.state)
    // this.$on('ontest', function (msg) {
    //   console.log(msg)
    // })s
  },
  methods: {
    ontest (msg) {
      console.log(msg)
    }
  }
}
</script>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    li {
      text-align: center;
    }
  }
</style>
