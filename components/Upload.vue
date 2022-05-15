<template>
  <section>
    <div class="flex flex-col items-center w-full min-h-screen pt-24 pb-5">
      <h1 class="mt-24 text-3xl font-bold text-white-primary py-7">
        Host your <span class="text-green">SVG</span> forever
      </h1>

      <div
        class="relative z-10 inline-block w-56 h-56 rounded-full circular-progress"
      >
        <svg
          class="transform rotate-270"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          aria-labelledby="title"
          role="graphic"
        >
          <circle cx="50" cy="50" r="40"></circle>
          <circle
            :style="{
              strokeDashoffset: (1 - progress / 100) * (2 * (22 / 7) * 40),
            }"
            cx="50"
            cy="50"
            r="40"
            id="pct-ind"
          ></circle>
        </svg>
        <p class="flex pct">
          <label
            class="relative z-900 flex flex-col items-center text-[#fefefe] rounded-lg shadow-lg tracking-wide cursor-pointer"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
              ></path>
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
            </svg>
            <span class="mt-2 text-base leading-normal uppercase"
              >Select a file</span
            >
            <input
              @change="getLink($event)"
              type="file"
              accept=".svg"
              class="hidden"
            />
            <div class="text-xs">{{ pathName }}</div>
          </label>
        </p>
      </div>
      <div
        v-if="msgVal"
        class="bg-mud px-5 py-3 rounded border border-dashed text-white-primary border-green border-2"
      >
        <p>Not a valid type</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useStore } from "~~/store/store";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9o5UPGN3fBf7ifDGW2uG0wo6FhBvHC7c",
  authDomain: "svg-hosting-4b46e.firebaseapp.com",
  projectId: "svg-hosting-4b46e",
  storageBucket: "svg-hosting-4b46e.appspot.com",
  messagingSenderId: "169346203891",
  appId: "1:169346203891:web:e741a114344f872e3bf786",
};
initializeApp(firebaseConfig);
let progress = ref(0);
const store = useStore();
let pathName = ref();
let path = ref();
let msgVal = ref(false);
const msg = ref();
function getLink(e: any) {
  pathName.value = e.target.files[0].name;
  path.value = e.target.files[0];
  const acceptedImage = [".svg"];
  const extension = pathName.value.substring(pathName.value.lastIndexOf("."));
  const isValidImage = acceptedImage.find((m) => m === extension) != null;
  console.log("isValidImage", isValidImage);
  console.log("extension", extension);
  if (isValidImage) {
    let checker = false;
    const storage = getStorage();
    const storageRef = sRef(storage, "images/" + pathName.value);
    const uploadTask = uploadBytesResumable(storageRef, path.value);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        progress.value =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress.value + "% done");
        checker = true;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          if (checker == true) {
            store.imagesHistory.push(downloadURL);
          }
        });
      }
    );
  } else {
    msgVal.value = true;
    pathName.value = null;
    setTimeout(() => {
      msgVal.value = false;
    }, 2000);
  }
}
</script>
<style lang="postcss">
.grad {
  background: #ffffff;
  background: linear-gradient(
    125deg,
    #ffffff 0%,
    #ffffff 55%,
    #f5f5f5 55%,
    #f5f5f5 100%
  );
}

.comp_profile_text {
  @apply sm:(w-[50%] text-xs ) text-[10px] w-[40%] uppercase text-green font-semibold flex justify-end items-center pr-4;
}

.circular-progress circle {
  @apply stroke-5;
  fill: transparent;
  stroke-linecap: round;
}

.circular-progress circle:nth-of-type(1) {
  stroke: #e9e9e9;
}

.circular-progress circle:nth-of-type(2) {
  @apply stroke-green;
  stroke-dasharray: 251.4285714286;
  stroke-dashoffset: 75.4285714286;
}

.circular-progress .pct {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
