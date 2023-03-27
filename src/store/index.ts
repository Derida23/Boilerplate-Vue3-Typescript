
import useAxios from "@/composable/useAxios";
import { onMounted, ref } from "vue";

const pokemon = ref<any>(null);
const fetch = async () => {
  const { status, response, error, request } = useAxios();

  await request({
    url: "/api/v1/oauth/sign_in",
    method: "POST",
  });

  
};

onMounted(async () => {
  await fetch();
});