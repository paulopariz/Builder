<template>
  <div
    class="w-full h-40 border-2 border-transparent y outline-0"
    contenteditable="true"
    id="title"
  >
    <div
      class="ml-8 -mt-9 bg-transparent w-36 h-9 flex justify-center items-center gap-3 rounded-md rounded-b-none py-1.5 px-4 x"
      contenteditable="false"

    >
      <p
        class="text-xs font-medium text-white hidden editHeroTitle"
      >
        H1 - hero title
      </p>
      <img src="../../assets/icons/pencil.svg" class="hidden editHeroTitle" />
    </div>
    <div class="w-full flex justify-between edit">
      <div
        class="bg-white squareEditOne -ml-2 w-2 h-2 -mt-2 border-2 border-transparent editSquare text-transparent cursor-nwse-resize"
        contenteditable="false"
      >
        .
      </div>
      <div
        class="bg-white squareEditTwo w-2 h-2 -mt-1 border-2 border-transparent editSquare text-transparent cursor-ns-resize"
        contenteditable="false"
      >
        .
      </div>
      <div
        class="bg-white squareEditThree -mr-2 w-2 h-2 -mt-2 border-2 border-transparent editSquare text-transparent cursor-nesw-resize"
        contenteditable="false"
      >
        .
      </div>
    </div>
    <h1
      class="text-5xl max-w-3xl max-h-36 leading-normal font-semibold text-black outline-blue-600"
      contenteditable="false"
      id="titleH1"
    >
      We craft digital products for business and user goals.
    </h1>
    <div class="w-full flex justify-between edit">
      <div
        class="bg-white squareEditFour -ml-2 w-2 h-2 mt-2 border-2 border-transparent editSquare text-transparent cursor-nesw-resize"
        contenteditable="false"
      >
        .
      </div>
      <div
        class="bg-white squareEditFive w-2 h-2 mt-1.5 border-2 border-transparent editSquare text-transparent cursor-ns-resize"
        contenteditable="false"
      >
        .
      </div>
      <div
        class="bg-white squareEditSix -mr-2 w-2 h-2 mt-2 border-2 border-transparent editSquare text-transparent cursor-nwse-resize"
        contenteditable="false"
      >
        .
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "H1HeaderEdit",
};
</script>

<style lang="scss">
#title {
  &:focus {
    border-color: #dc2626;
    .x {
      background: #dc2626;
      .editHeroTitle {
        display: block;
      }
    }
    .edit {
      .editSquare {
        border-color: #dc2626;
      }
    }
  }
}
h1 {
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
