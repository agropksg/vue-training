<template>
  <div class="remove-counter">
    <button v-on:click = 'decreaseCount()'>Remove</button>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  methods:{
    decreaseCount(){
      store.dispatch({
        type: 'descreament',
        count: 10
      });
    }
  }
}
</script>