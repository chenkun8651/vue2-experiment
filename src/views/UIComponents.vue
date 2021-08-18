<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        :width="200"
        :collapsible="true"
        :trigger="null"
      >
        <div class="logo" />
        <a-menu
          v-model="routeArray"
          theme="dark"
          mode="inline"
          @click="ChangeMenu"
        >
          <a-menu-item v-for="item in UIComponentsMenu" :key="item.key">
            <a-icon :type="item.icon" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: '0' }">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          >
          </a-icon>
          {{ routeArray | keyToName }}
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '20px 16px',
            padding: '20px',
            background: '#fff',
            minHeight: '280px',
            overflow: 'auto',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { UIComponentsMenu } from "../router/menu";

export default {
  data() {
    return {
      UIComponentsMenu: UIComponentsMenu,
      collapsed: false,
      routeCurrent: null,
      routeArray: [],
    };
  },
  mounted() {
    this.routeCurrent = this.$router.currentRoute.path.split("/")[2];
    if (this.routeCurrent) {
      this.routeArray = [this.routeCurrent];
    } else {
      this.routeCurrent = "button";
      this.routeArray = ["button"];
      this.$router.push("/UIComponents/button");
    }
  },
  watch: {
    $route: function (value) {
      this.routeCurrent = value.path.split("/")[2];
      this.routeArray = [this.routeCurrent];
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
    // 菜单跳转
    ChangeMenu(event) {
      if (this.routeCurrent !== event.key) {
        this.routeCurrent = event.key;
        this.$router.push(`/UIComponents/${event.key}`);
      }
    },
  },
};
</script>

<style scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>