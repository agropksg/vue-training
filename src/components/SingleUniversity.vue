<template>
  <div class="single-university">
    <img :src="university.logo"
       class="single-university__img">
    <div class="single-university__description">
      <div class="single-university__name">{{university.title}}</div>    
      <div class="single-university__city">{{university.city.title}}</div> 
    </div>
      
  </div>
</template>


<script>
export default {
  name: "SingleUniversity",
  props: {
    university: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .single-university{
    display: flex;
    align-items: center;
    margin: 0 0 30px 0;
  }
  .single-university__img{
    max-width: 70px;
    width: 100%;
    margin-right: 15px;;
  }
  .single-university__name{
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .single-university__city{
    color: red;
    font-weight: bold;
  }
</style>
