<template>
    <div class="catchphrase">
        <p>Calculer la rentabilité immobilière d'un projet est à porter de clic</p>
    </div>
</template>

<script>
export default {
    name: "Catchphrase"
}
</script>

<style scoped>
    .catchphrase {
        color: #9D6340;
        display: inline-block;
        letter-spacing: 0.03em;
        font-weight: 600;
        text-shadow: #3f3f49 1px 1px 1px;
        font-style: italic;
        padding-top: 0.5em;
    }

     @media screen and (min-width: 321px) and (max-width: 991px) {

        .catchphrase {
            font-size: 21px;
            padding-bottom: 1em;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        
        .catchphrase {
            font-size: 25px;
            padding-bottom: 0.5em;
        }
    }

    @media screen and (min-width: 1200px) {
        .catchphrase {
            font-size: 28px;
            padding-bottom: 1em;
        }
    }

</style>