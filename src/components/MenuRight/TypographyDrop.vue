<template>
  <div class="w-full border-2 border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Typography

        <label @click="dropTypographyClick" class="swap">
          <input type="checkbox" />

          <img
            @click="dropTypographyClick"
            src="../../assets/icons/arrow.svg"
            class="swap-off fill-current"
          />

          <img
            @click="dropTypographyClick"
            src="../../assets/icons/arrow.svg"
            class="swap-on fill-current -rotate-90"
          />
        </label>
      </label>

      <ul
        v-show="dropSectionTypography"
        tabindex="0"
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border-2 border-base-300 border-x-0 border-t-0"
      >
        <div class="flex items-center justify-between p-2">
          <div
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 text-sm font-sans font-semibold tracking-wider w-20 flex justify-center items-center"
          >
            Sans
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 text-sm font-serif font-semibold tracking-wider w-20 flex justify-center items-center"
          >
            Serif
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 text-sm font-mono font-semibold tracking-wider w-20 flex justify-center items-center"
          >
            Mono
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypographyDrop",

  data() {
    return {
      dropSectionTypography: false,
    };
  },

  methods: {
    dropTypographyClick() {
      this.dropSectionTypography = !this.dropSectionTypography;
    },
  },
};
</script>

<style></style>
