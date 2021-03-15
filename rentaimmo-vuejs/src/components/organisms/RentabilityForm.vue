<template>
    <!-- Formulaire pour la simulation concernant la rentabilité immobilière -->
    <form class="form_immo" @submit="validateForm">
        <div class="search_zone">
            <div class="style_zone">
                <div class="zone_input">
                    <label for="price"> Prix de l'investissement </label>
                    <input v-model.number="price" type="number" id="price" name="immo_price" placeholder="Ajouter le prix d'achat" v-bind:class="{'text-danger': hasErrorOnInputAmountLoan }">
                </div>
            </div>
            <div class="style_zone">
                <div class="zone_input">
                    <label for="notary"> Frais de notaire </label>
                    <input v-model.number="amountNotary" type="number" id="notary" name="notary_fees"  :placeholder="this.amountNotary===''? 'Frais de notaire' : this.amountNotary" @focus="notaryFeesCalcul"> 
                </div>
            </div>
            <div class="style_zone">
                <div class="zone_input">
                    <label for="agency"> Frais d'agence </label>
                    <input v-model.number="amountAgency" type="number" id="agency" name="agency_fees" placeholder="Ajouter les frais" v-bind:class="{'text-danger': hasErrorOnInputAmountLoan }">
                </div>
            </div>
            <div class="style_zone">
                <div class="zone_input">
                    <label for="roadworks"> Montant des travaux </label>
                    <input v-model.number="amountRoadworks" type="number" id="roadworks" name="immo_roadworks" placeholder="Ajouter le montant">
                </div>
            </div>
            <div class="style_zone">
                <div class="zone_input">
                    <label for="rent"> Loyer estimé (par mois) </label>
                    <input v-model.number="amountRent" type="number" id="rent" name="immo_rent" placeholder="Ajouter le loyer estimé" v-bind:class="{'text-danger': hasErrorOnInputAmountLoan }">
                </div>
            </div>
                <SubmitButton/>
                <ClearButton @submitToCloseDisplay="closeDisplayMethod"/>
        </div>
    </form>
</template>

<script>
import SubmitButton from '../atoms/SubmitButton'
import ClearButton from '../atoms/ClearButton'

export default {
    name: "RentabilityForm",
    components: {
        SubmitButton,
        ClearButton
    },
    data: function () {
        return {
            hasErrorOnInputAmountLoan: false,
            hasErrorOnInputDuration: false,
            price: '',
            amountNotary: '',
            amountAgency: '',
            amountRoadworks: '',
            amountRent: '',
            errorList: [],
        }
    },
    methods: {
        notaryFeesCalcul() {
            let pxImmo = this.price;
            let amount;
            switch(true) {
                case (pxImmo <= 6500):
                    amount = (pxImmo * (3.870/100)) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    this.amountNotary = Math.round(amount);
                    break;
                case (pxImmo >= 6501 && pxImmo <= 17000):
                    amount = (pxImmo * (1.596/100) + 147.81) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    this.amountNotary = Math.round(amount);
                    break;
                case (pxImmo >= 17001 && pxImmo <= 60000):
                    amount = (pxImmo * (1.064/100) + 238.25) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    this.amountNotary = Math.round(amount);
                    break;
                case(pxImmo > 60000):
                    amount = (pxImmo * (0.799/100) + 397.25) * 1.20 + 800 + 400 + (pxImmo * 0.058) + (pxImmo * 0.0010);
                    this.amountNotary = Math.round(amount);
                    break;
                default:
                    console.log('erreur dans le switch');
            }
        },
        validateForm(e) {
            e.preventDefault()
            
            if(this.price === '') {
                this.errorList.push(this.errorList.length + 1);
                this.hasErrorOnInputAmountLoan = true;
            } else {
                this.hasErrorOnInputAmountLoan = false;
            }

            if(this.amountAgency === '') {
                this.errorList.push(this.errorList.length + 1);
                this.hasErrorOnInputDuration = true;
            } else {
                this.hasErrorOnInputDuration = false;
            }

            if(this.amountRent === '') {
                this.errorList.push(this.errorList.length + 1);
                this.hasErrorOnInputDuration = true;
            } else {
                this.hasErrorOnInputDuration = false;
            }

            if(this.amountRoadworks === '') {
                this.amountRoadworks = 0;
            }

            if(this.errorList.length === 0) {
                this.$emit('submitRentabilityForm', {
                    price: this.price,
                    amountNotary: this.amountNotary,
                    amountAgency: this.amountAgency,
                    amountRoadworks: this.amountRoadworks,
                    amountRent: this.amountRent
                });
            }
        },
        closeDisplayMethod() {
            this.$emit('closeDisplay');
        }
    }
}
</script>

<style scoped>

    form {
        margin-top: 2em;
        margin-bottom:2em;
    }

    .text-danger {
        border: 2px solid rgb(223, 93, 93);
        border-radius: 32px;
        padding: 3px;
    }

    .search_zone {
        border: 1px solid rgb(221, 221, 221);
        border-radius: 32px;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px;
        background-color: rgb(247, 247, 247);
        margin: 0 auto;
    }

    .zone_input {
        color: rgb(34, 34, 34);
        display: block;
    }

    label {
        cursor: pointer;
        border: 1px solid transparent;
        font-weight: 600;
        letter-spacing: 0.04em;
    }

    input {
        background: none;
        font-weight: 600;
        color: #413334;
        outline-style: none;
        text-align: center;
    }

    @media screen and (min-width: 321px) and (max-width: 767px) {
        .form_immo {
            margin: 1em auto;
            height: 82%;
            width: 60%;
            padding-top: 10px;
        }
        .search_zone {
            margin: 0 auto;
            display: flex;
            flex-direction: column; 
            padding-right: 10px;   
        }
        .zone_input {
            font-size: 14px;
            line-height: 1.43;
            margin: 10px 25px;
            width: 80%;
            border-bottom: 1px solid #DDDDDD;
            padding-bottom: 5px;
        }
        label {
            font-size: 12px;
            padding-bottom: 5px;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            padding-right: 10px;
            width: 85%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1199px) {
        .form_immo {
            margin: auto;
            height: 82%;
            width: 60%;
        }
        .search_zone {
            margin: 0 auto;
            display: flex;
            flex-direction: column;   
            padding-right: 10px;     
        }
        .zone_input {
            font-size: 14px;
            line-height: 1.43;
            margin: 15px 15px;
            width: 95%;
            border-bottom: 1px solid #DDDDDD;
            padding-bottom: 5px;  
        }
        label {
            font-size: 12px;
            padding-bottom: 5px;
            width: 90%;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            padding-right: 10px;
            width: 85%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 1200px)  {
        .form_immo {
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .search_zone {
            height: 75px;
            width: 90%;
            margin: 0 auto;
            display: flex;
        }
        .zone_input {
            font-size: 12px;
            line-height: 1.43;
            margin: 20px 15px;
            width: 90%;
            border-right: 1px solid #DDDDDD;
        }
        label {
            font-size: 12px;
            padding-bottom: 3px;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            width: 90%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 1600px)  {
        .zone_input {
            font-size: 14px;
        }
        label {
            font-size: 14px;
        }
        input {
            font-size: 14px;
        }
    }
</style>