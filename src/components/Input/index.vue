<script setup lang="ts">
import { PropType, ref, computed } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import EyeIcon from "@/assets/icon/eye-icon.vue";

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

const password = ref<boolean>(false);

const onShowPassword = (): void => {
  password.value = !password.value;
};

const inputType = computed<string>(() => {
  if (props.type === "password" && password.value) {
    return "text";
  }

  return props.type;
});
</script>

<template>
  <Field v-slot="{ field, errors }" :label="label" :name="name">
    <div class="input-wrapper">
      <label>{{ label }}</label>
      <div :class="['input-box', { 'has-error': errors.length }]">
        <input
          v-bind="field"
          class="input-component"
          :id="id"
          :placeholder="placeholder"
          :type="inputType"
        />

        <EyeIcon
          v-if="type === 'password'"
          :class="[
            'input-icon',
            {
              active: password,
            },
          ]"
          @click="onShowPassword"
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
