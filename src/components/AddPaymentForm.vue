<template>
<div class="container">
  <div class="form ">
    <h1 >My personal costs</h1>
  <button class="addShow" @click="show=!show">ADD NEW COST +</button>
  <div v-show="show" class="form" >
    <input class="points" placeholder="Date" v-model="date"/>
    <input  class="points" placeholder="Category" v-model="category" />
    <select v-model="category" class="points" >
      <option v-for ="option in getCategoryList" :key="option"  >{{option}}</option>
    </select>
    <input  class="points" placeholder="Value"   v-model.number="value"/>
    <button class="save" @click="onSaveClick">ADD +</button>
  </div>
  </div>
</div>

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
      'getCategoryList'
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
        date: this.date || this.getCurrentDate,
        category: this.category || this.getParamRouterCategory,
        value: this.value || this.getParamRouterValue
      }
      this.$store.commit('addDataToPaymentsList', data)
    },
    ...mapActions([
      'loadCategories'
    ]),
  },
}
</script>

<style lang="scss" scoped >
.container{
  margin:0 auto;
  width: 400px;
}
.addShow{
  border:none;
  padding:5px 20px;
  background-color: #66CDAA;
  font-weight:bold;
  color:#FFFFFF;

}
.addShow:hover{
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.form{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}
.points{
  margin-top:15px;
  padding:5px;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
  border:solid 1px #dad8d5;
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