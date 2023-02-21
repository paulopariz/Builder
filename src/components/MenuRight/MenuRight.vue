<template>
  <div class="w-96 border-2 border-y-0 border-r-0 border-base-300 bg-white">
    <div class="h-20 flex gap-5 border-2 border-t-0 border-x-0 border-base-300 px-5 py-5">
      <button
        class="bg-base-200 p-2 w-28 rounded-xl flex justify-center text-sm font-medium gap-3 items-center"
      >
        <img src="../../assets/icons/invite.svg" alt="" />
        Invite
      </button>

      <button
        class="bg-blue-600 text-white p-2 w-28 rounded-xl flex items-center justify-center text-sm font-medium"
      >
        Publish
      </button>
    </div>

    <div>
      <LayoutDrop />

      <SpacingDrop />

      <SizeDrop />

      <TypographyDrop />
    </div>
  </div>
</template>

<script>
import LayoutDrop from "./LayoutDrop.vue";
import SizeDrop from "./SizeDrop.vue";
import SpacingDrop from "./SpacingDrop.vue";
import TypographyDrop from "./TypographyDrop.vue";
export default {
  components: { LayoutDrop, SpacingDrop, SizeDrop, TypographyDrop },
  name: "MenuRight",
};
</script>
<style></style>
