<template>
  <div class="hello">
    <button @click="tang">Tang</button>
    <button @click="giam">Giam</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {

    }
  },
  methods: {
    tang(){
      return this.$store.state.result++; 
    },
    giam(){
      return this.$store.state.result--;
    }
  }
}
</script>

<style scoped>
</style>
