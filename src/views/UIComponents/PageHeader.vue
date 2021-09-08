<template>
  <!-- 页头 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 页头">
      <div>
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          title="页头"
          sub-title="当前页面信息"
          @back="() => $router.go(-1)"
        >
        </a-page-header>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 页头">
      <div>
        <el-page-header
          style="border: 1px solid rgb(235, 237, 240); padding: 15px"
          title="页头"
          content="当前页面信息"
          @back="() => $router.go(-1)"
        >
        </el-page-header>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 页头">
      <div class="text-red-500">AtUI框架没有页头</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 页头">
      <div class="text-yellow-500">ViewUI框架页头需要付费使用</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>