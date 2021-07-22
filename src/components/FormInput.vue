<template>
  <div>
    <label
      class="block uppercase tracking-wide mx-4 text-gray-700 text-xs font-bold mb-1 text-left"
      :for="getId"
    >
      {{ label }}
    </label>
    <input
      class="
        block
        w-full
        text-gray-700
        rounded
        py-3
        px-4
        leading-tight
        focus:outline-none
        focus:bg-white
      "
      :class="{ editable: !readonly }"
      :id="getId"
      :type="type"
      :placeholder="placeholder"
      :value="content"
      :readonly="readonly"
      @input="updateValue"
    />
    <p v-if="!readonly"
      :class="{ 'text-red-500': additionalMessageWarning }"
      class="text-xs italic text-left pt-1 mx-4"
    >
      {{ additionalMessage }}
    </p>
  </div>
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
    readonly: {
      type: Boolean,
      default: false,
    },
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

<style lang="postcss" scoped>
.editable {
  @apply border border-gray-600 bg-gray-200;
}
</style>

