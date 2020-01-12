<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import Player from 'zw-player'
  export default {
    name: 'App',
    components: {
        Player
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
