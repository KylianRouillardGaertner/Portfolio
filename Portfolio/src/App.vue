<script>
import { RouterLink } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
      if (this.showNav) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <header>
    <HelloWorld />
    <div class="wrapper relative z-10">
      <div class="text-center absolute inset-x-0">
        <button
          class="inline-block px-8 py-1 rounded-[1rem] bg-main-dark mt-5"
          @click="toggleNav"
        >
          <h1 class="text-xl font-bold">MENU</h1>
        </button>
      </div>
      <nav
        class="fixed top-0 left-0 right-0 bottom-0 bg-main-dark rounded-lg py-5 px-10 z-50"
        :class="{ hidden: !showNav }"
      >
        <button class="fixed right-8 top-8" @click="toggleNav">
          <svg
            class="w-14 h-14 text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul
          class="list-none font-bold text-[2rem] md:text-[5rem] h-full flex mt-12 md:mt-6 md:justify-center md:items-center flex-col"
        >
          <li @click="toggleNav">
            <RouterLink to="/" class="font-Rounded_Bold">Accueil</RouterLink>
          </li>
          <li @click="toggleNav">
            <RouterLink to="/projects" class="font-Rounded_Bold"
              >Projects</RouterLink
            >
          </li>
          <li @click="toggleNav">
            <RouterLink to="/about" class="font-Rounded_Bold"
              >About me</RouterLink
            >
          </li>
          <li @click="toggleNav">
            <RouterLink to="/contact" class="font-Rounded_Bold"
              >Contact me</RouterLink
            >
          </li>
          <li class="mt-8 flex flex-row justify-center gap-[20%] text-[50px]">
            <div>
              <a
                href="https://www.behance.net/kylianrouilla"
                class="font-Rounded"
              >
                Behance
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/kylian_gtn/"
                class="font-Rounded"
              >
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kylian-rouillard-gaertner/"
                class="font-Rounded"
              >
                Linkedin
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer class="bg-main text-white px-10">
    <span
      class="inline-block w-full h-[0.15rem] bg-main-dark rounded-full"
    ></span>
    <div class="flex justify-between items-center pt-[27px] pb-[30px] px-5">
      <p class="text-sm md:text-base">&copy; 2024 Kylian Rouillard--Gaertner</p>
      <li class="flex flex-row items-center" @click="toggleNav">
        <div class="w-8">
          <a href="https://www.behance.net/kylianrouilla">
            <img
              class="rounded-[3rem]"
              src="../public/logo/Behance.webp"
              alt="logo behance"
            />
          </a>
        </div>
        <div class="ml-2 w-8">
          <a href="https://www.instagram.com/kylian_gtn/">
            <img
              class="rounded-[3rem]"
              src="../public/logo/Instagram.webp"
              alt="logo instagram"
            />
          </a>
        </div>
        <div class="ml-2 w-8">
          <a href="https://www.linkedin.com/in/kylian-rouillard-gaertner/">
            <img
              class="rounded-[3rem]"
              src="../public/logo/LinkedIn.webp"
              alt="logo linkedin"
            />
          </a>
        </div>
      </li>
    </div>
  </footer>
</template>
