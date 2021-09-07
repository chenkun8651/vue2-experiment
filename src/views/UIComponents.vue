<template>
  <div class="flex max-w-full">
    <!-- 菜单 -->
    <div class="menu w-1/6 py-8 border-r">
      <div
        v-for="item in UIComponentsMenu"
        :key="item.key"
        class="max-w-full h-12 leading-12 hover:text-blue-500 cursor-pointer"
        :class="{
          'border-r-4 border-blue-500 text-blue-500 bg-blue-100':
            activation === item.key,
          'over-auto': mousePostion === 'menu',
          'overflow-hidden': mousePostion === 'view',
        }"
        @click="toRouter(item.key)"
        @mouseenter="this.mousePostion = 'menu'"
        @mouseleave="this.mousePostion = 'view'"
      >
        <div class="pl-5">{{ item.name }}</div>
      </div>
    </div>
    <!-- 内容 -->
    <div
      class="menu-view w-5/6"
      :class="{
        'over-auto': mousePostion === 'view',
        'overflow-hidden': mousePostion === 'menu',
      }"
      @mouseenter="mousePostion = 'view'"
      @mouseleave="mousePostion = 'menu'"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { UIComponentsMenu } from "../router/menu";

export default {
  data() {
    return {
      UIComponentsMenu: UIComponentsMenu,
      activation: null,
      mousePostion: null,
    };
  },

  mounted() {
    this.activation = this.$router.currentRoute.path.split("/")[2];
    if (!this.activation) {
      this.activation = "button";
      this.$router.push("/UIComponents/button");
    }
  },

  watch: {
    $route: function (value) {
      this.activation = value.path.split("/")[2];
    },
  },

  filters: {
    keyToName: function (value) {
      if (value.length > 0) {
        return UIComponentsMenu.find((i) => i.key === value[0]).name;
      }
    },
  },

  methods: {
    toRouter(value) {
      if (value && value !== this.activation) {
        this.activation = value;
        this.$router.push(`/UIComponents/${value}`);
      }
    },
  },
};
</script>

<style scoped>
.menu {
  height: 100%;
  overflow: auto;
}
.menu-view {
  height: 100%;
  overflow: auto;
}
</style>