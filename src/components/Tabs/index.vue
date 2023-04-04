<script setup lang="ts">
import { PropType, toRef, computed } from "vue";
import { TabOption } from "./tabs.type";

const props = defineProps({
  options: {
    type: Array as PropType<TabOption[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const onTabChange = (value: string | number) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="tabs-wrapper">
    <div class="grid grid-cols-2">
      <div
        v-for="tab in props.options"
        :key="tab.key"
        :class="['tab-section', { active: modelValue === tab.key }]"
        @click="onTabChange(tab.key)"
      >
        <p>{{ tab.label }}</p>
      </div>
    </div>
  </div>
</template>

<style src="./tabs.style.scss" lang="scss"></style>
