<template>
  <div class="flex">
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
body {
  font-family: "Poppins", sans-serif;
}
</style>
