<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <v-button
      @color-change="$emit('update:colorButton', Math.random())"
      :random="colors"
      :text="buttonType"
    ></v-button>
  </div>

  <div class="w-1/3 flex-col">
    <thead class="bg-indigo-50 flex sm:rounded-lg">
      <tr>
        <th
          scope="col"
          class="
            px-6
            py-3
            text-left text-xs
            font-medium
            text-gray-500
            uppercase
            tracking-wider
          "
        >
          <div class="mx-14">Nom</div>
        </th>
        <th
          scope="col"
          class="
            px-6
            py-3
            text-left text-xs
            font-medium
            text-gray-500
            uppercase
            tracking-wider
          "
        >
          <div class="mx-20">Téléphone</div>
        </th>
        <th
          scope="col"
          class="
            px-6
            py-3
            text-left text-xs
            font-medium
            text-gray-500
            uppercase
            tracking-wider
          "
        ></th>
        <th scope="col" class="relative px-6 py-3">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <li class="list-none" v-for="(contact, index) in contacts" :key="index">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <li class="min-w-full">
              <button
                class="w-full sm:rounded-lg"
                @click="$emit('isSelected')"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                :class="hover ? 'btn-hover' : 'btn-not-hover'"
              >
                <div
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
                          class="h-10 w-10 rounded-full"
                          :src="contacts[index].photo"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div
                          class="text-sm font-medium text-gray-900 capitalize"
                        >
                          {{ contacts[index].firstName }}
                          {{ contacts[index].name }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-12 py-6 justify-center whitespace-nowrap">
                    <div class="text-sm flex justify-center text-gray-900">
                      {{ contacts[index].phone }}
                    </div>
                  </div>
                  <!-- More people... -->
                  <!-- </tbody> -->
                </div>
              </button>
            </li>
          </div>
        </div>
      </div>
    </li>
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
</style>