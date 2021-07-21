<template>
  <div class="flex flex-wrap">
    <button class="flex bg-green-500 ">Valider</button>
    <button class="flex bg-red-500 ">Annuler</button>
    <form class="w-full">
      <div class="row-placement">
        <div class="col-placement">
          <form-input
            label="Prénom"
            additionalMessage="Please fill out this field."
            additionalMessageWarning
            type="text"
            id="firstName"
            placeholder="Jane"
            v-model:value="contactComputed.firstName"
          />
        </div>
        <div class="col-placement">
          <form-input
            label="Nom"
            additionalMessage="Please fill out this field."
            type="text"
            id="familyName"
            placeholder="Doe"
            v-model:value="contactComputed.name"
          />
        </div>
      </div>
      <div class="row-placement">
        <div class="col-placement">
          <form-input
            label="Téléphone"
            additionalMessage="Please fill out this field."
            type="tel"
            id="phone"
            placeholder="+XX.X.XX.XX.XX.XX"
            v-model:value="contactComputed.phone"
          />
        </div>
        <div class="col-placement">
          <form-input
            label="Date de naissance"
            type="date"
            id="birthdate"
            placeholder="DD/MM/YYYY"
            v-model:value="contactComputed.birthdate"
          />
        </div>
      </div>
      <div class="row-placement">
        <div class="col-placement">
          <form-input
            label="Adresse"
            type="text"
            id="adress"
            placeholder="1, avenue du Général de Gaulle 75001 PARIS"
            v-model:value="contactComputed.address"
          />
        </div>
        <div class="col-placement">
          <form-input
            label="Photo"
            type="url"
            id="photo"
            placeholder="URL de la photo"
            v-model:value="contactComputed.photo"
          />
        </div>
      </div>
    </form>
    <div class="w-1/2">
      Nom : <span class="uppercase">{{ contactComputed.name }}</span>
    </div>
    <div class="w-1/2">
      Prénom : <span class="capitalize">{{ contactComputed.firstName }}</span>
    </div>
    <div class="w-1/2">
      Téléphone : <span>{{ contactComputed.phone }}</span>
    </div>
    <div class="w-1/2">
      Photo :
      <span
        ><img
          class="object-fill overflow-hidden"
          height="100"
          width="100"
          :src="contactComputed.photo"
      /></span>
    </div>
    <div class="w-1/2">
      Date de naissance :
      <span>{{
        $moment(contactComputed.birthdate).format("DD MMMM YYYY")
      }}</span>
    </div>
    <div class="w-1/2">
      Adresse : <span>{{ contactComputed.address }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
//import ContactDetails from "@/components/ContactDetails.vue";
import { defineComponent } from "vue";
//import Button from "./Button.vue";
import FormInput from "./FormInput.vue";
export default defineComponent({
  name: "Details",
  components: {
    FormInput,
    // Button,
    //  ContactDetails,
  },
  props: {
    contact: Contact,
  },
  data: () => ({}),
  computed: {
    contactComputed(): Contact {
      return (
        (this.contact as Contact) || new Contact("", "", "", "", new Date(), "")
      );
    },
  },
  methods: {},
  watch: {},
});
</script>

<style lang="postcss" scoped>
.col-placement {
  @apply w-full md:w-1/2 px-3;
}
.row-placement {
  @apply flex flex-wrap -mx-3 mb-6;
}
</style>