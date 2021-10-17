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


export default {
  name: "Pagination",
  data(){
    return{
      item:1
    }
  },
  computed:{
    page(){
      return Math.ceil(this.$store.getters.getPaymentsList.length / 5)

    },

  },
  methods:{
    onclick(index){
 this.$store.commit('ChangePage',index)
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
.arrow{
  margin-top:7px;
  font-weight:bold;
  cursor: pointer;
}
.container{
  width: 400px;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;

  margin: 20px auto;
}
</style>