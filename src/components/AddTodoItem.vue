<template>
  <form @submit="addFunc">
    <input type="text" v-model="title" name="title">
    <button type="submit">Отправить</button>
  </form>
</template>

<script>

import { v4 as uuidv4 } from 'uuid';

export default {
  name:'addTodoItem',
  data(){
    return {
      title:''
    }
  },
  methods:{
    addFunc(event){
      event.preventDefault();
      const NewTodoObject = {
        id: uuidv4(),
        name:this.title,
        status:true
      }
      this.$emit('add-func', NewTodoObject);
    }
  }
}
</script>  