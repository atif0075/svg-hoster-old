<template>
  <section class="pt-20">
    <main class="p-2 md:p-8">
      <h1 class="text-xl font-bold text-white-primary">All Links</h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-cols-5 gap-3 py-5"
      >
        <div
          v-for="(items, index) in store.imagesHistory"
          :key="index"
          class="bg-white-primary rounded-md"
        >
          <div class="flex-cen min-h-44 h-auto">
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
  </section>
</template>
<script setup lang="ts">
import { useStore } from "~~/store/store";

const store = useStore();
</script>
<style scoped></style>
