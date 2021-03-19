<!-- Page dedicated to calculating the profitability of a real estate purchase  -->
<template>
    <div class="containerPrincipal">
        <section class="container">
            <RentabilityForm
                @submitRentabilityForm="methodsCalculsRentability"
                @closeDisplay="closeDisplay"
            />
            <CatchPhrase/>
        </section>

        <transition name="show-display">
            <ResultsRentability
            :amountOfResults="resultsToRentabilityComponent"
            v-show="showDisplayResults"
            />
        </transition>
    </div>
</template>

<script>
import CatchPhrase from '../components/molecules/CatchPhrase'
import RentabilityForm from '../components/organisms/RentabilityForm'
import ResultsRentability from '../components/molecules/ResultsOfRentability'

export default {
    components: {
        RentabilityForm,
        CatchPhrase,
        ResultsRentability
    },
    data: function() {
        return {
            showDisplayResults: false,
            amountRentByYear: '',
            amountTotalImmo: '',
            resultsToRentabilityComponent: {
                percentageRentability: '',
                amountOfRentability: ''
            }
        }
    },
    methods: {
        methodsCalculsRentability(valuesToCompute) {
            this.rentByYear(valuesToCompute.amountRent);
            this.totalPriceImmo(valuesToCompute.price, valuesToCompute.amountNotary, valuesToCompute.amountAgency, valuesToCompute.amountRoadworks);
            this.profitability(this.amountTotalImmo, this.amountRentByYear);
            this.interestCompose(this.amountTotalImmo, this.amountRentByYear, 10);
            this.displayResults();
        },
        rentByYear(rt) {
            this.amountRentByYear = rt * 12;
        },
        totalPriceImmo(px, ntx, agx, rdwk) {
            this.amountTotalImmo = Number(px) + Number(ntx) + Number(agx) + Number(rdwk);
        },
        profitability(pxTotal, rt) {
            let profi = (rt / pxTotal * 100);
            this.resultsToRentabilityComponent.percentageRentability = profi.toFixed(2);
        },
        interestCompose(priceTotal, rt, nYear) {
            let intCompo =  priceTotal * Math.pow((1 + rt / priceTotal), nYear) - priceTotal;
            this.resultsToRentabilityComponent.amountOfRentability = intCompo.toFixed(2);
        },
        displayResults() {
            this.showDisplayResults = true;
        },
        closeDisplay() {
            this.showDisplayResults = false;
        }
    }
}
</script>

<style scoped>
    .show-display-enter-active {
        transition: all 1s ease;
        top: 100%;
        height: 30%;
    } 
    
    .show-display-enter-to {
        transition: all 1s ease;
        top: 70%;
        height: 30%;
    }

    .show-display-leave {
        transition: all 1s ease;
        top: 70%;
        height: 30%;
    }

    .show-display-leave-to {
        transition: all 0s ease;
        top: 100%;
        height: 30%;
    } 

    .containerPrincipal {
        background-color:#EAE3DF;
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
        .containerPrincipal{
            padding-top: 10px;
        }
        .container {
            height: 60%;
        }
    }
</style>