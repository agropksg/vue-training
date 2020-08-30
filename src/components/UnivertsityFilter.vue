<template>
  <div class="university-filter">
    <h3>Фильтры</h3>
    <form @submit.prevent="filterUniversity()">
      <div class="universtity-filter__item">
        <h4>Города</h4>
        <p>
          <input type="checkbox" 
          v-model="city"
          value="1"
          id="minsk">
          <label for="minsk">Минск</label>
        </p>
        <p>
          <input type="checkbox" 
          v-model="city"
          value="2"
          id="mogilev">
          <label for="mogilev">Могилев</label>
        </p>
        <p>
          <input type="checkbox" 
          v-model="city"
          value="6"
          id="grodno">
          <label for="grodno">Гродно</label>
        </p>        
      </div>
      <div class="universtity-filter__item">
        <h4></h4>
      </div>
      <div class="universtity-filter__item">
        <h4></h4>
      </div>
      <button type="submit">Фильтровать</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UniversityFilter",
  data(){
    return {
      city: []
    }
  },
  methods: {
    filterUniversity(){
      const univerFilters = {
        city: this.city
      }

      this.$store.dispatch({
        type: "updateUniverstyResult",
        filterData: univerFilters
      });
    }
  }
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
