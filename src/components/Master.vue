<template>
<div class="">
  <div class="flex">
  <button @click="contactAdd" class="bg-indigo-300 w-full justify-center rounded py-2 px-4 flex hover:bg-indigo-400 duration-200">
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
  </div>
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
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions("contacts", ["add"]),
    contactAdd() {
      // let newContact = new Contact(
      //   "grande",
      //   "ariana",
      //   "0451485789",
      //   "photo",
      //   new Date(1993, 6, 26),
      //   "15 rue random LOS ANGELES"
      // );
      // this.add(newContact);
      this.add(null);
      
      this.$emit('update:contactIndex', (this.contacts as [Contact]).length-1);
    },
  },
  watch: {},
});
</script>