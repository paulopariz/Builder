<template>
  <div class="w-full border border-base-300 border-x-0 border-t-0">
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
        class="dropdown-content w-full rounded-none menu p-2 bg-base-100 border border-base-300 border-x-0 border-t-0"
      >
        <div class="grid grid-cols-3 place-items-center gap-y-3 p-2">
          <div
            class="p-2 bg-base-100 rounded-lg border border-base-300 cursor-pointer hover:bg-base-200 text-sm font-semibold tracking-wider w-20 flex justify-center items-center"
            style="font-family: sans-serif"
            @click="fontSans"
          >
            Sans
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border border-base-300 cursor-pointer hover:bg-base-200 text-sm font-semibold tracking-wider w-20 flex justify-center items-center"
            style="font-family: serif"
            @click="fontSerif"
          >
            Serif
          </div>

          <div
            class="p-2 bg-base-100 rounded-lg border border-base-300 cursor-pointer hover:bg-base-200 text-sm font-semibold tracking-wider w-20 flex justify-center items-center"
            style="font-family: monospace"
            @click="fontMono"
          >
            Mono
          </div>
          <div
            class="p-2 bg-base-100 rounded-lg border border-base-300 cursor-pointer hover:bg-base-200 text-sm font-semibold tracking-wider w-20 flex justify-center items-center"
            style="font-family: 'Poppins', sans-serif"
            @click="fontPoppins"
          >
            Poppins
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

    fontSans() {
      document.getElementById("titleH1").style.fontFamily = "sans-serif";
    },
    fontSerif() {
      document.getElementById("titleH1").style.fontFamily = "serif";
    },
    fontMono() {
      document.getElementById("titleH1").style.fontFamily = "monospace";
    },
    fontPoppins() {
      document.getElementById("titleH1").style.fontFamily = "'Poppins', sans-serif";
    },
  },
};
</script>

<style></style>
