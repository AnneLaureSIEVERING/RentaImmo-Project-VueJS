<template>
    <section class="display_results">
        <div class="classResults">
            <p id="prof-1" class="profitability">Mensualité évaluée à : {{ results.resultAmountMonthly }} €</p>
            <p id="prof-2" class="profitability">Montant total des intérêts : {{ results.totalInterest }} €</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "DisplayResult",
    props: {
        results: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
    .display_results {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100vw;
        background: white;
        transition: all 1s;
    }

    .profitability {
        display: block;
        color: #413334;
        text-align: center;
        border-bottom: 1px solid #8B8B8B;
    }  

    /** MEDIA QUERIES **/
    @media screen and (min-width: 321px) and (max-width: 767px) {

        .display_results.transition-on {
            top: 80%;
            height: 20vh;
        }

        .profitability {
        font-size: 14px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 20px auto;
        width: 90vw;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
    
        .display_results.transition-on {
            top: 80%;
            height: 20vh;
        }
        .profitability {
        font-size: 14px;
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 20px auto;
        width: 90vw;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        
        .profitability {
            font-size: 25px;
            padding-top: 28px;
            padding-bottom: 20px;
            margin: 50px auto;
            width: 35vw;
        }
    }

    @media screen and (min-width: 1200px)  {
    
        .profitability {
            font-size: 25px;
            padding-top: 28px;
            padding-bottom: 20px;
            margin: 50px auto;
            width: 30vw;
        }
    
    }

</style>