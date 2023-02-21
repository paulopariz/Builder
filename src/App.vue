<template>
  <div class="flex select-none">
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

*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background: #e1e1e1c2;
}
*::-webkit-scrollbar-thumb {
  background-color: #cacaca;
  border: 3px solid #cacaca;
}
</style>
