import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  define: {
    "import.meta.env.VITE_CONTRACT_ADDRESS": JSON.stringify(process.env.VITE_CONTRACT_ADDRESS || "0x438EC6699A8556aefB0d80c52e1a8db580EE21C4")
  }
})
