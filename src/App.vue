<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components:{
    NavBar
  },
}
</script>

<style>
  #app{
    max-width: 980px;
    margin: 0 auto;
  }
  .completed{
    text-decoration: line-through;
  }
</style>
