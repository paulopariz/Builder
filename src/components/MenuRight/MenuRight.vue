<template>
  <div class="w-96 border-2 border-y-0 border-r-0 border-base-200 bg-white">
    <div class="h-20 flex gap-5 border-2 border-t-0 border-x-0 border-base-200 px-5 py-5">
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
    </div>
  </div>
</template>

<script>
import LayoutDrop from "./LayoutDrop.vue";
export default {
  components: { LayoutDrop },
  name: "MenuRight",
};
</script>
<style></style>
