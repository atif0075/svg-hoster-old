<template>
  <section class="fixed z-900 glass w-full border-b border-[#00dc801e]">
    <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center justify-center w-10 h-10 border-[#00dc801e] border rounded-lg"
      >
        <div class="text-red-600">
          <img src="https://firebasestorage.googleapis.com/v0/b/svg-hosting-4b46e.appspot.com/o/images%2Fvector.svg?alt=media&token=5a62a5aa-691c-4b07-9e31-4856feb41933" />
       
        </div>
      </NuxtLink>
      <ul
        class="flex items-center space-x-2 text-sm font-medium text-white-primary"
      >
        <li>
          <NuxtLink to="/" class="px-3 py-2 rounded-lg">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/history" class="px-3 py-2 rounded-lg hover:text-green">
            History
          </NuxtLink>
        </li>
        <li class="hover:text-green">
          <a
            class="inline-flex items-center px-3 py-2 rounded-lg"
            href="https://github.com/atif0075"
            target="_blank"
          >
            External
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="ml-1.5 w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-green;
}
.glass {
  /* From https://css.glass */
  background: rgba(1, 42, 53, 0.39);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
}
</style>
