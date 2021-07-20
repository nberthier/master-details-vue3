<template>
  <div class="flex flex-wrap">
    <div class="w-1/2">Nom : <span class="uppercase">{{contactComputed.name}}</span></div>
    <div class="w-1/2">Prénom : <span class="capitalize">{{contactComputed.firstName}}</span></div>
    <div class="w-1/2">Téléphone : <span>{{contactComputed.phone}}</span></div>
    <div class="w-1/2">Photo : <span><img class="object-fill overflow-hidden" height="100" width="100" :src=contactComputed.photo></span></div>
    <div class="w-1/2">Date de naissance : <span>{{$moment(contactComputed.birthdate).format("DD MMMM YYYY")}}</span></div>
    <div class="w-1/2">Adresse : <span>{{contactComputed.adress}}</span></div>
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
  data: () => ({
  }),
  computed: {
    contactComputed() : Contact {
      return this.contact || new Contact("", "", "", "", new Date(), "");
    }
  },
  methods: {},
  watch: {},
});
</script>