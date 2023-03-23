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
      <span><slot /></span>
    </button>
  </div>
</template>

<style src="./button.style.scss"></style>
