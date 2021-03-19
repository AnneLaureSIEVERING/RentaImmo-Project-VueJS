<template>
    <div class="header">
      <TitleHeader/>
      <Navigation/>
    </div>
</template>

<script>
import TitleHeader from '../atoms/TitleHeader'
import Navigation from '../atoms/Navigation'
export default {
    name: "Header",
    components: {
        TitleHeader,
        Navigation
    }
}
</script>

<style scoped>
  .header {
    padding-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }

  /** MEDIA QUERIES **/
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    .header {
      height: 10%;
    }
  }

  @media screen and (min-width: 1200px) {
    .header {
      height: 13%;
    }
}
</style>