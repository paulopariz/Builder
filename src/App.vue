<template>
  <div class="flex justify-between">
    <MenuLeft />
    <PageEdit />
    <MenuRight />
  </div>
</template>

<script>
import MenuLeft from "./components/MenuLeft.vue";
import MenuRight from "./components/MenuRight/MenuRight.vue";
import PageEdit from "./components/PageEdit.vue";
export default {
  name: "App",

  components: {
    MenuLeft,
    PageEdit,
    MenuRight,
  },
};
</script>
MenuLeft

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>
