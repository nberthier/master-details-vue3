<template>
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    :for="getId"
  >
    {{ label }}
  </label>
  <input
    class="
      block
      w-full
      bg-gray-200
      text-gray-700
      border border-gray-500
      rounded
      py-3
      px-4
      mb-3
      leading-tight
      focus:outline-none
      focus:bg-white
    "
    :id="getId"
    :type="type"
    :placeholder="placeholder"
    :value="content"
    @input="updateValue"
  />
  <p
    :class="{ 'text-red-500': additionalMessageWarning }"
    class="text-xs italic"
  >
    {{ additionalMessage }}
  </p>
  <!-- <p :class="[additionalMessageWarning ? ['text-red-500','font-bold'] : ['text-green-500','italic']]" class="text-xs">{{additionalMessage}}</p> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormInput",
  components: {},
  props: {
    label: String,
    additionalMessage: String,
    additionalMessageWarning: {
      type: Boolean,
      default: false,
    },
    type: String,
    id: String,
    placeholder: String,
    value: [Object, String],
  },
  emits: ["update:value"],
  data: () => ({
    content: null as any,
  }),
  computed: {
    getId(): string {
      let rdmId = Math.random().toString(36).substring(2);
      return this.id + rdmId;
    },
  },
  methods: {
    updateValue(event: any) {
      this.content = event.target.value;
      this.$emit("update:value", this.content);
    },
  },
  watch: {
    value: {
      handler() {
        this.content = this.value;
      },
    },
  },
});
</script>

