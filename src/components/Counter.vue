<template>
  <div class="hello">
    <button @click="callIncrementMutation">Tang</button>
    <button @click="tryAsync">Giam</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function(){
    return {

    }
  },
  methods: {
    ...mapActions([
      'callIncrementMutation', 
      'tryAsync'
    ]),
  }
}
</script>

<style scoped>
</style>
