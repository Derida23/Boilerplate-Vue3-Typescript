
// import useAxios from "@/composable/useAxios";
// import { onMounted, ref } from "vue";

// const pokemon = ref<any>(null);
// const fetch = async () => {
//   const { status, response, error, request } = useAxios();

//   await request({
//     url: "https://pokeapi.co/api/v2",
//     method: "GET",
//   });

//   pokemon.value = response;
// };

// onMounted(async () => {
//   await fetch();
// });