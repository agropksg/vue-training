<template>
  <div class="main-page">
    <h2>All tasks</h2>
    <ul>
      <li v-for="(item, index) in items" 
        :key='index'>
        <TodoItem :item='item' />
      </li>
    </ul> 
    <AddTodoItem @addItem="addTodoItem" />   
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from '../components/TodoItem.vue';
import AddTodoItem from '../components/AddTodoItem.vue';
import store from '../store.js'

export default {
  computed: {
    ...mapGetters({
      items: 'getAllTodoItems'
    })
  },
  components: { 
    TodoItem, AddTodoItem
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
