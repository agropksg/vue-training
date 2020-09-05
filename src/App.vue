<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components:{
    NavBar
  },
  methods:{
    addTodoItem(obj){
      this.add_item(obj)
    },
    ...mapActions([
      'add_item'
      ])
  }
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
