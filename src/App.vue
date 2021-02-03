<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
    <p>Examen realizado por Israel Gonzálbez Baños</p>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    AppMenu,
  },
  mounted(){
    this.$store.dispatch('loadEmpresas');
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
