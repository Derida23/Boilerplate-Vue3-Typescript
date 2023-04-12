<script setup lang="ts">
import InputOtp from "@/components/InputOtp";
import Button from "@/components/Button";

const handleOnComplete = (value: any) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value: any) => {
  console.log("OTP changed: ", value);
};
</script>

<template>
  <div class="otp">
    <div class="otp-title">
      <h1>OTP Verification</h1>
      <p>Insert OTP code sent to your phone</p>
    </div>
    <div>
      <div style="display: flex; flex-direction: row" class="mb-8">
        <InputOtp
          ref="otpInput"
          input-classes="otp-input error-input"
          input-type="string"
          :num-inputs="4"
          :should-auto-focus="true"
          :placeholder="['1', '2', '3', '4']"
          :is-disabled="false"
          @on-change="handleOnChange"
          @on-complete="handleOnComplete"
        />
      </div>
      <Button type="submit"> verify</Button>
    </div>
  </div>
</template>

<style src="./otp.style.scss" lang="scss">
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* .otp-input:disabled {
  cursor: not-allowed;
}
.otp-input:focus {
  background-color: #eee;
} */
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
