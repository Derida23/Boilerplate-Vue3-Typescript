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
});

const buttonClass = computed(() => {
  let className = props.variant as string;

  if (props.outlined) {
    className = `${className}-outlined`;
  }

  return [className, { loading: props.loading }];
});
</script>

<template>
  <div class="button-wrapper">
    <button :class="buttonClass">
      <span><slot /></span>
    </button>
  </div>
</template>

<style src="./button.style.scss"></style>
