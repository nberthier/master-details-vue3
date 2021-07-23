<template>
  <button
    @click="$emit('isSelected')"
    class="btn"
    :class="[
      `${selected || hover ? 'btn-hover' : 'btn-not-hover'}${
        contact ? '' : '-null'
      }`,
    ]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <span v-if="contact">
      {{ contact.name }} {{ contact.firstName }} {{ contact.phone }}</span
    >
    <span v-else>Contact vide</span>
    <img
      v-if="contact && contact.photo != null"
      class="inline-block h-10 w-10 rounded-full object-cover flex-none ml-2"
      :src="contact.photo"
    />
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
  data: () => ({
    hover: false,
  }),
  computed: {
    backgroundColor(): string {
      return this.contact ? "green" : "yellow";
    },
  },
  methods: {},
  watch: {},
});
</script>

<style lang="postcss" scoped>
.btn-hover {
  @apply bg-green-700;
}
.btn-not-hover {
  @apply bg-green-500;
}
.btn-hover-null {
  @apply bg-yellow-700;
}
.btn-not-hover-null {
  @apply bg-yellow-500;
}
.btn {
  @apply text-white font-bold py-2 px-4 rounded w-full;
}
</style>