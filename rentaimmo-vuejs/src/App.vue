<template>
  <div id="app">
    <div id="nav">
      <router-link to="/rentability">Calculer la rentabilité immobilière</router-link> ||
      <router-link to="/estate">Simulation de prêt immobilier</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap');
#app {
 font-family: 'Source Serif Pro', serif;
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
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #172B51;
}

html, body {
    background-color: #D3D2D3;
    background-image: url(assets/image-foret.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
