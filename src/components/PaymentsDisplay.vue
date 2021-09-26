<template>
  <div class="container">
    <div class="title">
      <span class="article">#</span>
      <span class="article">Data</span>
      <span class="article">Category</span>
      <span class="article">Value</span>
    </div>
    <div v-for="(item,idx) in items" :key="idx" class="list">
      <div>{{idx +1}}</div>
      <div>{{item.date}}</div>
      <div>{{item.category}}</div>
      <div>{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props:{
    items:{
      type:Array,
      required:true,
      default:() =>[],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
  display:flex;
  justify-content: space-between;
  padding:10px;
  border-bottom:1px black solid;
}
.container{
  width: 400px;
}
.title{
  display:flex;
  justify-content: space-between;;
  padding:10px;
  border-bottom:1px black solid;
}
.article{
  font-weight:bold;
}
</style>
