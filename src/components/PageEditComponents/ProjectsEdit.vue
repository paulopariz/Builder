<template>
  <div class="mt-20 px-14 py-9 bg-gray-50" id="projects">
    <span class="text-sm text-gray-400 font-light">OUR PROJECTS</span>

    <div class="flex items-center justify-between mt-3" id="checkWork">
      <h1 class="text-black font-semibold text-4xl" id="projectsTitle">
        Our latest cool projects.
      </h1>

      <button class="text-blue-600 font-medium">Check our work</button>
    </div>

    <div class="flex justify-between items-center mt-16 gap-3" id="imgs">
      <img
        src="../../assets/img/billy.png"
        class="w-6/6 object-cover max-w-full aspect-square"
        id="imgOne"
      />
      <img
        src="../../assets/img/billy2.png"
        class="w-6/6 object-cover max-w-full aspect-square"
        id="imgTwo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsEdit",
};
</script>

<style></style>
