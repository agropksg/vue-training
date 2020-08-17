<template>
  <div class="todo-item" v-if="item.status">
    {{ item.id }} ) {{ item.name }} <RemoveBtn @remove-item="removeItem" />
  </div>
</template>

<script>
import RemoveBtn from './RemoveBtn';

export default {
  name: 'todo',
  props:['item'],
  components:{
    RemoveBtn
  },
  methods:{
    removeItem(){
      this.item.status = false;
    }
  }
}
</script>>