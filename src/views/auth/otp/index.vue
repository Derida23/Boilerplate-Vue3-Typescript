<script setup lang="ts">
import InputOtp from "@/components/InputOtp";
</script>

<template>
  <div class="otp">
    <div class="otp-title">
      <h1>OTP Verification</h1>
      <p>Insert OTP code sent to your phone</p>
    </div>
    <div>
      <InputOtp />
    </div>
  </div>
</template>

<style src="./otp.style.scss" lang="scss"></style>
