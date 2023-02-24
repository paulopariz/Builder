<template>
  <div class="w-full border border-base-300 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Theme

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
        <div class="flex items-center justify-center gap-8 p-2">
          <div
            class="p-7 bg-white w-5 h-5 rounded-lg cursor-pointer border-2 border-base-300"
            @click="themeLight"
          />
          <div
            class="p-7 w-5 h-5 rounded-lg cursor-pointer border-2 border-base-300"
            style="background-color: #2a303c"
            @click="themeDark"
          />
          <div
            class="p-7 bg-blue-600 w-5 h-5 rounded-lg cursor-pointer border-2 border-base-300"
            @click="themeBlue"
          />
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

    themeDark() {
      document.getElementById("content").style.backgroundColor = "#2A303C";
      document.getElementById("projects").style.backgroundColor = "#2d333F";
      document.getElementById("menuDesktop").style.color = "#fff";
      document.getElementById("menuHamburguer").style.filter = "invert(1)";
      document.querySelector(".menuMobile").style.backgroundColor = "#2d333F";
      document.querySelector(".menuMobile").style.borderColor = "#2A303C";
      document.querySelector(".menuMobile").style.color = "#fff";

      document.getElementById("logoBlue").style.display = "block";
      document.getElementById("logoWhite").style.display = "none";

      document.getElementById("HireUsBtn").style.background = "#2563eb";
      document.getElementById("HireUsBtn").style.color = "#fff";

      document.getElementById("titleH1").style.color = "#fff";
      document.getElementById("desc").style.color = "#9CA3AF";
      document.querySelector(".buttonOne").style.color = "#fff";
      document.querySelector(".buttonOne").style.backgroundColor = "#2563eb";

      document.querySelector(".buttonTwo").style.color = "#fff";
      document.getElementById("projectsTitle").style.color = "#fff";
      document.querySelector(".squareEditOne").style.backgroundColor = "#2A303C";
      document.querySelector(".squareEditTwo").style.backgroundColor = "#2A303C";
      document.querySelector(".squareEditThree").style.backgroundColor = "#2A303C";
      document.querySelector(".squareEditFour").style.backgroundColor = "#2A303C";
      document.querySelector(".squareEditFive").style.backgroundColor = "#2A303C";
      document.querySelector(".squareEditSix").style.backgroundColor = "#2A303C";
    },

    themeLight() {
      document.getElementById("content").style.backgroundColor = "#fff";
      document.getElementById("projects").style.backgroundColor = "#F9FAFB";
      document.getElementById("menuDesktop").style.color = "#000";
      document.getElementById("menuHamburguer").style.filter = "invert(0)";
      document.querySelector(".menuMobile").style.backgroundColor = "#fff";
      document.querySelector(".menuMobile").style.borderColor = "#F2F2F2";
      document.querySelector(".menuMobile").style.color = "#000";

      document.getElementById("logoBlue").style.display = "block";
      document.getElementById("logoWhite").style.display = "none";

      document.getElementById("HireUsBtn").style.background = "#2563eb";
      document.getElementById("HireUsBtn").style.color = "#fff";

      document.getElementById("titleH1").style.color = "#000";
      document.getElementById("desc").style.color = "#9CA3AF";
      document.querySelector(".buttonOne").style.color = "#fff";
      document.querySelector(".buttonOne").style.backgroundColor = "#2563eb";

      document.querySelector(".buttonTwo").style.color = "#2563eb";
      document.getElementById("projectsTitle").style.color = "#000";
      document.querySelector(".squareEditOne").style.backgroundColor = "#fff";
      document.querySelector(".squareEditTwo").style.backgroundColor = "#fff";
      document.querySelector(".squareEditThree").style.backgroundColor = "#fff";
      document.querySelector(".squareEditFour").style.backgroundColor = "#fff";
      document.querySelector(".squareEditFive").style.backgroundColor = "#fff";
      document.querySelector(".squareEditSix").style.backgroundColor = "#fff";
    },
    themeBlue() {
      document.getElementById("content").style.backgroundColor = "#2563eb";
      document.getElementById("projects").style.backgroundColor = "#2563fb";
      document.getElementById("menuDesktop").style.color = "#fff";

      document.getElementById("menuHamburguer").style.filter = "invert(1)";
      document.querySelector(".menuMobile").style.backgroundColor = "#fff";
      document.querySelector(".menuMobile").style.borderColor = "#F2F2F2";
      document.querySelector(".menuMobile").style.color = "#000";

      document.getElementById("logoBlue").style.display = "none";
      document.getElementById("logoWhite").style.display = "block";

      document.getElementById("HireUsBtn").style.background = "#fff";
      document.getElementById("HireUsBtn").style.color = "#2563eb";

      document.getElementById("titleH1").style.color = "#fff";
      document.getElementById("desc").style.color = "#fff";
      document.querySelector(".buttonTwo").style.color = "#fff";
      document.querySelector(".buttonOne").style.color = "#2563fb";
      document.querySelector(".buttonOne").style.backgroundColor = "#fff";

      document.getElementById("projectsTitle").style.color = "#fff";

      document.querySelector(".squareEditOne").style.backgroundColor = "#2563eb";

      document.querySelector(".squareEditTwo").style.backgroundColor = "#2563eb";

      document.querySelector(".squareEditThree").style.backgroundColor = "#2563eb";

      document.querySelector(".squareEditFour").style.backgroundColor = "#2563eb";

      document.querySelector(".squareEditFive").style.backgroundColor = "#2563eb";

      document.querySelector(".squareEditSix").style.backgroundColor = "#2563eb";
    },
  },
};
</script>

<style lang="scss">
#title {
  &:focus {
    border-color: red;
    .x {
      background: red;
      .editHeroTitle {
        display: block;
      }
    }
    .edit {
      .editSquare {
        border-color: red;
      }
    }
  }
}
</style>
