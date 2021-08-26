<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <div class="pc-nav">
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/UIComponents">UIComponents</router-link>
        </div>
      </div>
      <router-view class="view" />
      <v-bottom-navigation class="phone-nav" horizontal grow>
        <v-btn>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/UIComponents">UIComponents</router-link>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
.view {
  height: calc(100% - 40px);
  overflow: auto;
}

.pc-nav {
  height: 40px;
}
.phone-nav {
  display: none !important;
}
@media screen and (max-width: 450px) {
  .pc-nav {
    display: none;
  }
  .phone-nav {
    display: flex !important;
    height: 40px;
  }
}
</style>