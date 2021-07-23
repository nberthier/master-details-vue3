<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <v-button
      @color-change="$emit('update:colorButton', Math.random())"
      :random="colors"
      :text="buttonType"
    ></v-button>
  </div>

  <div class="relative inline-block text-left dropdown">
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
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
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
      "
    >
      <div
        class="
          absolute
          right-0
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
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
// import FormInput from "@/components/FormInput.vue";
import Contact from "@/models/contact";
import moment from "moment";
// import Master from "@/components/Master.vue";

export default defineComponent({
  name: "Test",
  components: {
    "v-button": Button,
    // FormInput,
  },
  data: () => ({
    buttonType: "Valider",
    colors: ["red", "blue", "green", "yellow", "purple", "pink"],
    contacts: [
      new Contact(
        "berthier",
        "nicolas",
        "0761577989",
        "https://cdn.discordapp.com/attachments/159394283072258048/693816001619296266/20200329_153653.jpg",
        moment("1995-5-29").toDate(),
        "90 rue de la Solidarité MONTREUIL"
      ),
      new Contact(
        "boissard",
        "clement",
        "0654785412",
        "https://gal.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F0d8571a1-ca74-4006-a285-152a29496f44.2Ejpeg/620x430/quality/80/tom-cruise.jpeg",
        moment("1997-12-31").toDate(),
        "120 rue de Suresnes NANTERRE"
      ),
      new Contact(
        "boukrourou",
        "karima",
        "0214586585",
        "https://star24.tv/wp-content/uploads/2017/12/Ariana-grande.jpg",
        moment("1993-4-08").toDate(),
        "120 rue de Suresnes NANTERRE"
      ),
    ],
    hover: false,
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
.col-placement {
  @apply w-full md:w-1/2 px-3;
}
.row-placement {
  @apply flex flex-wrap -mx-3 mb-6;
}
.btn-hover {
  @apply bg-indigo-200;
}
.btn-not-hover {
  @apply bg-white;
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
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>