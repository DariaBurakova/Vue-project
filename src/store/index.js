import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
import payments from './payments'
export default new Vuex.Store({
         modules:{
             payments
         }
})

