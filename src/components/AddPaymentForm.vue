<template>
  <div class="form">
    <h1 >My personal costs</h1>
  <button class="addShow" @click="show=!show">ADD NEW COST +</button>
  <div v-show="show" class="form" >
    <input class="points" placeholder="Date" v-model="date"/>
    <input  class="points" placeholder="Category"  v-model="category"/>
    <input  class="points" placeholder="Value"   v-model.number="value"/>
    <button class="save" @click="onSaveClick">ADD +</button>
  </div>
  </div>
</template>

<script>
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
    getCurrentDate () {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods:{
    onSaveClick () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      }
      this.$emit('addNewPayment', data)
    }
  },
}
</script>

<style lang="scss" scoped >
.addShow{
  border:none;
  padding:5px 20px;
  background-color: #66CDAA;
  font-weight:bold;
  border:solid 1px #dad8d5;
  color:#FFFFFF;
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
.save{
  margin-top:15px;
  padding:5px 10px;
  background-color: #66CDAA;
  border:solid 1px #dad8d5;
  font-weight:bold;
  color:#FFFFFF;
}
</style>