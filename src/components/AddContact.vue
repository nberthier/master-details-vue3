<template>
  <div  id="app" class="demo bg-yellow-500">
    <h1>Ajouter un contact</h1>
    {{formItems}}
    <form class="m-1" autocomplete="on">
      <div v-for="item in formItems" :key="item.id" class="form-item my-1">
        <label :for="item.id">{{ item.label }}: </label>
        <input
          :type="item.type"
          :id="item.id"
          :name="item.id"
          v-model="item.value"
        />
      </div>
      <button class="outline-black" type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AddContact",
  components: {},
  props: {
    contact: Contact,
  },
  data() {
    return {
      formItems: [
        {
          label: "Prénom",
          id: "firstName",
          type: "text",
          value: "",
        },
        {
          label: "Nom",
          id: "name",
          type: "text",
          value: "",
        },
        {
          label: "Téléphone",
          id: "phone",
          type: "tel",
          value: "",
        },
        {
          label: "Photo",
          id: "photo",
          type: "url",
          value: "",
        },
        {
          label: "Date de naissance",
          id: "birthdate",
          type: "date",
          value: "",
        },
        {
          label: "Adresse",
          id: "adress",
          type: "text",
          value: "",
        },
      ],
      newContact: new Contact("", "", "", "", new Date(), ""),
    };
  },
  computed: {},
  methods: {},
  watch: {},
});
</script>

