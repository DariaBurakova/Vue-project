<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import payments from "./store/payments";

export default {
  name: 'App',
  methods:{
    ...mapActions(payments[
       'fetchData'
    ]),

  },
  created () {
    this.$store.dispatch('fetchData')
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
