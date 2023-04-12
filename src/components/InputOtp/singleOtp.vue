<script setup lang="ts">
import { onMounted, PropType, Ref, ref, watch } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "tel",
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
  separator: {
    type: String,
  },
  focus: {
    type: Boolean,
    default: true,
  },
  inputClasses: {
    type: String,
  },
  autoFocus: {
    type: Boolean,
    default: true,
  },
  lastChild: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "on-change",
  "on-keydown",
  "on-paste",
  "on-focus",
  "on-blur",
]);

const model = ref(props.value || "");
const input = ref<HTMLInputElement | null>(null) as Ref<HTMLInputElement>;

const onChange = () => {
  model.value = model.value.toString();

  if (model.value.length > 1) {
    model.value = model.value.slice(0, 1);
  }

  return emit("on-change", model.value);
};

const isCodeNumeric = (charCode: number) =>
  (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105);

const onKeyDown = (event: KeyboardEvent) => {
  if (props.disabled) {
    event.preventDefault();
  }

  const keyEvent = event || window.event;
  const charCode = keyEvent.which ? keyEvent.which : keyEvent.keyCode;

  if (
    isCodeNumeric(charCode) ||
    [8, 9, 13, 37, 39, 46, 86].includes(charCode)
  ) {
    emit("on-keydown", event);
  } else {
    keyEvent.preventDefault();
  }
};

const onPaste = (event: ClipboardEvent) => emit("on-paste", event);

const onFocus = () => {
  input.value.select();

  return emit("on-focus");
};

const onBlur = () => {
  emit("on-blur");
};

watch(
  () => props.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      model.value = newValue;
    }
  }
);

watch(
  () => props.focus,
  (newValue, oldValue) => {
    if (oldValue !== newValue && input.value && props.focus) {
      input.value.focus();
      input.value.select();
    }
  }
);

onMounted(() => {
  if (input.value && props.focus && props.autoFocus) {
    input.value.focus();
    input.value.select();
  }
});
</script>

<template>
  <div class="single-otp flex items-center">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      min="0"
      max="9"
      maxlength="1"
      pattern="[0-9]"
      v-model="model"
      :disabled="disabled"
      :class="inputClasses"
      @input="onChange"
      @keydown="onKeyDown"
      @paste="onPaste"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span v-if="!lastChild && separator">
      <span v-html="separator"></span
    ></span>
  </div>
</template>

<style src="./inputOtp.style.scss" lang="scss"></style>
