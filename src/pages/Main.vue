<template>
  <div class="main-page">
    <h2>All tasks</h2>
    <ul>
      <li v-for="(item, index) in items" :key='index'>
        <TodoItem :item='item' />
      </li>
    </ul>    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoItem from '../components/TodoItem.vue';

export default {
  computed: mapState({
    items: state => state.listToDo
  }),
  components:{
    TodoItem
  }
}
</script>