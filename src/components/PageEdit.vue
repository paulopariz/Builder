<template>
  <div class="w-full">
    <nav
      class="border-2 border-b-base-200 border-x-0 border-t-0 h-20 w-full bg-white flex items-center justify-center"
    >
      <section
        class="flex items-center gap-5 border-2 border-y-0 border-l-0 border-base-200 h-full px-5"
      >
        <div>
          <button class="bg-base-200 p-2 rounded-xl">
            <img src="../assets/icons/arrow.svg" class="w-8" />
          </button>
        </div>
        <div
          class="flex items-center py-2 px-5 gap-2 bg-base-200 rounded-xl border border-base-300"
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
        class="flex items-center gap-5 border-2 border-y-0 border-l-0 border-base-200 h-full px-5"
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

      <section class="flex items-center gap-5 h-full px-5">
        <div class="bg-base-200 p-2 px-5 rounded-xl flex items-center gap-2">
          <p class="text-sm font-medium">960 PX / 100%</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>
      </section>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
