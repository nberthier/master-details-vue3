<template>
  <div class="flex">
    <Master :contacts="getContacts" v-model:contactIndex="contactIndex" @addContact="contactAdd" class="w-1/3 flex-col" />
    <Details :contact="selectedContact" class="w-1/3" />
    <AddContact class="w-1/3"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/models/contact";
import Master from "@/components/Master.vue";
import Details from "@/components/Details.vue";
import AddContact from "@/components/AddContact.vue";
import {mapGetters, mapActions} from "vuex";

export default defineComponent({
  name: "Contacts",
  components: {
    Master,
    Details,
    AddContact,
  },
  data: () => ({
    contactIndex: null,
    
  }),
  computed: {
    ...mapGetters("contacts", ["getContacts"]),
    selectedContact() : Contact | null {
      if (this.contactIndex !== null){
        return this.getContacts[this.contactIndex || 0];
      }
      else {
        return null;
      }
    }
  },
  mounted() {
    let tabContact = [{ nom: "boissard" }, { nom: "berthier" }];
    let result = tabContact.map((contact, index, tab) => ({
      id: contact.nom + index + tab.length,
    }));
    console.log(tabContact, result);
  },
  methods: {
    ...mapActions("contacts", ["add"]),
    contactAdd() {
      let newContact = new Contact("grande", "ariana", "0451485789", "photo", new Date(1993, 6, 26), "15 rue random LOS ANGELES");
      console.log(newContact);
      this.add(newContact);
    }
  }
});
</script>