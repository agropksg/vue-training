import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    listToDo:[
      {
        id:1,
        name:'Wake up',
        complite:true
      },
      {
        id:2,
        name:'Wash face',
        complite:false
      },
      {
        id:3,
        name:'Have breakfast',
        complite:false
      },
    ]
  },
  mutations: {
    addItem(state,payload){
      return  state.listToDo.push(payload.amount);
    }
  },
  actions: {
    add_item(context, payload){
      context.commit('addItem', payload);
    }
  }
});

export default store;