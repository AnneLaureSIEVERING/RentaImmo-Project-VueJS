<!-- Display results of estate loan-->
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
        width: 100%;
        background: #EAE3DF;
        height: 30%;
        display: flex;
        justify-content: center;
    }

    .profitability {
        color: #222D3A;
        text-align: center;
        border-bottom: 1px solid #9D6340;
        border-top: 1px solid #9D6340;
        flex-direction: column;
    } 

    .classResults {
        margin-top: 15px;
        margin-bottom: 15px;
    }


    /** MEDIA QUERIES **/
    @media screen and (min-width: 321px) and (max-width: 991px) {

        .profitability {
            font-size: 18px;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        .display_results {
            margin-top: 4em;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        
        .profitability {
            font-size: 20px;
            padding-top: 28px;
            padding-bottom: 15px;
        }

        .display_results {
            margin-top: 4em;
        }
    }

    @media screen and (min-width: 1200px) {
        .profitability {
            font-size: 20px;
            padding-top: 28px;
            padding-bottom: 15px;
        }

        .display_results {
            margin-top: 1em;
        }
    }

</style>