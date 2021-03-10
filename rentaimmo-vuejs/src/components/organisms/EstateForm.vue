<template>
    <form class="estate-loan" @submit="validateForm">
        <div class="search_zone">
            <div class="style_zone">
                <div class="zone_input">
                    <label for="amountImmo">Montant emprunté</label>
                    <input v-model.number="amountLoan"  v-bind:class="{'text-danger': hasErrorOnInputAmountLoan }" type="text" id="amountImmo" name="amountImmo" placeholder="Ajouter le montant emprunté">
                </div>
            </div>

            <div class="style_zone">
                <div class="zone_input">
                    <label for="duration">Durée du prêt souhaitée</label>
                    <select v-model.number="duration" name="duration" id="duration" v-bind:class="{'text-danger': hasErrorOnInputDuration }">
                        <option value="">--Choisissez une durée--</option>
                        <option value="10">10 ans</option>
                        <option value="15">15 ans</option>
                        <option value="20">20 ans</option>
                        <option value="25">25 ans</option>
                    </select>
                </div>
            </div>
            <SubmitButton />
            <ClearButton/>
        </div>
    </form>
</template>

<script>
    import SubmitButton from '../atoms/SubmitButton'
    import ClearButton from '../atoms/ClearButton'

    export default {
        name: "EstateForm",
        components: {
            SubmitButton,
            ClearButton
        },
        data: function () {
            return {
                hasErrorOnInputAmountLoan: false,
                hasErrorOnInputDuration: false,
                amountLoan: '',
                duration: '',
                errorList: []
            }
        },
        methods: {
            validateForm(e) {
                e.preventDefault()
                // console.log(this.amountLoan);
                // console.log(this.duration);

                if(this.amountLoan === '') {
                    this.errorList.push(this.errorList.length + 1);
                    this.hasErrorOnInputAmountLoan = true;
                } else {
                    this.hasErrorOnInputAmountLoan = false;
                }

                if(this.duration === '') {
                    this.errorList.push(this.errorList.length + 1);
                    this.hasErrorOnInputDuration = true;
                } else {
                    this.hasErrorOnInputDuration = false;
                }

                if(this.errorList.length === 0) {
                    this.$emit('submitForm', {
                        duration: this.duration,
                        amountLoan: this.amountLoan
                    });
                }
            }
        }
    }
</script>

<style scoped>

    .text-danger {
        border: 2px solid rgb(223, 93, 93);
        border-radius: 32px;
        padding: 5px;
    }

    form {
        margin-top: 2em;
    }

    .search_zone {
        border: 1px solid #172B51;
        border-radius: 32px;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px;
        background-color: #172B51;
        margin: 0 auto;
        display: flex;
        flex-direction: column; 
        height: 45vh;
    }

    .zone_input {
        border-bottom: 1px solid #DDDDDD;
        text-align: center;
        padding: 20px 15px;
        line-height: 1.43;
        width: 95%;
    }

    label {
        color: #FFFFFF;
        cursor: pointer;
        display: block;
        border: 1px solid transparent;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-align: center;
        width: 95%;
        font-size: 16px;
    }

    input {
        background: none;
        font-weight: 600;
        color: #FFFFFF;
        outline-style: none;
        text-align: center;
        width: 95%;
        font-size: 16px;
    }
    select {
        background: none;
        font-weight: 600;
        color: #FFFFFF;
        outline-style: none;
        text-align: center;
        width: 95%;
    }

    @media screen and (min-width: 321px) and (max-width: 767px) {
        .form_immo {
            margin: 1em auto;
            height: 82vh;
            width: 60vw;
        }
         .search_zone {
            width: 90%;  
        }
        label {
            padding-bottom: 5px;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            width: 60%;  
        }
        label {
            padding-bottom: 5px;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            width: 60%;
        }
        label {
            padding-bottom: 3px;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
        }
    }

    @media screen and (min-width: 1200px)  {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            width: 30%;
        }
        label {
            padding-bottom: 3px;
        }
        input {
            border: 0px;
            margin: 0px;
        }
    }
</style>