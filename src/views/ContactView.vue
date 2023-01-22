<template>
<h1>Contact</h1>
<section class="box">
    <div class="router-link">
    <router-link to="/Form">+</router-link>
    </div>
<div v-for="contact in contacts" :key="contact.name">
  <div class="separator"></div>
  <div class="box-container">
    <h3> {{ contact.name }}</h3>
    <p> {{ contact.number }} </p>
    <img src="@/assets/telephone.png" alt="phone image" @click="call(contact.name, contact.number)">
  </div>
</div>
</section>
</template>

<script>
  export default {
    name:'ContactView',
    computed:{
        contacts() {
            return this.$store.state.contacts
        },
    },
    data() {
      return {
          Call: {
            name: '',
            number: '',
            dateTime: null,
        },
      }
    },
    methods: {
        call(name, number) {
            const today = new Date();
            var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            var time = today.getHours() + "h" + today.getMinutes()
           
            this.Call = {
              name: name,
              number: number,
              dateTime: 'le ' + date + ' à ' + time
            }
            console.log(this.Call)
            this.$store.commit("call", this.Call)
          }
      },
  }

</script>

<style scoped>
.router-link{
  margin-bottom: 2rem;
}
.box {
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
.box-container {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.separator {
  width: 100%;
  height: 1px;
  position: relative;
  background-color: rgb(44, 44, 44);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>