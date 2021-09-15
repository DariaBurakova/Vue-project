<template>
  <div>
    <h1>Welcome to Calculator</h1>
    <input v-model.number="operand1"/>
    <input v-model.number="operand2"/>
    <div>
      <button v-on:click="sum()">+</button>
      <button v-on:click="subtraction()">-</button>
      <button v-on:click="division()">/</button>
      <button v-on:click="multiplication()">*</button>
      <button v-on:click="extent()">**</button>
      <button v-on:click="remainder()">%</button>
    </div>
    <div><h3>Результат:{{ result }}</h3> <br>
      <h3>Ошибка:{{ error }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: ''
    }
  },
  methods: {
    sum() {
      this.result = this.operand1 + this.operand2
    },
    subtraction() {
      this.result = this.operand1 - this.operand2
    },
    division() {
      if (this.operand2 != 0) {
        this.result = this.operand1 / this.operand2
      } else {
        this.error = 'На ноль делить нельзя'
      }
    },
    multiplication() {
      this.result = this.operand1 * this.operand2
    },
    extent() {
      this.result = this.operand1 ** this.operand2
    },
    remainder() {
      if (this.operand2 != 0) {
        this.result = Math.floor(this.operand1 / this.operand2)
      } else {
        this.error = 'На ноль делить нельзя'
      }
    }

  }
}

</script>
<style scoped>
input {
  padding: 5px;
  box-shadow: rgba(0, 0, 0, .5) 3px 10px 10px -10px;
  color: #777674;
  border: solid 1px #dad8d5;
  margin-bottom: 10px;
}

button {
  color: #fcfcfc;
  background-color: rgb(138, 127, 142);
  border: 1px solid rgb(213, 213, 213);
  margin: 15px 5px;
  padding: 5px;

}
</style>