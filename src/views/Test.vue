<template>
  <h1>Test boutons et champs</h1>
  <div class="justify-center">
    <Button :text="buttonType"></Button>
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
    Button,
  },
  data: () => ({
    buttonType: "Valider",
  }),
  // mounted() {
    
  // },
});
</script>