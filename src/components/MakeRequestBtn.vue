<template>
  <div @click="makeRequest"
    class="make-request-btn">
    Фильтровать
  </div>
</template>


<script>
export default {
  name: "MakeRequest",
  methods:{
    makeRequest(){
      this.$emit("doRequest")
    }
  }
}
</script>    
<style scoped>
  .make-request-btn{
    background: #0fad0a;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
  }
</style>
