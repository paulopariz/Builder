<template>
  <div class="w-full bg-base-200 h-screen flex flex-col items-center">
    <nav
      class="border border-b-base-300 border-x-0 border-t-0 flex justify-center items-center w-full bg-white mt-0.1"
    >
      <section
        class="flex items-center gap-5 border border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <div>
          <button class="bg-base-200 p-2 rounded-xl">
            <img src="../assets/icons/arrow.svg" class="w-7" />
          </button>
        </div>
        <div
          class="flex items-center py-2 px-5 gap-2 bg-base-200 rounded-xl border border-base-300 cursor-pointer"
        >
          <p class="text-sm font-medium">Page: Homepage - Dipa</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>

        <div>
          <button class="bg-base-200 p-2 px-5 rounded-xl flex text-sm font-medium gap-2">
            <img src="../assets/icons/visibility.svg" class="" />
            Preview
          </button>
        </div>
      </section>

      <section
        class="flex items-center gap-5 border border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/desktop.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/tablet.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/smartphone.svg" @click="responsiveMobile" />
        </button>
      </section>

      <section class="flex items-center gap-5 px-5 py-3.5">
        <div
          class="bg-base-200 p-2 px-5 rounded-xl flex items-center gap-2 cursor-pointer"
        >
          <p class="text-sm font-medium">960 PX / 100%</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>
      </section>
    </nav>

    <div class="p-14 overflow-auto">
      <div class="w-full bg-white select-text">
        <NavbarEdit />

        <HeaderEdit />

        <ProjectsEdit />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderEdit from "./PageEditComponents/HeaderEdit.vue";
import NavbarEdit from "./PageEditComponents/NavbarEdit.vue";
import ProjectsEdit from "./PageEditComponents/ProjectsEdit.vue";
export default {
  components: { NavbarEdit, HeaderEdit, ProjectsEdit },
  name: "PageEdit",

  methods: {
    responsiveMobile() {
      const x = document.getElementById("");
      x.style.display = "none";
    },
  },
};
</script>

<style></style>
