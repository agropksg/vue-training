<template>
  <div class="todo-item" 
    :class="{completed:item.complite}">
    {{item.name}}
    <ActualizationBtn :item="item" />
  </div>
</template>

<script>
import ActualizationBtn from './ActualizationBtn.vue';

export default {
  name: 'TodoItem',

  components: {
    ActualizationBtn
  },

  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .todo-item{
    display: flex;
    margin: 10px 0;
    align-items: center;
  }
</style>
