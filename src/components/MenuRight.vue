<template>
  <div class="w-96 border border-y-0 border-r-0 border-base-300 bg-white -mt-0.5">
    <div class="h-20 flex gap-5 border border-t-0 border-x-0 border-base-300 px-5 py-5">
      <button
        class="bg-base-200 p-2 w-28 rounded-xl flex justify-center text-sm font-medium gap-3 items-center"
      >
        <img src="../assets/icons/invite.svg" alt="" />
        Invite
      </button>

      <button
        class="bg-red-600 text-white p-2 w-28 rounded-xl flex items-center justify-center text-sm font-medium"
      >
        Publish
      </button>
    </div>

    <div>
      <SelectorH1 />

      <LayoutDrop />

      <SpacingDrop />

      <SizeDrop />

      <TypographyDrop />

      <BorderDrop />

      <BackgroundDrop />
    </div>
  </div>
</template>

<script>
import BackgroundDrop from "./MenuRightComponents/ThemeDrop.vue";
import BorderDrop from "./MenuRightComponents/BorderDrop.vue";
import LayoutDrop from "./MenuRightComponents/LayoutDrop.vue";
import SizeDrop from "./MenuRightComponents/SizeDrop.vue";
import SpacingDrop from "./MenuRightComponents/SpacingDrop.vue";
import TypographyDrop from "./MenuRightComponents/TypographyDrop.vue";
import SelectorH1 from "./MenuRightComponents/SelectorH1.vue";
export default {
  components: {
    LayoutDrop,
    SpacingDrop,
    SizeDrop,
    TypographyDrop,
    BorderDrop,
    BackgroundDrop,
    SelectorH1,
  },
  name: "MenuRight",
};
</script>
<style></style>
