<template>
  <div>
    <div class="flex flex-wrap space-x-2 justify-evenly">
      <Button
        v-if="!nothingIsSelected && isEditing"
        @click="validateContact"
        class="text-white bg-lime-500"
        >Valider</Button
      >
      <Button
        v-if="!nothingIsSelected && isEditing"
        @click="cancelContact"
        class="text-white bg-red-500"
        >Annuler</Button
      >
      <Button
        v-if="!nothingIsSelected && !isEditing"
        @click="modifyContact"
        class="text-white bg-indigo-500"
        >Éditer</Button
      >
      <Button
        v-if="!nothingIsSelected && !isEditing"
        @click="deleteContact"
        class="text-white bg-red-500"
        >Supprimer</Button
      >
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
            :readonly="isNotModifiable"
            v-model:value="currentContact.firstName"
          />
        </div>
        <div class="col-placement">
          <form-input
            label="Nom"
            additionalMessage="Please fill out this field."
            type="text"
            id="familyName"
            placeholder="Doe"
            :readonly="isNotModifiable"
            v-model:value="currentContact.name"
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
            :readonly="isNotModifiable"
            v-model:value="currentContact.phone"
          />
        </div>
        <div class="col-placement">
          <form-input
            label="Date de naissance"
            type="date"
            id="birthdate"
            placeholder="DD/MM/YYYY"
            :readonly="isNotModifiable"
            v-model:value="currentContact.birthdate"
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
            :readonly="isNotModifiable"
            v-model:value="currentContact.address"
          />
        </div>
        <div class="col-placement flex">
          <form-input
            label="Photo"
            type="url"
            id="photo"
            placeholder="URL de la photo"
            :readonly="isNotModifiable"
            v-model:value="currentContact.photo"
            class="flex-grow"
          />
          <img
            class="
              inline-block
              h-20
              w-20
              rounded-full
              object-cover
              flex-none
              ml-2
            "
            :src="currentContact.photo"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
//import ContactDetails from "@/components/ContactDetails.vue";
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import Button from "./Button.vue";
import FormInput from "./FormInput.vue";
export default defineComponent({
  name: "Details",
  components: {
    FormInput,
    Button,
    //  ContactDetails,
  },
  props: {
    contact: Contact,
    contactIndex: Number,
  },
  emits: ['update:contact'],
  data: () => ({
    //currentContact: (typeof this.contact == undefined) ? new Contact("", "", "", "", new Date(), "") : this.contact,
    currentContact: {} as Contact,
    isNotModifiable: true,
  }),
  computed: {
    isEditing(): boolean {
      return !this.isNotModifiable;
    },
    nothingIsSelected(): boolean {
      return this.contactIndex == null;
    },
  },
  methods: {
    ...mapActions("contacts", ["del"]),
    validateContact() {
      let newContact = new Contact(this.currentContact.name,
        this.currentContact.firstName,
        this.currentContact.phone,
        this.currentContact.photo,
        this.currentContact.birthdate,
        this.currentContact.address);
      this.$emit('update:contact', newContact);
    },
    cancelContact() {
      Object.assign(this.currentContact, this.contact);
      this.isNotModifiable = true;

      if (this.contact == null) {
        this.del(this.contactIndex);
      }
    },
    modifyContact() {
      // if (this.isNotModifiable === false) {
      this.isNotModifiable = false;
      // }
      //return this.isNotModifiable;
    },
    deleteContact() {
      this.del(this.contactIndex);
    },
    updateCurrentContact() {
      if (this.contact) {
        Object.assign(this.currentContact, this.contact);
        this.isNotModifiable = true;
      } else if (this.contact === null) {
        this.currentContact = {} as Contact;
        this.isNotModifiable = false;
      } else {
        this.currentContact = {} as Contact;
        this.isNotModifiable = true;
      }
    },
  },
  watch: {
    contactIndex: {
      handler() {
        this.updateCurrentContact();
      },
    },
    contact: {
      deep: true,
      handler() {
        this.updateCurrentContact();
      },
    },
  },
});
</script>

<style lang="postcss" scoped>
.col-placement {
  @apply w-full md:w-1/2 px-3 mt-2;
}
.row-placement {
  @apply flex flex-wrap mt-2;
}
</style>