<template>
  <div
    class="w-full border border-base-300 border-x-0 border-t-0 flex flex-col items-center gap-4 py-4 px-7"
  >
    <h1 class="text-sm font-semibold w-full">Selector</h1>

    <div
      class="w-full bg-base-200 border border-base-300 rounded-lg px-4 py-1.5 flex items-center justify-between cursor-pointer"
    >
      <div class="bg-red-200 py-1.5 px-3 w-28 rounded-lg">
        <span class="text-xs flex items-center justify-center font-medium text-red-600"
          >H1 - hero title</span
        >
      </div>

      <img src="../../assets/icons/arrow.svg" class="-rotate-90" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectorH1",
};
</script>

<style></style>
