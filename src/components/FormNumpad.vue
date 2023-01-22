<template>
    <div>
        <button @:click="ajoutNumbers" value="1">1</button>
        <button @:click="ajoutNumbers" value="2">2</button>
        <button @:click="ajoutNumbers" value="3">3</button>
        <button @:click="ajoutNumbers" value="4">4</button>
        <button @:click="ajoutNumbers" value="5">5</button>
        <button @:click="ajoutNumbers" value="6">6</button>
        <button @:click="ajoutNumbers" value="7">7</button>
        <button @:click="ajoutNumbers" value="8">8</button>
        <button @:click="ajoutNumbers" value="9">9</button>
        <button @:click="ajoutNumbers" value="*">*</button>
        <button @:click="ajoutNumbers" value="0">0</button>
        <button @:click="ajoutNumbers" value="#">#</button>
    </div>
</template>
  
  
<script>
  export default {
    name:'FormNumpad',
    computed:{
        contacts() {
            return this.$store.state.contacts
        },
    },
    methods: {
        ajoutNumbers(e) {
            let x = ""
            x = e.target.value
            this.$store.commit('ajoutNumbers', x)
        },
    }
  }
  
</script>

<style scoped>
    div{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        width: 350px;
        height: 250px;
        gap: 10px;
    }
</style>