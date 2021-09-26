<template>
<div class="container pages">
  <div class= "arrow" >&#706;</div>
  <div class="num"  v-for="item in page" :key="item"   @click="onclick(item)">{{item}}</div>
  <div class= "arrow"  > &#707;</div>
</div>
</template>

<script>
export default {
  name: "Pagination",
  props:{
      length:Number,
      n: Number,
    p:Number,
  },
  computed:{
    page(){
      return Math.ceil(this.length / this.n)
    }
  },
  methods:{
    onclick(item){
      this.$emit('addPagination',item)
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
  margin-top:35px;
}
</style>