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
        border: 2px solid #D30A64;
        border-radius: 32px;
    }

    form {
        margin-top: 2em;
    }

    .form_immo {
        font-family: inherit;
    }

    .search_zone {
        border: 1px solid rgb(221, 221, 221);
        border-radius: 32px;
        color: rgb(34, 34, 34);
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px;
        background-color: rgb(247, 247, 247);
        margin: 0 auto;
    }

    .zone_input {
        color: rgb(34, 34, 34);
    }

    label {
        color: rgb(34, 34, 34);
        cursor: pointer;
        display: block;
        border: 1px solid transparent;
        font-weight: 800;
        text-align: center;
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
            height: 82vh;
            width: 60vw;
        }
        .search_zone {
            margin: 0 auto;
            display: flex;
            flex-direction: column; 
        }
        .zone_input {
            font-size: 14px;
            line-height: 1.43;
            margin: 10px 20px;
            width: 80%;
            border-bottom: 1px solid #DDDDDD;
            padding-bottom: 5px;
        }
        label {
            font-size: 12px;
            padding-bottom: 5px;
            letter-spacing: 0.04em;
            width: 90%;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            width: 85%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            width: 40%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;        
        }
        .zone_input {
            font-size: 14px;
            line-height: 1.43;
            margin: 20px 15px;
            width: 95%;
            border-bottom: 1px solid #DDDDDD;
            padding-bottom: 5px;  
        }
        label {
            font-size: 12px;
            padding-bottom: 5px;
            letter-spacing: 0.04em;
            width: 90%;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            width: 85%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            height: 70px;
            width: 80%;
            margin: 0 auto;
            display: flex;
        }
        .zone_input {
            font-size: 14px;
            line-height: 1.43;
            margin: 20px 15px;
            width: 95%;
            border-right: 1px solid #DDDDDD;
        }
        label {
            font-size: 12px;
            padding-bottom: 3px;
            letter-spacing: 0.04em;
            width: 95%;
        }
        input {
            border: 0px;
            margin: 0px;
            padding-left: 10px;
            width: 85%;
            font-size: 12px;
        }
    }

    @media screen and (min-width: 1200px)  {
        .form_immo {
            margin-top: 50px;
        }
        .search_zone {
            height: 75px;
            width: 75%;
            margin: 0 auto;
            display: flex;
        }
        .zone_input {
            font-size: 12px;
            line-height: 1.43;
            margin: 20px 15px;
            width: 95%;
            border-right: 1px solid #DDDDDD;
        }
        label {
            font-size: 12px;
            padding-bottom: 3px;
            letter-spacing: 0.04em;
            width: 95%;
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