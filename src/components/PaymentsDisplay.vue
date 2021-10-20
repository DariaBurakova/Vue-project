<template>
  <v-container  class="container">
    <v-col class="title">
      <v-list class="article">#</v-list>
      <v-list class="article">Data</v-list>
      <v-list class="article">Category</v-list>
      <v-list class="article">Value</v-list>
      <v-list class="refactor"></v-list>
    </v-col>
    <v-row v-for="(item,idx) in items" :key="idx+ 1" class="list" >
      <v-list>{{item.id}}</v-list>
      <v-list>{{item.date}}</v-list>
      <v-list>{{item.category}}</v-list>
      <v-list>{{item.value}}</v-list>

      <div class="refactor"  :value="item.id" @click="$modal.show(item)">{{img}}
      </div>

      <transition name="fade">
      <ModalWindow class ="modalWindow" v-if="item.id===activeID" :item="item"/>
      </transition>
    </v-row>
  </v-container>

</template>
<script>
import ModalWindow from "./ModalWindow";
import {mapGetters} from "vuex";

export default {
  name: 'PaymentsDisplay',
  components: { ModalWindow},
  computed: {
    ...mapGetters('payments',['getActiveList']),
    items() {
      return this.getActiveList
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
<style scoped lang="scss">
.list{
  display:flex;
  justify-content: space-between;
  padding:10px;
  border-bottom:1px black solid;
}
.container{
  width: 400px;
  margin:40px auto;
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
