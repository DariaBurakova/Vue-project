<template>
<div >
  <img src="../assets/404two.png" alt="404" class="notFind">
  <h1>Sorry, this page doesn't exist...yet</h1>
  <button @click="$router.push(({ name: 'MainPage' }))" class="buttonFind">Home</button>
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
  background-color:#66CDAA;
  border-radius: 5px;
  padding: 10px 10px;
  text-decoration: none;
  color:ivory;
  font-weight: bold;
  font-size: 25px;
  border:none;
  text-align: center;
}
.buttonFind:hover{
  border-radius: 5px;
  transform: scale(1.01);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>