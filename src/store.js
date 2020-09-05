import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


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
    ],
    filterUniversity: {
      city: []
    },
    universities:{}
  },

  mutations: {
    addItem(state,payload){
      state.listToDo.push(payload);
    },
    changeItemStatus(state,payload){
      let itemForChange = state.listToDo.find((item)=>payload === item.id)
      itemForChange.complite = !itemForChange.complite
    },
    uploadUniversities(state,payload){
      if(payload){
        state.filterUniversity.city = payload.filterData.city;
      }
      
      let request = 'https://myuniver.org/api/universities?';
      let getParametrs ='';
      let cities = state.filterUniversity.city;
      if(cities && cities.length){
        cities.forEach(item=>{
          getParametrs+='&by_city[]='+item;
        })          
      }
      if(getParametrs.length > 0){
        getParametrs=getParametrs.slice(1);
      }
      // state.universities = getParametrs;
      request+=getParametrs;
      axios.get(request)
      .then(response => {
        state.universities = response.data.universities;
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },

  actions: {
    add_item(context, payload){      
      context.commit('addItem', payload);
    },
    changeItemStatus(context,payload){
      context.commit('changeItemStatus',payload);
    },
    updateUniverstyResult(context, payload){
      context.commit('uploadUniversities', payload);
    },
    updateUniversities(context){
      context.commit('uploadUniversities');
    }
  },
  
  getters:{
    getAllTodoItems:state=>state.listToDo,
    getTodoItemsByCompliteStatus: state=>compileStatus=>state.listToDo.filter(item=>item.complite == compileStatus),
    getUniversitiesUseFilter: state=>state.universities
  }
});

export default store;
