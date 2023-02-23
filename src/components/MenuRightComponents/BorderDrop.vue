<template>
  <div class="w-full border border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Border

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
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border border-base-300 border-x-0 border-t-0"
      >
        <div class="grid grid-cols-3 gap-y-3 place-items-center p-2">
          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-solid"
          >
            Solid
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-dashed"
          >
            Dashed
          </div>
          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-dotted"
          >
            Dotted
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-double"
          >
            Double
          </div>
          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-hidden"
          >
            Hidden
          </div>
          <div
            class="p-2 bg-base-100 rounded-lg border-4 border-base-300 cursor-pointer hover:bg-base-200 text-xs font-semibold tracking-wider w-20 flex justify-center items-center border-none"
          >
            None
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderDrop",

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
