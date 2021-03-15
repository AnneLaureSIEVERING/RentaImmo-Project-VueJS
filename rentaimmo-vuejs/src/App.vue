<template>
  <div id="app">
    <div class="header">
      <TitleHeader/>
      <div id="nav"> 
        <router-link to="/rentability">Calculer la rentabilité immobilière</router-link> ||
        <router-link to="/estate">Simulation de prêt immobilier</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TitleHeader from './components/atoms/TitleHeader'
  export default {
    components: {
      TitleHeader
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400;1,600&display=swap');
#app {
  font-family: 'Source Serif Pro', serif;
  text-align: center;
  height: 100%;
  width: 100%;
  background: rgba(255, 253, 253, 0.5);
}

#nav {
  margin: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  font-size: 16px;
}

#nav a.router-link-exact-active {
  color: #222D3A;
}

.header {
  padding-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}

html, body {
  height: 100vh;
  width: 100vw;
  background-color: #222D3A;
  background-image: url(assets/image-foret.jpg);
  background-attachment: fixed;
  background-size: cover;
  box-sizing: border-box;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .header {
    height: 10%;
  }
}

@media screen and (min-width: 1200px) {
  .header {
    height: 20%;
  }
}
</style>
