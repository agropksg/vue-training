<template>
  <div class="todo-item"  :class="{'completed':item.status}">
     {{ `${order+1} ${item.name}` }}  <CompleteBtn @complteItem="completedItem" />
  </div>
</template>

<script>
import CompleteBtn from './CompleteBtn';

export default {
  name: 'todo',
  props:['item','order'],
  components:{
    CompleteBtn
  },
  methods:{
    completedItem(){
      this.item.status = true;
    }
  }
}
</script>

<style scoped>
  .completed{
    text-decoration: line-through  ;
  }
</style>