<template>
    <div class="clear-form">
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <button type="reset" class="close" id="close-label">Clear</button>
    </div>
</template>

<script>
    export default {
        name: "ClearButton",
    }
</script>

<style scoped>
    
    .leftright{
        height: 4px;
        width: 30px;
        position: absolute;
        margin-top: 20px;
        background-color: #6E52FC; 
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all .3s ease-in;
    }
    
    .rightleft{
        height: 4px;
        width: 30px;
        position: absolute;
        margin-top: 20px;
        background-color: #52A0F8;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all .3s ease-in;
    }
    
    .close{
        color: white;
        background-color: #6E52FC;
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
        background-color: #6E52FC;
    }
    .clear-form:hover .rightleft{
        transform: rotate(45deg);
        background-color: #52A0F8;
    }
    .clear-form:hover .close{
        opacity: 1;
    }
</style>