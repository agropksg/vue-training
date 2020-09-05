<template>
  <div class="university-filter">
    <h3>Фильтры</h3>
    <form>
      <div class="universtity-filter__item">
        <h4>Города</h4>
        <p>
          <input type="checkbox" 
            v-model="city"
            value="1"
            id="minsk"
            @change="filterUniversity()">
          <label for="minsk">Минск</label>
        </p>
        <p>
          <input type="checkbox" 
            v-model="city"
            value="2"
            id="mogilev"
            @change="filterUniversity()">
          <label for="mogilev">Могилев</label>
        </p>
        <p>
          <input type="checkbox" 
            v-model="city"
            value="6"
            id="grodno"
            @change="filterUniversity()">
          <label for="grodno">Гродно</label>
        </p>        
      </div>
      <div class="universtity-filter__item">
        <h4>Уровень образования</h4>
        <p>
          <input type="checkbox"
            v-model="level"
            value="1"
            id="magistratura"
            @change="filterUniversity()">
          <label for="magistratura">Магистратура</label>
        </p> 
        <p>
          <input type="checkbox"
            v-model="level"
            value="2"
            id="podgotovitelnoe"
            @change="filterUniversity()">
          <label for="podgotovitelnoe">Подготовительное отделение</label>
        </p>
        <p>
          <input type="checkbox"
            v-model="level"
            value="3"
            id="bakalavr"
            @change="filterUniversity()">
          <label for="bakalavr">Бакалавриат</label>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "UniversityFilter",
  data(){
    return {
      city: [],
      level: [],
    }
  },
  methods: {
    filterUniversity(){
      let filter = {
        city: this.city,
        level: this.level, 
      }
      this.updateUniversityFilter(filter);
    },
    ...mapActions(['updateUniversityFilter'])    
  },
}
</script>

<style scoped>
  button{
    background: #0fad0a;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    border:none;
  }
</style>
