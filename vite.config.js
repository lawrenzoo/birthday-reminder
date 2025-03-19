import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/birthday-reminder/", // Make sure this matches your repository name
});

