<template>
  <div class="add-counter">
    <button v-on:click = 'addCounter()'>Add</button>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  methods:{
    addCounter(){
      store.dispatch({
        type: 'increament',
        amount:20
      });
      
    }
  },
}
</script>