<template>
  <div class="add-todo">
    <form @submit.prevent="addItem()">
      <input type="text" 
        v-model="name" 
        name="item-titlle"
        placeholder="write new todo item">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name:'AddTodoItem',

  data(){
    return {
      name: ''
    }
  },

  methods:{
      addItem(){
        const newTodoObj = {
          id: uuidv4(),
          name: this.name,
          complite: false
        }

        this.$emit('addItem', newTodoObj);
        this.name = '';
      }
  }
}
</script>
