import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      img: "",
      imagesHistory: [],
    };
  },
  persist: true,
});
