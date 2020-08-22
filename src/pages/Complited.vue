<template>
  <div class="complited-page">
    <h2>Completed</h2>   
    <ul>
      <li v-for="(item, index) in items" :key='index'><TodoItem :item='item' /></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from '../components/TodoItem.vue';

export default {
  computed: mapState({
    items: function(state){
      let items = [];
      for(let i=0; i<state.listToDo.length; i++){
        if(state.listToDo[i].complite){
          items.push(state.listToDo[i]);
        }
      } 
      return items;
    }
  }),
  components:{
    TodoItem
  }
}
</script>