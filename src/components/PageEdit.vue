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
          <p class="text-sm font-medium">Page: Homepage - Dipa</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>

        <div>
          <button class="bg-base-200 p-2 px-5 rounded-xl flex text-sm font-medium gap-2">
            <img src="../assets/icons/visibility.svg" class="" />
            Preview
          </button>
        </div>
      </section>

      <section
        class="flex items-center gap-5 border border-y-0 border-l-0 border-base-300 px-5 py-3.5"
      >
        <button class="p-3 rounded-xl hover:bg-base-200" @click="xxx">
          <img src="../assets/icons/desktop.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200">
          <img src="../assets/icons/tablet.svg" class="" />
        </button>

        <button class="p-3 rounded-xl hover:bg-base-200" @click="responsiveMobile">
          <img src="../assets/icons/smartphone.svg" />
        </button>
      </section>

      <section class="flex items-center gap-5 px-5 py-3.5">
        <div
          class="bg-base-200 p-2 px-5 rounded-xl flex items-center gap-2 cursor-pointer"
        >
          <p class="text-sm font-medium">960 PX / 100%</p>
          <img src="../assets/icons/arrow.svg" class="-rotate-90" />
        </div>
      </section>
    </nav>

    <div class="p-14 overflow-auto">
      <div class="w-full bg-white select-text" id="content">
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

  methods: {
    responsiveMobile() {
      const menuMobile = document.getElementById("menuMobile");
      const menuDesktop = document.getElementById("menuDesktop");
      const content = document.getElementById("content");
      const navbar = document.getElementById("navbar");
      const header = document.getElementById("header");
      const HireUs = document.getElementById("HireUsBtn");
      const titleH1 = document.getElementById("titleH1");
      const desc = document.getElementById("desc");
      const sectionButtons = document.getElementById("sectionButtons");
      const buttonOne = document.querySelector(".buttonOne");
      const buttonTwo = document.querySelector(".buttonTwo");

      const projects = document.getElementById("projects");
      const checkWork = document.getElementById("checkWork");
      const projectsTitle = document.getElementById("projectsTitle");

      const imgs = document.getElementById("imgs");
      const imgOne = document.getElementById("imgOne");
      const imgTwo = document.getElementById("imgTwo");

      content.style.maxWidth = "448px";
      navbar.style.padding = "50px 23px 0px 23px";
      menuDesktop.style.display = "none";
      menuMobile.style.display = "block";
      header.style.padding = "0px 23px";
      HireUs.style.padding = "1px 25px";
      HireUs.style.fontSize = "13px";
      HireUs.style.marginRight = "-18px";
      titleH1.style.fontSize = "30px";
      desc.style.fontSize = "14px";
      desc.style.lineHeight = "24px";

      sectionButtons.style.justifyContent = "center";
      buttonOne.style.height = "40px";
      buttonOne.style.fontSize = "12px";
      buttonTwo.style.height = "40px";
      buttonTwo.style.fontSize = "12px";

      projects.style.padding = "36px 23px";
      checkWork.style.display = "grid";
      checkWork.style.placeItems = "start";
      checkWork.style.fontSize = "14px";
      projectsTitle.style.fontSize = "28px";

      imgs.style.flexDirection = "column";
      imgOne.style.width = "100%";
      imgTwo.style.width = "100%";
    },

    xxx() {
      location.reload();
    },
  },
};
</script>

<style></style>
