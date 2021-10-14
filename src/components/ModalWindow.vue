<template>
<div class="container_modal">
  <div  class="form" v-if="flag">
    <input class="points" placeholder="Date" v-model="changeItem.date"/>
    <input  class="points" placeholder="Category" v-model="changeItem.category"/>
    <input  class="points" placeholder="Value"  v-model.number="changeItem.value"/>
    <button class="save" @click="onSaveClick">Refactor</button>
  </div>
  <div class="modal">
    <span class="modal_span" @click.prevent="refactorItem()">&#9998; Редактировать</span>
    <span class="modal_span" @click.prevent="deleteItem">&#128465; Удалить</span>
  </div>

</div>
</template>

<script>

import {mapActions, mapGetters, mapMutations,mapState} from 'vuex'
export default {
  name: "ModalWindow",
  data(){
    return{
      flag:false,
      date:'',
      category:'',
      value:null
    }
  },
  mounted() {
    const { date, category, value } = this.changeItem
    this.date = date
    this.value = value
    this.category = category
  },
  computed:{
  ...mapState(['changeItem']),
...mapMutations([
  'addDataToPaymentsList',
]),
...mapGetters([
  'getPaymentsList',
]),
    getCurrentDate () {
  const today = new Date();
  const d = today.getDate()
  const m = today.getMonth() + 1
  const y = today.getFullYear()
  return `${d}.${m}.${y}`
},
},
  props:['item'],
  methods: {
    ...mapMutations([
      'setChangeItem'
    ]),
    refactorItem() {
      if(this.flag==false){
        this.flag=true
        this.$store.commit('setChangeItem',this.item)
      }
    },
    deleteItem() {
      this.removeItem(this.item)
      this.$modal.hide()
    },
    onSaveClick () {
     const { category, date, value } = this.changeItem
      const data = {
        id:this.getPaymentsList.length +1,
        date: date|| this.getCurrentDate,
        category: category,
        value: value
      }
      this.addDataToList(data)
      this.$modal.hide()
    },
    ...mapActions([
      'loadCategories',
      'removeItem',
      'addDataToList'
    ]),
  }
}

</script >

<style scoped >
.form{
 margin-left: 180px;
  margin-bottom: 5px;

}
.modal{
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
  border:solid 1px #dad8d5;
  position: absolute;
  left:350px;
  right: 0;
  background-color: #fcfcfc;
  opacity: 1;
}
.modal_span{
  width: 120px;
  font-size: small;
  padding: 2px 3px;
  box-sizing: border-box;
}
.modal_span:hover{
  background-color: #dad8d5;
}
</style>