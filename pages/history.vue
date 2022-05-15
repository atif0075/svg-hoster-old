<template>
  <section class="pt-20 min-h-screen">
    <main v-if="store.imagesHistory.length != 0" class="p-2 md:p-8">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold text-white-primary">All Links</h1>
        <div class="flex">
          <div
            @click="whiteToggle"
            class="w-7 h-7 -top-4 left-2 bg-white-primary border-2 border-green rounded-full cursor-pointer"
          ></div>
          <div
            @click="blackToggle"
            class="mx-2 w-7 h-7 -top-4 left-10 bg-[#000] border-2 border-green rounded-full cursor-pointer"
          ></div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 py-5"
      >
        <div
          v-for="(items, index) in store.imagesHistory"
          :key="index"
          :class="[items.color ? 'bg-[#000]' : 'bg-white-primary']"
          class="rounded-md"
        >
          <div class="relative flex-cen min-h-44 h-auto">
            <div
              @click="items.color = false"
              class="w-7 h-7 absolute -top-4 left-2 bg-white-primary border-4 border-mud rounded-full cursor-pointer"
            ></div>
            <div
              @click="items.color = true"
              class="w-7 h-7 absolute -top-4 left-10 bg-[#000] border-4 border-mud rounded-full cursor-pointer"
            ></div>

            <div
              @click="copyUrl(items.url)"
              class="w-7 h-7 absolute text-white-primary -bottom-4 right-24 border-4 bg-mud border-mud rounded-full cursor-pointer"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                ></path>
                <path
                  d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                ></path>
              </svg>
            </div>
            <div
              class="w-7 h-7 absolute -bottom-4 right-14 text-white-primary border-4 bg-mud border-mud rounded-full cursor-pointer"
            >
              <a target="_blank" :href="items.url">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  ></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  ></path>
                </svg>
              </a>
            </div>

            <div
              @click="deleteItem(index)"
              class="w-7 h-7 absolute -bottom-4 right-4 border-4 bg-mud border-mud rounded-full cursor-pointer"
            >
              ❌
            </div>

            <img
              loading="lazy"
              class="w-10 h-10"
              :src="items.url"
              alt="Not Loaded"
            />
          </div>
        </div>
      </div>
    </main>
    <main v-else class="flex-cen min-h-100">
      <p
        class="bg-mud px-5 py-3 rounded border border-dashed text-white-primary border-green border-2"
      >
        No item
      </p>
    </main>
  </section>
</template>
<script setup lang="ts">
import { useStore } from "~~/store/store";

const store = useStore();

let white = ref(true);
let black = ref(false);
let whiteToggle = () => {
  // change the value of color in store.imagesHistory
  store.imagesHistory.forEach((item) => {
    item.color = false;
  });
};
let blackToggle = () => {
  store.imagesHistory.forEach((item) => {
    item.color = true;
  });
};
let deleteItem = (index: any) => {
  store.imagesHistory.splice(index, 1);
};
let copyUrl = (url: any) => {
  navigator.clipboard.writeText(url);
};
</script>
<style scoped></style>
