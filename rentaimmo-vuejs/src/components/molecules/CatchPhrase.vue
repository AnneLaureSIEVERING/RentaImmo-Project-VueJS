<template>
    <div class="catchphrase">
        <p>Calculer la rentabilité immobilière et le coût du crédit de votre projet d'acquisition</p>
    </div>
</template>

<script>
export default {
    name: "Catchphrase"
}
</script>

<style scoped>
    .catchphrase {
        color: #D3D2D3;
        display: block;
        position: fixed;
        letter-spacing: 0.06em;
        font-weight: 600;
        text-shadow: #637591 1px 1px 1px;
    }

    @media screen and (min-width: 321px) and (max-width: 767px) {
        .catchphrase {
            font-size: 16px;
            text-align: center;
            margin-bottom: 0;
            width: 95vw;
            height: 5vh;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .catchphrase {
            font-size: 28px;
            margin-top: 3em;
            height: 10vh;
            width: 95vw;
            text-align: center;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .catchphrase {
            font-size: 30px;
            margin-top: 215px;
            margin-left: 5em;
            width: 25vw;
        }
    }

    @media screen and (min-width: 1200px)  {
        .catchphrase {
            font-size: 30px;
            margin-top: 215px;
            margin-left: 5em;
            width: 25vw;
        }
    }
</style>