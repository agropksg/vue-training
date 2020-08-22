<template>
  <div class="todo-item" :class="{completed:item.complite}">{{item.name}} <ActualizationBtn :item_id='item.id' /></div>
</template>

<script>
import ActualizationBtn from './ActualizationBtn.vue';


export default {
  name: 'TodoItem',
  props: ['item'],
  components: {
    ActualizationBtn
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