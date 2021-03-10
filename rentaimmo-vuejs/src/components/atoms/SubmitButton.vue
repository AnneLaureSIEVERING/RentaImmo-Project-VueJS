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
        color: rgb(34, 34, 34);
        box-sizing: border-box;
        border-right: none;
    }

    /** MEDIA QUERIES **/

    @media screen and (min-width: 321px) and (max-width: 767px) {
        #button {
            font-size: 16px;
            line-height: 16px;
            padding: 12px;
            margin: 0 auto;
        }
        .button {
            padding: 10px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        button {
            font-size: 16px;
            line-height: 16px;
            padding: 15px;
            margin: auto;
        }
        .button {
            padding: 16px;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        button {
            font-size: 16px;
            line-height: 16px;
            padding: 15px;
            margin: auto;
        }
        .button {
            padding: 16px;
        }
    }

    @media screen and (min-width: 1200px)  {
        button {
            font-size: 16px;
            line-height: 16px;
            padding: 15px;
            margin: auto;
        }
        .button {
            padding: 16px;
        }
    }
</style>