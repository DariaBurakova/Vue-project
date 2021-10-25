<template>
  <v-app>
    <v-main>
    <router-view />
    </v-main>
  </v-app>
</template>
<script>
import {mapActions} from 'vuex'



export default {
  name: 'App',
  methods:{

    ...mapActions('payments',[
      'fetchData'
    ]),

  },

  created () {
    this.fetchData()
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
