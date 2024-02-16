<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper relative z-10">
      <div class="text-center absolute inset-x-0">
        <button
          class="inline-block px-8 py-1 rounded-[1rem] bg-slate-500 mt-5"
          @click="toggleNav"
        >
          <h1 class="text-xl font-bold">MENU</h1>
        </button>
      </div>
      <nav
        class="fixed top-5 left-5 right-5 bottom-5 bg-slate-500 rounded-lg py-5 px-10 z-50"
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
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul
          class="list-none text-white font-bold text-[2.5rem] h-full flex justify-center flex-col"
        >
          <li class="mb-4" @click="toggleNav">
            <RouterLink to="/">Accueil</RouterLink>
          </li>
          <li class="mb-4" @click="toggleNav">
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li class="mb-4" @click="toggleNav">
            <RouterLink to="/about">About me</RouterLink>
          </li>
          <li class="mb-4" @click="toggleNav">
            <RouterLink to="/contact">Contact me</RouterLink>
          </li>
          <li class="mt-4 flex flex-row items-center" @click="toggleNav">
            <div class="w-12">
              <a href="https://www.behance.net/kylianrouilla">
                <img
                  class="rounded-[3rem]"
                  src="../public/logo/Behance.webp"
                  alt="logo behance"
                />
              </a>
            </div>
            <div class="ml-6 w-12">
              <a href="https://www.instagram.com/kylian_gtn/">
                <img
                  class="rounded-[3rem]"
                  src="../public/logo/Instagram.webp"
                  alt="logo instagram"
                />
              </a>
            </div>
            <div class="ml-6 w-12">
              <a href="https://www.linkedin.com/in/kylian-rouillard-gaertner/">
                <img
                  class="rounded-[3rem]"
                  src="../public/logo/LinkedIn.webp"
                  alt="logo linkedin"
                />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer
    class="bg-gray-500 text-white h-[7.3rem] flex justify-center items-center"
  >
    <p>&copy; 2021 Kylian Rouillard Gaertner</p>
  </footer>
</template>
