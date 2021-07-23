<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <li class="min-w-full">
          <button
            class="w-full sm:rounded-lg duration-200 transition-all"
            @click="$emit('isSelected')"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="[
              `${selected || hover ? 'btn-hover' : 'btn-not-hover'}${
                contact ? '' : '-null'
              }`,
            ]"
          >
            <div
              v-if="contact"
              class="
                overflow-hidden
                border-b border-r border-indigo-200
                flex
                justify-evenly
                sm:rounded-lg
              "
            >
              <!-- <tbody
                    :class="hover ? 'btn-hover' : 'btn-not-hover'"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    class="bg-white divide-y divide-gray-200"
                  > -->

              <div class="px-6 py-3 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      v-if="contact && contact.photo != null"
                      class="h-10 w-10 rounded-full"
                      :src="contact.photo"
                      alt=""
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900 capitalize">
                      {{ contact.firstName }}
                      {{ contact.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-12 py-6 justify-center whitespace-nowrap">
                <div class="text-sm flex justify-center text-gray-900">
                  {{ contact.phone }}
                </div>
              </div>
              <!-- More people... -->
              <!-- </tbody> -->
            </div>
            <div
              v-else
              class="
                overflow-hidden
                border-b border-r border-indigo-200
                flex
                justify-evenly
                sm:rounded-lg
              "
            >
              <div class="px-12 py-6 justify-center whitespace-nowrap">
                <div class="text-sm flex justify-center text-gray-900">
                  Contact vide
                </div>
              </div>
            </div>
          </button>
        </li>
      </div>
    </div>
  </div>
  <!-- <button
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
  </button> -->
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
  @apply bg-indigo-200;
}
.btn-not-hover {
  @apply bg-white;
}
.btn-hover-null {
  @apply bg-yellow-200;
}
.btn-not-hover-null {
  @apply bg-yellow-50;
}
.btn {
  @apply text-white font-bold py-2 px-4 rounded w-full;
}
</style>