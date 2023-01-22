<template>
  <section class="box">
  <h1> {{ compteur }} </h1>
  <div v-if=" compteur.length < 10">Inconnu</div>
  <div v-else>
    <div v-for="contact in contacts" :key="contact.name">
      <div v-if="contact.number == compteur">
          <p> {{ contact.name }}</p>
      </div>
      <!-- <div v-else>inconnu</div> -->
    </div>
  </div>
<div class="num">
  <FormNumpad/>
</div>
<div class="button">
<img src="@/assets/telephone.png" alt="phone image" @click="call(compteur)">
</div>
</section>
</template>

<script>
import FormNumpad from '@/components/FormNumpad.vue'
  export default {
    name:'ClavierView',
    components: {
      FormNumpad,
    },
    computed:{
        compteur() {
            return this.$store.state.compteur
        },
        contacts() {
          return this.$store.state.contacts
        },
    },    
    data() {
      return {
          name: '',
          number: '',
          Calltest: {
            name: '',
            number: '',
            dateTime: null,
        },
      }
    },
    methods: {
        call(compteur) {
              if (this.contacts.find(contact => compteur == contact.number )) {
                this.name = this.contacts.find(contact => compteur == contact.number).name
                this.number = this.contacts.find(contact => compteur == contact.number).number
              } else {
                this.number = compteur
              }

              const today = new Date();
              var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
              var time = today.getHours() + "h" + today.getMinutes()
            
              this.Calltest = {
                name: this.name,
                number: this.number,
                dateTime: 'le ' + date + ' à ' + time
              }
              console.log(this.Calltest)
              this.$store.commit("call", this.Calltest)
          }
      },
  }
  
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 550px;
  background-color: white;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 30px;
}
.num {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>