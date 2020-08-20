<template>
  <div class="todos">
    <Todo v-for="(item, index) in items" :key='item.id' :order='index' :item="item" />
  </div>
</template>
<script>
import Todo from './Todo';

export default {
  name:"todos",
  props:['items'],
  components:{
    Todo
  }
}
</script>
