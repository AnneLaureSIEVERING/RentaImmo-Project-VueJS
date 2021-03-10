<template>
    <h1>Renta-Immo</h1>
</template>

<script>
export default {
    name: "TitleHeader"
}
</script>

<style scoped>
    h1 {
        color: #D3D2D3;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
    }

    @media screen and (min-width: 321px) and (max-width: 767px) {

        h1 {
            font-size: 25px;
            padding-top: 8px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        h1 {
            font-size: 46px;
            padding-top: 30px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        h1 {
            font-size: 46px;
            padding-top: 30px;
        }
    }

    @media screen and (min-width: 1200px)  {
        h1 {
            font-size: 46px;
            padding-top: 30px;
        }
    }
</style>