<template>
  <div class="actual">
    <h2>Actual</h2>
    <ul>
      <li v-for="(item, index) in items" :key='index'><TodoItem :item='item' /></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';

export default {
  computed:{
    items(){
      return this.$store.getters.getTodoItemsByCompliteStatus(false)
    }
  },
  components:{
    TodoItem
  }
}
</script>