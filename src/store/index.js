import { createStore } from 'vuex'

export default createStore({
  state: {
    compteur: "",
    journal : [],
    contacts: [
    {
        name: 'Pierre',
        number: "9876543210"
    },
    {
        name: 'Pierrick',
        number: "1234567890"
    },
    {
        name: null,
        number: "1112223334"
    },
    ]
  },
  getters: {
  },
  mutations: {
    ajoutContact(state, contact) {
      state.contacts.push(contact)
    },
    ajoutNumbers(state, x) {
      if (state.compteur.length > 9 ) {
        return
      } else {
         state.compteur+=x 
      }
    },
    call(state, call) {
      state.journal.push(call)
    }
  },
  actions: {
  },
  modules: {
  }
})
