<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <v-button
      @color-change="$emit('update:colorButton', Math.random())"
      :random="colors"
      :text="buttonType"
    ></v-button>
  </div>
  <form-input label="salut" placeholder="yolo ma gueule"/>
  <label>Salut</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import FormInput from "@/components/FormInput.vue";
// import Contact from "@/models/contact";
// import Master from "@/components/Master.vue";

export default defineComponent({
  name: "Test",
  components: {
    "v-button": Button,
    FormInput,
  },
  data: () => ({
    buttonType: "Valider",
    colors: ["red", "blue", "green", "yellow", "purple", "pink"],
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
  .col-placement{
    @apply w-full md:w-1/2 px-3;
  }
  .row-placement{
    @apply flex flex-wrap -mx-3 mb-6;
  }
</style>