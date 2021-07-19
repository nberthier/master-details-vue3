<template>
  <!-- <section>{{contact}}</section> -->
  <button @click="$emit('isSelected')" class="btn" :class="[selected ? 'btn-hover' : 'btn-not-hover']">
    {{ contact.toString() }}
  </button>
</template>

<script lang="ts">
import Contact from "@/models/contact";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContactMaster",
  components: {},
  props: {
    contact: Contact,
    selected: {
        type: Boolean,
        default: false,
    },
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log(this.contact);
  },
});
</script>

<style scoped>
.btn-hover {
  @apply bg-green-700;
}
.btn-not-hover {
    @apply bg-green-500;
}
.btn {
  @apply text-white font-bold py-2 px-4 rounded w-full;
}
.btn:hover {
    @apply btn-hover;
}
</style>