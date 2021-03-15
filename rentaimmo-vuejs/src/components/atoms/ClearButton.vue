<template>
    <div class="clear-form">
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <button type="reset" @click="onClick()" class="close" id="close-label">Clear</button>
    </div>
</template>

<script>
    export default {
        name: "ClearButton",
        methods: {
            onClick() {
                this.$emit('submitToCloseDisplay');
            }
        }
    }
</script>

<style scoped>
    
    .leftright{
        height: 4px;
        width: 30px;
        position: absolute;
        margin-top: 20px;
        background-color: #9D6340; 
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }
    
    .rightleft{
        height: 4px;
        width: 30px;
        position: absolute;
        margin-top: 20px;
        background-color: #222D3A;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }
    
    .close{
        color: white;
        background-color: #9D6340;
        font-size: .6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all .3s ease-in;
        opacity: 0;
        margin: 40px 0 0 -6px;
        border: none;
        padding: 2px;
        cursor: pointer;
    }
    
    .close:focus {
        text-decoration: none;
        outline: none;
        border: whitesmoke 1px solid;
        box-shadow: none;
    }
    
    .clear-form:hover .leftright{
        transform: rotate(-45deg);
        background-color: #9D6340;
    }
    .clear-form:hover .rightleft{
        transform: rotate(45deg);
        background-color: #222D3A;
    }
    .clear-form:hover .close{
        opacity: 1;
    }

    @media screen and (min-width: 1200px)  {
         .clear-form {
            padding-top: 10px;
            padding-right: 10px;
        }
    }

</style>