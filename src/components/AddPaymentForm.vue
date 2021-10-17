<template>
<v-container class="container">
  <div class="form ">
    <h1 >My personal costs</h1>
  <v-btn color="secondary"
         elevation="4" class="addShow" @click="show=!show">ADD NEW COST +</v-btn>
  <v-form v-show="show" class="form" >
    <v-text-field  class="points" placeholder="Date" v-model="date"></v-text-field>
    <v-text-field  class="points" placeholder="Category" v-model="category" ></v-text-field>
    <v-select v-model="category"  class="points" :items="getCategoryList">
    </v-select>
    <v-text-field  class="points" placeholder="Value"   v-model.number="value"></v-text-field>
    <v-btn color="secondary"
           elevation="4" class="save" @click="onSaveClick">ADD +</v-btn>
  </v-form>
  </div>
</v-container>

</template>

<script>
import {mapMutations, mapGetters,mapActions} from 'vuex'


export default {
  name: 'AddPaymentForm',
  data(){
    return{
      date:'',
      category:'',
      value:null,
      show:false,
    }

},
  computed:{
    ...mapMutations([
      'addDataToPaymentsList',
    ]),
    ...mapGetters([
      'getCategoryList',
        'getPaymentsList'
    ]),
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    getParamRouterCategory (){
      console.log(this.$route.params.category)
      const categoryRoute = this.$route.params.category
      return categoryRoute
    },
    getParamRouterValue(){
      console.log(this.$route.params.value)
      const valueRoute = this.$route.params.value
      return valueRoute
    }

  },
  mounted () {
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  },
  methods:{
    onSaveClick () {
      const data = {
        id:this.getPaymentsList.length +1,
        date: this.date || this.getCurrentDate,
        category: this.category || this.getParamRouterCategory,
        value: this.value || this.getParamRouterValue
      }
      this.$store.commit('addDataToPaymentsList', data)
    },
    ...mapActions([
      'loadCategories'
    ]),


  }
}
</script>

<style lang="scss" scoped >
.container{
  margin:40px auto;
  width: 400px;
}
.addShow{
  margin-top: 10px;

}
.form{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}
.points{
  margin-top:10px;
  padding:5px;

}
.points:hover{
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.save{
  margin-top:15px;
  padding:5px 10px;
  background-color: #66CDAA;
  border:solid 1px #dad8d5;
  font-weight:bold;
  color:#FFFFFF;
}
.save:hover{
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

</style>