import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      error: false,
      name: '',
      imgReady: false,
      img: "",
      imagesHistory: [
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",


      ]
    };
  },
  persist: true
});
