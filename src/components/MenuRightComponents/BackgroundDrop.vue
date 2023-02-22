<template>
  <div class="w-full border-2 border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Background

        <label @click="dropBorderClick" class="swap">
          <input type="checkbox" />

          <img
            @click="dropBorderClick"
            src="../../assets/icons/arrow.svg"
            class="swap-off fill-current"
          />

          <img
            @click="dropBorderClick"
            src="../../assets/icons/arrow.svg"
            class="swap-on fill-current -rotate-90"
          />
        </label>
      </label>

      <ul
        v-show="dropSectionBorder"
        tabindex="0"
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border-2 border-base-300 border-x-0 border-t-0"
      >
        <div class="grid grid-cols-5 place-items-center gap-y-4 p-2">
          <div class="p-2 bg-neutral-900 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-800 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-700 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-600 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-500 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-400 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-300 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-200 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-100 w-5 h-5 rounded-lg cursor-pointer border" />
          <div class="p-2 bg-neutral-50 w-5 h-5 rounded-lg cursor-pointer border" />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundDrop",

  data() {
    return {
      dropSectionBorder: false,
    };
  },

  methods: {
    dropBorderClick() {
      this.dropSectionBorder = !this.dropSectionBorder;
    },
  },
};
</script>

<style></style>
