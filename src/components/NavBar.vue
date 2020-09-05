<template>
  <div class="nav-bar">
    <router-link to="/">Main</router-link>
    <router-link to="/completed">Completed</router-link>
    <router-link to="/actual">Actual</router-link>
    <router-link to="/universities">Universities</router-link>
  </div>
</template>
<style>
  .nav-bar{
    display: flex;
    margin-bottom: 20px;
  }
  .nav-bar a{
    text-decoration: none;
    border:1px solid #000;
    border-radius: 3px;
    padding: 5px 15px;
    display: inline-block;
    margin-right: 20px;
  }
</style>
