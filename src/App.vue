<template>
  <nav>
    <router-link to="/">Journal</router-link> |
    <router-link to="/Contact">Contact</router-link> |
    <router-link to="/Clavier">Clavier</router-link>
  </nav>
  <div class="router-view">
    <div class="test">    <router-view/></div>
  </div>
</template>

<script>

  export default {
    name:'App'
  }
  
</script>

<style>
html {
  background-color: #f3f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.test {
  max-width: 1600px;

}
</style>
