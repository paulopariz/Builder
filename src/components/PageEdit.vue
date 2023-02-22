<template>
  <div class="w-full bg-base-200 h-screen flex flex-col items-center">
    <nav
      class="border-2 border-b-base-300 border-x-0 border-t-0 flex justify-center items-center mt-0.5 w-full bg-white"
    >
      <section
        class="flex items-center gap-5 border-2 border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <div>
          <button class="bg-base-200 p-2 rounded-xl">
            <img src="../assets/icons/arrow.svg" class="w-8" />
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
        class="flex items-center gap-5 border-2 border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/desktop.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/tablet.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/smartphone.svg" class="" />
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

    <div class="p-14 overflow-auto max-w-7xl">
      <div class="w-full bg-white select-text">
        <NavbarEdit />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarEdit from "./PageEditComponents/NavbarEdit.vue";
export default {
  components: { NavbarEdit },
  name: "PageEdit",
};
</script>

<style></style>
