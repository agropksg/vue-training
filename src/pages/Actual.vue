<template>
  <div class="actual">
    <h2>Actual</h2>
    <ul>
      <li v-for="(item, index) in items" 
        :key='index'>
        <TodoItem :item='item' />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
import { mapGetters } from 'vuex';

export default {
  computed: {
    compltedItems(){
      this.items(false);
    },
    ...mapGetters({
      itemsByStatus: 'getTodoItemsByCompliteStatus'
    })
  },
  components:{
    TodoItem
  }
}
</script>
