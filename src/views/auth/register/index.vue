<script setup lang="ts">
import TextInput from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import country from "@/constant/country";
import { Form, FormContext } from "vee-validate";
import { ref } from "vue";
import { IForm } from "./register.type";
import { useToast } from "vue-toastification";
import { useAuthStore } from "@/store/auth";
import schema from "@/validations/registerSchema";

const form = ref<FormContext>();
const { register } = useAuthStore();
const toast = useToast();

const onRegister = async (value: Record<string, unknown>): Promise<void> => {
  const data: IForm = {
    phone: value.phone_number,
    password: value.password,
    country: value.country,
    latlong: 0,
    device_token: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    device_type: 2,
  };

  const res = await register(data);

  if (res) {
    toast.success("Success register!");
  }
};
</script>

<template>
  <Form
    @submit="onRegister"
    ref="form"
    v-slot="{ isSubmitting }"
    :validation-schema="schema"
  >
    <div class="register">
      <div class="register-title">
        <h1>Create New Account</h1>
        <p>Before you can join here, please create new account</p>
      </div>
      <p class="register-subtitle">Account Detail</p>
      <div class="register-form">
        <Select :data="country" label="Select Country" name="country" />
        <TextInput
          type="tel"
          label="Phone Number"
          name="phone_number"
          placeholder="ex: 085725637261"
        />
        <TextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
        />
        <Button type="submit" variant="privy" class="mt-7 mb-2"
          >Register</Button
        >
        <Button type="reset" variant="reset" outlined>Reset</Button>
      </div>
    </div>
  </Form>
</template>

<style src="./register.style.scss" lang="scss"></style>
