<template>
  <div
    class="w-24 py-6 h-screen flex flex-col justify-between items-center border border-base-300 bg-white"
  >
    <div
      class="w-full flex justify-center border border-x-0 border-t-0 border-b-base-300 pb-6"
    >
      <img src="../assets/icons/logo.svg" />
    </div>

    <div class="flex flex-col gap-10">
      <div v-for="icon in sectionIcon" :key="icon" class="flex items-center">
        <img
          :src="icon.img"
          class="icons p-2 rounded-xl hover:bg-base-200 cursor-pointer"
        />

        <div class="hidden py-2 px-3 shadow-lg absolute ml-12 bg-white tooltip">
          <span class="font-semibold text-sm">{{ icon.tooltip }}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 items-center">
      <div v-for="icon in sectionIconNav" :key="icon" class="flex items-center">
        <img
          :src="icon.img"
          class="icons p-2 rounded-xl hover:bg-base-200 cursor-pointer"
        />
        <div class="hidden py-2 px-3 shadow-lg absolute ml-12 bg-white tooltip">
          <span class="font-semibold text-sm">{{ icon.tooltip }}</span>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/paulopariz/" target="_blank"
        ><img src="../assets/icons/perfil.jpeg" class="w-9 h-9 rounded-full"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLeft",

  data() {
    return {
      sectionIcon: [
        {
          img: require("../assets/icons/add.svg"),
          tooltip: "Add",
        },
        {
          img: require("../assets/icons/layout.svg"),
          tooltip: "Layouts",
        },
        {
          img: require("../assets/icons/palette.svg"),
          tooltip: "Themes",
        },
        {
          img: require("../assets/icons/assets.svg"),
          tooltip: "Assets",
        },
        {
          img: require("../assets/icons/image.svg"),
          tooltip: "Images",
        },
      ],

      sectionIconNav: [
        {
          img: require("../assets/icons/help.svg"),
          tooltip: "Help",
        },
        {
          img: require("../assets/icons/settings.svg"),
          tooltip: "Settings",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.icons:hover + .tooltip {
  display: block;
}
</style>
