<template>
    <div class="style_zone">
        <div class="button">
            <button type="submit" @click="onSubmit()" id="button">Calculer</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SubmitButton",
        methods: {
            onSubmit() {
                this.$emit('submit');
            }
        }
    }
</script>

<style scoped>
    #button {
        background: radial-gradient( #EAE3DF, #9D6340);
        color: #222D3A;
        cursor: pointer;
        display: block;
        font-family: inherit;
        font-weight: 500;
        outline: none;
        overflow: hidden;
        text-decoration: none;
        border-radius: 24px;
        margin: auto;
        border: 1px solid #9D6340;
    }

    .button {
        text-align: center;
        box-sizing: border-box;
        border-right: none;
        padding: 12px;
    }

     button {
        font-size: 14px;
        line-height: 10px;
        padding: 13px;
        margin: auto;
    }

    @media screen and (min-width: 1200px)  {
         .button {
            margin-bottom:15px;
        }

        .style_zone {
        margin-top: 18px;
        }
    }

</style>