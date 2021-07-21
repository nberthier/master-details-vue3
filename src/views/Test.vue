<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <v-button
      @color-change="$emit('update:colorButton', Math.random())"
      :random="colors"
      :text="buttonType"
    ></v-button>
  </div>
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
        />
      </div>
      <div class="col-placement">
        <form-input
          label="Nom"
          additionalMessage="Please fill out this field."
          type="text"
          id="familyName"
          placeholder="Doe"
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
        />
      </div>
      <div class="col-placement">
        <form-input
          label="Photo"
          type="url"
          id="photo"
          placeholder="URL de la photo"
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
        />
      </div>
      <div class="col-placement">
        <form-input
          label="Date de naissance"
          type="date"
          id="birthdate"
          placeholder="DD/MM/YYYY"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import FormInput from "@/components/FormInput.vue";
// import Contact from "@/models/contact";
// import Master from "@/components/Master.vue";

export default defineComponent({
  name: "Test",
  components: {
    "v-button": Button,
    FormInput,
  },
  data: () => ({
    buttonType: "Valider",
    colors: ["red", "blue", "green", "yellow", "purple", "pink"],
  }),
  emits: ["update:colorButton"],
  methods: {
    // buttonClicked() {
    // }
  },
  // mounted() {

  // },
});
</script>

<style lang="postcss" scoped>
  .col-placement{
    @apply w-full md:w-1/2 px-3;
  }
  .row-placement{
    @apply flex flex-wrap -mx-3 mb-6;
  }
</style>