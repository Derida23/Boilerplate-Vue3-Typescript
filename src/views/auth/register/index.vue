<script setup lang="ts">
import TextInput from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import country from "@/constant/country";
import { Form, FormContext } from "vee-validate";
import { ref } from "vue";

const form = ref<FormContext>();

const onRegister = async (value: Record<string, unknown>): Promise<void> => {
  console.log(value);
};
</script>

<template>
  <Form @submit="onRegister" ref="form" v-slot="{ isSubmitting }">
    <!-- :validation-schema="schema" -->
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
