<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <AddTodoItem @addItem="addTodoItem" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AddTodoItem from './components/AddTodoItem.vue';
import store from './store.js'

export default {
  name: 'App',
  components:{
    NavBar, AddTodoItem
  },
  methods:{
    addTodoItem(obj){
      store.dispatch({
        type: 'add_item',
        amount: obj
      });
    }
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
