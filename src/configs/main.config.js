import { defineConfig, loadEnv } from "vite";

var config = {
  CORS_PROXY_URL: process.env.CORS_PROXY_URL || "http://0.0.0.0:8080/",
  SMARTLIFE_API_URL: "https://px1.tuyaeu.com/homeassistant/",
};

export { config };
