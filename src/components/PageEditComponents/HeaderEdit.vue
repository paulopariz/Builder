<template>
  <div class="mt-20 px-14">
    <div
      class="w-full h-40 border-2 border-transparent y outline-0"
      contenteditable="true"
      id="title"
    >
      <div
        class="ml-8 absolute -mt-9 bg-transparent w-36 h-9 flex justify-center items-center gap-3 rounded-md rounded-b-none py-1.5 px-4 x"
      >
        <p
          class="text-xs font-medium text-white hidden editHeroTitle"
          contenteditable="false"
        >
          H1 - hero title
        </p>
        <img src="../../assets/icons/pencil.svg" class="hidden editHeroTitle" />
      </div>
      <div class="w-full flex justify-between edit">
        <div
          class="bg-white -ml-2 w-2 h-2 -mt-2 border-2 border-transparent editSquare cursor-nwse-resize"
        ></div>
        <div
          class="bg-white w-2 h-2 -mt-1 border-2 border-transparent editSquare cursor-ns-resize"
        ></div>
        <div
          class="bg-white -mr-2 w-2 h-2 -mt-2 border-2 border-transparent editSquare cursor-nesw-resize"
        ></div>
      </div>
      <h1
        class="text-5xl w-8/12 leading-normal font-semibold text-black outline-blue-600"
      >
        We craft digital products for business and user goals.
      </h1>
      <div class="w-full flex justify-between edit">
        <div
          class="bg-white -ml-2 w-2 h-2 mt-2 border-2 border-transparent editSquare cursor-nesw-resize"
        ></div>
        <div
          class="bg-white w-2 h-2 mt-1.5 border-2 border-transparent editSquare cursor-ns-resize"
        ></div>
        <div
          class="bg-white -mr-2 w-2 h-2 mt-2 border-2 border-transparent editSquare cursor-nwse-resize"
        ></div>
      </div>
    </div>
    <p class="text-base text-gray-400 leading-9 font-medium mt-7">
      Help find solutions with UI / UX designs that are intuitive and in accordance with
      client business goals. We provide a high-quality service in UI/ UX Design &
      Development.
    </p>
    <div class="mt-7 flex items-center gap-5">
      <button
        class="btn bg-blue-600 hover:bg-blue-600 border-none normal-case rounded-full h-16 px-9 font-medium flex items-center justify-center"
      >
        Let's work together</button
      ><button
        class="btn text-blue-600 bg-white hover:bg-base-200 hover:border-base-300 border-2 border-base-300 normal-case rounded-full h-16 px-9 font-medium flex items-center justify-center"
      >
        Check our work
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderEdit",
};
</script>

<style lang="scss">
#title {
  &:focus {
    border-color: #2563eb;
    .x {
      background: #2563eb;
      .editHeroTitle {
        display: block;
      }
    }
    .edit {
      .editSquare {
        border-color: #2563eb;
      }
    }
  }
}
</style>
