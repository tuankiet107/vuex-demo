<template>
  <div class="hello">
    <div class="title">
      <h2>Please click any button to see what happens</h2>
    </div>
    <button class="btn btn-incre" @click="callIncrementMutation">Tang</button>
    <button class="btn btn-decre" @click="tryAsync">Giam</button>
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

<style lang="scss" scoped>
@import "@/assets/_shared";
.hello{
  .title{
    text-transform: $textUper;
  }
  .btn{
    cursor: pointer;
    padding: $paddingBtn;
    margin: 20px;
    border: none;
    color: #fff;
  }
  .btn-incre{
    background-color: $backgroundBtnSuccess;
  }
  .btn-decre{
    background-color: $backgroundBtnDanger;
  }
}

</style>
