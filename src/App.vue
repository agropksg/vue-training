<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
<<<<<<< HEAD
=======
import AddTodoItem from './components/AddTodoItem.vue';
import { mapActions } from 'vuex';
>>>>>>> vuex

export default {
  name: 'App',
  components:{
    NavBar
  },
<<<<<<< HEAD
=======
  methods:{
    addTodoItem(obj){
      this.add_item(obj)
    },
    ...mapActions([
      'add_item'
      ])
  }
>>>>>>> vuex
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
