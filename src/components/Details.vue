<template>
  <div class="flex flex-wrap">
    <div class="w-1/2">Nom : <span class="uppercase">{{contactComputed.nom}}</span></div>
    <div class="w-1/2">Prénom : <span class="capitalize">{{contactComputed.prenom}}</span></div>
    <div class="w-1/2">Téléphone : <span>{{contactComputed.tel}}</span></div>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
//import ContactDetails from "@/components/ContactDetails.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Details",
  components: {
    //  ContactDetails,
  },
  props: {
    contact: Contact,
  },
  data: () => ({}),
  computed: {
    contactComputed() : Contact {
      return this.contact || new Contact("", "", "");
    }
  },
  methods: {},
  watch: {},
});
</script>