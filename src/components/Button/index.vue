<script setup lang="ts">
import { PropType, computed } from "vue";

const props = defineProps({
  outlined: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<"privy" | "reset">,
    default: "privy",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
});

const buttonClass = computed(() => {
  let className = props.variant as string;

  if (props.outlined) {
    className = `${className}-outlined`;
  }

  return [className, { loading: props.loading }];
});

const emit = defineEmits(["click"]);

const onClick = (event: Event) => {
  emit("click", event);
};
</script>

<template>
  <div class="button-wrapper">
    <button :class="buttonClass" @click="onClick" :type="props.type">
      <span v-if="!loading"><slot /></span>
      <svg
        class="loading-animation"
        v-else
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style src="./button.style.scss"></style>
