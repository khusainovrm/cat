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
@import url(https://allfont.ru/allfont.css?fonts=exo-20-bold);

#app {
  height: 100%;
}
</style>
