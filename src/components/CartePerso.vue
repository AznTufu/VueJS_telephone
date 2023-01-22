<template>
    <div v-for="contact in contacts" :key="contact.name">
        <h3> {{ contact.name }}</h3>
        <p> {{ contact.number }} </p>
        <button type="submit" @click="call(compteur)"> call </button>
    </div>
</template>
<script>
import CallContact from '@/components/CallContact.vue';
export default {
    name:'CartePerso',
    components:{
        CallContact
    },
    computed:{
        contacts() {
          return this.$store.state.contacts
        },
    },
}
</script>
<style scoped>
div {
    width: 150px;
    margin: 0 auto;
    height: 150px;
    background-color: #399cff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    gap: 10px;
}
</style>