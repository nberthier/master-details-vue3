import Contact from "@/models/contact"

export default {
    namespaced: true,
    state: {
        contacts: [
            new Contact("berthier", "nicolas", "0761577989"),
            new Contact("boissard", "clement", "0654785412"),
            new Contact("boukrourou", "karima", "0214586585"),
          ],
    },
    mutations: {
        ADD (state: any, contact: Contact) {
            state.contacts.push(contact);
        }
    },
    actions: {
        add (context: any, contact: Contact) {
            console.log("action add", context, contact);
            context.commit("ADD", contact);
        }
    },
    getters: {
        getContacts: (state: any) : [Contact] => state.contacts,
    }
}