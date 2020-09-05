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
      city: [],
      level: [],
    },
    universities:{},
  },

  mutations: {
    ADD_ITEM(state,payload){
      state.listToDo.push(payload);
    },
    CHANGE_ITEM_STATUS(state,payload){
      let itemForChange = state.listToDo.find((item)=>payload === item.id)
      itemForChange.complite = !itemForChange.complite
    },
    CHANGE_UNIVERSITIES_SET(state,payload){
      state.universities = payload;
    },
    CHANGE_UNIVERSITIES_FILTER(state, payload){
      state.filterUniversity = payload;
    }
  },

  actions: {
    add_item(context, payload){      
      context.commit('ADD_ITEM', payload);
    },
    changeItemStatus(context,payload){
      context.commit('CHANGE_ITEM_STATUS',payload);
    },
    uploadUniversities(context){
      /// Получаем значения текущие значения фильтров и строим на основании их запрос
      let university_filters = this.getters.getUniversityFilters;
      let getParametrs = '';
      if(university_filters.city.length){
        university_filters.city.forEach(item => {
          getParametrs += '&by_city[]='+item;
        })
      }
      if(university_filters.level.length){
        university_filters.level.forEach(item => {
          getParametrs += '&by_level[]='+item;
        })
      }
      if(getParametrs.length > 0){
        getParametrs = getParametrs.slice(1);
      }
      console.log(getParametrs);
      let request = 'https://myuniver.org/api/universities?';

      request += getParametrs;
      axios.get(request)
      .then(response => {
        /// Обновляем коллекцию доступных университетов
        context.commit('CHANGE_UNIVERSITIES_SET', response.data.universities)
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    updateUniversityFilter(context, payload){
      context.commit('CHANGE_UNIVERSITIES_FILTER', payload);
      context.dispatch('uploadUniversities');
    },
  },
  
  getters:{
    getAllTodoItems:state => state.listToDo,
    getTodoItemsByCompliteStatus: state => compileStatus => state.listToDo.filter(item => item.complite == compileStatus),
    getUniversities: state => state.universities,
    getUniversityFilters: state => state.filterUniversity,
  }
});

export default store;
