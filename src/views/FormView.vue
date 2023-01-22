<template>
    <FormContact/>
</template>

<script>
import FormContact from '@/components/FormContact.vue'
export default {
    name: 'FormView',
    components: {
        FormContact,
    },
    computed:{
        contacts() {
            return this.$store.state.contacts
        }
    },
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
    
</style>