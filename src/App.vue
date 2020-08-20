<template>
  <div id="app">
    <Todos :items = 'list' />
    <AddTodoItem @add-func="addToList" />
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodoItem from './components/AddTodoItem';
  export default {
    name: 'app',
    components:{
      Todos, AddTodoItem
    },
    data(){
      return {
        list:[
          {
            id:2,
            name:'Nashaniva',
            status:false
          },
          {
            id:4,
            name:'tut.by',
            status:false
          },
          {
            id:3,
            name:'Onliner.by',
            status:true
          }
        ]
      }
    },
    methods:{
      addToList(obj){
        this.list.push(obj);
      }
    }  
  }
</script>

<style></style>
