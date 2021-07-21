<template>
<div class="">
  <button
    @click="generateColor"
    class="flex text-black dark:text-white font-bold py-2 px-4 rounded-full"
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
  </div>
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
      color : null as any,
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
          color = this.random[this.randomNumberGenerator(this.random.length)];
        console.log(this.random);
      }
      this.color = color;
    },
  //   rgb2hsv (r: number, g: number, b: number) {
  //   let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
  //   rabs = r / 255;
  //   gabs = g / 255;
  //   babs = b / 255;
  //   v = Math.max(rabs, gabs, babs),
  //   diff = v - Math.min(rabs, gabs, babs);
  //   diffc = c => (v - c) / 6 / diff + 1 / 2;
  //   percentRoundFn = num => Math.round(num * 100) / 100;
  //   if (diff == 0) {
  //       h = s = 0;
  //   } else {
  //       s = diff / v;
  //       rr = diffc(rabs);
  //       gg = diffc(gabs);
  //       bb = diffc(babs);

  //       if (rabs === v) {
  //           h = bb - gg;
  //       } else if (gabs === v) {
  //           h = (1 / 3) + rr - bb;
  //       } else if (babs === v) {
  //           h = (2 / 3) + gg - rr;
  //       }
  //       if (h < 0) {
  //           h += 1;
  //       }else if (h > 1) {
  //           h -= 1;
  //       }
  //   }
  //   return {
  //       h: Math.round(h * 360),
  //       s: percentRoundFn(s * 100),
  //       v: percentRoundFn(v * 100)
  //   };
  // },
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