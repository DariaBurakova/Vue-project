<template>
  <div>
    <div>
      <div class="linksContainer">
        <v-btn color="secondary"
         elevation="4 "
         v-for="item in list" :key="item.category" class="linksButton" @click="linkHandler(item)">
          {{item.category}}: {{item.params.value}}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {select} from '../assets/select'
import { mapMutations } from 'vuex'
export default {
  name: "Links",
  computed: {
    list () {
      return select
    }
  },
  methods: {
    ...mapMutations('payments', ['setFlag']),
    linkHandler(item) {
      const {category: name, params} = item
      if (this.$route.name !== name) {
        this.$router.push({name, params})
        this.setFlag(false)
      }
    },
  }
}
</script>

<style scoped>
.linksContainer {
   margin: 10px auto;
   max-width: 800px;
   display: flex;
   justify-content: space-between;
 }
.linksButton {
  margin: 10px 10px;
  padding: 20px 30px;
  border-radius: 5px;
box-sizing: border-box; 
  cursor: pointer;
}


</style>