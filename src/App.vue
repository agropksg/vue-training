<template>
  <div id="app">
    <Counter />
    <AddCounter />
    <RemoveCounter />
  </div>
</template>

<script>
import Counter from './components/Counter';
import AddCounter from './components/AddCounter';
import RemoveCounter from './components/RemoveCounter';

export default {
  name: 'App',
  components:{
    Counter, AddCounter, RemoveCounter
  }
}
</script>