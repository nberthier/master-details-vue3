<template>
  <div class="relative inline-block text-left dropdown overflow-visible">
    <span class="rounded-md shadow-sm"
      ><button
        class="
          inline-flex
          justify-center
          py-2
          text-sm
          font-medium
          leading-5
          text-gray-700
          transition
          duration-150
          ease-in-out
          bg-white
          border border-gray-300
          rounded-md
          hover:text-gray-500
          focus:outline-none
          focus:border-blue-300
          focus:shadow-outline-blue
          active:bg-gray-50
          active:text-gray-800
        "
        type="button"
        aria-haspopup="true"
        aria-expanded="true"
        aria-controls="headlessui-menu-items-117"
      >
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
            stroke-width="1.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg></button
    ></span>
    <div
      class="
        opacity-0
        invisible
        dropdown-menu
        transition-all
        duration-300
        transform
        origin-top-right
        -translate-y-2
        scale-95
        relative
      "
    >
      <div
        class="
          absolute
          overflow-visible
          z-index:9999
          w-56
          mt-2
          origin-top-right
          bg-white
          border border-gray-200
          divide-y divide-gray-100
          rounded-md
          shadow-lg
          outline-none
        "
        aria-labelledby="headlessui-menu-button-1"
        id="headlessui-menu-items-117"
        role="menu"
      >
        <div class="shadow flex">
          <input
            id="search"
            :value="contacts"
            @input="updateContacts"
            class="w-full rounded p-2"
            type="text"
            placeholder="Recherche..."
          />
          <button
            class="
              bg-white
              w-auto
              flex
              justify-end
              items-center
              text-blue-500
              p-2
              hover:text-blue-400
            "
          >
            <i class="material-icons"
              ><svg
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
            ></i>
          </button>
        </div>
        <div class="px-4 py-3">
          <p class="text-sm leading-5">Filtrer par</p>
        </div>
        <div class="py-1">
          <div class="flex">
            <p
              tabindex="0"
              class="
                text-gray-700
                flex
                justify-between
                w-full
                px-4
                py-2
                text-sm
                leading-5
                text-left
              "
              role="menuitem"
            >
              Ordre alphabétique
            </p>
          </div>
          <div class="flex">
            <a
              href="javascript:void(0)"
              tabindex="1"
              class="
                text-gray-700
                flex
                justify-between
                w-full
                px-4
                py-2
                text-sm
                leading-5
                text-left
              "
              role="menuitem"
              >Prénom</a
            >
            <button
              class="
                bg-white
                w-auto
                flex
                justify-end
                items-center
                text-black
                p-2
              "
            >
              <i class="material-icons"
                ><svg
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
                    d="M19 9l-7 7-7-7"
                  /></svg
              ></i>
            </button>
          </div>
          <div class="flex">
            <a
              href="javascript:void(0)"
              tabindex="2"
              class="
                text-gray-700
                flex
                justify-between
                w-full
                px-4
                py-2
                text-sm
                leading-5
                text-left
              "
              role="menuitem"
              >Nom</a
            >
            <button
              class="
                bg-white
                w-auto
                flex
                justify-end
                items-center
                text-black
                p-2
              "
            >
              <i class="material-icons"
                ><svg
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
                    d="M19 9l-7 7-7-7"
                  /></svg
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Contact from "@/models/contact";
import { defineComponent } from "vue";
export default defineComponent({
  name: "MasterSearch",
  components: {},
  props: {
    contacts: [Contact],
  },
  emits: ["update:contacts"],
  data: () => ({
    contactsUpdated: {} as [Contact],
  }),
  computed: {},
  methods: {
    updateContacts(event: any) {
      let search = event.target.value;
      (this.contacts as unknown as [Contact]).forEach((elementOfContacts) => {
        for (var i = 0; i < (elementOfContacts.name.length - search.length); i++) {
          if( this.contactsUpdated.find(elementOfContactUpdated => elementOfContactUpdated = elementOfContacts) == undefined 
              && search == elementOfContacts.name.slice(i, search.length) ) {
              this.contactsUpdated.push(elementOfContacts);
          }
          console.log(this.contactsUpdated);
          
        }
      });
    },
  },
  watch: {},
});
</script>

<style lang="postcss" scoped>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>