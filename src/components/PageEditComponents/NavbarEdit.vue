<template>
  <div class="px-14 pt-14" id="navbar">
    <nav class="flex items-center justify-between">
      <img src="../../assets/img/logo.png" class="w-11" />
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-10 text-black font-medium" id="menuDesktop">
          <a class="cursor-pointer">HTML</a>
          <a class="cursor-pointer">CSS</a>
          <a class="cursor-pointer">JavaScript</a>
          <a class="cursor-pointer">UI / UX</a>
        </div>
        <button
          class="btn bg-blue-600 hover:bg-blue-700 border-none capitalize rounded-full px-8 font-medium"
          id="HireUsBtn"
        >
          Hire us
        </button>

        <div class="dropdown dropdown-end hidden" id="menuMobile">
          <label
            tabindex="0"
            class="btn bg-transparent border-none hover:bg-transparent p-0"
            @click="openMenu"
          >
            <img src="../../assets/icons/menu.svg" class="w-7" id="menuHamburguer" />
          </label>
          <ul
            v-show="menu"
            tabindex="0"
            class="dropdown-content mt-5 menu p-2 border border-base-200 shadow-lg bg-base-100 rounded-box w-52 menuMobile"
          >
            <li>
              <a class="text-sm font-medium hover:bg-transparent active:bg-blue-600"
                >HTML</a
              >
            </li>
            <li>
              <a class="text-sm font-medium hover:bg-transparent active:bg-blue-600"
                >CSS</a
              >
            </li>
            <li>
              <a class="text-sm font-medium hover:bg-transparent active:bg-blue-600"
                >JavaScript</a
              >
            </li>
            <li>
              <a class="text-sm font-medium hover:bg-transparent active:bg-blue-600"
                >UI / UX</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBarEdit",

  data() {
    return {
      menu: false,
    };
  },

  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style></style>
