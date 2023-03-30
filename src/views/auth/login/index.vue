<script setup lang="ts">
import TextInput from "@/components/Input";
import Button from "@/components/Button";
import { Form, FormContext } from "vee-validate";
import { ref } from "vue";
import { IForm } from "./login.type";
import schema from "@/validations/loginSchema";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const form = ref<FormContext>();

const { login } = useAuthStore();
const { user } = storeToRefs(useAuthStore());
const router = useRouter();
const toast = useToast();

const onLogin = async (value: Record<string, unknown>): Promise<void> => {
  const data: IForm = {
    phone: value.phone_number,
    password: value.password,
    latlong: 62,
    device_token: Math.random(),
    device_type: 2,
  };

  await login(data);

  if (user) {
    router.push({ path: "/profile" });
  } else {
  }
  toast.success("My toast content");
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
