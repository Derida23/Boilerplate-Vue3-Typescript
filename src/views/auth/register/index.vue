<script setup lang="ts">
import TextInput from "@/components/Input";
import Select from "@/components/Select";
</script>

<template>
  <div class="register">
    <div class="register-title">
      <h1>Create New Account</h1>
      <p>Before you can join here, please create new account</p>
    </div>
    <p class="register-subtitle">Account Detail</p>
    <div class="register-form">
      <Select />
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
    </div>
  </div>
</template>

<style src="./register.style.scss" lang="scss"></style>
