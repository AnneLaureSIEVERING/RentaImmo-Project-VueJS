<template>
    <div class="styleContainerPrincipal">
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
            amountNotaryFees: '',
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
            this.notaryFees(valuesToCompute.price);
            this.rentByYear(valuesToCompute.amountRent);
            this.totalPriceImmo(valuesToCompute.price, this.amountNotaryFees, valuesToCompute.amountAgency, valuesToCompute.amountRoadworks);
            this.profitability(this.amountTotalImmo, this.amountRentByYear);
            this.interestCompose(this.amountTotalImmo, this.amountRentByYear, 10);
            this.displayResults();
        },
        notaryFees(pxImmo) {
            switch(true) {
                case (pxImmo <= 6500):
                    this.amountNotaryFees = (pxImmo * (3.870/100)) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    break;
                case (pxImmo >= 6501 && pxImmo <= 17000):
                    this.amountNotaryFees = (pxImmo * (1.596/100) + 147.81) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    break;
                case (pxImmo >= 17001 && pxImmo <= 60000):
                    this.amountNotaryFees = (pxImmo * (1.064/100) + 238.25) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    break;
                case(pxImmo > 60000):
                    this.amountNotaryFees = (pxImmo * (0.799/100) + 397.25) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    break;
                default:
                    console.log('erreur dans le switch');
            }
        },
        rentByYear(rt) {
            this.amountRentByYear = rt * 12;
            console.log(this.amountRentByYear);
        },
        totalPriceImmo(px, ntx, agx, rdwk) {
            this.amountTotalImmo = Number(px) + Number(ntx) + Number(agx) + Number(rdwk);
            console.log(this.amountTotalImmo);
        },
        profitability(pxTotal, rt) {
            let profi = (rt / pxTotal * 100);
            this.resultsToRentabilityComponent.percentageRentability = profi.toFixed(2);
            console.log(this.resultsToRentabilityComponent.percentageRentability);
        },
        interestCompose(priceTotal, rt, nYear) {
            let intCompo =  priceTotal * Math.pow((1 + rt / priceTotal), nYear) - priceTotal;
            this.resultsToRentabilityComponent.amountOfRentability = intCompo.toFixed(2);
            console.log(this.resultsToRentabilityComponent.amountOfRentability);
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
        height: 20%;
    } 
    
    .show-display-enter-to {
        transition: all 1s ease;
        top: 70%;
        height: 20%;
    }

    .show-display-leave {
        transition: all 1s ease;
        top: 70%;
        height: 20%;
    }

    .show-display-leave-to {
        transition: all 0s ease;
        top: 100%;
        height: 20%;
    } 

    .container {
        height: 70%;
        background-color: #D3D2D3;
        background-image: url(../assets/image-foret.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;
    }

    .styleContainerPrincipal{
        height: 85%;
        background-color: #172b51;
    }

</style>