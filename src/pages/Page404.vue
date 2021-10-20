<template>
<div >
  <img src="../assets/404two.png" alt="404" class="notFind">
  <h1>Sorry, this page doesn't exist...yet</h1>
  <v-btn color="secondary"
         elevation="4"
         x-large
         @click="$router.push(({ name: 'MainPage' }))" class="buttonFind">Home</v-btn>
</div>

</template>

<script>

export default{
name:"NotFound"
}

</script>
<style scoped>
.notFind{
  width: 600px;
  margin: 100px auto;
}
.buttonFind{
  text-decoration: none;
  color:white;
  font-weight: bold;
  font-size: 25px;
  border:none;
  text-align: center;
}
</style>