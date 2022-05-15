<template>
  <section class="pt-20">
    <main v-if="store.imagesHistory.length != 0" class="p-2 md:p-8">
      <h1 class="text-xl font-bold text-white-primary">All Links</h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-3 py-5"
      >
        <div
          v-for="(items, index) in store.imagesHistory"
          :key="index"
          :class="[white ? 'bg-white-primary' : 'bg-[#000]']"
          class="rounded-md"
        >
          <div class="relative flex-cen min-h-44 h-auto">
            <div
              @click="whiteToggle"
              class="w-7 h-7 absolute -top-4 left-2 bg-white-primary border-4 border-mud rounded-full cursor-pointer"
            ></div>
            <div
              @click="blackToggle"
              class="w-7 h-7 absolute -top-4 left-10 bg-[#000] border-4 border-mud rounded-full cursor-pointer"
            ></div>
            <img
              loading="lazy"
              class="w-10 h-10"
              :src="items"
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
  console.log("Hel");

  black.value = false;
  white.value = true;
};
let blackToggle = () => {
  console.log("HelNo");

  white.value = false;
  black.value = true;
};
</script>
<style scoped></style>
