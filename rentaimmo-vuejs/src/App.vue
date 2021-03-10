<template>
  <div id="app">
    <div id="nav">
      <router-link to="/rentability">Calculer la rentabilité immobilière de votre projet</router-link> ||
      <router-link to="/estate">Simulation de prêt immobilier</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D3D2D3;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #D3D2D3;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html, body {
      font-family: Circular, BlinkMacSystemFont, Roboto, sans-serif;
      background-color: #1E2636;
  }

.container {
    height: 100vh;
    width: 100vw;
}

@media screen and (min-width: 1600px)  {
    .container {
        width: 1600px;
        margin: auto;
    }
}

@media screen and (min-width: 1900px) {
    .container {
        width: 1600px;
        margin: auto;
    }
}
</style>
