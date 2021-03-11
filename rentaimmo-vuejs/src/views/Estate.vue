<template>
    <div class="styleContainerPrincipal">
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
            // console.log(valuesToCompute.duration)
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
            console.log(this.computedResultForResultComponent.resultAmountMonthly);
        },

        totalOfInterest(valueToAmountLoan, valueToDuration) {
            let interestAmount = valueToAmountLoan * this.intRate * valueToDuration;
            this.computedResultForResultComponent.totalInterest = interestAmount.toFixed(2);
            console.log(this.computedResultForResultComponent.totalInterest);
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
        height: 25%;
    } 
    
    .show-display-enter-to {
        transition: all 1s ease;
        top: 70%;
        height: 25%;
    }

    .show-display-leave {
        transition: all 1s ease;
        top: 70%;
        height: 25%;
    }

    .show-display-leave-to {
        transition: all 0s ease;
        top: 100%;
        height: 25%;
    } 

    .container {
        height: 75%;
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