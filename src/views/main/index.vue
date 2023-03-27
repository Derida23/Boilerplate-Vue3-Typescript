<script setup lang="ts">
import { onMounted } from "vue";
import useAxios from "@/composable/useAxios";

const fetch = async () => {
  console.log("asd");
  const { status, response, error, request } = useAxios();

  await request({
    url: "/api/v1/oauth/sign_in",
    method: "POST",
  });

  console.log(response);
};

onMounted(async () => {
  await fetch();
});
</script>

<template>
  <div>INI HALAMAN MAIN</div>
</template>

<style></style>
