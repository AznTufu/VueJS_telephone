<template>
    <h1>Formulaire</h1>
    <div class="box">
        <form @submit.prevent="ajoutContact">
            <input type="text" placeholder="name..." v-model="formPerso.name" class="block"/>
            <span v-if="formPerso.name.length < 1 && error" class="error"> Le champ ne doit pas être vide </span>
            <input type="number"  placeholder="Number..." v-model="formPerso.number" class="block">
            <button type="submit" class="block">Ajouter</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormContact',
    computed:{
        contacts() {
            return this.$store.state.contacts
        },
        compteur() {
            return this.$store.state.contacts
        },
    },
    data() {
        return {
            error: false,
            formPerso: {
                name: '',
                number: null
            }
        }
    },
    methods: {
        ajoutContact() {
            if(this.formPerso.name.length < 1) {
                this.error = true
                return
            }
            if(this.formPerso.name == '' || this.formPerso.number == null) return

            if(this.contacts.find(contact => contact.name == this.formPerso.name)) return

            this.$store.commit('ajoutContact', this.formPerso)

            this.error = false
            
            this.formPerso = {
                name: '',
                number:null
            }
        },
    }
}
</script>
<style scoped>
.error{
    color:red
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.box{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 440px;
    width: 550px;
    background-color: white;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    border-radius: 30px;
}
.block {
    display: flex;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 30px;
    background-color: white;
}
</style>