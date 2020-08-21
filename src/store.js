import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increace(state,payload){
      return state.count +=payload.amount;
    },
    decrease(state, payload){
      return state.count -= payload.count;
    }
  },
  actions: {
    increament(context, payload){
      context.commit('increace',payload);
    },
    descreament(context, payload){
       context.commit('decrease', payload); 
    }
  }
});

export default store;