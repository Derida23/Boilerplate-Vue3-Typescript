<script setup lang="ts">
import { PropType } from "vue";
import { ISelect } from "./select.type";
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: null,
  },
  data: {
    type: Array as PropType<Array<ISelect>>,
    required: true,
  },
});
</script>

<template>
  <div class="select">
    <Field v-slot="{ field, errors }" :label="label" :name="name">
      <div>
        <label>{{ label }}</label>
        <select v-bind="field" :name="name" :id="id" class="select-component">
          <option value="" data-default hidden>Choose your country</option>
          <option v-for="item in data" :key="item.value" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </div>

      <ErrorMessage v-slot="{ message }" :name="name">
        <div class="error">
          <div class="error-message">{{ message }}</div>
        </div>
      </ErrorMessage>
    </Field>
  </div>
</template>

<style src="./select.style.scss" lang="scss"></style>
