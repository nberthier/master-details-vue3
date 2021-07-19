<template>
<div class="space-y-1">
  <button @click="$emit('addContact')" class="bg-blue-500 w-full justify-center rounded py-2 px-4 flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>
  <ul class="list-none">
    <li v-for="(contact, index) in contacts" :key="index">
      <ContactMaster
        @is-selected="$emit('update:contactIndex', index)"
        :contact="contact"
        :selected="contactIndex === index"
      />
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
import ContactMaster from "@/components/ContactMaster.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Master",
  components: {
    ContactMaster,
  },
  props: {
    contacts: [Contact],
    contactIndex: Number,
  },
  emits: ["update:contactIndex"],
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
});
</script>