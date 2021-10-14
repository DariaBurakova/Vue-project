<template>
<div>
  <header class="header" >
    <div class="container_router">
      <router-link  to="/home"   class="router">Главная</router-link>
      <router-link to="/FormPage" class="router">Форма</router-link>
      <router-link to="/Calculator" class="router">Калькулятор</router-link>
    </div>
  </header>
  <router-view />
</div>
</template>

<script>
export default {
  name: "MainPage.vue",
created() {
   if(this.$route.params.category == 'Food'){
     this.$router.push({name: 'FormPage', params: {category: 'Food',value: '200'}})
   }
  if(this.$route.params.category=='Transport'){
       this.$router.push({name: 'FormPage', params: {category: 'Transport',value: '50'}})
   }
  if(this.$route.params.category=='Entertainment '){
    this.$router.push({name: 'FormPage', params: {category: 'Entertainment ',value: '2000'}})
  }

  }
}
</script>

<style scoped>
.header{
  width: 500px;
  margin: 20px auto;
  background-color:#66CDAA;
  border-radius: 5px;
  height: 60px;
}
.container_router{
  display:flex;
  justify-content: space-around;
}
.router{
  background-color:#66CDAA;
  border-radius: 5px;
  height: 60px;
  padding: 10px 2px;
  text-decoration: none;
  color:ivory;
  font-weight: bold;
  font-size: 25px;
  box-sizing: border-box;
}
.router:hover{
  border-radius: 5px;
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>