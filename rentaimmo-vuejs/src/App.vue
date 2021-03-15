<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/organisms/Header'
export default {
  components: {
    Header
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

html, body {
  height: 100vh;
  width: 100vw;
  background-color: #222D3A;
  background-image: url(assets/image-foret.jpg);
  background-attachment: fixed;
  background-size: cover;
  box-sizing: border-box;
}
</style>
