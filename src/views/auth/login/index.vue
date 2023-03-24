<script setup lang="ts">
import TextInput from "@/components/Input";
import Button from "@/components/Button";
import { Form, FormContext } from "vee-validate";
import { ref } from "vue";
import { IForm } from "./login.type";
import schema from "@/validations/loginSchema";
import { phone } from "@/utils/directive";

const form = ref<FormContext>();

const onLogin = (value: IForm | unknown): void => {
  console.log("login", value);
};
</script>

<template>
  <Form
    @submit="onLogin"
    ref="form"
    :validation-schema="schema"
    v-slot="{ isSubmitting }"
  >
    <div class="login-wrapper">
      <div class="text-box">
        <p class="text-login">Login Account</p>
      </div>
      <TextInput
        type="tel"
        label="Phone Number"
        placeholder="ex: 085725637261"
        name="phone_number"
      />
      <TextInput
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
      />
      <Button
        type="submit"
        variant="privy"
        class="mt-7 mb-2"
        :loading="isSubmitting"
        >Login</Button
      >
      <Button type="reset" variant="reset" outlined>Reset</Button>
    </div>
  </Form>
</template>

<style src="./login.style.scss"></style>
