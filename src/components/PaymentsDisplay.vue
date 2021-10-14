<template>
  <div class="container">

    <div class="title">
      <span class="article">#</span>
      <span class="article">Data</span>
      <span class="article">Category</span>
      <span class="article">Value</span>
      <span class="refactor"></span>
    </div>

    <div v-for="(item,idx) in items" :key="idx+ 1" class="list" >
      <div>{{item.id}}</div>
      <div>{{item.date}}</div>
      <div>{{item.category}}</div>
      <div>{{item.value}}</div>
      <div class="refactor"  :value="item.id" @click="$modal.show(item)">{{img}}
      </div>
      <transition name="fade">
      <ModalWindow class ="modalWindow" v-if="item.id===activeID" :item="item"/>
      </transition>
    </div>
  </div>
</template>
<script>
import ModalWindow from "./ModalWindow";
export default {
  name: 'PaymentsDisplay',
  components: { ModalWindow},
  computed: {
    items() {
      return this.$store.getters.getActiveList
    },
  },
  data() {
return {
    img:'⋮' ,
    activeID:null
  }
},
  props:{},
  methods:{
  onShown(param){
    this.activeID=param.id

},
    onHide(){
this.activeID=null
    },
  },
mounted() {
    this.$modal.EventBus.$on('shown',this.onShown)
    this.$modal.EventBus.$on('hide',this.onHide)
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
.refactor{
  content:'\22EE';
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
