<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <v-button @color-change="$emit('update:colorButton', Math.random())" :random="colors" :text="buttonType"></v-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
// import Contact from "@/models/contact";
// import Master from "@/components/Master.vue";

export default defineComponent({
  name: "Test",
  components: {
    'v-button': Button,
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