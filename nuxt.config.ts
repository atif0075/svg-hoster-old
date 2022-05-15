import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "SVG Hoster",
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "./assets/vector.svg",
      },
    ],
  },
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
});
