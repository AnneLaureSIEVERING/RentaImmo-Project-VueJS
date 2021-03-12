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
  background-color: #172b51; 
  color: aliceblue;
  box-sizing: border-box;
  height: 100%;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: white;
  font-size: 16px;
}

#nav a.router-link-exact-active {
  color: rgb(128, 120, 120);
}

.header {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 10%;
}

html, body {
  height: 100%;
  width: 100%;
}

</style>
