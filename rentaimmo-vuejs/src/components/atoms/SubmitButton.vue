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
        background: radial-gradient(#6E52FC, #52A0F8);
        color: rgb(255, 255, 255);
        cursor: pointer;
        display: block;
        font-family: inherit;
        font-weight: 600;
        outline: none;
        overflow: hidden;
        text-decoration: none;
        border-radius: 24px;
        margin: auto;
        border: 2px solid #6E52FC;
    }

    .button {
        text-align: center;
        box-sizing: border-box;
        border-right: none;
        padding: 16px;
    }

     button {
        font-size: 16px;
        line-height: 12px;
        padding: 13px;
        margin: auto;
    }

    .style_zone {
        margin-top: 18px;
    }

</style>