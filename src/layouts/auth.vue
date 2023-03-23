<script setup lang="ts">
import PrivyIcon from "@/assets/icon/privy-icon.vue";
import { format } from "date-fns";
import Tabs from "@/components/Tabs";
import { ITabOptions } from "./auth.type";
import { useRoute, useRouter } from "vue-router";
import { computed, markRaw, ref, watch } from "vue";

const router = useRouter();
const route = useRoute();

const activeTab = ref<string>(route.name as string);

const tabOptions: Array<ITabOptions> = markRaw([
  {
    key: "login",
    label: "Login",
  },
  {
    key: "register",
    label: "Register",
  },
]);

watch(activeTab, (value) => {
  router.push({
    name: value,
  });
});

watch(route, (value) => {
  const split = value.path.split("/")[2];
  activeTab.value = split;
});

const today = computed(() => {
  return format(new Date(), "MMM dd, yyyy");
});
</script>

<template>
  <div>
    <div class="logo">
      <PrivyIcon height="38" width="60" class="logo-privy" />
      <p class="logo-text">PRISIGN</p>
    </div>
  </div>
  <div class="auth-wrapper">
    <div class="info-section">
      <div class="info-box">
        <p class="auth-title">Welcome to Prisign</p>
        <p class="auth-description">
          Prisign is a personal data platform that allows users to manage and
          customize their profiles. With Prisign, you can update your
          information, change various aspects of your profile, and take control
          of your personal data.Join the Prisign community and take control of
          your personal data today.
        </p>
      </div>
    </div>
    <div class="card-section">
      <div class="card-box">
        <p class="card-today">Today {{ today }}</p>
        <div class="card-content">
          <Tabs :options="tabOptions" v-model="activeTab" />
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./auth.style.scss" lang="scss"></style>
