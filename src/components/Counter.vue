<template>
  <div class="counter">{{count}}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    count: state=>state.count 
  })
}
</script>