<template>
  <div id="app">
    <counter />
    <hr>
    <result />
    <hr>
    <other-result />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import OtherResult from './components/OtherResult.vue';
import Result from "./components/Result.vue";

export default {
  components: {
    Counter,
    Result,
    OtherResult,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
