<script setup lang="ts">
import { PropType } from "vue";
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"text" | "email" | "password" | "tel">,
    default: "text",
  },
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <Field v-slot="{ field, errors }" :label="label" :name="name">
    <div class="input-wrapper">
      <label>{{ label }}</label>
      <div class="input-box">
        <input
          v-bind="field"
          class="input-component"
          :id="id"
          :placeholder="placeholder"
          :type="type"
        />
      </div>
      <ErrorMessage v-slot="{ message }" :name="name">
        <div class="error">
          <div class="error-message">{{ message }}</div>
        </div>
      </ErrorMessage>
    </div>
  </Field>
</template>

<style src="./input.style.scss"></style>
