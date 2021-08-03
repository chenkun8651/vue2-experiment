<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <div id="app-nav">
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/antDesignVue">AntDesignVue</router-link>
        </div>
      </div>
      <router-view id="app-view" />
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
#app-nav {
  height: 5%;
}
#app-view {
  height: 95%;
}
</style>