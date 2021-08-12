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
          v-model="RouteArray"
          theme="dark"
          mode="inline"
          @click="ChangeMenu"
        >
          <a-menu-item key="basics">
            <a-icon type="inbox" />
            <span>基础组件</span>
          </a-menu-item>
          <a-menu-item key="navigation">
            <a-icon type="inbox" />
            <span>导航组件</span>
          </a-menu-item>
          <a-menu-item key="form">
            <a-icon type="inbox" />
            <span>表单组件</span>
          </a-menu-item>
          <a-menu-item key="display">
            <a-icon type="inbox" />
            <span>展示组件</span>
          </a-menu-item>
          <a-menu-item key="feedback">
            <a-icon type="inbox" />
            <span>反馈组件</span>
          </a-menu-item>
          <a-menu-item key="button">
            <a-icon type="inbox" />
            <span>按钮组件</span>
          </a-menu-item>
          <a-menu-item key="icon">
            <a-icon type="inbox" />
            <span>图标组件</span>
          </a-menu-item>
          <a-menu-item key="badge">
            <a-icon type="inbox" />
            <span>徽标数组件</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: '0' }">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          {{ RouteArray | keyToName }}
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
export default {
  data() {
    return {
      collapsed: false,
      currentRoute: null,
      RouteArray: [],
    };
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute.path.split("/")[2];
    if (this.currentRoute) {
      this.RouteArray = [this.currentRoute];
    } else {
      this.RouteArray = ["button"];
      this.currentRoute = "button";
      this.$router.push("/UIComponents/button");
    }
  },
  watch: {
    $route: function (value) {
      this.currentRoute = value.path.split("/")[2];
      this.RouteArray = [this.currentRoute];
    },
  },
  filters: {
    keyToName: function (value) {
      if (value[0] == "basics") {
        return "基础组件";
      } else if (value[0] == "navigation") {
        return "导航组件";
      } else if (value[0] == "form") {
        return "表单组件";
      } else if (value[0] == "display") {
        return "展示组件";
      } else if (value[0] == "feedback") {
        return "反馈组件";
      }
    },
  },
  methods: {
    ChangeMenu(event) {
      if (event.key !== this.currentRoute) {
        this.currentRoute = event.key;
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