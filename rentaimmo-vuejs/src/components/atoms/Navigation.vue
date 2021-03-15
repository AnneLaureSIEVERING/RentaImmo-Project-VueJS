<template>
    <div id="nav"> 
        <router-link to="/rentability">Calculer la rentabilité immobilière</router-link> ||
        <router-link to="/estate">Simulation de prêt immobilier</router-link>
      </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>
    #nav {
    margin: 20px;
    }

    #nav a {
    font-weight: bold;
    color: #222D3A;

    font-size: 16px;
    }

    #nav a.router-link-exact-active {
    color: white;
    }
</style>