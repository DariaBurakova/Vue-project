<template>
  <div class="container">
    <router-link to="{ name: 'PagePayments', params: { value: item.value } }"></router-link>
    <div class="title">
      <span class="article">#</span>
      <span class="article">Data</span>
      <span class="article">Category</span>
      <span class="article">Value</span>
    </div>
    <div v-for="item in items" :key="item.id" class="list" >
      <div>{{item.id}}</div>
      <div>{{item.date}}</div>
      <div>{{item.category}}</div>
      <div>{{item.value}}</div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'PaymentsDisplay',
  computed: {
     items(){
      return this.$store.getters.getActiveList
    },

  },
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
  margin:15px auto;
}
.container:hover{
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
