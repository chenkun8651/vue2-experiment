<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <div class="pc-nav flex divide-x divide-green-500 mx-4 my-4">
        <div class="w-1/6">
          <div class="flex items-center">
            <img class="w-14 h-10" src="./assets/img/product.png" />
            <span class="text-2xl font-normal">UI框架实验库</span>
          </div>
        </div>
        <div class="w-4/6">搜索</div>
        <div class="w-1/6">路由</div>
      </div>
      <router-view class="view" />
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
  methods: {
    chageRouter(value) {
      if (value) {
        this.$router.push(`/${value}`);
      }
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
.pc-nav {
  height: 40px;
}
.view {
  width: 100%;
  height: calc(100% - 72px);
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .pc-nav {
    display: none;
  }
}
</style>