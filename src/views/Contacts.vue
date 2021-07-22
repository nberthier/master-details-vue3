<template>
  <div class="flex">
    <Master
      :contacts="getContacts"
      v-model:contactIndex="contactIndex"
      class="w-1/3 flex-col"
    />
    <Details
      v-model:contact="selectedContact"
      :contactIndex="indexComputed"
      class="w-2/3 flex-none"
    />
    <!-- <AddContact class="w-1/3"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/models/contact";
import Master from "@/components/Master.vue";
import Details from "@/components/Details.vue";
// import AddContact from "@/components/AddContact.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Contacts",
  components: {
    Master,
    Details,
    // AddContact,
  },
  data: () => ({
    contactIndex: null as any,
  }),
  computed: {
    ...mapGetters("contacts", ["getContacts"]),
    selectedContact: {
      get: function() : Contact | null {
        if (this != undefined && this.contactIndex !== null) {
          return this.getContacts[this.contactIndex || 0];
        } else {
          return null;
        }
      },
      set: function(newContact : Contact) {
        console.log("setter", newContact);
        this.getContacts[this.contactIndex] = newContact;
      }
    },
    indexComputed(): number | null {
      if (this.getContacts[this.contactIndex || 0] === undefined) return null;
      else return this.contactIndex;
    },
  },
  mounted() {
    let tabContact = [{ nom: "boissard" }, { nom: "berthier" }];
    let result = tabContact.map((contact, index, tab) => ({
      id: contact.nom + index + tab.length,
    }));
    console.log(tabContact, result);
  },
  methods: {},
});
</script>