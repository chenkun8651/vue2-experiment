<template>
  <div>
    <a-layout class="ui-components-layout">
      <a-layout-sider
        v-model="collapsed"
        :width="230"
        :collapsible="true"
        :trigger="null"
      >
        <div class="logo" />
        <a-menu
          v-model="routeArray"
          :theme="'dark'"
          :mode="'inline'"
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
    <!-- <v-card class="mx-auto overflow-hidden" height="400" width="344">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>
      <v-app-bar color="deep-purple accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My files</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens.
      </v-card-text>
    </v-card> -->
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
      drawer: false,
      group: null,
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
    group() {
      this.drawer = false;
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
.ui-components-layout {
  overflow: hidden;
}
.ui-components-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.ui-components-layout .trigger:hover {
  color: #1890ff;
}
.ui-components-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>