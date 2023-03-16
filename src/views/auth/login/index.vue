<script setup lang="ts">
import TextInput from "@/components/Input";
</script>

<template>
  <div class="login-wrapper">
    <div class="text-box">
      <p class="text-login">Login Account</p>
    </div>
    <TextInput
      type="text"
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
  </div>
</template>

<style src="./login.style.scss"></style>
