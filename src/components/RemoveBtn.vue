<template>
  <button @click="removeItem">удалить</button>
</template>

<script>

export default{
  name:'deleteBtn',
  props:['item-id'],
  methods:{
    removeItem(){
      this.$emit('remove-item');
    }
  }
    
}

</script>  