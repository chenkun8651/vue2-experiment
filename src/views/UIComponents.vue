<template>
  <div class="w-full flex">
    <!-- 菜单 -->
    <div
      class="w-1/6 h-full py-5 border-r"
      :class="{
        'overflow-auto': mousePostion === 'menu',
        'overflow-hidden': mousePostion === 'view',
      }"
    >
      <div
        v-for="item in this.UIComponentsMenu"
        :key="item.key"
        class="w-full h-12 leading-12 hover:text-blue-500 cursor-pointer"
        :class="{
          'border-r-4 border-blue-500 text-blue-500 bg-blue-100':
            activation === item.key,
        }"
        @click="toRouter(item.key)"
        @mouseenter="mousePostion = 'menu'"
        @mouseleave="mousePostion = 'view'"
      >
        <div class="pl-5">{{ item.name }}</div>
      </div>
    </div>
    <!-- 二级页面 -->
    <router-view class="w-5/6 h-full p-5 overflow-auto"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activation: null,
      mousePostion: "menu",
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
        return this.UIComponentsMenu.find((i) => i.key === value[0]).name;
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