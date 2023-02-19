<template>
  <div class="flex">
    <MenuLeft />
    <PageEdit />
  </div>
</template>

<script>
import MenuLeft from "./components/MenuLeft.vue";
import PageEdit from "./components/PageEdit.vue";
export default {
  name: "App",

  components: {
    MenuLeft,
    PageEdit,
  },
};
</script>
MenuLeft

<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>
