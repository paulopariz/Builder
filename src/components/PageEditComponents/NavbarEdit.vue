<template>
  <div class="px-14 pt-14">
    <nav class="flex items-center justify-between">
      <img src="../../assets/icons/logo.png" class="w-14" />
      <div class="flex items-center gap-5">
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
        <button
          class="btn bg-blue-600 hover:bg-blue-700 border-none capitalize rounded-full px-6 font-medium"
        >
          Hire us
        </button>
      </div>
    </nav>
    <div class="mt-28">
      <p class="text-5xl w-9/12 leading-normal font-semibold text-black">
        We craft digital products for business and user goals.
      </p>
      <p class="text-base text-gray-400 leading-9 font-medium mt-7">
        Help find solutions with UI / UX designs that are intuitive and in accordance with
        client business goals. We provide a high-quality service in UI/ UX Design &
        Development.
      </p>
      <div class="mt-7 flex items-center gap-5">
        <button
          class="btn bg-blue-600 hover:bg-blue-700 border-none normal-case rounded-full h-16 px-9 font-medium flex items-center justify-center"
        >
          Let's work together</button
        ><button
          class="btn text-blue-600 bg-white hover:bg-base-200 hover:border-base-300 border-2 border-base-300 normal-case rounded-full h-16 px-9 font-medium flex items-center justify-center"
        >
          Let's work together
        </button>
      </div>
    </div>
  </div>

  <div class="mt-36 px-14 py-9 bg-slate-50">
    <span class="text-gray-400 font-light">OUR PROJECTS</span>

    <div class="flex items-center justify-between mt-6">
      <h1 class="text-black font-semibold text-4xl">Our latest cool projects.</h1>

      <button class="text-blue-600 font-medium">Check our work</button>
    </div>

    <div class="flex justify-between items-center mt-16">
      <img src="../../assets/img/billy.png" class="w-96 h-96 rounded-md" />
      <img src="../../assets/img/billy2.png" class="w-96 h-96 rounded-md" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarEdit",
};
</script>

<style></style>
