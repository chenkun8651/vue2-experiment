<template>
  <div class="flex" ref="box">
    <!-- 加载 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 加载">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="AntDesignVue.spinning" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载的大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载描述文案</span>
            <a-input class="w-24" v-model="AntDesignVue.tip" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置延迟显示加载时间（毫秒）</span>
            <a-input-number class="w-24" v-model="AntDesignVue.delay" />
          </div>
        </div>
        <div>
          <a-spin
            :spinning="AntDesignVue.spinning"
            :size="AntDesignVue.size"
            :tip="AntDesignVue.tip"
            :delay="AntDesignVue.delay"
          >
            <div class="spin-content">加载内容</div>
          </a-spin>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 加载">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="ElementUI.status" @change="changeLoading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载图标</span>
            <a-input class="w-24" v-model="ElementUI.spinner" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载背景色</span>
            <a-input class="w-24" v-model="ElementUI.background" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载描述文案</span>
            <a-input class="w-24" v-model="ElementUI.text" />
          </div>
        </div>
        <div>
          <div id="loading-content">加载内容</div>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 加载">
        <div class="text-red-500">AtUI框架没有加载</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 加载">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="ViewUI.spinning" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置加载的大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Spin v-show="ViewUI.spinning" :size="ViewUI.size"></Spin>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.spinAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
import { Loading } from "element-ui";

export default {
  data() {
    return {
      AntDesignVue: {
        spinning: false,
        size: "default",
        tip: "加载中...",
        delay: null,
      },
      ElementUI: {
        loading: null,
        status: false,
        spinner: "el-icon-loading",
        background: "",
        text: "加载中...",
      },
      ViewUI: {
        spinning: false,
        size: null,
      },
    };
  },
  methods: {
    changeLoading() {
      if (this.ElementUI.status) {
        this.openLoading();
      } else {
        this.closeLoading();
      }
    },
    openLoading() {
      const dom = document.querySelector("#loading-content");
      const options = {
        target: dom,
        body: true,
        fullscreen: true,
        lock: true,
        spinner: this.ElementUI.spinner,
        background: this.ElementUI.background,
        text: this.ElementUI.text,
      };
      this.loading = Loading.service(options);
    },
    closeLoading() {
      this.loading.close();
    },
  },
};
</script>

<style scoped>
#loading-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
.spin-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
</style>