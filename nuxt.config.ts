import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "SVG Hoster",
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "https://firebasestorage.googleapis.com/v0/b/svg-hosting-4b46e.appspot.com/o/images%2Fvector.svg?alt=media&token=5a62a5aa-691c-4b07-9e31-4856feb41933",
      },
    ],
  },
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
});
