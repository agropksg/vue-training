<template>
  <div class="complete-btn">
    <button @click="Complete">Выполнено</button>
  </div>
</template>


<script>
export default {
  name:'CompleteBtn',
  props:['itemId'],
  methods:{
    Complete(){
      this.$emit('complteItem',this.itemId);
    }
  }
}
</script>