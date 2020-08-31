<template>
  <div class="actualization-btn">
    <div v-if="item.complite">
      <button class="actualize" @click="changeItemStatus(item.id)">Again</button>
    </div>
    <div v-else>
      <button class="deactualize" @click="changeItemStatus(item.id)">Complite</button>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ActualizationBtn',

  props: {
    item:{
      type: Object,
      require: true
    }
  },
  
  methods: {
    changeItemStatus(){
      this.changeItemStatus(this.item.id);
    },
    ...mapActions([
      'changeItemStatus'
    ])
  },
}
</script>

<style scoped>
  .actualization-btn{
    margin-left: 15px;
  }
  .actualization-btn button{
    padding: 5px 15px;
    border:none;
    border-radius: 3px;
    color:#fff;
    cursor: pointer;
  }
  .actualize{
    background: rgb(94, 235, 94);
  }
  .deactualize{
    background: rgb(243, 98, 127);
  }
</style>
