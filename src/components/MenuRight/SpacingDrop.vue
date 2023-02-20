<template>
  <div class="w-full border-2 border-base-200 border-x-0 border-t-0">
    <div class="dropdown dropdown-end w-full">
      <label
        tabindex="0"
        class="text-sm font-semibold py-4 px-7 flex justify-between w-full cursor-pointer"
        >Spacing

        <label @click="dropSpacingClick" class="swap">
          <input type="checkbox" />

          <img
            @click="dropSpacingClick"
            src="../../assets/icons/arrow.svg"
            class="swap-off fill-current"
          />

          <img
            @click="dropSpacingClick"
            src="../../assets/icons/arrow.svg"
            class="swap-on fill-current -rotate-90"
          />
        </label>
      </label>

      <ul
        v-show="dropSectionSpacing"
        tabindex="0"
        class="dropdown-content w-full rounded-none menu p-3 bg-base-100 border-2 border-base-200 border-x-0 border-t-0"
      >
        <div class="border-2 border-base-300 rounded-xl border-dashed p-4">
          <span style="font-size: 9px" class="text-gray-500 font-medium absolute"
            >MARGIN</span
          >
          <div class="grid place-items-center gap-y-4">
            <span class="text-xs font-medium markTop">20</span>
            <div class="flex items-center w-full">
              <span class="text-xs font-medium ml-7">0</span>
              <div class="border-2 border-blue-600 w-1/2 m-auto p-2 rounded-xl">
                <div class="flex flex-col justify-center items-center gap-2">
                  <span class="text-xs font-medium">0</span>
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-medium markLeft">0</span>
                    <div class="">
                      <div class="w-14 h-7 bg-base-300 rounded-lg"></div>
                    </div>
                    <span class="text-xs font-medium markRight">0</span>
                  </div>
                  <span class="text-xs font-medium">0</span>
                  <span
                    style="font-size: 9px; margin-left: 62px; margin-top: 70px"
                    class="text-gray-500 font-medium absolute"
                    >PADDING</span
                  >
                </div>
              </div>
              <span class="text-xs font-medium mr-7">0</span>
            </div>
            <span class="text-xs font-medium markBottom">20</span>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpacingDrop",

  data() {
    return {
      dropSectionSpacing: false,
    };
  },

  methods: {
    dropSpacingClick() {
      this.dropSectionSpacing = !this.dropSectionSpacing;
    },
  },
};
</script>

<style lang="scss">
@mixin befores {
  content: "";
  position: absolute;
  height: 9px;
  width: 9px;
  margin-top: 50px;
  background: #fff;
  border-radius: 2px;
  border: 2px solid #2563eb;
}

.markTop {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    @include befores();
  }
}

.markBottom {
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    @include befores();
    margin-top: 0;
    margin-bottom: 50px;
  }
}

.markLeft {
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    @include befores();
    margin-top: 0;
    margin-right: 35px;
  }
}
.markRight {
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    @include befores();
    margin-top: 0;
    margin-left: 35px;
  }
}
</style>
