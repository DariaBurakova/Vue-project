<template>
  <div id="app">

    <AddPaymentForm/>

    <PaymentsDisplay :items="getPaymentsList" />
    <Calculator v-if="0"/>
    <Pagination/>

  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import Calculator from './components/Calculator.vue'
import Pagination from './components/Pagination.vue'

import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Pagination,
    PaymentsDisplay,
    Calculator,
    AddPaymentForm,
  },
  computed:{
    ...mapGetters([
      'getPaymentsList',
    ]),
  },
  methods:{
    ...mapMutations([
      'setPaymentsListData',
    ]),
    ...mapActions([
       'fetchData',
    ]),

  },
  created () {
    this.fetchData(1)
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
  margin-top: 60px;
  margin-left:30px;
}
</style>
