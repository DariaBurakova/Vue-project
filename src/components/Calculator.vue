<template>
  <v-container>
    <img src="../assets/calkul.gif" >
    <h1>Welcome to Calculator</h1>

    <input  v-model.number="operand1" value="operand1"/>
    <input v-model.number="operand2" value="operand2"/>
    <div>
      <v-btn color="secondary"
              elevation="4" v-for="item in operands" :key="item" :value="item" @click="calcul(item)">{{item}}</v-btn>
    </div>
    <div><h3>Результат:{{ result }}</h3> <br>
      <div class="error" v-show="error">На ноль делить нельзя</div>
    </div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div class="keyboard" v-show="checked!=false">
      <v-btn color="secondary"
              elevation="4" v-for="item in collection" :key="item" :value="item" @click="keyboard(item)">{{item}}</v-btn>
      <v-btn color="secondary"
              elevation="4" @click="delet()" >Delete</v-btn >
    </div>
    <div class="radio">
      <input type="radio" id="operand1" value="operand1" v-model="picked">
    <label for="operand1">Операнд1</label>
    <input type="radio" id="operand2" value="operand2" v-model="picked">
    <label for="operand2">Операнд2</label> <br>
      <span>Выбрано: {{ picked }}</span>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operands:['+','-','*','/','**','%'],
      operand1: 0,
      operand2: 0,
      result: 0,
      error:false,
      picked:'',
      collection:[0,1,2,3,4,5,6,7,8,9],
      checked:false
    }
  },
  methods: {
    calcul(item){
      this.error='';
      switch(item){
        case '+':
          this.sum();

          break;
        case '-':
          this.subtraction();
          break;
        case '/':
          this.division();
          break;
        case '*':
          this.multiplication();
          break;
        case '**':
          this.extent();
          break;
          case '%':
            this.remainder();
            break;
      }
    },
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
        this.error = true
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
        this.error = true
      }
    },
    keyboard(item){
      const num=String(item);
      if(this.picked=="operand1"){
        this.operand1=String(this.operand1)
        this.operand1+=num;
        this.operand1=Number(this.operand1)
      }
      if(this.picked=="operand2"){
        this.operand2=String(this.operand2)
        this.operand2+=num;
        this.operand2=Number(this.operand2)
      }
    },
    delet(){
      if(this.picked=="operand1"){
        this.operand1=String(this.operand1)
        this.operand1=this.operand1.slice(0,-1)
        this.operand1=Number(this.operand1)
      }
      if(this.picked=="operand2"){
        this.operand2=String(this.operand2)
        this.operand2=this.operand2.slice(0,-1)
        this.operand2=Number(this.operand2)
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
img{
  margin-top: 40px;
}
button {
  color: #fcfcfc;
  border: 1px solid rgb(213, 213, 213);
  margin: 15px 5px;
  padding: 5px;

}
.error{
  color:red;
}
</style>