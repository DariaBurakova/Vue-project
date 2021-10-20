<template>
<div class="container_modal">
  <v-form permanent class="form" v-if="this.flag">
    <v-text-field class="points" placeholder="Date" v-model="changeItem.date"/>
    <v-text-field  class="points" placeholder="Category" v-model="changeItem.category"/>
    <v-text-field class="points" placeholder="Value"  v-model.number="changeItem.value"/>
    <v-btn class="save" @click="onSaveClick">Refactor</v-btn>
  </v-form>
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
    ...mapState('payments',['changeItem','flag']),
...mapGetters('payments',['getPaymentsList']),
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
    ...mapMutations('payments',[
      'setChangeItem',
      'setFlag',
      'addDataToPaymentsList',
    ]),
    ...mapActions('payments',[
      'loadCategories',
      'removeItem',
      'addDataToList'
    ]),
    refactorItem() {
      this.setFlag(true)
        this.setChangeItem(this.item)
    },
    deleteItem() {
      this.removeItem(this.item)
      this.$modal.hide()
    },
    onSaveClick() {
     const { category, date, value } = this.changeItem
      const data = {
        id:this.getPaymentsList.length +1,
        date: date|| this.getCurrentDate,
        category: category,
        value: value
      }
      this.addDataToPaymentsList(data)
      this.$modal.hide()
    },

  }
}

</script >

<style scoped >
.form{
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
}
.modal{
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
  border:solid 1px #dad8d5;
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
.save{
  margin-bottom: 10px;
}
</style>