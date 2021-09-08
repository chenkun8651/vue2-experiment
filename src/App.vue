<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <!-- 导航 -->
      <div class="flex items-center w-full h-14 border-b-2">
        <div class="w-1/6">
          <div v-show="activation === 'Home'" class="flex items-center">
            <img class="w-10 h-10 mx-2" src="./assets/img/home.png" />
            <p class="w-14 h-auto text-2xl text-black font-bold">主页</p>
          </div>
          <div v-show="activation === 'UIComponents'" class="flex items-center">
            <img class="w-10 h-10 mx-2" src="./assets/img/product.png" />
            <p class="w-40 h-auto text-2xl text-black font-bold">
              UI框架实验库
            </p>
          </div>
        </div>
        <div class="w-4/6"></div>
        <div class="w-1/6">
          <div class="flex items-center">
            <div class="w-3/4 flex items-center">
              <div
                class="
                  w-16
                  h-14
                  leading-14
                  border-t-2 border-transparent
                  hover:border-t-2 hover:border-blue-500
                  text-sm text-center text-gray-700
                  hover:text-blue-500
                  cursor-pointer
                "
                :class="{
                  'border-t-2 border-blue-500 text-blue-500':
                    activation === 'Home',
                }"
                @click="toRouter('Home')"
              >
                主页
              </div>
              <div
                class="
                  w-32
                  h-14
                  leading-14
                  border-t-2 border-transparent
                  hover:border-t-2 hover:border-blue-500
                  text-sm text-center text-gray-700
                  hover:text-blue-500
                  cursor-pointer
                "
                :class="{
                  'border-t-2 border-blue-500 text-blue-500':
                    activation === 'UIComponents',
                }"
                @click="toRouter('UIComponents')"
              >
                UI框架实验库
              </div>
            </div>
            <div class="w-1/4">
              <a
                href="https://github.com/chenkun8651/vue-experiment"
                target="_blank"
              >
                <img class="w-6 h-6 ml-4" src="./assets/img/github.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 一级页面 -->
      <router-view class="view"></router-view>
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
      activation: "Home",
    };
  },
  methods: {
    toRouter(value) {
      if (value && value !== this.activation) {
        this.activation = value;
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
.view {
  height: calc(100% - 56px);
}
</style>