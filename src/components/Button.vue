<template>
  <button
    @click="generateColor"
    class="flex text-black font-bold py-2 px-4 rounded-full"
    :style="{ backgroundColor: color }"
  >
    <!-- :class="[colors[colorIndex]]" -->
    <slot>
      {{ text }}
      <!-- <SvgIcon name="twitter"/> -->
      <!-- <CheckIcon class="h-5 w-5 text-black"/> -->
      <!-- <MenuIcon/> -->
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import SvgIcon from '@/components/SvgIcon.vue';
// import { CheckIcon } from '@heroicons/vue/outline';
// import MenuIcon from "vue-material-design-icons/Menu.vue";
// import { mdiCheck } from '@mdi/js';

export default defineComponent({
  name: "Button",
  components: {
    // CheckIcon,
    // MenuIcon,
    // mdiCheck,
    // SvgIcon,
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
    // onClick: {
    //   type: Function,
    //   required: true,
    // },
    colorIndex: {
      type: Number,
      default: 0,
    },
    random: {
      type: [Boolean, Array],
      default: false,
    },
    // }
  },
  data: () => ({
      color : null,
  }),
  computed: {
    
  },
  methods: {
    randomNumberGenerator(max: number, min = 0) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    generateColor() {
      let color = null;
      if (typeof this.random == "boolean") {
        let r = this.randomNumberGenerator(255).toString(16),
            g = this.randomNumberGenerator(255).toString(16),
            b = this.randomNumberGenerator(255).toString(16);
        console.log(r, g, b);
        color = `#${r}${g}${b}`;
        console.log(color);
      } else if (Array.isArray(this.random)) {
          color = this.random[this.randomNumberGenerator(this.random.length-1)];
        console.log(this.random);
      }
      this.color = color;
    },
  },
  mounted() {
      this.generateColor();
  },
  watch: {},
});
</script>

<style scoped>
.red {
  @apply bg-red-500;
}
.green {
  @apply bg-green-500;
}
.blue {
  @apply bg-blue-500;
}
.yellow {
  @apply bg-yellow-500;
}
.purple {
  @apply bg-purple-500;
}
.pink {
  @apply bg-pink-500;
}
</style>