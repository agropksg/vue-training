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
      console.log(payload);
      state.listToDo.push(payload);
    },
    changeItemStatus(state,payload){
      let itemForChange = state.listToDo.find((item)=>payload === item.id)
      itemForChange.complite = !itemForChange.complite
    }
  },

  actions: {
    add_item(context, payload){      
      context.commit('addItem', payload);
    },
    changeItemStatus(context,payload){
      context.commit('changeItemStatus',payload);
    }
  },
  
  getters:{
    getAllTodoItems:state=>state.listToDo,
    getTodoItemsByCompliteStatus: state=>compileStatus=>state.listToDo.filter(item=>item.complite == compileStatus)
  }
});

export default store;
