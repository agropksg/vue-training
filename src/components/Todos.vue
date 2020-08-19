<template>
  <div class="todos">
    <Todo v-for="item in items" :key="item.id" :item="item" />
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
