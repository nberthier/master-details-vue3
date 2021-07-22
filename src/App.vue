<template>
  <div class="flex flex-col">
    <div id="nav" class="flex-initial">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <!-- <div class="flex-auto overflow-hidden"> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

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
