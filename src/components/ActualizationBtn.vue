<template>
  <div class="actualization-btn">
    <div v-if="item.complite">
      <button class="actualize" @click="changeItemStatus()">Again</button>
    </div>
    <div v-else>
      <button class="deactualize" @click="changeItemStatus()">Complite</button>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ActualizationBtn',
  props: ['item_id'],
  methods: {
    changeItemStatus(){
      this.item.complite = !this.item.complite;
    }
  },
  computed: mapState({
    item: function(state){
      for(let i=0; i<state.listToDo.length; i++){
        if(state.listToDo[i].id == this.item_id){
          return state.listToDo[i];
        }
      } 
    }
  })
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