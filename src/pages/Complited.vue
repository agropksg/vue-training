<template>
  <div class="complited-page">
    <h2>Completed</h2>   
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

export default {
  computed: {
    items(){
      return this.$store.getters.getTodoItemsByCompliteStatus(true)
    }
  },
  components: {
    TodoItem
  }
}
</script>
