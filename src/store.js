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
    },
    changeItemStatus(state,payload){
      let itemForChange = state.listToDo.filter(function(item){
        return (payload.itemId === item.id);
      });
      return itemForChange[0].complite= !itemForChange[0].complite
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
    getAllTodoItems:state=>{
      return state.listToDo;
    },
    getTodoItemsByCompliteStatus: state=>compileStatus=>{
      let resultArr = state.listToDo.filter(function(item){
        return (item.complite === compileStatus)
      });
      return resultArr;
    }
  }
});

export default store;