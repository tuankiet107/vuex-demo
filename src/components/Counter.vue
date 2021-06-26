<template>
  <div class="hello">
    <button @click="tang">Tang</button>
    <button @click="decrementStoredNumber">Giam</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function(){
    return {

    }
  },
  methods: {
    tang(){
      this.$store.commit("incrementStoredNumber", 100)
    },
    ...mapMutations([
      'decrementStoredNumber', 
    ]),
  }
}
</script>

<style scoped>
</style>
