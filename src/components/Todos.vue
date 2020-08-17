<template>
  <div class="todos">
    <Todo v-for="item in items" v-bind:key="item.id" v-bind:item="item" />
  </div>
</template>>
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