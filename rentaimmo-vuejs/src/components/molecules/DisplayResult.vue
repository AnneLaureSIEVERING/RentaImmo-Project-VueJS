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
        background: #a5a3a3;
        height: 25%;
        display: flex;
        justify-content: center;
    }

    .profitability {
        color: #172b51;
        text-align: center;
        border-bottom: 1px solid #637591;
        flex-direction: column;
    } 

    /** MEDIA QUERIES **/
    @media screen and (min-width: 321px) and (max-width: 991px) {

        .profitability {
            font-size: 14px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }

    @media screen and (min-width: 992px) {
        
        .profitability {
            font-size: 20px;
            padding-top: 28px;
            padding-bottom: 15px;
        }
    }

</style>