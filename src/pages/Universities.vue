<template>
  <div class="universities">
    <div class="universities__filter"><UniversityFilter /></div>
    <div class="unviversitites__items">
      <h3>Университеты</h3>
      <div  v-if="universities && universities.length" 
        class="universities__item">
        <SingleUniversity v-for="(university, index) in universities" 
          :key="index" 
          :university="university" />
      </div>
    </div>
  </div>
</template>

<script>
import UniversityFilter from '../components/UnivertsityFilter.vue';
import SingleUniversity from '../components/SingleUniversity.vue';

export default {
  name: "Universities",
  computed:{
    universities(){
      return this.$store.getters.getUniversitiesUseFilter;
    }
  },
  components: {
    UniversityFilter, SingleUniversity
  },
  mounted: function(){
    this.$store.dispatch({
      type: "updateUniversities"
    });
  }
}
</script>

<style scoped>
  .universities{
    display: flex;
  }
  .universities__filter{
    max-width: 300px;
    width: 100%;
  }
</style>
