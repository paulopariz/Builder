<template>
  <div class="w-full bg-base-200 h-screen flex flex-col items-center">
    <nav
      class="border border-b-base-300 border-x-0 border-t-0 flex justify-center items-center w-full bg-white mt-0.1"
    >
      <section
        class="flex items-center gap-5 border border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <div>
          <button class="bg-base-200 p-2 rounded-xl">
            <img src="../assets/icons/arrow.svg" class="w-7" />
          </button>
        </div>
        <div
          class="flex items-center py-2 px-5 gap-2 bg-base-200 rounded-xl border border-base-300 cursor-pointer"
        >
          <p class="text-sm font-medium max-xl:text-xs">Page: Homepage - Dipa</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>

        <div>
          <button
            class="bg-base-200 p-2 px-5 rounded-xl flex items-center justify-center text-sm font-medium gap-2 max-xl:text-xs"
            @click="view"
          >
            <img src="../assets/icons/visibility.svg" class="" />
            Preview
          </button>
        </div>
      </section>

      <section
        class="flex items-center gap-5 border border-y-0 border-l-0 border-base-300 px-5 py-3.5 max-xl:gap-1"
      >
        <button class="p-3 rounded-xl hover:bg-base-200" @click="responsiveDesktop">
          <img src="../assets/icons/desktop.svg" class="w-6" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200" @click="responsiveMobile">
          <img src="../assets/icons/smartphone.svg" class="w-6" />
        </button>
      </section>

      <section class="flex items-center gap-5 px-5 py-3.5">
        <div
          class="bg-base-200 p-2 px-5 rounded-xl flex items-center gap-2 cursor-pointer"
        >
          <p class="text-sm font-medium max-xl:text-xs">960 PX / 100%</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>
      </section>
    </nav>

    <div class="p-14 overflow-auto">
      <div class="w-full bg-white select-text" id="content" v-show="contentEdit">
        <NavbarEdit />

        <HeaderEdit />

        <ProjectsEdit />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderEdit from "./PageEditComponents/HeaderEdit.vue";
import NavbarEdit from "./PageEditComponents/NavbarEdit.vue";
import ProjectsEdit from "./PageEditComponents/ProjectsEdit.vue";
export default {
  components: { NavbarEdit, HeaderEdit, ProjectsEdit },
  name: "PageEdit",

  data() {
    return {
      contentEdit: true,
    };
  },

  methods: {
    view() {
      this.contentEdit = !this.contentEdit;
    },

    responsiveMobile() {
      document.getElementById("menuMobile").style.display = "block";
      document.getElementById("menuDesktop").style.display = "none";

      document.getElementById("content").style.maxWidth = "448px";
      document.getElementById("navbar").style.padding = "50px 23px 0px 23px";

      document.getElementById("header").style.padding = "0px 23px";
      const HireUs = document.getElementById("HireUsBtn");
      document.getElementById("title").style.height = "150px";

      document.getElementById("titleH1").style.fontSize = "30px";
      const desc = document.getElementById("desc");
      document.getElementById("sectionButtons").style.justifyContent = "center";
      const buttonOne = document.querySelector(".buttonOne");
      const buttonTwo = document.querySelector(".buttonTwo");
      document.querySelector(".squareEditFour").style.marginTop = "7px";
      document.querySelector(".squareEditFive").style.marginTop = "4.5px";
      document.querySelector(".squareEditSix").style.marginTop = "7px";

      document.getElementById("projects").style.padding = "36px 23px";
      const checkWork = document.getElementById("checkWork");
      document.getElementById("projectsTitle").style.fontSize = "28px";

      document.getElementById("imgs").style.flexDirection = "column";
      document.getElementById("imgOne").style.width = "100%";
      document.getElementById("imgTwo").style.width = "100%";

      HireUs.style.padding = "1px 25px";
      HireUs.style.fontSize = "13px";
      HireUs.style.marginRight = "-18px";

      desc.style.fontSize = "14px";
      desc.style.lineHeight = "24px";

      buttonOne.style.height = "40px";
      buttonOne.style.fontSize = "12px";
      buttonTwo.style.height = "40px";
      buttonTwo.style.fontSize = "12px";

      checkWork.style.display = "grid";
      checkWork.style.placeItems = "start";
      checkWork.style.fontSize = "14px";
    },

    responsiveDesktop() {
      document.getElementById("menuMobile").style.display = "none";
      document.getElementById("menuDesktop").style.display = "flex";
      document.getElementById("content").style.maxWidth = "100%";
      document.getElementById("navbar").style.padding = "56px 56px 0px 56px";

      document.getElementById("header").style.padding = "0px 56px";
      const HireUs = document.getElementById("HireUsBtn");
      document.getElementById("title").style.height = "160px";

      document.getElementById("titleH1").style.fontSize = "48px";
      const desc = document.getElementById("desc");
      document.getElementById("sectionButtons").style.justifyContent = "start";
      const buttonOne = document.querySelector(".buttonOne");
      const buttonTwo = document.querySelector(".buttonTwo");
      document.querySelector(".squareEditFour").style.marginTop = "8px";
      document.querySelector(".squareEditFive").style.marginTop = "6px";
      document.querySelector(".squareEditSix").style.marginTop = "8px";

      document.getElementById("projects").style.padding = "36px 56px";
      const checkWork = document.getElementById("checkWork");
      document.getElementById("projectsTitle").style.fontSize = "36px";

      document.getElementById("imgs").style.flexDirection = "row";
      document.getElementById("imgOne").style.width = "48.5%";
      document.getElementById("imgTwo").style.width = "48.5%";

      HireUs.style.padding = "0px 32px";
      HireUs.style.fontSize = "14px";
      HireUs.style.marginRight = "0px";

      desc.style.fontSize = "16px";
      desc.style.lineHeight = "36px";

      buttonOne.style.height = "64px";
      buttonOne.style.fontSize = "14px";
      buttonTwo.style.height = "64px";
      buttonTwo.style.fontSize = "14px";

      checkWork.style.display = "flex";
      checkWork.style.justifyContent = "space-between";
      checkWork.style.fontSize = "16px";
    },
  },
};
</script>

<style></style>
