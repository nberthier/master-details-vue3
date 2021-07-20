<template>
  <button
    class="
      flex
      bg-green-500
      hover:bg-green-700
      text-white
      font-bold
      py-2
      px-4
      rounded-full
    "
  >
    {{ text }}
    <!-- <CheckIcon class="h-5 w-5 text-black"/> -->
    <!-- <MenuIcon/> -->
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { CheckIcon } from '@heroicons/vue/outline';
// import MenuIcon from "vue-material-design-icons/Menu.vue";
// import { mdiCheck } from '@mdi/js';

export default defineComponent({
  name: "Button",
  components: {
    // CheckIcon,
    // MenuIcon,
    // mdiCheck,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "check",
    },
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
});
</script>