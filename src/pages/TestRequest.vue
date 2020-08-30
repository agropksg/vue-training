<template>
  <div class="test-request">
    <ul v-if="posts && posts.length"
      class="post">
      <li v-for="(post,index) in posts"
        :key="index">
        <h3>{{post.title}}</h3>
      </li>
    </ul>
    <ul v-if="errors && errors.length"
      class="errors">
    </ul>    
    <MakeRequestBtn @doRequest="makeRequest" />
  </div>
</template>


<script>
import MakeRequestBtn from '../components/MakeRequestBtn.vue';
import axios from 'axios';

export default {
  data(){
    return {
      posts: [],
      errors: []
    }
  },
  components: {
    MakeRequestBtn
  },
  methods: {
    makeRequest(){
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
}
</script>
