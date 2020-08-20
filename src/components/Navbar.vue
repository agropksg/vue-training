<template>
  <div class="navbar">
    <router-link to="/">Main</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<style scoped>
  .navbar{
    display: flex;
    justify-content: space-between;
    max-width: 300px;
  }

</style>