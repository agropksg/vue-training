<template>
  <div id="app">
    <Todos :todos="todos" />
    <AddTodo @addTodo="addTodo" /> 
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default {
  name: 'app',
  components:{
    Todos, AddTodo
  },
  data(){
    return{
      todos:[
        {
          id:1,
          title:'Go workout',
          completed:false
        },
        {
          id:2,
          title:'Do Laundry',
          completed:false
        },
        {
          id:3,
          title:'Cook food',
          completed:false
        }
      ]
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos.push(newTodoObj);
    }
  }
}
</script>

<style></style>
