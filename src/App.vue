<template>
  <div id="app">
    <HelloWorld />
    <img src="./assets/calkul.gif">
    <Calculator/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calculator
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
