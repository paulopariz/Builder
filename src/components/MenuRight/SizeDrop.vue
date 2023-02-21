<template>
  <div class="w-full border-2 border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Size

        <label @click="dropSizeClick" class="swap">
          <input type="checkbox" />

          <img
            @click="dropSizeClick"
            src="../../assets/icons/arrow.svg"
            class="swap-off fill-current"
          />

          <img
            @click="dropSizeClick"
            src="../../assets/icons/arrow.svg"
            class="swap-on fill-current -rotate-90"
          />
        </label>
      </label>

      <ul
        v-show="dropSizeLayout"
        tabindex="0"
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border-2 border-base-300 border-x-0 border-t-0"
      >
        <div class="grid grid-cols-2 gap-y-3 place-items-center">
          <div v-for="button in sizes" :key="button">
            <div
              class="border-2 rounded-lg border-base-300 bg-base-200 flex justify-between items-center overflow-hidden w-32 py-3 px-4"
            >
              <h1 class="text-gray-500 text-sm">{{ button.size }}</h1>
              <span
                type="text"
                class="text-black font-semibold bg-base-200 focus:outline-none border-none text-sm"
              >
                Auto
              </span>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeDrop",

  data() {
    return {
      dropSizeLayout: false,

      sizes: [
        {
          size: "W",
        },
        {
          size: "H",
        },
        {
          size: "Min W",
        },
        {
          size: "Max W",
        },
        {
          size: "Min H",
        },
        {
          size: "Max h",
        },
      ],
    };
  },

  methods: {
    dropSizeClick() {
      this.dropSizeLayout = !this.dropSizeLayout;
    },
  },
};
</script>

<style></style>
