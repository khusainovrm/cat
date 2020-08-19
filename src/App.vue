<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './views/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
@import "assets/index.css";

#app{
  height: 100vh;
  background-image: url('./assets/background.png');
  background-attachment: fixed;
  background-position: center;
}
</style>
