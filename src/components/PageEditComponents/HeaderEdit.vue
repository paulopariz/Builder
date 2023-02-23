<template>
  <div class="mt-20 px-14">
    <H1HeaderEdit />
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
        Check our work
      </button>
    </div>
  </div>
</template>

<script>
import H1HeaderEdit from "./H1HeaderEdit.vue";
export default {
  components: { H1HeaderEdit },
  name: "HeaderEdit",
};
</script>
