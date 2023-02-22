<template>
  <div class="w-full border-2 border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Layout

        <label @click="dropLayoutClick" class="swap">
          <input type="checkbox" />

          <img
            @click="dropLayoutClick"
            src="../../assets/icons/arrow.svg"
            class="swap-off fill-current"
          />

          <img
            @click="dropLayoutClick"
            src="../../assets/icons/arrow.svg"
            class="swap-on fill-current -rotate-90"
          />
        </label>
      </label>

      <ul
        v-show="dropSectionLayout"
        tabindex="0"
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border-2 border-base-300 border-x-0 border-t-0"
      >
        <div class="flex items-center justify-between p-2">
          <img
            src="../../assets/icons/align1.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200"
          />
          <img
            src="../../assets/icons/align1.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 rotate-180"
          />

          <img
            src="../../assets/icons/align1.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 rotate-90"
          />
          <img
            src="../../assets/icons/align1.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 -rotate-90"
          />
          <img
            src="../../assets/icons/align2.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200"
          />
          <img
            src="../../assets/icons/align2.svg"
            class="p-2 bg-base-100 rounded-lg border-2 border-base-300 cursor-pointer hover:bg-base-200 rotate-90"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutDrop",

  data() {
    return {
      dropSectionLayout: false,
    };
  },

  methods: {
    dropLayoutClick() {
      this.dropSectionLayout = !this.dropSectionLayout;
    },
  },
};
</script>

<style></style>
