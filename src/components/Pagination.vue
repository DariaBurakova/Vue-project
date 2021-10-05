<template>
<div class="container pages">
  <div class= "arrow" >&#706;</div>
  <div class="num"  v-for="(item,index) in page" :key="item"   @click="onclick(index)">{{item}}</div>
  <div class= "arrow"  > &#707;</div>
</div>
</template>

<script>


export default {
  name: "Pagination",
  computed:{
    page(){
      return Math.ceil(this.$store.getters.getPaymentsList.length / 5)

    },

  },
  methods:{
    onclick(index){
      /*this.$store.dispatch('fetchData',item)*/
 this.$store.commit('ChangePage',index)
    },

  }

}
</script>

<style scoped>
.num{
  margin:5px;
  cursor: pointer;;
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
}
.container{
  width: 400px;
  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;
  border:solid 1px #dad8d5;
  margin: 20px auto;
}
</style>