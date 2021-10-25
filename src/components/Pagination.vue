<template>
  <v-container class="pages container">
    <v-icon>
      &#8249;</v-icon>
  <div class="num" v-for="(item,index) in page" :key="index"   @click="onclick(index)">{{item}}</div>
    <v-icon>
      &#8250;</v-icon>
  </v-container>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
  name: "Pagination",
  data(){
    return{
      item:1
    }
  },
  computed:{
    ...mapGetters('payments',['getPaymentsList']),
    page(){
      return Math.ceil(this.getPaymentsList.length / 5)

    },
  },
  methods:{
    ...mapMutations('payments',['ChangePage']),
    onclick(index){
 this.ChangePage(index)
    },

  }

}
</script>

<style scoped>
.num{
  font-weight: initial;
  padding: 5px;
  cursor: pointer;
}
.num:hover{
  padding: 2px;
}
.num:active{
  background-color:#dbd7d7;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
}
.pages{
  display:flex;
  justify-content:center;
}
.container{
  width: 400px;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;

  margin: 20px auto;
}
</style>