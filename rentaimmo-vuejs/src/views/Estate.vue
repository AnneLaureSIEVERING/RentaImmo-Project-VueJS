<!-- Page dedicated to calculating a estate loan simulation -->
<template>
    <div class="containerPrincipal">
        <section class="container">
            <EstateForm
                @submitForm="methodsCalculs"
                @closeDisplay="closeDisplay"
            />
            <CatchPhrase/>
        </section>
        <transition name="show-display">
            <DisplayResult
                :results="computedResultForResultComponent"
                v-show="showDisplayResults"
            />
        </transition>
    </div>
</template>

<script>
import CatchPhrase from '../components/molecules/CatchPhrase'
import EstateForm from '../components/organisms/EstateForm'
import DisplayResult from '../components/molecules/DisplayResult'

export default {
    components: {
        EstateForm,
        CatchPhrase,
        DisplayResult
    },
   data: function () {
        return {
            monthlyPayment: '',
            intRate: '',
            computedResultForResultComponent: {
                resultAmountMonthly: '',
                totalInterest: ''
            },
            showDisplayResults: false
        }
    },
    methods: {
        methodsCalculs(valuesToCompute) {
            this.interestRate(valuesToCompute.duration);
            this.amountMonthlyPaiement(valuesToCompute.amountLoan, valuesToCompute.duration);
            this.totalOfInterest(valuesToCompute.amountLoan, valuesToCompute.duration);
            this.displayResults();
        },
        interestRate(valueToDuration) {
            switch(valueToDuration) {
                case 10:
                    this.intRate = 0.0075;
                    break;
                case 15:
                    this.intRate = 0.0095;
                    break;
                case 20:
                    this.intRate = 0.0110;
                    break;
                case 25:
                    this.intRate = 0.0135;
                    break;
                default:
                    console.log('erreur dans le switch');
                    break;
            }
        },

        amountMonthlyPaiement(valueToAmountLoan, valueToDuration) {
            let durateEstate = -12 * Number(valueToDuration);
            let tauxByMonth = this.intRate / 12;
            this.monthlyPayment = (valueToAmountLoan * tauxByMonth) / (1-(1+tauxByMonth) ** durateEstate);
            this.computedResultForResultComponent.resultAmountMonthly = this.monthlyPayment.toFixed(2);
        },

        totalOfInterest(valueToAmountLoan, valueToDuration) {
            let interestAmount = valueToAmountLoan * this.intRate * valueToDuration;
            this.computedResultForResultComponent.totalInterest = interestAmount.toFixed(2);
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
        height: 80%;
    }

    .containerPrincipal {
        background-color:#EAE3DF;
        width: 80%;
        margin: 0 auto;
    }
</style>