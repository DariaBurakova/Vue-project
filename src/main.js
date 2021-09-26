import Vue from 'vue'
import App from './App.vue'
import AddPaymentForm from "./components/AddPaymentForm";

Vue.component('AddPaymentForm',AddPaymentForm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
