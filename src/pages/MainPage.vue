<template>
<div>
    <v-app-bar prominent color="secondary" class="container_router">
      <v-btn color="white"
             elevation="4"
             x-large>
        <router-link  to="/home"  class="router" >Главная</router-link></v-btn>
      <v-btn color="white"
             elevation="4"
             x-large>
        <router-link to="/FormPage" class="router">Форма</router-link></v-btn>
      <v-btn color="white"
             elevation="4"
             x-large>
        <router-link to="/Calculator" class="router">Калькулятор</router-link></v-btn>
    </v-app-bar>
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
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;
  color:black;
}
button{
  margin: 15px 5px;
  padding: 5px;
}

</style>