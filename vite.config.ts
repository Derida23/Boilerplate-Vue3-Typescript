import { defineConfig , loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [vue()],
  
    server: {
      port: 8000,
      proxy: {
        "/api": env.VITE_API_URL,
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });

}

